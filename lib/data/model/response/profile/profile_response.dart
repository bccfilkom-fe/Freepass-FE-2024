import 'package:json_annotation/json_annotation.dart';
import 'package:urdentist/data/model/response/login/login_response.dart';

part 'profile_response.g.dart';

@JsonSerializable()
class ProfileResponse {
  @JsonKey(name: 'ID')
  late int id;

  @JsonKey(name: 'NamaLengkap')
  late String namaLengkap;

  @JsonKey(name: 'TempatLahir')
  late String tempatLahir;

  @JsonKey(name: 'TanggalLahir')
  late DateTime tanggalLahir;

  @JsonKey(name: 'Alamat')
  late String alamat;

  @JsonKey(name: 'Alergi')
  late String alergi;

  @JsonKey(name: 'User')
  late User user;

  ProfileResponse();

  factory ProfileResponse.fromJson(Map<String, dynamic> json) =>
      _$ProfileResponseFromJson(json);

  Map<String, dynamic> toJson() => _$ProfileResponseToJson(this);
}
