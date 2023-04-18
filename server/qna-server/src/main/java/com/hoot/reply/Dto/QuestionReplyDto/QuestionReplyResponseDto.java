package com.hoot.reply.Dto.QuestionReplyDto;

import com.hoot.member.Member;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionReplyResponseDto {
    private Long questionReplyId;
    private Member member;
    private String content;
    private LocalDateTime createdDate;
    private LocalDateTime updateDate;
}
