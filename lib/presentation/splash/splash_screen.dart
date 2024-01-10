import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:urdentist/route/routes.dart';
import 'package:go_router/go_router.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    Future.delayed(const Duration(seconds: 2), () {
      context.go(Routes.INTRODUCTION_SCREEN);
      // context.go(Routes.PROFILE_USER_SCREEN);
    });

    return Scaffold(
      body: Container(
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
              SvgPicture.asset("assets/images/icon_splash.svg"),
              const Padding(
                padding: EdgeInsets.only(
                  top: 16,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
