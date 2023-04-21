package com.hoot.question.dto;

import com.hoot.member.Member;
import com.hoot.member.MemberDto;
import com.hoot.question.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;


@Getter
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class QuestResponseDto {
	private Long questionId;
	private String title;
	private String content;
	private int viewCont;
	private LocalDateTime createdDate;
	private LocalDateTime updateDate;
	private Question.QuestionStatus questionStatus;
	private MemberDto.Response member;
}

