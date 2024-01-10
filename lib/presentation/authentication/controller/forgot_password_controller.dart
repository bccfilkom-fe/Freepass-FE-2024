import 'package:urdentist/data/repository/repository.dart';
import 'package:get/get.dart';

class ForgotPasswordController extends GetxController {
  var email = "".obs;

  var repo = Repository();

  var isLoading = false.obs;

  void forgot({
    required Function(String) onSuccess,
    required Function(String) onFailed,
  }) {
    isLoading(true);
    repo.forgot(email.value, onSuccess: (msg) {
      isLoading(false);
      onSuccess(msg);
    }, onFailed: (msg) {
      isLoading(false);
      onFailed(msg);
    });
  }

  void saveToken(String token, Function onSuccess) {
    repo.saveToken(token, onSuccess);
  }
}
