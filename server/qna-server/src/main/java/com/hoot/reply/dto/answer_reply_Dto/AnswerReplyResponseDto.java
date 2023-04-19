package com.hoot.reply.dto.answer_reply_Dto;

import com.hoot.member.Member;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerReplyResponseDto {

    private Long answerReplyId;
    private Member member;
    private String content;
    private LocalDateTime createdDate;
    private LocalDateTime updateDate;
}
