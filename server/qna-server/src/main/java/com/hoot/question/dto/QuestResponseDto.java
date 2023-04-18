package com.hoot.question.dto;

import com.hoot.member.Member;
import com.hoot.question.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class QuestResponseDto {
	private Long questionId;
	private String title;
	private String content;
	private int viewCont;
	private Question.QuestionStatus questionStatus = Question.QuestionStatus.QUESTION_REGISTRATION;
	private Member member;
}

