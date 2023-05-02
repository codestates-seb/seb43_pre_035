package com.hoot.reply.dto.question_reply_dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionReplyPatchDto {

    private Long questionReplyId;
    private String content;
}
