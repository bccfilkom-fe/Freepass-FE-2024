import 'package:urdentist/data/repository/repository.dart';
import 'package:get/get.dart';
// import 'package:flutter/material.dart';
// import 'package:google_sign_in/google_sign_in.dart';
// import 'package:firebase_auth/firebase_auth.dart';

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
