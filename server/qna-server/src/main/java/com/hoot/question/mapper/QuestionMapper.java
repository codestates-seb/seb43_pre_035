package com.hoot.question.mapper;

import com.hoot.member.MemberDto;
import com.hoot.member.MemberMapper;
import com.hoot.question.Question;
import com.hoot.question.dto.QuestPatchDto;
import com.hoot.question.dto.QuestPostDto;
import com.hoot.question.dto.QuestResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class QuestionMapper {
	private final MemberMapper mapper;

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
		questResponseDto.setMember(mapper.entityToResponse(question.getMember()));
		return questResponseDto;
	}

	public Page<QuestResponseDto> questPageToQuestResponsePage(Page<Question> questionPage) {
		Page<QuestResponseDto> map =
				questionPage.map(question -> new QuestResponseDto(
						question.getQuestionId(),
						question.getTitle(),
						question.getContent(),
						question.getViewCount(),
						question.getCreatedDate(),
						question.getUpdateDate(),
						question.getQuestionStatus(),
						mapper.entityToResponse(question.getMember())));

		return map;
	}
}
