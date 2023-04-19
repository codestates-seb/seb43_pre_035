package com.hoot.answer.dto;

import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.NotBlank;

@Setter
@Getter
public class AnswerPatchDto {
	private Long answerId;
	@NotBlank(message = "내용을 입력해주세요.")
	private String content;
}

