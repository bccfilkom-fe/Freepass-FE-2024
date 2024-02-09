// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'login_google_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

GoogleLoginResponse _$GoogleLoginResponseFromJson(Map<String, dynamic> json) =>
    GoogleLoginResponse(
      accessToken: json['accessToken'] as String,
      refreshToken: json['refreshToken'] as String,
      expiresIn: json['expiresIn'] as int,
      displayName: json['displayName'] as String,
      email: json['email'] as String,
    );

Map<String, dynamic> _$GoogleLoginResponseToJson(
        GoogleLoginResponse instance) =>
    <String, dynamic>{
      'accessToken': instance.accessToken,
      'refreshToken': instance.refreshToken,
      'expiresIn': instance.expiresIn,
      'displayName': instance.displayName,
      'email': instance.email,
    };
