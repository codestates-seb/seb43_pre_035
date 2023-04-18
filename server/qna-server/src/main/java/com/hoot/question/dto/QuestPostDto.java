package com.hoot.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
public class QuestPostDto {
	@NotBlank(message = "제목은 공백이 아니어야 합니다.")
	private String title;
	@NotBlank(message = "내용은 공백이 아니어야 합니다.")
	private String content;

}
