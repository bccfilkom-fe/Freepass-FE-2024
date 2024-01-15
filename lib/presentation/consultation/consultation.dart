import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:urdentist/route/routes.dart';
// import 'package:urdentist/data/repository/user.dart';

// import 'package:urdentist/data/repository/user.dart';

class Consultation extends StatefulWidget {
  @override
  _ConsultationState createState() => _ConsultationState();
}

class _ConsultationState extends State<Consultation> {
  String selectedBar = 'Expert';
  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Scaffold(
        backgroundColor: Colors.white,
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
                        'Consultation',
                        style: TextStyle(
                            fontSize: width * 0.06,
                            fontWeight: FontWeight.w600),
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
                                selectedBar = 'Expert';
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
                                    color: selectedBar == 'Expert'
                                        ? Colors.blue.shade700
                                        : Colors.transparent,
                                  ), // Border bawah
                                ),
                              ),
                              child: Text(
                                'Ask an Expert',
                                style: TextStyle(
                                    color: selectedBar == 'Expert'
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
                              selectedBar = 'Dentist';
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
                                  color: selectedBar == 'Dentist'
                                      ? Colors.blue.shade700
                                      : Colors.transparent,
                                ), // Border bawah
                              ),
                            ),
                            child: Text(
                              'Find Dentist',
                              style: TextStyle(
                                  color: selectedBar == 'Dentist'
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
              selectedBar == "Expert"
                  ? Container(
                      padding: const EdgeInsets.all(16),
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Expanded(
                                child: Container(
                                  alignment: Alignment.centerLeft,
                                  padding: EdgeInsets.symmetric(
                                    horizontal: width * 0.02,
                                  ),
                                  decoration: BoxDecoration(
                                    border: Border.all(
                                        color: Colors.grey.shade300, width: 1),
                                    borderRadius: BorderRadius.all(
                                        Radius.circular(width * 0.03)),
                                  ),
                                  child: TextFormField(
                                    decoration: const InputDecoration(
                                      border: InputBorder.none,
                                      prefixIcon: Icon(Icons.search),
                                      hintText: 'Search for Questions',
                                    ),
                                  ),
                                ),
                              ),
                              Container(
                                margin: EdgeInsets.only(left: width * 0.02),
                                alignment: Alignment.center,
                                child: Icon(
                                  Icons.add,
                                  size: width * 0.1,
                                ),
                              )
                            ],
                          ),
                          SizedBox(
                            height: height * 0.02,
                          ),
                          Container(
                            alignment: Alignment.centerLeft,
                            height: height * 0.04,
                            child: SingleChildScrollView(
                              scrollDirection: Axis.horizontal,
                              child: Row(
                                children: [
                                  Container(
                                    margin: EdgeInsets.only(left: width * 0.02),
                                    padding: EdgeInsets.only(
                                        left: width * 0.03,
                                        right: width * 0.03),
                                    alignment: Alignment.center,
                                    decoration: BoxDecoration(
                                      borderRadius:
                                          BorderRadius.all(Radius.circular(5)),
                                      color: Colors.blue.shade700,
                                    ),
                                    child: const Text(
                                      'All',
                                      style: TextStyle(
                                          color: Colors.white,
                                          fontWeight: FontWeight.w600),
                                    ),
                                  ),
                                  Container(
                                    margin: EdgeInsets.only(left: width * 0.02),
                                    padding: EdgeInsets.only(
                                        left: width * 0.03,
                                        right: width * 0.03),
                                    alignment: Alignment.center,
                                    decoration: BoxDecoration(
                                      border: Border.all(
                                          color: Colors.blue.shade700,
                                          width: 2),
                                      borderRadius:
                                          BorderRadius.all(Radius.circular(5)),
                                    ),
                                    child: Text(
                                      'Prevention',
                                      style: TextStyle(
                                          color: Colors.blue.shade700,
                                          fontWeight: FontWeight.w600),
                                    ),
                                  ),
                                  Container(
                                    margin: EdgeInsets.only(left: width * 0.02),
                                    padding: EdgeInsets.only(
                                        left: width * 0.03,
                                        right: width * 0.03),
                                    alignment: Alignment.center,
                                    decoration: BoxDecoration(
                                      border: Border.all(
                                          color: Colors.blue.shade700,
                                          width: 2),
                                      borderRadius:
                                          BorderRadius.all(Radius.circular(5)),
                                    ),
                                    child: Text(
                                      'Caries',
                                      style: TextStyle(
                                          color: Colors.blue.shade700,
                                          fontWeight: FontWeight.w600),
                                    ),
                                  ),
                                  Container(
                                    margin: EdgeInsets.only(left: width * 0.02),
                                    padding: EdgeInsets.only(
                                        left: width * 0.03,
                                        right: width * 0.03),
                                    alignment: Alignment.center,
                                    decoration: BoxDecoration(
                                      border: Border.all(
                                          color: Colors.blue.shade700,
                                          width: 2),
                                      borderRadius:
                                          BorderRadius.all(Radius.circular(5)),
                                    ),
                                    child: Text(
                                      'Fluoride',
                                      style: TextStyle(
                                          color: Colors.blue.shade700,
                                          fontWeight: FontWeight.w600),
                                    ),
                                  ),
                                  Container(
                                    margin: EdgeInsets.only(left: width * 0.02),
                                    padding: EdgeInsets.only(
                                        left: width * 0.03,
                                        right: width * 0.03),
                                    alignment: Alignment.center,
                                    decoration: BoxDecoration(
                                      border: Border.all(
                                          color: Colors.blue.shade700,
                                          width: 2),
                                      borderRadius:
                                          BorderRadius.all(Radius.circular(5)),
                                    ),
                                    child: Text(
                                      'Cleaning',
                                      style: TextStyle(
                                          color: Colors.blue.shade700,
                                          fontWeight: FontWeight.w600),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                          SizedBox(
                            height: height * 0.015,
                          ),
                          Container(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Latest Questions',
                              style: TextStyle(
                                  fontSize: width * 0.05,
                                  fontWeight: FontWeight.bold),
                            ),
                          ),
                          SizedBox(
                            height: height * 0.02,
                          ),
                          GestureDetector(
                            onTap: () {
                              GoRouter.of(context).go(Routes.ANSWER_SCREEN);
                            },
                            child: Container(
                              padding: const EdgeInsets.only(
                                  top: 12, bottom: 12, left: 6, right: 10),
                              decoration: BoxDecoration(
                                  boxShadow: [
                                    BoxShadow(
                                      color: Colors.black.withOpacity(0.2),
                                      spreadRadius: 1,
                                      blurRadius: 1.2,
                                      offset: Offset(0, 0.2),
                                    ),
                                  ],
                                  color: Colors.white,
                                  borderRadius:
                                      BorderRadius.all(Radius.circular(10))),
                              child: Column(
                                children: [
                                  Row(
                                    children: [
                                      SizedBox(
                                        width: width * 0.02,
                                      ),
                                      Expanded(
                                          child: Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            children: [
                                              Text(
                                                '11 Jan 2024',
                                                style: TextStyle(
                                                    color: Colors.grey.shade600,
                                                    fontWeight: FontWeight.bold,
                                                    fontSize: width * 0.035),
                                              ),
                                              SizedBox(
                                                width: width * 0.02,
                                              ),
                                              Text(
                                                '12.18',
                                                style: TextStyle(
                                                    color: Colors.grey.shade600,
                                                    fontWeight: FontWeight.bold,
                                                    fontSize: width * 0.035),
                                              ),
                                            ],
                                          ),
                                          SizedBox(
                                            height: height * 0.008,
                                          ),
                                          Text(
                                            'What are the symptoms of tooth decay?',
                                            style: TextStyle(
                                                fontWeight: FontWeight.bold,
                                                fontSize: width * 0.04),
                                          ),
                                          SizedBox(
                                            height: height * 0.002,
                                          ),
                                          Container(
                                            padding: const EdgeInsets.symmetric(
                                                vertical: 3, horizontal: 8),
                                            decoration: BoxDecoration(
                                                color: Colors.blue.shade50,
                                                borderRadius:
                                                    const BorderRadius.all(
                                                        Radius.circular(10))),
                                            child: Text(
                                              'Caries',
                                              style: TextStyle(
                                                  fontSize: width * 0.03,
                                                  color: Colors.blue.shade600,
                                                  fontWeight: FontWeight.w600),
                                            ),
                                          ),
                                        ],
                                      )),
                                      Image.asset(
                                        'assets/images/verified.png',
                                        width: width * 0.05,
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ),
                          )
                        ],
                      ),
                    )
                  : Container(
                      padding: const EdgeInsets.all(16),
                      child: Column(
                        children: [Text('data')],
                      ),
                    )
            ],
          ),
        ));
  }
}
