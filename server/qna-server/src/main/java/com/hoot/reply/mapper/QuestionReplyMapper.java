package com.hoot.reply.mapper;

import com.hoot.reply.dto.question_reply_dto.QuestionReplyPatchDto;
import com.hoot.reply.dto.question_reply_dto.QuestionReplyPostDto;
import com.hoot.reply.dto.question_reply_dto.QuestionReplyResponseDto;
import com.hoot.reply.entity.QuestionReply;
import org.springframework.stereotype.Component;

@Component
public class QuestionReplyMapper {

    public QuestionReply questionReplyPostDtoToQuestionReply(QuestionReplyPostDto questionReplyPostDto) {
        QuestionReply questionReply = new QuestionReply();

        questionReply.setContent(questionReplyPostDto.getContent());

        return questionReply;
    }

    public QuestionReply questionReplyPatchDtoToQuestionReply(QuestionReplyPatchDto questionReplyPatchDto) {
        QuestionReply questionReply = new QuestionReply();

        questionReply.setQuestionReplyId(questionReply.getQuestionReplyId());
        questionReply.setContent(questionReplyPatchDto.getContent());

        return questionReply;
    }

    public QuestionReplyResponseDto questionReplyToQuestionReplyResponseDto(QuestionReply questionReply) {
        QuestionReplyResponseDto questionReplyResponseDto = new QuestionReplyResponseDto();

        questionReplyResponseDto.setQuestionReplyId(questionReply.getQuestionReplyId());
        questionReplyResponseDto.setMember(questionReply.getMember());
        questionReplyResponseDto.setContent(questionReply.getContent());
        questionReplyResponseDto.setCreatedDate(questionReply.getCreatedDate());
        questionReplyResponseDto.setUpdateDate(questionReply.getUpdateDate());

        return questionReplyResponseDto;
    }
}
