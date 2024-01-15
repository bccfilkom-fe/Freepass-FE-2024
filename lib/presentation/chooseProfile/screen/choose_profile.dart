import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import 'package:go_router/go_router.dart';
import 'package:urdentist/data/repository/daily_task.dart';
import 'package:urdentist/presentation/authentication/screen/register.dart';
import 'package:urdentist/presentation/chooseProfile/profile_controller.dart';
import 'package:urdentist/presentation/homepage/task_controller.dart';
import 'package:urdentist/route/routes.dart';
import 'package:get/get.dart';

class ChooseProfile extends StatefulWidget {
  @override
  _ChooseProfileState createState() => _ChooseProfileState();
}

class _ChooseProfileState extends State<ChooseProfile> {
  late ProfileController profileController = Get.put(ProfileController());
  var taskController = Get.put(TaskController());

  var date = DateTime.now();

  @override
  void initState() {
    super.initState();
    profileController.getProfileAll(
      onSuccess: (profiles) {
        profileController.profiles.value = profiles;
      },
      onFailed: (error) {
        showMySnackbar(context, error);
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          SingleChildScrollView(
            child: Padding(
              padding: EdgeInsets.all(16),
              child: Column(
                children: [
                  Container(
                    padding: EdgeInsets.only(
                        top: height * 0.07, bottom: height * 0.04),
                    alignment: Alignment.center,
                    child: SvgPicture.asset('assets/images/Logo.svg'),
                  ),
                  Container(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      'Choose Profile',
                      style: TextStyle(
                          fontSize: width * 0.07, fontWeight: FontWeight.bold),
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.only(top: height * 0.01),
                    alignment: Alignment.centerLeft,
                    child: Text(
                      'Choose the profile you used before and sign in.',
                      style: TextStyle(color: Colors.grey.shade600),
                    ),
                  ),
                  SizedBox(
                    height: height * 0.02,
                  ),
                  // Wrap only the ListView.builder with Obx
                  Container(
                    height: height * 0.5,
                    child: Obx(() {
                      return ListView.builder(
                        shrinkWrap: true,
                        itemCount: profileController.profiles.length,
                        itemBuilder: (context, index) {
                          var profile = profileController.profiles[index];
                          return Container(
                            padding: const EdgeInsets.symmetric(
                                vertical: 10, horizontal: 12),
                            margin: EdgeInsets.only(
                              bottom: height * 0.015,
                              right: 10,
                              left: 1,
                              top: index == 0 ? 10 : 0,
                            ),
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius:
                                  const BorderRadius.all(Radius.circular(10)),
                              boxShadow: [
                                BoxShadow(
                                  color: Colors.black.withOpacity(0.2),
                                  spreadRadius: 1,
                                  blurRadius: 1.2,
                                  offset: Offset(0, 0.2),
                                ),
                              ],
                            ),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Column(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Image.asset(
                                      'assets/images/icon_avatar.png',
                                      width: width * 0.11,
                                    ),
                                  ],
                                ),
                                Container(
                                  alignment: Alignment.centerLeft,
                                  width: width * 0.4,
                                  child: Text(
                                    profile.namaLengkap,
                                    textAlign: TextAlign.start,
                                    style:
                                        TextStyle(fontWeight: FontWeight.bold),
                                  ),
                                ),
                                GestureDetector(
                                  onTap: () {
                                    profileController.profileId = profile.id;
                                    profileController.getProfileId(
                                        onSuccess: (profile) {
                                      var year = date.year.toString();
                                      var month =
                                          date.month.toString().padLeft(2, '0');
                                      var day =
                                          date.day.toString().padLeft(2, '0');
                                      taskController.profileId = profile.id;
                                      taskController.date = "$year-$month-$day";
                                      taskController.getTasks(
                                          onSuccess: (task) {
                                        profileController.profile.value =
                                            profile;
                                        List<int> taskIds = task
                                            .map((task) => task.taskId)
                                            .toList();
                                        taskController.dailyTasks.value =
                                            globalDailyTasks
                                                .where((globalTask) {
                                          return !taskIds.any((taskId) =>
                                              taskId == globalTask.id);
                                        }).toList();
                                        GoRouter.of(context)
                                            .go(Routes.HOMEPAGE_SCREEN);
                                      }, onFailed: (msg) {
                                        print(msg);
                                      });
                                    }, onFailed: (msg) {
                                      showMySnackbar(context, msg);
                                    });
                                  },
                                  child: Container(
                                    padding: const EdgeInsets.symmetric(
                                        vertical: 6, horizontal: 16),
                                    decoration: BoxDecoration(
                                      borderRadius:
                                          BorderRadius.all(Radius.circular(10)),
                                      color: Colors.blue.shade700,
                                    ),
                                    child: const Center(
                                      child: Text(
                                        'Sign in',
                                        style: TextStyle(
                                          color: Colors.white,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          );
                        },
                      );
                    }),
                  )
                ],
              ),
            ),
          ),
          Align(
            alignment: Alignment.bottomCenter,
            child: GestureDetector(
              onTap: () {
                GoRouter.of(context).go(Routes.CREATEPROFILE_SCREEN);
              },
              child: Container(
                margin: const EdgeInsets.only(bottom: 16),
                padding:
                    const EdgeInsets.symmetric(vertical: 15, horizontal: 20),
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.blue.shade600),
                  borderRadius: const BorderRadius.all(
                    Radius.circular(10),
                  ),
                ),
                child: Text(
                  'Create a new Profile',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                      fontSize: width * 0.052,
                      fontWeight: FontWeight.bold,
                      color: Colors.blue.shade600),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
