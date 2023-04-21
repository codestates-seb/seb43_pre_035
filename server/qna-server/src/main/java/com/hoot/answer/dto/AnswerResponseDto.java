package com.hoot.answer.dto;

import com.hoot.member.Member;
import com.hoot.member.MemberDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerResponseDto {
	private Long answerId;
	private MemberDto.Response member;
	private String content;
	private LocalDateTime createdDate;
	private LocalDateTime updateDate;
}
