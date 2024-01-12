class ExtraTask {
  final String image;
  final String description;
  bool status;

  ExtraTask(this.image, this.description, this.status);
}

List<ExtraTask> globalExtraTasks = [
  // ExtraTask('assets/images/task1.png', 'Brush teeth after breakfast', false),
  ExtraTask('assets/images/task2.png', 'Brush teeth for 2 minutes', false),
  // ExtraTask('assets/images/task3.png', 'Brush teeth before sleep', false),
  // ExtraTask('assets/images/task4.png', 'Floss once a day', false),
  ExtraTask('assets/images/task5.png', 'Use fluoride toothpaste', false),
];

class DailyTask {
  final String image;
  final String description;
  bool status;
  int scheduledStartHour;
  int scheduledEndHour;

  DailyTask(
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
    'assets/images/task1.png',
    'Brush teeth after breakfast',
    false,
    6,
    11,
  ),
  DailyTask(
    'assets/images/task3.png',
    'Brush teeth before sleep',
    false,
    19,
    23,
  ),
  DailyTask(
    'assets/images/task4.png',
    'Floss once a day',
    false,
    5,
    23,
  ),
];
