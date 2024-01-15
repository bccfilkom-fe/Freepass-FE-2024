import 'package:get/get.dart';
import 'package:urdentist/data/model/response/task/task_response.dart';
import 'package:urdentist/data/repository/daily_task.dart';
import 'package:urdentist/data/repository/repository.dart';

class TaskController extends GetxController {
  var profileId = 0;
  var date = "";

  RxList<TaskResponse> tasks = <TaskResponse>[].obs;
  RxList<DailyTask> dailyTasks = <DailyTask>[].obs;

  var repo = Repository();

  getTasks({
    required Function(List<TaskResponse>) onSuccess,
    required Function(String) onFailed,
  }) {
    repo.getTask(profileId, date, onSuccess: onSuccess, onFailed: onFailed);
  }

  completeTask({
    required taskId,
    required Function(String) onSuccess,
    required Function(String) onFailed,
  }) {
    repo.completeTask(profileId, taskId,
        onSuccess: onSuccess, onFailed: onFailed);
  }
}
