package com.hoot.reply.dto.answer_reply_dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class AnswerReplyPostDto {

    @NotBlank(message = "내용을 입력해주세요.")
    private String content;
}
