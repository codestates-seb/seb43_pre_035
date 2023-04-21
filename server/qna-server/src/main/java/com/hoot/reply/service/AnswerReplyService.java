package com.hoot.reply.service;

import com.hoot.answer.entity.Answer;
import com.hoot.answer.repository.AnswerRepository;
import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.member.Member;
import com.hoot.member.MemberRepository;
import com.hoot.member.MemberService;
import com.hoot.reply.entity.AnswerReply;
import com.hoot.reply.repository.AnswerReplyRepository;
import com.hoot.security.UserDetailsImpl;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnswerReplyService {

    private final AnswerReplyRepository answerReplyRepository;
    private final MemberRepository memberRepository;
    private final MemberService memberService;
    private final AnswerRepository answerRepository;

    public AnswerReplyService(AnswerReplyRepository answerReplyRepository, MemberRepository memberRepository, MemberService memberService, AnswerRepository answerRepository) {
        this.answerReplyRepository = answerReplyRepository;
        this.memberRepository = memberRepository;
        this.memberService = memberService;
        this.answerRepository = answerRepository;
    }

    public AnswerReply createAnswerReply(UserDetailsImpl user, Long answerId, AnswerReply answerReply) {
        replaceAnswerReplyMemberToLogInMember(user, answerReply);
        replaceAnswer(answerReply, answerId);
        return answerReplyRepository.save(answerReply);
    }

    public AnswerReply updateAnswerReply(UserDetailsImpl user, AnswerReply answerReply) {
                AnswerReply findAnswerReply
                = findVerifiedAnswerReply(answerReply.getAnswerReplyId());

        memberService.verifyLogInMemberMatchesMember(user.getMemberId(), findAnswerReply.getMember().getMemberId());

        Optional.ofNullable(answerReply.getContent())
                .ifPresent(content -> findAnswerReply.setContent(content));

        return answerReplyRepository.save(findAnswerReply);
    }

    public void deleteAnswerReply(UserDetailsImpl user, long answerReplyId) {
        AnswerReply answerReply = findVerifiedAnswerReply(answerReplyId);

        memberService.verifyLogInMemberMatchesMember(user.getMemberId(), answerReply.getMember().getMemberId());

        answerReplyRepository.delete(answerReply);
    }

    private AnswerReply findVerifiedAnswerReply(Long answerReplyId) {
        Optional<AnswerReply> optionalAnswerReply = answerReplyRepository.findById(answerReplyId);
        AnswerReply answerReply
                = optionalAnswerReply.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_REPLY_NOT_FOUND));
        return answerReply;
    }

    private void replaceAnswerReplyMemberToLogInMember(UserDetailsImpl user, AnswerReply answerReply) {
        Optional<Member> optionalMember = memberRepository.findById(user.getMemberId());
        Member member = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        answerReply.setMember(member);
    }

    private void replaceAnswer(AnswerReply answerReply, Long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer answer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        answerReply.setAnswer(answer);
    }

}
