package com.hoot.reply.Dto.QuestionReplyDto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionReplyPatchDto {

    private Long questionReplyId;
    private String content;
}
