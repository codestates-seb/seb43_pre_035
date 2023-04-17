package com.hoot.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class QuestPatchDto {
	private long questionId;
	private String title;
	private String content;

}
