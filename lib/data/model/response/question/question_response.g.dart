// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'question_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

QuestionResponse _$QuestionResponseFromJson(Map<String, dynamic> json) =>
    QuestionResponse()
      ..id = json['ID'] as int
      ..createdAt = DateTime.parse(json['CreatedAt'] as String)
      ..tag = json['Tag'] as String
      ..question = json['Question'] as String
      ..answer = json['Answer'] as String?
      ..answeredAt = json['AnsweredAt'] == null
          ? null
          : DateTime.parse(json['AnsweredAt'] as String)
      ..name = json['NamaLengkap'] as String
      ..dentistID = json['DentistID'] as int?;

Map<String, dynamic> _$QuestionResponseToJson(QuestionResponse instance) =>
    <String, dynamic>{
      'ID': instance.id,
      'CreatedAt': instance.createdAt.toIso8601String(),
      'Tag': instance.tag,
      'Question': instance.question,
      'Answer': instance.answer,
      'AnsweredAt': instance.answeredAt?.toIso8601String(),
      'NamaLengkap': instance.name,
      'DentistID': instance.dentistID,
    };
