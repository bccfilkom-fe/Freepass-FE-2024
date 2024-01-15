import 'package:flutter/material.dart';

import 'package:flutter_svg/flutter_svg.dart';
import 'package:get/get.dart';
import 'package:go_router/go_router.dart';
import 'package:urdentist/presentation/authentication/controller/forgot_passCode_controller.dart';
import 'package:urdentist/presentation/authentication/controller/forgot_password_controller.dart';
import 'package:urdentist/presentation/authentication/screen/register.dart';
import 'package:urdentist/route/routes.dart';

class ForgotPasswordCode extends StatefulWidget {
  @override
  _ForgotPasswordCodeState createState() => _ForgotPasswordCodeState();
}

class _ForgotPasswordCodeState extends State<ForgotPasswordCode> {
  TextEditingController number1 = TextEditingController();
  TextEditingController number2 = TextEditingController();
  TextEditingController number3 = TextEditingController();
  TextEditingController number4 = TextEditingController();

  bool isCodeFilled = false;

  ForgotPassCodeController controller = Get.put(ForgotPassCodeController());
  var emailController = Get.find<ForgotPasswordController>();

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          backgroundColor: Colors.white,
          iconTheme: IconThemeData(color: Colors.black),
          leading: IconButton(
            icon: Icon(Icons.arrow_back),
            onPressed: () {
              GoRouter.of(context).go(Routes.SIGNIN_SCREEN);
            },
          ),
        ),
        body: SingleChildScrollView(
          child: Padding(
            padding: EdgeInsets.all(16),
            child: Column(
              children: [
                Container(
                  margin: EdgeInsets.only(top: height * 0.05),
                  child: SvgPicture.asset(
                    'assets/images/icon_forgot_code.svg',
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(top: height * 0.03),
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'Enter the OTP code',
                    style: TextStyle(
                        fontSize: height * 0.03, fontWeight: FontWeight.bold),
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(top: height * 0.01),
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'Enter the OTP code that we sent to the email',
                    style: TextStyle(color: Colors.grey.shade600),
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(
                      top: height * 0.01, bottom: height * 0.03),
                  alignment: Alignment.centerLeft,
                  child: const Text(
                    't***e@gmail.com',
                    style: TextStyle(fontWeight: FontWeight.w600),
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: List.generate(
                    4,
                    (index) => Container(
                      alignment: Alignment.center,
                      width: 60,
                      height: 60,
                      child: TextField(
                        controller: index == 0
                            ? number1
                            : index == 1
                                ? number2
                                : index == 2
                                    ? number3
                                    : number4,
                        textAlign: TextAlign.center,
                        keyboardType: TextInputType.number,
                        textInputAction: TextInputAction.none,
                        decoration: const InputDecoration(
                          border: OutlineInputBorder(),
                        ),
                        onChanged: (value) {
                          if (number1.text.isNotEmpty &&
                              number2.text.isNotEmpty &&
                              number3.text.isNotEmpty &&
                              number4.text.isNotEmpty) {
                            setState(() {
                              isCodeFilled = true;
                            });
                          } else {
                            setState(() {
                              isCodeFilled = false;
                            });
                          }
                          if (value.length == 1) {
                            if (index < 3) {
                              FocusScope.of(context).nextFocus();
                            } else {
                              FocusScope.of(context).unfocus();
                            }
                          }
                        },
                      ),
                    ),
                  ),
                ),
                Obx(() {
                  return controller.isLoading.value
                      ? Container(
                          margin: EdgeInsets.only(top: height * 0.02),
                          child: const CircularProgressIndicator(),
                        )
                      : GestureDetector(
                          onTap: () {
                            if (isCodeFilled) {
                              String code =
                                  "${number1.text}${number2.text}${number3.text}${number4.text}";
                              controller.code = code;
                              controller.email = emailController.email.value;
                              controller.verifyPassword(
                                onSuccess: (token) {
                                  controller.saveToken(token, () {
                                    GoRouter.of(context)
                                        .go(Routes.CREATEPASS_SCREEN);
                                    showMySnackbar(context, 'Success');
                                  });
                                },
                                onFailed: (e) {
                                  showMySnackbar(context, 'Gagal $e');
                                },
                              );
                            }
                          },
                          child: Container(
                            margin: EdgeInsets.only(top: height * 0.02),
                            padding: EdgeInsets.all(height * 0.02),
                            alignment: Alignment.center,
                            decoration: BoxDecoration(
                              color: isCodeFilled
                                  ? Colors.blue.shade700
                                  : Colors.grey.shade300,
                              borderRadius: BorderRadius.all(
                                  Radius.circular(width * 0.03)),
                            ),
                            child: const Text(
                              'Continue',
                              style: TextStyle(
                                fontWeight: FontWeight.w600,
                                color: Colors.white,
                                fontSize: 15,
                              ),
                            ),
                          ),
                        );
                }),
                Container(
                  margin: EdgeInsets.only(top: height * 0.025),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Container(
                          margin: EdgeInsets.only(right: width * 0.01),
                          child: Text(
                            "Didn't receive the code?",
                            style: TextStyle(color: Colors.grey.shade600),
                          )),
                      Obx(() {
                        return GestureDetector(
                          onTap: () {
                            emailController.forgot(
                              onSuccess: (msg) {
                                GoRouter.of(context).go(
                                  Routes.FORGOTCODE_SCREEN,
                                );
                                showMySnackbar(context, msg);
                              },
                              onFailed: (e) {
                                showMySnackbar(context, "Gagal $e");
                              },
                            );
                          },
                          child: emailController.isLoading.value
                              ? const CircularProgressIndicator()
                              : Text(
                                  'Resend Code',
                                  style: TextStyle(
                                      fontWeight: FontWeight.w600,
                                      color: Colors.blue.shade700,
                                      fontSize: 15),
                                ),
                        );
                      })
                    ],
                  ),
                ),
              ],
            ),
          ),
        ));
  }
}
