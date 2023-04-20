package com.hoot.reply.service;

import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.member.Member;
import com.hoot.member.MemberRepository;
import com.hoot.member.MemberService;
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

    public QuestionReplyService(QuestionReplyRepository questionReplyRepository, MemberRepository memberRepository, MemberService memberService) {
        this.questionReplyRepository = questionReplyRepository;
        this.memberRepository = memberRepository;
        this.memberService = memberService;
    }

    public QuestionReply createQuestionReply(UserDetailsImpl user, QuestionReply questionReply) {
        replaceQuestionReplyMemberToLogInMember(user, questionReply);
        return questionReplyRepository.save(questionReply);
    }



    public QuestionReply updateQuestionReply(UserDetailsImpl user,QuestionReply questionReply) {
        memberService.verifyLogInMemberMatchesMember(user.getMemberId(), questionReply.getMember().getMemberId());

        QuestionReply findQuestionReply
                = findVerifiedQuestionReply(questionReply.getQuestionReplyId());

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

//    private void verifyLogInMemberMatchQuestionReplyMember(UserDetailsImpl user, QuestionReply questionReply) {
//        Optional<Member> optionalUserMember = memberRepository.findById(user.getMemberId());
//        Optional<Member> optionalFindMember = memberRepository.findById(questionReply.getMember().getMemberId());
//        Member userMember = optionalUserMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
//        Member findMember = optionalFindMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
//        if (!findMember.equals(userMember)) throw new RuntimeException("자신의 댓글만 수정 및 삭제할 수 있습니다.");
//    }
}
