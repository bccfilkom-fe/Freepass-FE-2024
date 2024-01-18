import 'package:json_annotation/json_annotation.dart';

part 'question_request.g.dart';

@JsonSerializable()
class QuestionRequest {
  @JsonKey(name: 'Tag')
  String tag;

  @JsonKey(name: 'Question')
  String question;

  QuestionRequest({
    required this.tag,
    required this.question,
  });

  factory QuestionRequest.fromJson(Map<String, dynamic> json) =>
      _$QuestionRequestFromJson(json);

  Map<String, dynamic> toJson() => _$QuestionRequestToJson(this);
}
