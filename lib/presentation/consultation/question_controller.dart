import 'package:urdentist/data/model/response/question/question_response.dart';
import 'package:urdentist/data/repository/repository.dart';
import 'package:get/get.dart';

class QuestionController extends GetxController {
  var repo = Repository();

  RxList<QuestionResponse> questions = <QuestionResponse>[].obs;
  var question = QuestionResponse().obs;
  int questionId = 0;

  getQuestionAll({
    required Function(List<QuestionResponse>) onSuccess,
    required Function(String) onFailed,
  }) {
    repo.getQuestionAll(onSuccess: (question) {
      onSuccess(question);
    }, onFailed: (msg) {
      onFailed(msg);
    });
  }

  getQuestionId({
    required questionId,
    required Function(QuestionResponse) onSuccess,
    required Function(String) onFailed,
  }) {
    repo.getQuestionId(questionId, onSuccess: onSuccess, onFailed: onFailed);
  }
}
