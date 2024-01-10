import 'package:flutter/material.dart';
// import 'package:urdentist/data/repository/user.dart';

class Habit extends StatefulWidget {
  @override
  _HabitState createState() => _HabitState();
}

class _HabitState extends State<Habit> {
  @override
  Widget build(BuildContext context) {
    // String fullName = UserManager.instance.getFullName();
    // String email = UserManager.instance.getEmail();

    return Scaffold(
      body: Container(
        padding: EdgeInsets.all(16),
        child: Text('Habit'),
      ),
    );
  }
}
