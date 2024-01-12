import 'package:flutter/material.dart';

// import 'package:urdentist/data/repository/user.dart';
class Habit extends StatefulWidget {
  @override
  _HabitState createState() => _HabitState();
}

class _HabitState extends State<Habit> {
  String selectedBar = 'Daily';
  @override
  Widget build(BuildContext context) {
    // String fullName = UserManager.instance.getFullName();
    // String email = UserManager.instance.getEmail();
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Scaffold(
        body: SingleChildScrollView(
      child: Column(
        children: [
          Container(
            decoration: BoxDecoration(
              color: Colors.white,
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.2),
                  spreadRadius: 1,
                  blurRadius: 1.2,
                  offset: Offset(0, 0.2),
                ),
              ],
            ),
            child: Column(
              children: [
                Container(
                  margin: EdgeInsets.only(top: height * 0.03),
                  alignment: Alignment.center,
                  child: Text(
                    'Habit Tracker',
                    style: TextStyle(
                        fontSize: width * 0.06, fontWeight: FontWeight.w600),
                  ),
                ),
                SizedBox(
                  height: height * 0.03,
                ),
                Row(
                  children: [
                    Expanded(
                      child: GestureDetector(
                        onTap: () {
                          setState(() {
                            selectedBar = 'Daily';
                          });
                        },
                        child: Container(
                          alignment: Alignment.center,
                          margin: EdgeInsets.only(
                              right: width * 0.05, left: width * 0.05),
                          padding: EdgeInsets.only(bottom: height * 0.01),
                          decoration: BoxDecoration(
                            border: Border(
                              bottom: BorderSide(
                                width: 1.0,
                                color: selectedBar == 'Daily'
                                    ? Colors.blue.shade700
                                    : Colors.transparent,
                              ), // Border bawah
                            ),
                          ),
                          child: Text(
                            'Daily',
                            style: TextStyle(
                                color: selectedBar == 'Daily'
                                    ? Colors.blue.shade700
                                    : Colors.grey.shade500,
                                fontSize: width * 0.045,
                                fontWeight: FontWeight.w600),
                          ),
                        ),
                      ),
                    ),
                    Expanded(
                        child: GestureDetector(
                      onTap: () {
                        setState(() {
                          selectedBar = 'Recap';
                        });
                      },
                      child: Container(
                        alignment: Alignment.center,
                        margin: EdgeInsets.only(
                            left: width * 0.05, right: width * 0.05),
                        padding: EdgeInsets.only(bottom: height * 0.01),
                        decoration: BoxDecoration(
                          border: Border(
                            bottom: BorderSide(
                              width: 1.0,
                              color: selectedBar == 'Recap'
                                  ? Colors.blue.shade700
                                  : Colors.transparent,
                            ), // Border bawah
                          ),
                        ),
                        child: Text(
                          'Recap',
                          style: TextStyle(
                              color: selectedBar == 'Recap'
                                  ? Colors.blue.shade700
                                  : Colors.grey.shade500,
                              fontSize: width * 0.045,
                              fontWeight: FontWeight.w600),
                        ),
                      ),
                    ))
                  ],
                )
              ],
            ),
          ),
          selectedBar == "Daily"
              ? Container(
                  child: Text('Daily'),
                )
              : Container(
                  child: Text('Recap'),
                )
        ],
      ),
    ));
  }
}
