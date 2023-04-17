package com.hoot.question.dto;

import com.hoot.member.Member;
import com.hoot.question.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class QuestResponseDto {
	private long questionId;
	private String title;
	private String content;
	private int viewCont;
	private Question.QuestionStatus questionStatus = Question.QuestionStatus.QUESTION_REGISTRATION;
	private Member member;
}

