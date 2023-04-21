package com.hoot.reply.service;

import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.member.Member;
import com.hoot.member.MemberRepository;
import com.hoot.member.MemberService;
import com.hoot.question.Question;
import com.hoot.question.repository.QuestionRepository;
import com.hoot.reply.entity.QuestionReply;
import com.hoot.reply.repository.QuestionReplyRepository;
import com.hoot.security.UserDetailsImpl;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionReplyService {
    private final QuestionReplyRepository questionReplyRepository;
    private final MemberRepository memberRepository;
    private final MemberService memberService;
    private final QuestionRepository questionRepository;

    public QuestionReplyService(QuestionReplyRepository questionReplyRepository, MemberRepository memberRepository, MemberService memberService, QuestionRepository questionRepository) {
        this.questionReplyRepository = questionReplyRepository;
        this.memberRepository = memberRepository;
        this.memberService = memberService;
        this.questionRepository = questionRepository;
    }

    public QuestionReply createQuestionReply(UserDetailsImpl user,Long questionId, QuestionReply questionReply) {
        replaceQuestionReplyMemberToLogInMember(user, questionReply);
        replaceQuestion(questionReply,questionId);
        return questionReplyRepository.save(questionReply);
    }



    public QuestionReply updateQuestionReply(UserDetailsImpl user,QuestionReply questionReply) {
        QuestionReply findQuestionReply
                = findVerifiedQuestionReply(questionReply.getQuestionReplyId());

        memberService.verifyLogInMemberMatchesMember(user.getMemberId(), findQuestionReply.getMember().getMemberId());

        Optional.ofNullable(questionReply.getContent())
                .ifPresent(content -> findQuestionReply.setContent(content));

        return questionReplyRepository.save(findQuestionReply);
    }

    public void deleteQuestionReply(UserDetailsImpl user,long questionReplyId) {
        QuestionReply questionReply = findVerifiedQuestionReply(questionReplyId);

        memberService.verifyLogInMemberMatchesMember(user.getMemberId(), questionReply.getMember().getMemberId());

        questionReplyRepository.delete(questionReply);
    }


    private QuestionReply findVerifiedQuestionReply(Long questionReplyId) {
        Optional<QuestionReply> optionalQuestionReply = questionReplyRepository.findById(questionReplyId);
        QuestionReply questionReply
                = optionalQuestionReply.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_REPLY_NOT_FOUND));
        return questionReply;
    }

    private void replaceQuestionReplyMemberToLogInMember(UserDetailsImpl user, QuestionReply questionReply) {
        Optional<Member> optionalMember = memberRepository.findById(user.getMemberId());
        Member member = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        questionReply.setMember(member);
    }

    private void replaceQuestion(QuestionReply questionReply,Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question question = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        questionReply.setQuestion(question);
    }

}
