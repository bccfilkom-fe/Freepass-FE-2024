import 'package:urdentist/data/repository/repository.dart';
import 'package:get/get.dart';

class ResetPasswordController extends GetxController {
  var password = "";
  var confirmPassword = "";

  var repo = Repository();

  var isLoading = false.obs;

  void resetPassword({
    required Function(String) onSuccess,
    required Function(String) onFailed,
  }) {
    isLoading(true);
    repo.resetPassword(password, confirmPassword, onSuccess: (msg) {
      isLoading(false);
      onSuccess(msg);
    }, onFailed: (msg) {
      isLoading(false);
      onFailed(msg);
    });
  }
}
