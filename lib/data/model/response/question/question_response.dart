import 'package:json_annotation/json_annotation.dart';

part 'question_response.g.dart';

@JsonSerializable()
class QuestionResponse {
  @JsonKey(name: 'ID')
  late int id;

  @JsonKey(name: 'CreatedAt')
  late DateTime createdAt;

  @JsonKey(name: 'Tag')
  late String tag;

  @JsonKey(name: 'Question')
  late String question;

  @JsonKey(name: 'Answer')
  late String? answer;

  @JsonKey(name: 'AnsweredAt')
  late DateTime? answeredAt;

  @JsonKey(name: 'NamaLengkap')
  late String name;

  @JsonKey(name: 'DentistID')
  late int? dentistID;

  QuestionResponse();

  factory QuestionResponse.fromJson(Map<String, dynamic> json) =>
      _$QuestionResponseFromJson(json);

  Map<String, dynamic> toJson() => _$QuestionResponseToJson(this);
}
