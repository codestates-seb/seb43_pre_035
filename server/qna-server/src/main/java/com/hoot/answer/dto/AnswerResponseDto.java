package com.hoot.answer.dto;

import com.hoot.member.Member;
import com.hoot.member.MemberDto;
import com.hoot.reply.dto.answer_reply_dto.AnswerReplyResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerResponseDto {
	private Long questionId;
	private Long answerId;
	private MemberDto.Response member;
	private String content;
	private LocalDateTime createdDate;
	private LocalDateTime updateDate;
	private Boolean selection = false;
	private List<AnswerReplyResponseDto> answerReplies;
}
