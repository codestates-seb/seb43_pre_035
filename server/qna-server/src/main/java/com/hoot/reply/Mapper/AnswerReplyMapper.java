package com.hoot.reply.Mapper;

import com.hoot.reply.Dto.AnswerReplyDto.AnswerReplyPatchDto;
import com.hoot.reply.Dto.AnswerReplyDto.AnswerReplyPostDto;
import com.hoot.reply.Dto.AnswerReplyDto.AnswerReplyResponseDto;
import com.hoot.reply.Entity.AnswerReply;
import org.springframework.stereotype.Component;

@Component
public class AnswerReplyMapper {

    public AnswerReply answerReplyPostDtoToAnswerReply(AnswerReplyPostDto answerReplyPostDto) {
        AnswerReply answerReply = new AnswerReply();

        answerReply.setContent(answerReplyPostDto.getContent());

        return answerReply;
    }

    public AnswerReply answerReplyPatchDtoToAnswerReply(AnswerReplyPatchDto answerReplyPatchDto) {
        AnswerReply answerReply = new AnswerReply();

        answerReply.setAnswerReplyId(answerReplyPatchDto.getAnswerReplyId());
        answerReply.setContent(answerReplyPatchDto.getContent());

        return answerReply;
    }

    public AnswerReplyResponseDto answerReplyResponseDtoToAnswer(AnswerReply answerReply) {
        AnswerReplyResponseDto answerReplyResponseDto = new AnswerReplyResponseDto();

        answerReplyResponseDto.setAnswerReplyId(answerReply.getAnswerReplyId());
        answerReplyResponseDto.setMember(answerReply.getMember());
        answerReplyResponseDto.setContent(answerReply.getContent());
        answerReplyResponseDto.setCreatedDate(answerReply.getCreatedDate());
        answerReplyResponseDto.setUpdateDate(answerReply.getUpdateDate());

        return answerReplyResponseDto;
    }
}
