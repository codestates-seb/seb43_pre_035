package com.hoot.reply.mapper;

import com.hoot.reply.dto.answer_reply_Dto.AnswerReplyPatchDto;
import com.hoot.reply.dto.answer_reply_Dto.AnswerReplyPostDto;
import com.hoot.reply.dto.answer_reply_Dto.AnswerReplyResponseDto;
import com.hoot.reply.entity.AnswerReply;
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

    public AnswerReplyResponseDto answerReplyToAnswerReplyResponseDto(AnswerReply answerReply) {
        AnswerReplyResponseDto answerReplyResponseDto = new AnswerReplyResponseDto();

        answerReplyResponseDto.setAnswerReplyId(answerReply.getAnswerReplyId());
        answerReplyResponseDto.setMember(answerReply.getMember());
        answerReplyResponseDto.setContent(answerReply.getContent());
        answerReplyResponseDto.setCreatedDate(answerReply.getCreatedDate());
        answerReplyResponseDto.setUpdateDate(answerReply.getUpdateDate());

        return answerReplyResponseDto;
    }
}
