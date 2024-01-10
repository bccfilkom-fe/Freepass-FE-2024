import 'package:flutter/material.dart';

import 'package:flutter_svg/flutter_svg.dart';
import 'package:form_field_validator/form_field_validator.dart';
import 'package:go_router/go_router.dart';
import 'package:urdentist/presentation/authentication/controller/forgot_password_controller.dart';
import 'package:urdentist/presentation/authentication/screen/register.dart';
import 'package:urdentist/route/routes.dart';
import 'package:get/get.dart';

class ForgotPassword extends StatefulWidget {
  @override
  _ForgotPasswordState createState() => _ForgotPasswordState();
}

class _ForgotPasswordState extends State<ForgotPassword> {
  var controller = Get.put(ForgotPasswordController());

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Scaffold(
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
                    'assets/images/icon_forgot.svg',
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(top: height * 0.03),
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'Forgot Password?',
                    style: TextStyle(
                        fontSize: height * 0.03, fontWeight: FontWeight.bold),
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(top: height * 0.01),
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'Enter the email address you used when you joined and we’ll send you OTP code',
                    style: TextStyle(color: Colors.grey.shade600),
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(top: height * 0.03),
                  alignment: Alignment.centerLeft,
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
                      controller.email.value = s;
                    },
                    validator: MultiValidator([
                      RequiredValidator(errorText: "* Required"),
                      EmailValidator(errorText: "Enter valid email id"),
                    ]),
                    decoration: InputDecoration(
                      border: InputBorder.none,
                      hintText: 'Email Address',
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
                      ? Container(
                          margin: EdgeInsets.only(top: height * 0.02),
                          child: const CircularProgressIndicator(),
                        )
                      : GestureDetector(
                          onTap: () {
                            controller.forgot(
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
                              'Send',
                              style: TextStyle(
                                fontWeight: FontWeight.w600,
                                color: Colors.white,
                                fontSize: 15,
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
