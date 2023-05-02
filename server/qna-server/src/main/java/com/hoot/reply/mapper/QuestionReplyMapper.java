package com.hoot.reply.mapper;

import com.hoot.answer.dto.AnswerResponseDto;
import com.hoot.member.MemberDto;
import com.hoot.member.MemberMapper;
import com.hoot.reply.dto.question_reply_dto.QuestionReplyPatchDto;
import com.hoot.reply.dto.question_reply_dto.QuestionReplyPostDto;
import com.hoot.reply.dto.question_reply_dto.QuestionReplyResponseDto;
import com.hoot.reply.entity.QuestionReply;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class QuestionReplyMapper {
    private final MemberMapper mapper;

    public QuestionReply questionReplyPostDtoToQuestionReply(QuestionReplyPostDto questionReplyPostDto) {
        QuestionReply questionReply = new QuestionReply();

        questionReply.setContent(questionReplyPostDto.getContent());

        return questionReply;
    }

    public QuestionReply questionReplyPatchDtoToQuestionReply(QuestionReplyPatchDto questionReplyPatchDto) {
        QuestionReply questionReply = new QuestionReply();

        questionReply.setQuestionReplyId(questionReplyPatchDto.getQuestionReplyId());
        questionReply.setContent(questionReplyPatchDto.getContent());

        return questionReply;
    }

    public QuestionReplyResponseDto questionReplyToQuestionReplyResponseDto(QuestionReply questionReply) {
        QuestionReplyResponseDto questionReplyResponseDto = new QuestionReplyResponseDto();

        questionReplyResponseDto.setQuestionReplyId(questionReply.getQuestionReplyId());
        questionReplyResponseDto.setMember(mapper.entityToResponse(questionReply.getMember()));
        questionReplyResponseDto.setContent(questionReply.getContent());
        questionReplyResponseDto.setCreatedDate(questionReply.getCreatedDate());
        questionReplyResponseDto.setUpdateDate(questionReply.getUpdateDate());

        return questionReplyResponseDto;
    }

    public List<QuestionReplyResponseDto> questionRepliesToQuestionRepliesResponse(List<QuestionReply> questionReplies) {
        List<QuestionReplyResponseDto> map = questionReplies.stream().map(
                questionReply -> new QuestionReplyResponseDto(
                        questionReply.getQuestionReplyId(),
                        mapper.entityToResponse(questionReply.getMember()),
                        questionReply.getContent(),
                        questionReply.getCreatedDate(),
                        questionReply.getUpdateDate()
                )).collect(Collectors.toList());

        return map;
    }
}
