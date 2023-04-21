package com.hoot.answer.mapper;

import com.hoot.answer.dto.AnswerPatchDto;
import com.hoot.answer.dto.AnswerPostDto;
import com.hoot.answer.dto.AnswerResponseDto;
import com.hoot.answer.entity.Answer;
import com.hoot.member.Member;
import com.hoot.member.MemberDto;
import com.hoot.member.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class AnswerMapper {
    private final MemberMapper mapper;

    public Answer answerPostToDtoToAnswer(AnswerPostDto answerPostDto) {
        Answer answer = new Answer();
        answer.setContent(answerPostDto.getContent());
        return answer;
    }

    public Answer answerPatchToDtoToAnswer(AnswerPatchDto answerPatchDto) {
        Answer answer = new Answer();

        answer.setAnswerId(answerPatchDto.getAnswerId());
        answer.setContent(answerPatchDto.getContent());

        return answer;
    }

    public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {

        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setMember(mapper.entityToResponse(answer.getMember()));
        answerResponseDto.setContent(answer.getContent());
        answerResponseDto.setCreatedDate(answer.getCreatedDate());
        answerResponseDto.setUpdateDate(answer.getUpdateDate());

        return answerResponseDto;
    }

    public List<AnswerResponseDto> answerListToAnswerResponseList(List<Answer> answerList) {
        List<AnswerResponseDto> map = answerList.stream().map(
                answer -> new AnswerResponseDto(
                        answer.getAnswerId(),
                        mapper.entityToResponse(answer.getMember()),
                        answer.getContent(),
                        answer.getCreatedDate(),
                        answer.getUpdateDate(),
                        answer.getSelection()
                )).collect(Collectors.toList());

        return map;
    }
}
