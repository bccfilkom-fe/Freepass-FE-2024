import 'package:json_annotation/json_annotation.dart';

part 'resend_verify_response.g.dart';

@JsonSerializable()
class ResendVerifyResponse {
  String status;

  ResendVerifyResponse({
    required this.status,
  });

  factory ResendVerifyResponse.fromJson(Map<String, dynamic> json) =>
      _$ResendVerifyResponseFromJson(json);

  Map<String, dynamic> toJson() => _$ResendVerifyResponseToJson(this);
}
