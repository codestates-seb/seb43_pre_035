package com.hoot.reply.service;

import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.reply.entity.AnswerReply;
import com.hoot.reply.entity.QuestionReply;
import com.hoot.reply.repository.QuestionReplyRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionReplyService {
    private final QuestionReplyRepository questionReplyRepository;

    public QuestionReplyService(QuestionReplyRepository questionReplyRepository) {
        this.questionReplyRepository = questionReplyRepository;
    }

    public QuestionReply createQuestionReply(QuestionReply questionReply) {
        return questionReplyRepository.save(questionReply);
    }

    public QuestionReply updateQuestionReply(QuestionReply questionReply) {
        QuestionReply findQuestionReply
                = findVerifiedQuestionReply(questionReply.getQuestionReplyId());

        Optional.ofNullable(questionReply.getContent())
                .ifPresent(content -> findQuestionReply.setContent(content));

        return questionReplyRepository.save(findQuestionReply);
    }

    public void deleteQuestionReply(long questionReplyId) {
        QuestionReply questionReply = findVerifiedQuestionReply(questionReplyId);
        questionReplyRepository.delete(questionReply);
    }

    private QuestionReply findVerifiedQuestionReply(Long questionReplyId) {
        Optional<QuestionReply> optionalQuestionReply = questionReplyRepository.findById(questionReplyId);
        QuestionReply questionReply
                = optionalQuestionReply.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_REPLY_NOT_FOUND));
        return questionReply;
    }
}
