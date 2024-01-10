import 'package:flutter/material.dart';

import 'package:flutter_svg/flutter_svg.dart';
import 'package:go_router/go_router.dart';
import 'package:urdentist/presentation/authentication/controller/reset_password_controller.dart';
import 'package:urdentist/presentation/authentication/screen/register.dart';
import 'package:urdentist/route/routes.dart';
import 'package:get/get.dart';

class CreateNewPass extends StatefulWidget {
  @override
  _CreateNewPassState createState() => _CreateNewPassState();
}

class _CreateNewPassState extends State<CreateNewPass> {
  var controller = ResetPasswordController();

  bool isPasswordVisible = false;
  bool isConfirmPasswordVisible = false;

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
                    'assets/images/icon_create_pass.svg',
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(top: height * 0.03),
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'Create a New Password',
                    style: TextStyle(
                        fontSize: height * 0.03, fontWeight: FontWeight.bold),
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(top: height * 0.01),
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'Please enter your new password',
                    style: TextStyle(color: Colors.grey.shade600),
                  ),
                ),
                Container(
                  alignment: Alignment.centerLeft,
                  margin: EdgeInsets.only(top: height * 0.02),
                  padding: EdgeInsets.symmetric(horizontal: width * 0.03),
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey.shade300, width: 1),
                    borderRadius:
                        BorderRadius.all(Radius.circular(width * 0.03)),
                  ),
                  child: TextFormField(
                    onChanged: (s) {
                      controller.password = s;
                    },
                    obscureText: !isPasswordVisible,
                    decoration: InputDecoration(
                      border: InputBorder.none,
                      hintText: 'Password',
                      hintStyle: TextStyle(
                        fontSize: 15,
                        color: Colors.grey.shade600,
                      ),
                      suffixIcon: GestureDetector(
                        onTap: () {
                          setState(() {
                            isPasswordVisible = !isPasswordVisible;
                          });
                        },
                        child: Icon(
                          isPasswordVisible
                              ? Icons.visibility
                              : Icons.visibility_off,
                          color: Colors.grey.shade600,
                        ),
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
                  padding: EdgeInsets.symmetric(horizontal: width * 0.03),
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey.shade300, width: 1),
                    borderRadius:
                        BorderRadius.all(Radius.circular(width * 0.03)),
                  ),
                  child: TextFormField(
                    onChanged: (s) {
                      controller.confirmPassword = s;
                    },
                    obscureText: !isConfirmPasswordVisible,
                    decoration: InputDecoration(
                      border: InputBorder.none,
                      hintText: 'Confirm Password',
                      hintStyle: TextStyle(
                        fontSize: 15,
                        color: Colors.grey.shade600,
                      ),
                      suffixIcon: GestureDetector(
                        onTap: () {
                          setState(() {
                            isConfirmPasswordVisible =
                                !isConfirmPasswordVisible;
                          });
                        },
                        child: Icon(
                          isConfirmPasswordVisible
                              ? Icons.visibility
                              : Icons.visibility_off,
                          color: Colors.grey.shade600,
                        ),
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
                            controller.resetPassword(
                              onSuccess: (msg) {
                                showMySnackbar(context, msg);
                                GoRouter.of(context)
                                    .go(Routes.FORGOTSUCCESS_SCREEN);
                              },
                              onFailed: (e) {
                                showMySnackbar(context, 'Gagal $e');
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
                              'Save',
                              style: TextStyle(
                                fontWeight: FontWeight.w600,
                                color: Colors.white,
                                fontSize: 15,
                              ),
                            ),
                          ),
                        );
                })
              ],
            ),
          ),
        ));
  }
}
