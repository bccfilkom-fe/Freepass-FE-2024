// import 'package:json_annotation/json_annotation.dart';

// part 'question_response.g.dart';

// @JsonSerializable()
// class QuestionItem {
//   @JsonKey(name: 'ID')
//   int id;

//   @JsonKey(name: 'CreatedAt')
//   DateTime createdAt;

//   @JsonKey(name: 'Tag')
//   String tag;

//   @JsonKey(name: 'Question')
//   String question;

//   @JsonKey(name: 'Answer')
//   String answer;

//   @JsonKey(name: 'AnsweredAt')
//   DateTime answeredAt;

//   @JsonKey(name: 'ProfileID')
//   int profileID;

//   @JsonKey(name: 'DentistID')
//   int dentistID;

//   QuestionItem({
//     required this.id,
//     required this.createdAt,
//     required this.tag,
//     required this.question,
//     required this.answer,
//     required this.answeredAt,
//     required this.profileID,
//     required this.dentistID,
//   });

//   factory QuestionItem.fromJson(Map<String, dynamic> json) =>
//       _$QuestionItemFromJson(json);

//   Map<String, dynamic> toJson() => _$QuestionItemToJson(this);
// }
