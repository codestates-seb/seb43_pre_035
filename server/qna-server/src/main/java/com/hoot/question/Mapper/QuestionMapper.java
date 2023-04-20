package com.hoot.question.Mapper;

import com.hoot.question.Question;
import com.hoot.question.dto.QuestPatchDto;
import com.hoot.question.dto.QuestPostDto;
import com.hoot.question.dto.QuestResponseDto;
import org.springframework.stereotype.Component;

@Component
public class QuestionMapper {
	public Question questPostDtoToQuestion(QuestPostDto questPostDto){
		Question question = new Question();

		question.setTitle(questPostDto.getTitle());
		question.setContent(questPostDto.getContent());

		return question;
	}
	public Question questPatchDtoToQuestion(QuestPatchDto questPatchDto){
		Question question = new Question();

		question.setQuestionId(questPatchDto.getQuestionId());
		question.setTitle(questPatchDto.getTitle());
		question.setContent(questPatchDto.getContent());

		return question;
	}
	public QuestResponseDto questionToResponseDto(Question question){
		QuestResponseDto questResponseDto = new QuestResponseDto();

		questResponseDto.setQuestionId(question.getQuestionId());
		questResponseDto.setTitle(question.getTitle());
		questResponseDto.setContent(question.getContent());
		questResponseDto.setCreatedDate(question.getCreatedDate());
		questResponseDto.setUpdateDate(question.getUpdateDate());
		questResponseDto.setQuestionStatus(question.getQuestionStatus());
		questResponseDto.setViewCont(question.getViewCount());
		questResponseDto.setMember(question.getMember());
		return questResponseDto;
	}

}
