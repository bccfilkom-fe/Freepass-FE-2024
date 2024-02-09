import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

// import 'package:flutter_svg/flutter_svg.dart';
import 'package:go_router/go_router.dart';
import 'package:urdentist/presentation/authentication/screen/register.dart';
import 'package:urdentist/presentation/chooseProfile/profile_controller.dart';
import 'package:urdentist/route/routes.dart';
import 'package:get/get.dart';

class CreateProfile extends StatefulWidget {
  @override
  _CreateProfileState createState() => _CreateProfileState();
}

class _CreateProfileState extends State<CreateProfile> {
  var controller = Get.put(ProfileController());

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Scaffold(
        backgroundColor: Colors.white,
        body: SingleChildScrollView(
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
                    'Create Profile',
                    style: TextStyle(
                        fontSize: width * 0.07, fontWeight: FontWeight.bold),
                  ),
                ),
                Container(
                  alignment: Alignment.centerLeft,
                  margin: EdgeInsets.only(top: height * 0.02),
                  padding: EdgeInsets.symmetric(
                    horizontal: width * 0.03,
                  ),
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey.shade300, width: 1),
                    borderRadius:
                        BorderRadius.all(Radius.circular(width * 0.03)),
                  ),
                  child: TextFormField(
                    onChanged: (s) {
                      controller.namaLengkap = s;
                    },
                    decoration: InputDecoration(
                      border: InputBorder.none,
                      hintText: 'Full Name',
                      hintStyle: TextStyle(
                        fontSize: 15,
                        color: Colors.grey.shade600,
                      ),
                    ),
                    style: TextStyle(
                      fontSize: 15,
                      color: Colors.grey.shade600,
                    ),
                  ),
                ),
                Container(
                  alignment: Alignment.centerLeft,
                  margin: EdgeInsets.only(top: height * 0.02),
                  padding: EdgeInsets.symmetric(
                    horizontal: width * 0.03,
                  ),
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey.shade300, width: 1),
                    borderRadius:
                        BorderRadius.all(Radius.circular(width * 0.03)),
                  ),
                  child: TextFormField(
                    onChanged: (s) {
                      controller.alamat = s;
                    },
                    decoration: InputDecoration(
                      border: InputBorder.none,
                      hintText: 'Address',
                      hintStyle: TextStyle(
                        fontSize: 15,
                        color: Colors.grey.shade600,
                      ),
                    ),
                    style: TextStyle(
                      fontSize: 15,
                      color: Colors.grey.shade600,
                    ),
                  ),
                ),
                Container(
                  alignment: Alignment.centerLeft,
                  margin: EdgeInsets.only(top: height * 0.02),
                  padding: EdgeInsets.symmetric(
                    horizontal: width * 0.03,
                  ),
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey.shade300, width: 1),
                    borderRadius:
                        BorderRadius.all(Radius.circular(width * 0.03)),
                  ),
                  child: TextFormField(
                    onChanged: (s) {
                      controller.alergi = s;
                    },
                    decoration: InputDecoration(
                      border: InputBorder.none,
                      hintText: 'Alergy',
                      hintStyle: TextStyle(
                        fontSize: 15,
                        color: Colors.grey.shade600,
                      ),
                    ),
                    style: TextStyle(
                      fontSize: 15,
                      color: Colors.grey.shade600,
                    ),
                  ),
                ),
                Container(
                  alignment: Alignment.centerLeft,
                  margin: EdgeInsets.only(top: height * 0.02),
                  padding: EdgeInsets.symmetric(
                    horizontal: width * 0.03,
                  ),
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey.shade300, width: 1),
                    borderRadius:
                        BorderRadius.all(Radius.circular(width * 0.03)),
                  ),
                  child: TextFormField(
                    onChanged: (s) {
                      controller.tanggalLahir = s;
                    },
                    decoration: InputDecoration(
                      border: InputBorder.none,
                      hintText: 'yyyy-mm-dd',
                      hintStyle: TextStyle(
                        fontSize: 15,
                        color: Colors.grey.shade600,
                      ),
                    ),
                    style: TextStyle(
                      fontSize: 15,
                      color: Colors.grey.shade600,
                    ),
                  ),
                ),
                Container(
                  alignment: Alignment.centerLeft,
                  margin: EdgeInsets.only(top: height * 0.02),
                  padding: EdgeInsets.symmetric(
                    horizontal: width * 0.03,
                  ),
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey.shade300, width: 1),
                    borderRadius:
                        BorderRadius.all(Radius.circular(width * 0.03)),
                  ),
                  child: TextFormField(
                    onChanged: (s) {
                      controller.tempatLahir = s;
                    },
                    decoration: InputDecoration(
                      border: InputBorder.none,
                      hintText: 'Tempat Lahir',
                      hintStyle: TextStyle(
                        fontSize: 15,
                        color: Colors.grey.shade600,
                      ),
                    ),
                    style: TextStyle(
                      fontSize: 15,
                      color: Colors.grey.shade600,
                    ),
                  ),
                ),
                Obx(() {
                  return controller.isLoading.value
                      ? const CircularProgressIndicator()
                      : GestureDetector(
                          onTap: () {
                            controller.createProfile(
                              onSuccess: (msg) {
                                GoRouter.of(context)
                                    .go(Routes.CHOOSEPROFILE_SCREEN);
                                showMySnackbar(context, msg);
                              },
                              onFailed: (e) {
                                showMySnackbar(context, "Gagal : $e");
                              },
                            );
                          },
                          child: IgnorePointer(
                            ignoring: controller.isLoading.value,
                            child: Container(
                              margin: EdgeInsets.only(top: height * 0.02),
                              padding: EdgeInsets.all(height * 0.02),
                              alignment: Alignment.center,
                              decoration: BoxDecoration(
                                color: Colors.blue.shade700,
                                borderRadius: BorderRadius.all(
                                    Radius.circular(width * 0.03)),
                              ),
                              child: const Text(
                                'Create Profile',
                                style: TextStyle(
                                  fontWeight: FontWeight.w600,
                                  color: Colors.white,
                                  fontSize: 15,
                                ),
                              ),
                            ),
                          ),
                        );
                }),
              ],
            ),
          ),
        ));
  }
}
