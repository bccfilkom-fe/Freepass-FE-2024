class ExtraTask {
  final int id;
  final String image;
  final String description;
  bool status;

  ExtraTask(this.id, this.image, this.description, this.status);
}

List<ExtraTask> globalExtraTasks = [
  ExtraTask(2, 'assets/images/task2.png', 'Brush teeth for 2 minutes', false),
  ExtraTask(5, 'assets/images/task5.png', 'Use fluoride toothpaste', false),
];

class DailyTask {
  final int id;
  final String image;
  final String description;
  bool status;
  int scheduledStartHour;
  int scheduledEndHour;

  DailyTask(
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
    1,
    'assets/images/task1.png',
    'Brush teeth after breakfast',
    false,
    6,
    11,
  ),
  DailyTask(
    3,
    'assets/images/task3.png',
    'Brush teeth before sleep',
    false,
    19,
    23,
  ),
  DailyTask(
    4,
    'assets/images/task4.png',
    'Floss once a day',
    false,
    1,
    23,
  ),
];
