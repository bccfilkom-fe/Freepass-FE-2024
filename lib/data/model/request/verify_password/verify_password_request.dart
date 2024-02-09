import 'package:json_annotation/json_annotation.dart';

part 'verify_password_request.g.dart';

@JsonSerializable()
class VerifyPassword {
  @JsonKey(name: 'email_address')
  String emailAddress;

  @JsonKey(name: 'verification_code')
  String verificationCode;

  VerifyPassword({
    required this.emailAddress,
    required this.verificationCode,
  });

  factory VerifyPassword.fromJson(Map<String, dynamic> json) =>
      _$VerifyPasswordFromJson(json);

  Map<String, dynamic> toJson() => _$VerifyPasswordToJson(this);
}
