import 'package:urdentist/data/repository/repository.dart';
import 'package:get/get.dart';

class LoginController extends GetxController {
  var email = "";
  var password = "";

  var repo = Repository();

  var isLoading = false.obs;

  void login({
    required Function(String) onSuccess,
    required Function(String) onFailed,
  }) {
    isLoading(true);
    repo.login(email, password, onSuccess: (msg) {
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
