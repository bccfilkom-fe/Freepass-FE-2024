// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'verify_password_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

VerifyPassword _$VerifyPasswordFromJson(Map<String, dynamic> json) =>
    VerifyPassword(
      emailAddress: json['email_address'] as String,
      verificationCode: json['verification_code'] as String,
    );

Map<String, dynamic> _$VerifyPasswordToJson(VerifyPassword instance) =>
    <String, dynamic>{
      'email_address': instance.emailAddress,
      'verification_code': instance.verificationCode,
    };
