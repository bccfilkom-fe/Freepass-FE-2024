import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

// import 'package:flutter_svg/flutter_svg.dart';
import 'package:form_field_validator/form_field_validator.dart';
import 'package:go_router/go_router.dart';
import 'package:urdentist/presentation/authentication/controller/register_controller.dart';
import 'package:urdentist/route/routes.dart';
import 'package:get/get.dart';

class Register extends StatefulWidget {
  @override
  _RegisterState createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  var controller = Get.put(RegisterController());

  bool isPasswordVisible = false;
  bool isConfirmPasswordVisible = false;

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
              padding:
                  EdgeInsets.only(top: height * 0.07, bottom: height * 0.04),
              alignment: Alignment.center,
              child: SvgPicture.asset('assets/images/Logo.svg'),
            ),
            Container(
              alignment: Alignment.centerLeft,
              child: Text(
                'Create an account',
                style: TextStyle(
                    fontSize: width * 0.07, fontWeight: FontWeight.bold),
              ),
            ),
            Container(
              padding: EdgeInsets.only(top: height * 0.01),
              alignment: Alignment.centerLeft,
              child: Text(
                'Register your account to access all in-app features',
                style: TextStyle(color: Colors.grey.shade600),
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
                borderRadius: BorderRadius.all(Radius.circular(width * 0.03)),
              ),
              child: TextFormField(
                onChanged: (s) {
                  controller.fullName = s;
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
                borderRadius: BorderRadius.all(Radius.circular(width * 0.03)),
              ),
              child: TextFormField(
                onChanged: (s) {
                  controller.phoneNumber = s;
                },
                keyboardType: TextInputType.phone,
                decoration: InputDecoration(
                  border: InputBorder.none,
                  hintText: 'No Phone',
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
              margin: EdgeInsets.only(top: height * 0.03),
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
                  controller.password =
                      s; // Pastikan variabel controller.password sesuai dengan yang digunakan dalam logika aplikasi Anda
                },
                obscureText:
                    !isPasswordVisible, // Menggunakan isPasswordVisible untuk mengontrol visibilitas
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
                borderRadius: BorderRadius.all(Radius.circular(width * 0.03)),
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
                        isConfirmPasswordVisible = !isConfirmPasswordVisible;
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
            GestureDetector(
              onTap: () {
                GoRouter.of(context).go(Routes.FORGOT_SCREEN);
              },
              child: Container(
                margin:
                    EdgeInsets.only(top: height * 0.01, bottom: height * 0.02),
                alignment: Alignment.centerRight,
                child: RichText(
                  text: TextSpan(
                    text: 'By registering, you agree to UrDentist ',
                    style: TextStyle(
                      fontSize: 13,
                      color: Colors.grey.shade600,
                    ),
                    children: <TextSpan>[
                      TextSpan(
                        text: 'Terms of Service',
                        style: TextStyle(
                          fontSize: 13,
                          color: Colors.blue.shade700,
                          decoration: TextDecoration.underline,
                        ),
                      ),
                      TextSpan(
                        text: ' and ',
                        style: TextStyle(
                          fontSize: 13,
                          color: Colors.grey.shade600,
                        ),
                      ),
                      TextSpan(
                        text: 'Privacy Policy',
                        style: TextStyle(
                          fontSize: 13,
                          color: Colors.blue.shade700,
                          decoration: TextDecoration.underline,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            Obx(() {
              return controller.isLoading.value
                  ? const CircularProgressIndicator()
                  : GestureDetector(
                      onTap: () {
                        controller.register(
                          onSuccess: (msg) {
                            GoRouter.of(context).go(Routes.REGISTERCODE_SCREEN);
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
                          padding: EdgeInsets.all(height * 0.02),
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            color: Colors.blue.shade700,
                            borderRadius:
                                BorderRadius.all(Radius.circular(width * 0.03)),
                          ),
                          child: const Text(
                            'Create Account',
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
            Container(
              margin: EdgeInsets.only(top: height * 0.025),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                      margin: EdgeInsets.only(right: width * 0.01),
                      child: Text(
                        "Already have an account?",
                        style: TextStyle(color: Colors.grey.shade600),
                      )),
                  GestureDetector(
                    onTap: () {
                      GoRouter.of(context).go(Routes.SIGNIN_SCREEN);
                    },
                    child: Text(
                      'Sign In',
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

void showMySnackbar(BuildContext context, String msg) {
  final snackBar = SnackBar(
    content: Text(msg),
    action: SnackBarAction(
      label: 'Tutup',
      onPressed: () {
        // Aksi yang akan diambil ketika tombol "Tutup" ditekan.
      },
    ),
  );

  ScaffoldMessenger.of(context).showSnackBar(snackBar);
}
