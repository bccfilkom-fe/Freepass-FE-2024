// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'register_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Register _$RegisterFromJson(Map<String, dynamic> json) => Register(
      fullName: json['FullName'] as String,
      phoneNumber: json['NoPhone'] as String,
      emailAddress: json['EmailAddress'] as String,
      password: json['Password'] as String,
      confirmPassword: json['ConfirmPassword'] as String,
    );

Map<String, dynamic> _$RegisterToJson(Register instance) => <String, dynamic>{
      'FullName': instance.fullName,
      'NoPhone': instance.phoneNumber,
      'EmailAddress': instance.emailAddress,
      'Password': instance.password,
      'ConfirmPassword': instance.confirmPassword,
    };
