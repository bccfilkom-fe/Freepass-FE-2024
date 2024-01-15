// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'profile_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ProfileResponse _$ProfileResponseFromJson(Map<String, dynamic> json) =>
    ProfileResponse()
      ..id = json['ID'] as int
      ..namaLengkap = json['NamaLengkap'] as String
      ..tempatLahir = json['TempatLahir'] as String
      ..tanggalLahir = DateTime.parse(json['TanggalLahir'] as String)
      ..alamat = json['Alamat'] as String
      ..alergi = json['Alergi'] as String
      ..user = User.fromJson(json['User'] as Map<String, dynamic>);

Map<String, dynamic> _$ProfileResponseToJson(ProfileResponse instance) =>
    <String, dynamic>{
      'ID': instance.id,
      'NamaLengkap': instance.namaLengkap,
      'TempatLahir': instance.tempatLahir,
      'TanggalLahir': instance.tanggalLahir.toIso8601String(),
      'Alamat': instance.alamat,
      'Alergi': instance.alergi,
      'User': instance.user,
    };
