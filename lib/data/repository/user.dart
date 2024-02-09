import 'package:flutter/foundation.dart';
import 'package:urdentist/data/model/response/login/login_response.dart';

class UserManager extends ChangeNotifier {
  late User _currentUser;

  User get currentUser => _currentUser;

  void setCurrentUser(User user) {
    _currentUser = user;
    notifyListeners();
  }

  void setNameAndEmail(String name, String email) {
    _currentUser = User(
      ID: _currentUser.ID,
      FullName: name,
      NoPhone: _currentUser.NoPhone,
      EmailAddress: email,
    );
    notifyListeners();
  }

  String getFullName() {
    return _currentUser.FullName;
  }

  String getEmail() {
    return _currentUser.EmailAddress;
  }

  String? getNoPhone() {
    return _currentUser.NoPhone;
  }

  int? getID() {
    return _currentUser.ID;
  }

  static UserManager? _instance;

  static UserManager get instance {
    _instance ??= UserManager();
    return _instance!;
  }
}
