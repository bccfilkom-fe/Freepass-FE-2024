import 'package:flutter/material.dart';
// import 'package:urdentist/data/repository/user.dart';

class Consultation extends StatefulWidget {
  @override
  _ConsultationState createState() => _ConsultationState();
}

class _ConsultationState extends State<Consultation> {
  @override
  Widget build(BuildContext context) {
    // String fullName = UserManager.instance.getFullName();
    // String email = UserManager.instance.getEmail();

    return Scaffold(
      body: Container(
        padding: EdgeInsets.all(16),
        child: Text('Consultation'),
      ),
    );
  }
}
