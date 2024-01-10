import 'package:dio/dio.dart';
import 'package:flutter/cupertino.dart';
import 'package:urdentist/data/model/request/forgot_password/forgot_password_request.dart';

import 'package:urdentist/data/model/request/login/login_request.dart';
import 'package:urdentist/data/model/request/register/register_request.dart';
import 'package:urdentist/data/model/request/reset_password/reset_password_request.dart';
import 'package:urdentist/data/model/request/verify/verify_request.dart';
import 'package:urdentist/data/model/request/verify/resend_verify_request.dart';
import 'package:urdentist/data/model/request/verify_password/verify_password_request.dart';
import 'package:urdentist/data/repository/retrofit_client.dart';
import 'package:urdentist/data/repository/user.dart';

import '../../main.dart';

class Repository {
  late Dio dio;
  late RetrofitClient client;

  Repository() {
    dio = Dio();
    if (prefs != null) {
      dio.options.headers['Authorization'] =
          'Bearer ${prefs?.getString("TOKEN") ?? ""}';
    }
    client = RetrofitClient(dio);
  }

  void login(
    String email,
    String password, {
    required Function(String) onSuccess,
    required Function(String) onFailed,
  }) {
    client
        .login(
      LoginRequest(emailAddress: email, password: password),
    )
        .then((value) {
      if (value.status == "User logged in successfully!") {
        UserManager.instance.setCurrentUser(value.user);
        onSuccess(value.token);
      } else {
        onFailed(value.status);
      }
    }).catchError((err) {
      onFailed(err.toString());
    });
  }

  void register(
    String fullName,
    String phoneNumber,
    String email,
    String password,
    String confirmPassword, {
    required Function(String) onSuccess,
    required Function(String) onFailed,
  }) {
    client
        .register(Register(
            fullName: fullName,
            phoneNumber: phoneNumber,
            emailAddress: email,
            password: password,
            confirmPassword: confirmPassword))
        .then((value) {
      if (value.status ==
          "Verification email has been sent. Please verify your account within 10 minutes.") {
        onSuccess(value.status);
      } else {
        onFailed(value.status);
      }
    }).catchError((err) {
      onFailed(err.toString());
    });
  }

  void verify(
    String code, {
    required Function(String) onSuccess,
    required Function(String) onFailed,
  }) {
    client.verify(VerificationCode(code: code)).then((value) {
      if (value.status == "User verified successfully!") {
        onSuccess(value.status);
      } else {
        onFailed(value.status);
      }
    }).catchError((err) {
      onFailed(err.toString());
    });
  }

  void resend(
    String email, {
    required Function(String) onSuccess,
    required Function(String) onFailed,
  }) {
    client.resend(ResendVerify(emailAddress: email)).then((value) {
      if (value.status ==
          "Verification email has been resent. Please verify your account within 10 minutes.") {
        onSuccess(value.status);
      } else {
        onFailed(value.status);
      }
    }).catchError((err) {
      onFailed(err.toString());
    });
  }

  void forgot(
    String email, {
    required Function(String) onSuccess,
    required Function(String) onFailed,
  }) {
    client.forgot(ForgotPasswordRequest(emailAddress: email)).then((value) {
      if (value.status == "Verification email has been sent.") {
        onSuccess(value.status);
      } else {
        onFailed(value.status);
      }
    }).catchError((err) {
      onFailed(err.toString());
    });
  }

  void verifyPassword(
    String email,
    String code, {
    required Function(String) onSuccess,
    required Function(String) onFailed,
  }) {
    client
        .verifyPassword(
            VerifyPassword(emailAddress: email, verificationCode: code))
        .then((value) {
      if (value.status == "Token verified successfully!") {
        onSuccess(value.token);
      } else {
        onFailed(value.status);
      }
    }).catchError((err) {
      onFailed(err.toString());
    });
  }

  void resetPassword(
    String password,
    String confirmPassword, {
    required Function(String) onSuccess,
    required Function(String) onFailed,
  }) {
    client
        .resetPassword(
            ResetPassword(password: password, confirmPassword: confirmPassword))
        .then((value) {
      if (value.status == "Password reset successfully!") {
        removeToken();
        onSuccess(value.status);
      } else {
        onFailed(value.status);
      }
    }).catchError((err) {
      onFailed(err.toString());
    });
  }

  saveToken(String token, Function onSuccess) {
    if (prefs != null) {
      prefs?.setString("TOKEN", token).then((value) {
        onSuccess();
      }).catchError((e) {
        debugPrint(e.toString());
      });
    }
  }

  removeToken() {
    prefs?.remove("TOKEN").catchError((e) {
      debugPrint(e.toString());
      return false;
    });
  }

  getToken(Function(String) onSuccess) {
    if (prefs != null) {
      onSuccess(prefs?.getString("TOKEN") ?? "");
    }
  }
}
