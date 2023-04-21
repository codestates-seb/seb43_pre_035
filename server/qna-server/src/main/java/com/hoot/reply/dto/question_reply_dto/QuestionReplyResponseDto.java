package com.hoot.reply.dto.question_reply_dto;

import com.hoot.member.Member;
import com.hoot.member.MemberDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionReplyResponseDto {
    private Long questionReplyId;
    private MemberDto.Response member;
    private String content;
    private LocalDateTime createdDate;
    private LocalDateTime updateDate;
}
