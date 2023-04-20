package com.hoot.reply.service;

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

    public AnswerReplyService(AnswerReplyRepository answerReplyRepository, MemberRepository memberRepository, MemberService memberService) {
        this.answerReplyRepository = answerReplyRepository;
        this.memberRepository = memberRepository;
        this.memberService = memberService;
    }

    public AnswerReply createAnswerReply(UserDetailsImpl user, AnswerReply answerReply) {
        replaceAnswerReplyMemberToLogInMember(user, answerReply);
        return answerReplyRepository.save(answerReply);
    }

    public AnswerReply updateAnswerReply(UserDetailsImpl user, AnswerReply answerReply) {
        memberService.verifyLogInMemberMatchesMember(user.getMemberId(), answerReply.getMember().getMemberId());

        AnswerReply findAnswerReply
                = findVerifiedAnswerReply(answerReply.getAnswerReplyId());

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

}
