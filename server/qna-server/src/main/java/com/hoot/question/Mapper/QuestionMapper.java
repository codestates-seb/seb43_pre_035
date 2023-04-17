package com.hoot.question.Mapper;

import com.hoot.question.Question;
import com.hoot.question.dto.QuestPatchDto;
import com.hoot.question.dto.QuestPostDto;
import com.hoot.question.dto.QuestResponseDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
	Question questPostDtoToQuestion(QuestPostDto questPostDto);
	Question questPatchDtoToQuestion(QuestPatchDto questPatchDto);
	QuestResponseDto questionToQuestResponseDto(Question question);
}
