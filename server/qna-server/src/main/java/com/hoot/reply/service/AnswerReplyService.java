package com.hoot.reply.service;

import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.reply.entity.AnswerReply;
import com.hoot.reply.repository.AnswerReplyRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnswerReplyService {

    private final AnswerReplyRepository answerReplyRepository;

    public AnswerReplyService(AnswerReplyRepository answerReplyRepository) {
        this.answerReplyRepository = answerReplyRepository;
    }

    public AnswerReply createAnswerReply(AnswerReply answerReply) {
        return answerReplyRepository.save(answerReply);
    }

    public AnswerReply updateAnswerReply(AnswerReply answerReply) {
        AnswerReply findAnswerReply
                = findVerifiedAnswerReply(answerReply.getAnswerReplyId());

        Optional.ofNullable(answerReply.getContent())
                .ifPresent(content -> findAnswerReply.setContent(content));

        return answerReplyRepository.save(findAnswerReply);
    }

    public void deleteAnswerReply(Long answerReplyId) {
        AnswerReply answerReply = findVerifiedAnswerReply(answerReplyId);
        answerReplyRepository.delete(answerReply);
    }

    private AnswerReply findVerifiedAnswerReply(Long answerReplyId) {
        Optional<AnswerReply> optionalAnswerReply = answerReplyRepository.findById(answerReplyId);
        AnswerReply answerReply
                = optionalAnswerReply.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_REPLY_NOT_FOUND));
        return answerReply;
    }
}
