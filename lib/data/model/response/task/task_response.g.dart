// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'task_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

TaskResponse _$TaskResponseFromJson(Map<String, dynamic> json) => TaskResponse()
  ..bulan = json['Bulan'] as int
  ..nama = json['Nama'] as String
  ..profileId = json['Profile ID'] as int
  ..tahun = json['Tahun'] as int
  ..tanggal = json['Tanggal'] as int
  ..taskId = json['Task ID'] as int;

Map<String, dynamic> _$TaskResponseToJson(TaskResponse instance) =>
    <String, dynamic>{
      'Bulan': instance.bulan,
      'Nama': instance.nama,
      'Profile ID': instance.profileId,
      'Tahun': instance.tahun,
      'Tanggal': instance.tanggal,
      'Task ID': instance.taskId,
    };
