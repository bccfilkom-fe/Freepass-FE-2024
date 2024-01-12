import 'package:flutter/material.dart';
import 'package:urdentist/presentation/habit/recapDetail.dart';
import 'package:urdentist/route/app_router.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  runApp(const MyApp());
}

SharedPreferences? prefs = null;

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    FlutterSecureStorage.setMockInitialValues({});
    initSharedPref();

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      // home: RecapDetail()
      home: const SafeArea(
          child: Scaffold(
        body: AppRouter(),
      )),
    );
  }
}

Future<void> initSharedPref() async {
  prefs = await SharedPreferences.getInstance();
}
