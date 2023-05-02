package com.hoot.reply.dto.answer_reply_dto;

import com.hoot.member.Member;
import com.hoot.member.MemberDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerReplyResponseDto {

    private Long answerReplyId;
    private MemberDto.Response member;
    private String content;
    private LocalDateTime createdDate;
    private LocalDateTime updateDate;
}
