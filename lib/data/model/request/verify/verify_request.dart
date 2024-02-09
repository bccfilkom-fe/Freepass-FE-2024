import 'package:json_annotation/json_annotation.dart';

part 'verify_request.g.dart';

@JsonSerializable()
class VerificationCode {
  String code;

  VerificationCode({
    required this.code,
  });

  factory VerificationCode.fromJson(Map<String, dynamic> json) =>
      _$VerificationCodeFromJson(json);

  Map<String, dynamic> toJson() => _$VerificationCodeToJson(this);
}
