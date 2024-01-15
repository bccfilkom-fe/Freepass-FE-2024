import 'package:flutter/material.dart';

import 'package:go_router/go_router.dart';
import 'package:urdentist/route/routes.dart';

class Answer extends StatefulWidget {
  @override
  _AnswerState createState() => _AnswerState();
}

class _AnswerState extends State<Answer> {
  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          backgroundColor: Colors.white,
          iconTheme: IconThemeData(color: Colors.black),
          centerTitle: true,
          title: const Text(
            'Question',
            style: TextStyle(color: Colors.black, fontWeight: FontWeight.w600),
          ),
          leading: IconButton(
            icon: const Icon(Icons.arrow_back),
            onPressed: () {
              GoRouter.of(context).go(Routes.CONSULTATION_SCREEN);
            },
          ),
        ),
        body: SingleChildScrollView(
            child: Container(
          color: Colors.white,
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Image.asset(
                  'assets/images/icon_avatar.png',
                ),
                Container(
                  margin: EdgeInsets.only(left: width * 0.03),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Charlotte Anne',
                        style: TextStyle(
                          fontSize: width * 0.045,
                          fontWeight: FontWeight.bold,
                          color: Colors.blue.shade800,
                        ),
                      ),
                      SizedBox(
                        height: height * 0.005,
                      ),
                      Row(
                        children: [
                          Text(
                            '11 Jan 2024',
                            style: TextStyle(
                                color: Colors.grey.shade600,
                                fontSize: width * 0.035),
                          ),
                          SizedBox(
                            width: width * 0.02,
                          ),
                          Text(
                            '12.18',
                            style: TextStyle(
                                color: Colors.grey.shade600,
                                fontSize: width * 0.035),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ]),
              SizedBox(
                height: height * 0.02,
              ),
              Container(
                alignment: Alignment.centerLeft,
                child: Text(
                  'What are the symptoms of tooth decay?',
                  style: TextStyle(
                      fontWeight: FontWeight.bold, fontSize: width * 0.058),
                ),
              ),
              SizedBox(
                height: height * 0.005,
              ),
              Container(
                padding: const EdgeInsets.symmetric(vertical: 3, horizontal: 8),
                decoration: BoxDecoration(
                    color: Colors.blue.shade50,
                    borderRadius: const BorderRadius.all(Radius.circular(10))),
                child: Text(
                  'Caries',
                  style: TextStyle(
                      fontSize: width * 0.03,
                      color: Colors.blue.shade600,
                      fontWeight: FontWeight.w600),
                ),
              ),
              SizedBox(
                height: height * 0.02,
              ),
              Text(
                'Expert Answer',
                style: TextStyle(
                    fontSize: width * 0.05, fontWeight: FontWeight.bold),
              ),
              SizedBox(
                height: height * 0.01,
              ),
              Container(
                  padding: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                      color: Colors.blue.shade50,
                      borderRadius:
                          const BorderRadius.all(Radius.circular(10))),
                  child: Column(
                    children: [
                      Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Image.asset(
                              'assets/images/drLuna.png',
                              width: width * 0.14,
                            ),
                            Container(
                              margin: EdgeInsets.only(left: width * 0.03),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'Dr. Luna Claw',
                                    style: TextStyle(
                                      fontSize: width * 0.045,
                                      fontWeight: FontWeight.bold,
                                      color: Colors.black,
                                    ),
                                  ),
                                  SizedBox(
                                    height: height * 0.005,
                                  ),
                                  Container(
                                    padding: const EdgeInsets.symmetric(
                                        vertical: 3, horizontal: 8),
                                    decoration: BoxDecoration(
                                        color: Colors.blue.shade900,
                                        borderRadius: const BorderRadius.all(
                                            Radius.circular(10))),
                                    child: Text(
                                      'Paediatric',
                                      style: TextStyle(
                                          fontSize: width * 0.03,
                                          color: Colors.white,
                                          fontWeight: FontWeight.w600),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ]),
                      SizedBox(
                        height: height * 0.01,
                      ),
                      Container(
                        alignment: Alignment.centerRight,
                        child: Text(
                          'Answered on 10 Jan 2024 10.40',
                          style: TextStyle(
                              color: Colors.grey.shade600,
                              fontSize: width * 0.035),
                        ),
                      ),
                      SizedBox(
                        height: height * 0.01,
                      ),
                      Container(
                        alignment: Alignment.centerRight,
                        child: Text(
                          'The symptoms of tooth decay can vary depending on the severity of the decay. In the early stages, tooth decay may not cause any symptoms at all. However, as the decay progresses, you may begin to experience the following symptoms:\n'
                          '• Sensitivity to hot or cold foods and drinks\n'
                          '• Pain when biting or chewing\n'
                          '• Loose or chipped teeth\n'
                          '• Dark spots or cavities on the teeth\n\n'
                          'If you experience any of these symptoms, it is important to see a dentist as soon as possible. Tooth decay can be a serious condition that can lead to tooth loss if left untreated.',
                          style: TextStyle(
                              color: Colors.black,
                              fontSize: width * 0.034,
                              fontWeight: FontWeight.w500),
                        ),
                      ),
                    ],
                  )),
            ],
          ),
        )));
  }
}
