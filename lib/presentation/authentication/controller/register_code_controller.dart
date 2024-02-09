import 'package:urdentist/data/repository/repository.dart';
import 'package:get/get.dart';

class RegisterCodeController extends GetxController {
  var code = "";

  var repo = Repository();

  var isLoading = false.obs;

  void verify({
    required Function(String) onSuccess,
    required Function(String) onFailed,
  }) {
    isLoading(true);
    repo.verify(code, onSuccess: (msg) {
      isLoading(false);
      onSuccess(msg);
    }, onFailed: (msg) {
      isLoading(false);
      onFailed(msg);
    });
  }
}
