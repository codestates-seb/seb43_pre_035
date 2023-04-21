package com.hoot.question.dto;


import com.hoot.member.Member;
import com.hoot.question.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
public class PagingDto {
	private long questionId;
	private String title;
	private String content;
	private int viewCount;
	private Member member;
	private LocalDateTime createdDate;
	private LocalDateTime updateDate;
	private Question.QuestionStatus questionStatus;
}