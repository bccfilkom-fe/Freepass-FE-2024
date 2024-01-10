import 'package:urdentist/data/repository/repository.dart';
import 'package:get/get.dart';

class RegisterController extends GetxController {
  var fullName = "";
  var phoneNumber = "";
  var email = "";
  var password = "";
  var confirmPassword = "";

  var repo = Repository();

  var isLoading = false.obs;

  void register({
    required Function(String) onSuccess,
    required Function(String) onFailed,
  }) {
    isLoading(true);
    repo.register(fullName, phoneNumber, email, password, confirmPassword,
        onSuccess: (msg) {
      isLoading(false);
      onSuccess(msg);
    }, onFailed: (msg) {
      isLoading(false);
      onFailed(msg);
    });
  }
}
