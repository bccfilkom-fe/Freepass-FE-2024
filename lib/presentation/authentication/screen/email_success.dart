import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:urdentist/route/routes.dart';
import 'package:go_router/go_router.dart';

class EmailSuccess extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Scaffold(
      backgroundColor: Colors.white,

      body: Container(
        padding: EdgeInsets.all(16),
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Colors.blue.shade200, Colors.blue.shade700],
          ),
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              SvgPicture.asset("assets/images/icon_email_success.svg"),
              Container(
                margin: EdgeInsets.only(top: height * 0.03),
                alignment: Alignment.center,
                child: Text(
                  'Verification Successful',
                  style: TextStyle(
                      fontSize: height * 0.03,
                      fontWeight: FontWeight.bold,
                      color: Colors.white),
                ),
              ),
              Container(
                margin: EdgeInsets.only(top: height * 0.015),
                alignment: Alignment.center,
                child: const Text(
                  'Congratulations, your email has been successfully validated.',
                  style: TextStyle(color: Colors.white, fontSize: 15),
                  textAlign: TextAlign.center,
                ),
              ),
              GestureDetector(
                onTap: () {
                  GoRouter.of(context).go(Routes.SIGNIN_SCREEN);
                },
                child: Container(
                  margin: EdgeInsets.only(top: height * 0.04),
                  padding: EdgeInsets.all(height * 0.02),
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius:
                        BorderRadius.all(Radius.circular(width * 0.03)),
                  ),
                  child: Text(
                    'Sign In',
                    style: TextStyle(
                      fontWeight: FontWeight.w600,
                      color: Colors.blue.shade700,
                      fontSize: 15,
                    ),
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
