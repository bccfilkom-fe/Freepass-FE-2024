import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'package:go_router/go_router.dart';
import 'package:urdentist/presentation/authentication/screen/register.dart';
import 'package:urdentist/presentation/chooseProfile/profile_controller.dart';
import 'package:urdentist/presentation/consultation/question_controller.dart';
import 'package:urdentist/route/routes.dart';

class CreateQuestion extends StatefulWidget {
  @override
  _CreateQuestionState createState() => _CreateQuestionState();
}

class _CreateQuestionState extends State<CreateQuestion> {
  var questionController = Get.put(QuestionController());
  var profileController = Get.find<ProfileController>();

  String selected = '';

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          backgroundColor: Colors.white,
          iconTheme: IconThemeData(color: Colors.black),
          centerTitle: true,
          title: const Text(
            'Question',
            style: TextStyle(color: Colors.black, fontWeight: FontWeight.w600),
          ),
          leading: IconButton(
            icon: const Icon(Icons.arrow_back),
            onPressed: () {
              GoRouter.of(context).go(Routes.CONSULTATION_SCREEN);
            },
          ),
        ),
        body: Stack(children: [
          SingleChildScrollView(
            child: Container(
              padding: EdgeInsets.all(16),
              child: Column(
                children: [
                  Container(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      'Choose Category',
                      style: TextStyle(
                          fontSize: width * 0.05, fontWeight: FontWeight.bold),
                    ),
                  ),
                  SizedBox(
                    height: height * 0.01,
                  ),
                  Row(
                    children: [
                      GestureDetector(
                        onTap: () {
                          setState(() {
                            selected = 'Prevention';
                          });
                          questionController.tag = 'Prevention';
                        },
                        child: Container(
                          padding:
                              EdgeInsets.symmetric(vertical: 3, horizontal: 10),
                          decoration: BoxDecoration(
                            color: selected == 'Prevention'
                                ? Colors.blue.shade700
                                : Colors.white,
                            border: Border.all(color: Colors.blue.shade700),
                            borderRadius: BorderRadius.all(Radius.circular(5)),
                          ),
                          child: Text(
                            'Prevention',
                            style: TextStyle(
                                color: selected != 'Prevention'
                                    ? Colors.blue.shade700
                                    : Colors.white,
                                fontWeight: FontWeight.w500),
                          ),
                        ),
                      ),
                      SizedBox(
                        width: width * 0.03,
                      ),
                      GestureDetector(
                        onTap: () {
                          setState(() {
                            selected = 'Caries';
                          });
                          questionController.tag = 'Caries';
                        },
                        child: Container(
                          padding:
                              EdgeInsets.symmetric(vertical: 3, horizontal: 10),
                          decoration: BoxDecoration(
                            color: selected == 'Caries'
                                ? Colors.blue.shade700
                                : Colors.white,
                            border: Border.all(color: Colors.blue.shade700),
                            borderRadius: BorderRadius.all(Radius.circular(5)),
                          ),
                          child: Text(
                            'Caries',
                            style: TextStyle(
                                color: selected != 'Caries'
                                    ? Colors.blue.shade700
                                    : Colors.white,
                                fontWeight: FontWeight.w500),
                          ),
                        ),
                      ),
                      SizedBox(
                        width: width * 0.03,
                      ),
                      GestureDetector(
                        onTap: () {
                          setState(() {
                            selected = 'Fluoride';
                          });
                          questionController.tag = 'Fluoride';
                        },
                        child: Container(
                          padding:
                              EdgeInsets.symmetric(vertical: 3, horizontal: 10),
                          decoration: BoxDecoration(
                            color: selected == 'Fluoride'
                                ? Colors.blue.shade700
                                : Colors.white,
                            border: Border.all(color: Colors.blue.shade700),
                            borderRadius: BorderRadius.all(Radius.circular(5)),
                          ),
                          child: Text(
                            'Fluoride',
                            style: TextStyle(
                                color: selected != 'Fluoride'
                                    ? Colors.blue.shade700
                                    : Colors.white,
                                fontWeight: FontWeight.w500),
                          ),
                        ),
                      ),
                    ],
                  ),
                  SizedBox(
                    height: height * 0.012,
                  ),
                  Row(
                    children: [
                      GestureDetector(
                        onTap: () {
                          setState(() {
                            selected = 'Cleaning';
                          });
                          questionController.tag = 'Cleaning';
                        },
                        child: Container(
                          padding:
                              EdgeInsets.symmetric(vertical: 3, horizontal: 10),
                          decoration: BoxDecoration(
                            color: selected == 'Cleaning'
                                ? Colors.blue.shade700
                                : Colors.white,
                            border: Border.all(color: Colors.blue.shade700),
                            borderRadius: BorderRadius.all(Radius.circular(5)),
                          ),
                          child: Text(
                            'Cleaning',
                            style: TextStyle(
                                color: selected != 'Cleaning'
                                    ? Colors.blue.shade700
                                    : Colors.white,
                                fontWeight: FontWeight.w500),
                          ),
                        ),
                      ),
                      SizedBox(
                        width: width * 0.03,
                      ),
                      GestureDetector(
                        onTap: () {
                          setState(() {
                            selected = 'No Choice';
                          });
                          questionController.tag = 'No Choice';
                        },
                        child: Container(
                          padding:
                              EdgeInsets.symmetric(vertical: 3, horizontal: 10),
                          decoration: BoxDecoration(
                            color: selected == 'No Choice'
                                ? Colors.blue.shade700
                                : Colors.white,
                            border: Border.all(color: Colors.blue.shade700),
                            borderRadius: BorderRadius.all(Radius.circular(5)),
                          ),
                          child: Text(
                            'No Choice',
                            style: TextStyle(
                                color: selected != 'No Choice'
                                    ? Colors.blue.shade700
                                    : Colors.white,
                                fontWeight: FontWeight.w500),
                          ),
                        ),
                      ),
                    ],
                  ),
                  SizedBox(
                    height: height * 0.02,
                  ),
                  Container(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      'Enter Question',
                      style: TextStyle(
                          fontSize: width * 0.05, fontWeight: FontWeight.bold),
                    ),
                  ),
                  Container(
                    alignment: Alignment.centerLeft,
                    margin: EdgeInsets.only(top: height * 0.01),
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
                        questionController.createQuest = s;
                      },
                      decoration: InputDecoration(
                        border: InputBorder.none,
                        hintText: 'Ask a question',
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
                ],
              ),
            ),
          ),
          Align(
            alignment: Alignment.bottomCenter,
            child: Obx(() {
              return questionController.isLoading.value
                  ? const CircularProgressIndicator()
                  : GestureDetector(
                      onTap: () {
                        questionController.profileId =
                            profileController.profile.value.id;
                        questionController.createQuestion(onSuccess: (msg) {
                          showMySnackbar(context, msg);

                          GoRouter.of(context).go(Routes.CONSULTATION_SCREEN);
                        }, onFailed: (msg) {
                          showMySnackbar(context, msg);
                        });
                      },
                      child: Container(
                        width: width,
                        margin: const EdgeInsets.only(
                            left: 16, right: 16, bottom: 16),
                        padding: const EdgeInsets.symmetric(
                            vertical: 15, horizontal: 20),
                        decoration: BoxDecoration(
                          color: Colors.blue.shade700,
                          borderRadius: const BorderRadius.all(
                            Radius.circular(10),
                          ),
                        ),
                        child: Text(
                          'Submit',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                              fontSize: width * 0.052,
                              fontWeight: FontWeight.bold,
                              color: Colors.white),
                        ),
                      ),
                    );
            }),
          ),
        ]));
  }
}
