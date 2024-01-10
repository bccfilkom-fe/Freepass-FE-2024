import 'package:urdentist/data/repository/repository.dart';
import 'package:get/get.dart';

class ForgotPassCodeController extends GetxController {
  var code = "";
  var email = "";
  var repo = Repository();

  var isLoading = false.obs;

  void verifyPassword({
    required Function(String) onSuccess,
    required Function(String) onFailed,
  }) {
    isLoading(true);
    repo.verifyPassword(email, code, onSuccess: (msg) {
      isLoading(false);
      onSuccess(msg);
    }, onFailed: (msg) {
      isLoading(false);
      onFailed(msg);
    });

    void saveToken(String token, Function onSuccess) {
      repo.saveToken(token, onSuccess);
    }
  }

  void saveToken(String token, Function onSuccess) {
    repo.saveToken(token, onSuccess);
  }
}
