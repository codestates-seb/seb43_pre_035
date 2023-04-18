package com.hoot.reply.Service;

import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.reply.Entity.QuestionReply;
import com.hoot.reply.Repository.QuestionReplyRepository;
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
        QuestionReply findQuestionReply =
                findVerifiedQuestionReply(questionReply.getQuestionReplyId());

        Optional.ofNullable(questionReply.getContent())
                .ifPresent(content -> findQuestionReply.setContent(content));

//        Optional.ofNullable(questionReply.getQuestionReplyStatus())
//                .ifPresent(questionReplyStatus -> findQuestionReply.setQuestionReplyStatus(questionReplyStatus));

        return questionReplyRepository.save(findQuestionReply);
    }

    public void deleteQuestionReply(long questionReplyId) {
        QuestionReply questionReply = findVerifiedQuestionReply(questionReplyId);
        questionReplyRepository.delete(questionReply);

//        Optional.ofNullable(questionReply.getQuestionReplyStatus())
//                .ifPresent(questionReplyStatus -> questionReply.setQuestionReplyStatus(questionReplyStatus));
    }

    private QuestionReply findVerifiedQuestionReply(Long questionReplyId) {
        Optional<QuestionReply> optionalQuestionReply = questionReplyRepository.findById(questionReplyId);
        QuestionReply questionReply
                = optionalQuestionReply.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_REPLY_NOT_FOUND));
        return questionReply;
    }

}
