import 'package:json_annotation/json_annotation.dart';

part 'create_profile_request.g.dart';

@JsonSerializable()
class CreateProfileRequest {
  @JsonKey(name: 'NamaLengkap')
  String namaLengkap;

  @JsonKey(name: 'TempatLahir')
  String tempatLahir;

  @JsonKey(name: 'tanggal_lahir')
  String tanggalLahir;

  @JsonKey(name: 'Alamat')
  String alamat;

  @JsonKey(name: 'Alergi')
  String alergi;

  CreateProfileRequest({
    required this.namaLengkap,
    required this.tempatLahir,
    required this.tanggalLahir,
    required this.alamat,
    required this.alergi,
  });

  factory CreateProfileRequest.fromJson(Map<String, dynamic> json) =>
      _$CreateProfileRequestFromJson(json);

  Map<String, dynamic> toJson() => _$CreateProfileRequestToJson(this);
}
