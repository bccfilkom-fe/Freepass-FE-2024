import 'package:json_annotation/json_annotation.dart';

part 'resend_verify_request.g.dart';

@JsonSerializable()
class ResendVerify {
  @JsonKey(name: 'email_address')
  String emailAddress;

  ResendVerify({
    required this.emailAddress,
  });

  factory ResendVerify.fromJson(Map<String, dynamic> json) =>
      _$ResendVerifyFromJson(json);

  Map<String, dynamic> toJson() => _$ResendVerifyToJson(this);
}
