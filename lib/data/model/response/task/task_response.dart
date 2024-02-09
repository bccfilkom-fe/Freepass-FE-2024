import 'package:json_annotation/json_annotation.dart';

part 'task_response.g.dart';

@JsonSerializable()
class TaskResponse {
  @JsonKey(name: 'Bulan')
  late int bulan;

  @JsonKey(name: 'Nama')
  late String nama;

  @JsonKey(name: 'Profile ID')
  late int profileId;

  @JsonKey(name: 'Tahun')
  late int tahun;

  @JsonKey(name: 'Tanggal')
  late int tanggal;

  @JsonKey(name: 'Task ID')
  late int taskId;

  TaskResponse();

  factory TaskResponse.fromJson(Map<String, dynamic> json) =>
      _$TaskResponseFromJson(json);

  Map<String, dynamic> toJson() => _$TaskResponseToJson(this);
}
