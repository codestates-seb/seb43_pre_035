package com.hoot.reply.Mapper;

import com.hoot.reply.Dto.QuestionReplyDto.QuestionReplyPatchDto;
import com.hoot.reply.Dto.QuestionReplyDto.QuestionReplyPostDto;
import com.hoot.reply.Dto.QuestionReplyDto.QuestionReplyResponseDto;
import com.hoot.reply.Entity.QuestionReply;
import org.springframework.stereotype.Component;

@Component
public class QuestionReplyMapper {

    public QuestionReply questionReplyPostToQuestionReply(QuestionReplyPostDto questionReplyPostDto) {
        QuestionReply questionReply = new QuestionReply();

        questionReply.setContent(questionReplyPostDto.getContent());

        return questionReply;
    }

    public QuestionReply questionReplyPatchToQuestionReply(QuestionReplyPatchDto questionReplyPatchDto) {
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
