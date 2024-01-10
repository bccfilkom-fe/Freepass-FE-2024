import 'package:dio/dio.dart';
import 'package:retrofit/http.dart';

import 'package:urdentist/data/model/request/forgot_password/forgot_password_request.dart';
import 'package:urdentist/data/model/request/login/login_request.dart';
import 'package:urdentist/data/model/request/register/register_request.dart';
import 'package:urdentist/data/model/request/reset_password/reset_password_request.dart';
import 'package:urdentist/data/model/request/verify/verify_request.dart';
import 'package:urdentist/data/model/request/verify/resend_verify_request.dart';
import 'package:urdentist/data/model/request/verify_password/verify_password_request.dart';

import 'package:urdentist/data/model/response/forgot_password/forgot_password_response.dart';
import 'package:urdentist/data/model/response/login/login_response.dart';
import 'package:urdentist/data/model/response/register/register_response.dart';
import 'package:urdentist/data/model/response/reset_password/reset_password_response.dart';
import 'package:urdentist/data/model/response/verify/verify_response.dart';
import 'package:urdentist/data/model/response/verify/resend_verify_response.dart';
import 'package:urdentist/data/model/response/verify_password/verify_password_response.dart';

part 'retrofit_client.g.dart';

@RestApi(baseUrl: "https://supple-hulling-408914.et.r.appspot.com")
abstract class RetrofitClient {
  factory RetrofitClient(Dio dio, {String baseUrl}) = _RetrofitClient;

  @POST("/login")
  Future<LoginResponse> login(
    @Body() LoginRequest request,
  );

  @POST("/register")
  Future<RegisterResponse> register(
    @Body() Register request,
  );

  @POST("/resend-verification")
  Future<ResendVerifyResponse> resend(
    @Body() ResendVerify request,
  );

  @POST("/verify")
  Future<VerifyResponse> verify(
    @Body() VerificationCode request,
  );

  @POST("/forgot-password")
  Future<ForgotPasswordResponse> forgot(
    @Body() ForgotPasswordRequest request,
  );

  @POST("/verify-token")
  Future<VerifyPasswordResponse> verifyPassword(
    @Body() VerifyPassword request,
  );

  @POST("/reset-password")
  Future<ResetPasswordResponse> resetPassword(
    @Body() ResetPassword request,
  );
}
