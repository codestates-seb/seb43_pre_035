package com.hoot.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class AnswerPostDto {
	@NotBlank(message = "내용을 입력해주세요.")
	private String content;
}
