import 'package:flutter/material.dart';
import './navbar.dart';
import 'package:go_router/go_router.dart';

Widget ScaffoldWithNavbar(
  BuildContext context,
  Widget widget,
) {
  return Scaffold(
    bottomNavigationBar: AppNavbar(
      GoRouter.of(context)
          .routerDelegate
          .currentConfiguration
          .last
          .matchedLocation,
      (route) {
        context.push(route);
      },
    ),
    body: widget,
  );
}
