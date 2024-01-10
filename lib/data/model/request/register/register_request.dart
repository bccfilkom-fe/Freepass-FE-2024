import 'package:json_annotation/json_annotation.dart';

part 'register_request.g.dart';

@JsonSerializable()
class Register {
  @JsonKey(name: 'FullName')
  String fullName;

  @JsonKey(name: 'NoPhone')
  String phoneNumber;

  @JsonKey(name: 'EmailAddress')
  String emailAddress;

  @JsonKey(name: 'Password')
  String password;

  @JsonKey(name: 'ConfirmPassword')
  String confirmPassword;

  Register({
    required this.fullName,
    required this.phoneNumber,
    required this.emailAddress,
    required this.password,
    required this.confirmPassword,
  });

  factory Register.fromJson(Map<String, dynamic> json) =>
      _$RegisterFromJson(json);
  Map<String, dynamic> toJson() => _$RegisterToJson(this);
}
