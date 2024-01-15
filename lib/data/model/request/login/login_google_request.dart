import 'package:json_annotation/json_annotation.dart';

part 'login_google_request.g.dart';

@JsonSerializable()
class GoogleLoginRequest {
  @JsonKey(name: 'idToken')
  String idToken; // Google ID Token

  GoogleLoginRequest({
    required this.idToken,
  });

  factory GoogleLoginRequest.fromJson(Map<String, dynamic> json) =>
      _$GoogleLoginRequestFromJson(json);
  Map<String, dynamic> toJson() => _$GoogleLoginRequestToJson(this);
}
