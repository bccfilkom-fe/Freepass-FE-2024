// import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

import 'package:flutter_svg/flutter_svg.dart';
import 'package:form_field_validator/form_field_validator.dart';
import 'package:go_router/go_router.dart';
import 'package:urdentist/presentation/authentication/controller/login_controller.dart';
import 'package:urdentist/presentation/authentication/screen/register.dart';
import 'package:urdentist/route/routes.dart';
import 'package:get/get.dart';

class SignIn extends StatefulWidget {
  @override
  _SignInState createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  // await Firebase.initializeApp();

  // final FirebaseAuth _auth = FirebaseAuth.instance;
  LoginController controller = Get.put(LoginController());

  bool isPasswordVisible = false;

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Scaffold(
        body: SingleChildScrollView(
      child: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          children: [
            Container(
              padding:
                  EdgeInsets.only(top: height * 0.07, bottom: height * 0.04),
              alignment: Alignment.center,
              child: SvgPicture.asset('assets/images/Logo.svg'),
            ),
            Container(
              alignment: Alignment.centerLeft,
              child: Text(
                'Welcome',
                style: TextStyle(
                    fontSize: width * 0.07, fontWeight: FontWeight.bold),
              ),
            ),
            Container(
              padding: EdgeInsets.only(top: height * 0.01),
              alignment: Alignment.centerLeft,
              child: Text(
                'Sign in to your account to continue',
                style: TextStyle(color: Colors.grey.shade600),
              ),
            ),
            // Obx(() {
            //   return controller.isLoading.value
            //       ? Container(
            //           margin: EdgeInsets.only(top: height * 0.025),
            //           child: const CircularProgressIndicator(),
            //         )
            //       : GestureDetector(
            //           onTap: (() {
            //             controller.googleLogin(onSuccess: (token) {
            //               controller.saveToken(token, () {
            //                 GoRouter.of(context)
            //                     .go(Routes.CHOOSEPROFILE_SCREEN);
            //                 showMySnackbar(context, 'berhasil');
            //               });
            //             }, onFailed: (msg) {
            //               showMySnackbar(context, msg);
            //             });
            //           }),
            //           child:
            //         );
            // }),
            Container(
              margin: EdgeInsets.only(top: height * 0.025),
              padding: EdgeInsets.all(height * 0.02),
              decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey.shade300, width: 2),
                  borderRadius:
                      BorderRadius.all(Radius.circular(width * 0.03))),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    margin: EdgeInsets.only(right: width * 0.02),
                    child: SvgPicture.asset(
                      'assets/images/icon_google.svg',
                    ),
                  ),
                  Text(
                    'Sign in with Google',
                    style: TextStyle(
                        fontWeight: FontWeight.w600,
                        color: Colors.grey.shade600,
                        fontSize: 15),
                  )
                ],
              ),
            ),
            Container(
              margin:
                  EdgeInsets.only(top: height * 0.03, bottom: height * 0.03),
              alignment: Alignment.center,
              child: Text(
                'or sign in with email',
                style: TextStyle(color: Colors.grey.shade500),
              ),
            ),
            Container(
              alignment: Alignment.centerLeft,
              padding: EdgeInsets.symmetric(
                horizontal: width * 0.03,
              ),
              decoration: BoxDecoration(
                border: Border.all(color: Colors.grey.shade300, width: 1),
                borderRadius: BorderRadius.all(Radius.circular(width * 0.03)),
              ),
              child: TextFormField(
                onChanged: (s) {
                  controller.email = s;
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
            Container(
              alignment: Alignment.centerLeft,
              margin: EdgeInsets.only(top: height * 0.02),
              padding: EdgeInsets.symmetric(horizontal: width * 0.03),
              decoration: BoxDecoration(
                border: Border.all(color: Colors.grey.shade300, width: 1),
                borderRadius: BorderRadius.all(Radius.circular(width * 0.03)),
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
            GestureDetector(
              onTap: () {
                GoRouter.of(context).go(Routes.FORGOT_SCREEN);
              },
              child: Container(
                margin:
                    EdgeInsets.only(top: height * 0.01, bottom: height * 0.02),
                alignment: Alignment.centerRight,
                child: Text(
                  'Forgot Password?',
                  style: TextStyle(color: Colors.blue.shade700),
                ),
              ),
            ),
            Obx(() {
              return controller.isLoading.value
                  ? const CircularProgressIndicator()
                  : GestureDetector(
                      onTap: () {
                        controller.login(onSuccess: (token) {
                          controller.saveToken(token, () {
                            GoRouter.of(context)
                                .go(Routes.CHOOSEPROFILE_SCREEN);
                            showMySnackbar(context, 'berhasil');
                          });
                        }, onFailed: (msg) {
                          showMySnackbar(context, msg);
                        });
                      },
                      child: Container(
                        padding: EdgeInsets.all(height * 0.02),
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          color: Colors.blue.shade700,
                          borderRadius:
                              BorderRadius.all(Radius.circular(width * 0.03)),
                        ),
                        child: const Text(
                          'Sign In',
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
                        "Don't have an account?",
                        style: TextStyle(color: Colors.grey.shade600),
                      )),
                  GestureDetector(
                    onTap: () {
                      GoRouter.of(context).go(Routes.REGISTER_SCREEN);
                    },
                    child: Text(
                      'Register',
                      style: TextStyle(
                          fontWeight: FontWeight.w600,
                          color: Colors.blue.shade700,
                          fontSize: 15),
                    ),
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    ));
  }
}
