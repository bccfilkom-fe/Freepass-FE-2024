import 'package:json_annotation/json_annotation.dart';

part 'login_google_response.g.dart';

@JsonSerializable()
class GoogleLoginResponse {
  @JsonKey(name: 'accessToken')
  String accessToken;

  @JsonKey(name: 'refreshToken')
  String refreshToken;

  @JsonKey(name: 'expiresIn')
  int expiresIn;

  @JsonKey(name: 'displayName')
  String displayName;

  @JsonKey(name: 'email')
  String email;

  GoogleLoginResponse({
    required this.accessToken,
    required this.refreshToken,
    required this.expiresIn,
    required this.displayName,
    required this.email,
  });

  factory GoogleLoginResponse.fromJson(Map<String, dynamic> json) =>
      _$GoogleLoginResponseFromJson(json);
  Map<String, dynamic> toJson() => _$GoogleLoginResponseToJson(this);
}
