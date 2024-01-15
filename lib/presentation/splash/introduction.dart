import 'package:flutter/material.dart';
import 'package:flutter_swiper_view/flutter_swiper_view.dart';

import 'package:flutter_svg/flutter_svg.dart';
import 'package:urdentist/route/routes.dart';
import 'package:go_router/go_router.dart';

class Data {
  final String image;
  final String header;
  final String description;

  Data(
    this.image,
    this.header,
    this.description,
  );
}

class Introduction extends StatefulWidget {
  @override
  _IntroductionState createState() => _IntroductionState();
}

class _IntroductionState extends State<Introduction> {
  final SwiperController _swiperController = SwiperController();
  final List<Data> data = [
    Data(
      'assets/images/icon_introduction1.svg',
      'Make Brushing Your Teeth More Enjoyable',
      'Turn brushing teeth into a fun game with a habit tracker that uses gamification',
    ),
    Data(
      'assets/images/icon_introduction2.svg',
      'Dental Care Consultation Anytime, Anywhere!',
      'Find your ideal dentist, with a convenient consultation booking process. ',
    ),
    Data(
      'assets/images/icon_introduction3.svg',
      'Early and Accurate Detection of Tooth Decay',
      'Detect cavities with a caries detector and get guidance on what to do next.',
    ),
  ];

  @override
  void dispose() {
    _swiperController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Scaffold(
        backgroundColor: Colors.white,
        body: Padding(
          padding: EdgeInsets.all(16),
          child: Column(
            children: [
              Container(
                padding: EdgeInsets.only(top: height * 0.02),
                height: height * 0.8,
                child: Swiper(
                  controller: _swiperController,
                  itemCount: data.length,
                  loop: false,
                  itemBuilder: (context, index) {
                    bool showSkipButton = index == 0 || index == 1;
                    return Stack(children: [
                      Column(
                        children: <Widget>[
                          Row(
                            mainAxisAlignment: MainAxisAlignment.end,
                            children: [
                              InkWell(
                                onTap: () {
                                  _swiperController.move(data.length - 1);
                                },
                                child: Container(
                                  padding: EdgeInsets.symmetric(
                                      horizontal: width * 0.03,
                                      vertical: height * 0.015),
                                  child: Text(
                                    'Skip',
                                    textAlign: TextAlign.right,
                                    style: TextStyle(
                                      color: showSkipButton
                                          ? Colors.blue.shade700
                                          : Colors.transparent,
                                      fontWeight: FontWeight.w600,
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                          SvgPicture.asset(
                            data[index].image,
                            height: height * 0.4,
                          ),
                          Text(
                            data[index].header,
                            style: TextStyle(
                                fontSize: width * 0.075,
                                fontWeight: FontWeight.bold),
                          ),
                          SizedBox(
                            height: height * 0.015,
                          ),
                          Text(
                            data[index].description,
                            style: TextStyle(color: Colors.grey.shade600),
                          ),
                        ],
                      ),
                      Positioned(
                        bottom: 0,
                        right: width * 0.02,
                        child: Align(
                          alignment: Alignment.bottomRight,
                          child: Container(
                            width: 50.0,
                            height: 50.0,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              color: Colors.blue.shade700,
                            ),
                            child: IconButton(
                              icon: const Icon(
                                Icons.chevron_right,
                                size: 35,
                                color: Colors.white,
                              ),
                              onPressed: () {
                                showSkipButton
                                    ? _swiperController.next()
                                    : GoRouter.of(context)
                                        .go(Routes.SIGNIN_SCREEN);
                              },
                            ),
                          ),
                        ),
                      ),
                    ]);
                  },
                  pagination: SwiperPagination(
                    alignment: Alignment.bottomLeft,
                    builder: DotSwiperPaginationBuilder(
                      color: Colors.blue[100],
                      activeColor: Colors.blue[700],
                      activeSize: width * 0.035,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ));
  }
}

class CustomSwiperControl extends StatelessWidget {
  final IconData iconNext;
  final Color color;
  final double size;
  final EdgeInsets padding;

  const CustomSwiperControl({
    Key? key,
    required this.iconNext,
    required this.color,
    required this.size,
    required this.padding,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: padding,
      child: Icon(
        iconNext,
        color: color,
        size: size,
      ),
    );
  }
}
