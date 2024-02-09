import 'package:json_annotation/json_annotation.dart';

part 'reset_password_request.g.dart';

@JsonSerializable()
class ResetPassword {
  String password;

  @JsonKey(name: 'confirm_password')
  String confirmPassword;

  ResetPassword({
    required this.password,
    required this.confirmPassword,
  });

  factory ResetPassword.fromJson(Map<String, dynamic> json) =>
      _$ResetPasswordFromJson(json);

  Map<String, dynamic> toJson() => _$ResetPasswordToJson(this);
}
