import 'package:flutter/material.dart';
import 'package:urdentist/data/repository/daily_task.dart';
import 'package:urdentist/presentation/homepage/homepage.dart';

import 'package:go_router/go_router.dart';
import 'package:urdentist/route/routes.dart';

// import 'package:urdentist/data/repository/user.dart';
class DoDont {
  final String description;
  final bool status;

  DoDont(
    this.description,
    this.status,
  );
}

class Habit extends StatefulWidget {
  @override
  _HabitState createState() => _HabitState();
}

class _HabitState extends State<Habit> {
  final List<DoDont> doDont = [
    DoDont("Control snacking frequency", true),
    DoDont("Reduce the consumption of sugary foods or drinks", true),
    DoDont("Reduce the consumption of starchy foods", true),
    DoDont("Grit your teeth", false),
    DoDont("Bite on hard objects", false),
  ];

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
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    children: [
                      SizedBox(
                        height: height * 0.01,
                      ),
                      Row(
                        children: [
                          Icon(
                            Icons.calendar_today,
                            size: width * 0.03,
                            color: Colors.grey.shade600,
                          ),
                          SizedBox(
                            width: width * 0.01,
                          ),
                          Text(
                            'Jan - Jun 2024',
                            style: TextStyle(
                                fontSize: width * 0.03,
                                color: Colors.grey.shade600),
                          ),
                        ],
                      ),
                      SizedBox(
                        height: height * 0.02,
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(
                            vertical: 8, horizontal: 15),
                        decoration: BoxDecoration(
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black.withOpacity(0.2),
                                spreadRadius: 1,
                                blurRadius: 1.2,
                                offset: Offset(0, 0.2),
                              ),
                            ],
                            color: Colors.yellow.shade50,
                            borderRadius:
                                BorderRadius.all(Radius.circular(10))),
                        child: Column(
                          children: [
                            Row(
                              children: [
                                Image.asset(
                                  'assets/images/icon_trophy.png',
                                  width: width * 0.18,
                                ),
                                SizedBox(
                                  width: width * 0.02,
                                ),
                                Expanded(
                                    child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      '11 Exp Points',
                                      style: TextStyle(
                                          color: Colors.blue.shade800,
                                          fontWeight: FontWeight.bold,
                                          fontSize: width * 0.04),
                                    ),
                                    SizedBox(
                                      height: height * 0.008,
                                    ),
                                    ClipRRect(
                                      borderRadius: BorderRadius.circular(
                                          10), // Sesuaikan dengan radius yang diinginkan
                                      child: const LinearProgressIndicator(
                                        value: 11 / 100,
                                        backgroundColor: Colors.grey,
                                        valueColor:
                                            AlwaysStoppedAnimation<Color>(
                                                Colors.blue),
                                        minHeight: 15,
                                      ),
                                    ),
                                    SizedBox(
                                      height: height * 0.008,
                                    ),
                                    Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceBetween,
                                      children: [
                                        Text(
                                          'Novice',
                                          style: TextStyle(
                                              color: Colors.blue.shade800,
                                              fontWeight: FontWeight.bold,
                                              fontSize: width * 0.04),
                                        ),
                                        Text(
                                          'Master',
                                          style: TextStyle(
                                              color: Colors.blue.shade800,
                                              fontWeight: FontWeight.bold,
                                              fontSize: width * 0.04),
                                        ),
                                      ],
                                    )
                                  ],
                                ))
                              ],
                            ),
                          ],
                        ),
                      ),
                      SizedBox(
                        height: height * 0.01,
                      ),
                      Container(
                        alignment: Alignment.centerLeft,
                        child: Text(
                          'Complete daily tasks to increase your points!',
                          style: TextStyle(
                              color: Colors.blue.shade800,
                              fontWeight: FontWeight.w600,
                              fontSize: width * 0.042),
                        ),
                      ),
                      SizedBox(
                        height: height * 0.025,
                      ),
                      Container(
                        alignment: Alignment.centerLeft,
                        child: Text(
                          'Upcoming Schedule',
                          style: TextStyle(
                              fontSize: width * 0.05,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      SizedBox(
                        height: height * 0.01,
                      ),
                      Column(
                        children: [
                          Row(
                            children: [
                              Image.asset(
                                'assets/images/upcomingSchedule.png',
                                width: width * 0.18,
                              ),
                              SizedBox(
                                width: width * 0.02,
                              ),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      'Tuesday, 9 January 2024',
                                      style: TextStyle(
                                          color: Colors.blue.shade800,
                                          fontWeight: FontWeight.bold,
                                          fontSize: width * 0.04),
                                    ),
                                    SizedBox(
                                      height: height * 0.005,
                                    ),
                                    Text(
                                      'Routine dental and oral examination',
                                      style: TextStyle(
                                          fontSize: width * 0.035,
                                          color: Colors.grey.shade600),
                                    ),
                                    SizedBox(
                                      height: height * 0.005,
                                    ),
                                    Container(
                                      padding: const EdgeInsets.symmetric(
                                          vertical: 3, horizontal: 8),
                                      decoration: BoxDecoration(
                                          color: Colors.blue.shade50,
                                          borderRadius: const BorderRadius.all(
                                              Radius.circular(10))),
                                      child: Text(
                                        '6 days to go',
                                        style: TextStyle(
                                            fontSize: width * 0.03,
                                            color: Colors.blue.shade600,
                                            fontWeight: FontWeight.w600),
                                      ),
                                    ),
                                    SizedBox(
                                      height: height * 0.01,
                                    ),
                                    Container(
                                      alignment: Alignment.centerRight,
                                      child: Text(
                                        'See Details',
                                        style: TextStyle(
                                            fontSize: width * 0.028,
                                            color: Colors.blue.shade600),
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                          SizedBox(
                            height: height * 0.025,
                          ),
                          Container(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Task',
                              style: TextStyle(
                                  fontSize: width * 0.05,
                                  fontWeight: FontWeight.bold),
                            ),
                          ),
                          SizedBox(
                            height: height * 0.01,
                          ),
                          Column(
                            children: globalDailyTasks.map((task) {
                              task.updateStatus();
                              return DailyTaskWidget(task, 'daily');
                            }).toList(),
                          ),
                          SizedBox(
                            height: height * 0.015,
                          ),
                          Container(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Extra Task',
                              style: TextStyle(
                                  fontSize: width * 0.05,
                                  fontWeight: FontWeight.bold),
                            ),
                          ),
                          SizedBox(
                            height: height * 0.01,
                          ),
                          Container(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Do this extra task to increase your daily points',
                              style: TextStyle(fontSize: width * 0.035),
                            ),
                          ),
                          SizedBox(
                            height: height * 0.01,
                          ),
                          Column(
                            children: globalExtraTasks.map((task) {
                              return ExtraTaskWidget(task);
                            }).toList(),
                          ),
                          SizedBox(
                            height: height * 0.02,
                          ),
                          Container(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              "Do and Don't",
                              style: TextStyle(
                                  fontSize: width * 0.05,
                                  fontWeight: FontWeight.bold),
                            ),
                          ),
                          SizedBox(
                            height: height * 0.01,
                          ),
                          Container(
                            width: width * .85,
                            child: Column(
                              children: doDont.map((item) {
                                return Container(
                                  margin:
                                      EdgeInsets.only(bottom: height * 0.01),
                                  child: Row(
                                    children: [
                                      item.status
                                          ? Image.asset(
                                              'assets/images/ThumbsUp.png',
                                              width: width * 0.05,
                                            )
                                          : Image.asset(
                                              'assets/images/ThumbsDown.png',
                                              width: width * 0.05,
                                            ),
                                      SizedBox(
                                        width: width * 0.02,
                                      ),
                                      Flexible(
                                        child: Text(
                                          item.description,
                                        ),
                                      )
                                    ],
                                  ),
                                );
                              }).toList(),
                            ),
                          ),
                          SizedBox(
                            height: height * 0.015,
                          ),
                        ],
                      ),
                    ],
                  ),
                )
              : GestureDetector(
                  onTap: () {
                    GoRouter.of(context).go(Routes.RECAPDETAIL_SCREEN);
                  },
                  child: Container(
                    margin: const EdgeInsets.all(16),
                    padding: const EdgeInsets.symmetric(
                        vertical: 12, horizontal: 15),
                    decoration: BoxDecoration(
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.2),
                            spreadRadius: 1,
                            blurRadius: 1.2,
                            offset: Offset(0, 0.2),
                          ),
                        ],
                        color: Colors.blue.shade50,
                        borderRadius: BorderRadius.all(Radius.circular(10))),
                    child: Column(
                      children: [
                        Row(
                          children: [
                            Image.asset(
                              'assets/images/recap.png',
                              width: width * 0.22,
                            ),
                            SizedBox(
                              width: width * 0.02,
                            ),
                            Expanded(
                                child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'July - December',
                                  style: TextStyle(
                                      color: Colors.blue.shade800,
                                      fontWeight: FontWeight.bold,
                                      fontSize: width * 0.04),
                                ),
                                SizedBox(
                                  height: height * 0.008,
                                ),
                                Text(
                                  '2023',
                                  style: TextStyle(
                                      color: Colors.blue.shade800,
                                      fontWeight: FontWeight.bold,
                                      fontSize: width * 0.04),
                                ),
                              ],
                            )),
                            Icon(
                              Icons.chevron_right,
                              size: 35,
                              color: Colors.blue.shade800,
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                )
        ],
      ),
    ));
  }
}

class ExtraTaskWidget extends StatefulWidget {
  final ExtraTask task;

  ExtraTaskWidget(this.task);

  @override
  _ExtraTaskWidgetState createState() => _ExtraTaskWidgetState();
}

class _ExtraTaskWidgetState extends State<ExtraTaskWidget> {
  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 12),
      margin: EdgeInsets.only(
        bottom: height * 0.015,
      ),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: const BorderRadius.all(Radius.circular(10)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.2),
            spreadRadius: 1,
            blurRadius: 1.2,
            offset: Offset(0, 0.2),
          ),
        ],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.asset(
                widget.task.image,
                width: width * 0.11,
              ),
            ],
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                alignment: Alignment.centerLeft,
                width: width * 0.4,
                child: Text(
                  widget.task.description,
                  textAlign: TextAlign.start,
                  style: const TextStyle(fontWeight: FontWeight.bold),
                ),
              )
            ],
          ),
          GestureDetector(
            onTap: () {
              !widget.task.status
                  ? setState(() {
                      widget.task.status = true;
                    })
                  : '';
            },
            child: Container(
              padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 16),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.all(Radius.circular(10)),
                color: !widget.task.status
                    ? Colors.blue.shade700
                    : Colors.grey.shade200,
              ),
              child: Center(
                child: Text(
                  'Done',
                  style: TextStyle(
                    color: !widget.task.status
                        ? Colors.white
                        : Colors.grey.shade600,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}
