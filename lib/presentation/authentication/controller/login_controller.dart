// import 'package:firebase_auth/firebase_auth.dart';
// import 'package:firebase_core/firebase_core.dart';
// import 'package:urdentist/data/model/request/login/login_google_request.dart';
import 'package:urdentist/data/repository/repository.dart';
import 'package:get/get.dart';
import 'package:urdentist/data/repository/retrofit_client.dart';
// import 'package:urdentist/main.dart';

// import 'package:flutter/material.dart';
// import 'package:google_sign_in/google_sign_in.dart';

class LoginController extends GetxController {
  var email = "";
  var password = "";
  late RetrofitClient client;

  var repo = Repository();

  var isLoading = false.obs;
  var isLoadingGoogle = false.obs;

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

  // Future<void> googleLogin({
  //   required Function(String) onSuccess,
  //   required Function(String) onFailed,
  // }) async {
  //   try {
  //     isLoadingGoogle(true);
  //     await Firebase.initializeApp(); // Initialize Firebase
  //     GoogleSignIn _googleSignIn = GoogleSignIn(); // Initialize GoogleSignIn

  //     final GoogleSignInAccount? googleSignInAccount =
  //         await _googleSignIn.signIn();

  //     if (googleSignInAccount == null) {
  //       throw 'Google Sign-In canceled.';
  //     }

  //     final GoogleSignInAuthentication googleSignInAuthentication =
  //         await googleSignInAccount.authentication;

  //     final AuthCredential credential = GoogleAuthProvider.credential(
  //       accessToken: googleSignInAuthentication.accessToken,
  //       idToken: googleSignInAuthentication.idToken,
  //     );

  //     final UserCredential authResult =
  //         await FirebaseAuth.instance.signInWithCredential(credential);
  //     final User? user = authResult.user;

  //     if (user != null) {
  //       onSuccess(user.uid);
  //     } else {
  //       throw 'Google Sign-In failed.';
  //     }
  //   } catch (error) {
  //     print('Error during Google Sign-In: $error');
  //     onFailed(error.toString());
  //   } finally {
  //     isLoadingGoogle(false);
  //   }
  // }

  void saveToken(String token, Function onSuccess) {
    repo.saveToken(token, onSuccess);
  }
}

// final GoogleSignIn _googleSignIn = GoogleSignIn();
// final FirebaseAuth _auth = FirebaseAuth.instance;

// Future<UserCredential?> signInWithGoogle() async {
//   try {
//     final GoogleSignInAccount? googleSignInAccount =
//         await _googleSignIn.signIn();

//     final GoogleSignInAuthentication googleSignInAuthentication =
//         await googleSignInAccount!.authentication;

//     final AuthCredential credential = GoogleAuthProvider.credential(
//       accessToken: googleSignInAuthentication.accessToken,
//       idToken: googleSignInAuthentication.idToken,
//     );

//     return await _auth.signInWithCredential(credential);
//   } catch (error) {
//     print(error);
//     return null;
//   }
// }
