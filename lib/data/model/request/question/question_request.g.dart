// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'question_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

QuestionRequest _$QuestionRequestFromJson(Map<String, dynamic> json) =>
    QuestionRequest(
      tag: json['Tag'] as String,
      question: json['Question'] as String,
    );

Map<String, dynamic> _$QuestionRequestToJson(QuestionRequest instance) =>
    <String, dynamic>{
      'Tag': instance.tag,
      'Question': instance.question,
    };
