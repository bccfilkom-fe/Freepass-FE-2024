// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'create_profile_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

CreateProfileRequest _$CreateProfileRequestFromJson(
        Map<String, dynamic> json) =>
    CreateProfileRequest(
      namaLengkap: json['NamaLengkap'] as String,
      tempatLahir: json['TempatLahir'] as String,
      tanggalLahir: json['tanggal_lahir'] as String,
      alamat: json['Alamat'] as String,
      alergi: json['Alergi'] as String,
    );

Map<String, dynamic> _$CreateProfileRequestToJson(
        CreateProfileRequest instance) =>
    <String, dynamic>{
      'NamaLengkap': instance.namaLengkap,
      'TempatLahir': instance.tempatLahir,
      'tanggal_lahir': instance.tanggalLahir,
      'Alamat': instance.alamat,
      'Alergi': instance.alergi,
    };
