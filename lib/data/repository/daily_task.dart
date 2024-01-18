class DailyTask {
  final int profileId;
  final int id;
  final String image;
  final String description;
  bool status;
  int scheduledStartHour;
  int scheduledEndHour;

  DailyTask(
    this.profileId,
    this.id,
    this.image,
    this.description,
    this.status,
    this.scheduledStartHour,
    this.scheduledEndHour,
  );

  void updateStatus() {
    DateTime currentTime = DateTime.now();
    int hour = currentTime.hour;
    if (hour >= scheduledStartHour && hour <= scheduledEndHour) {
      status = false;
    } else {
      status = true;
    }

    // print(
    //     'Updated status for task: $description to $status,$scheduledStartHour, $scheduledEndHour, $hour');
  }
}

List<DailyTask> globalDailyTasks = [
  DailyTask(
    0,
    1,
    'assets/images/task1.png',
    'Brush teeth after breakfast',
    false,
    6,
    10,
  ),
  DailyTask(0, 2, 'assets/images/task2.png', 'Brush teeth for 2 minutes', false,
      1, 23),
  DailyTask(
    0,
    3,
    'assets/images/task3.png',
    'Brush teeth before sleep',
    false,
    19,
    23,
  ),
  DailyTask(
    0,
    4,
    'assets/images/task4.png',
    'Floss once a day',
    false,
    1,
    23,
  ),
  DailyTask(
      0, 5, 'assets/images/task5.png', 'Use fluoride toothpaste', false, 1, 23),
];
