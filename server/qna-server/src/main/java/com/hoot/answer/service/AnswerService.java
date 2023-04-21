package com.hoot.answer.service;

import com.hoot.answer.entity.Answer;
import com.hoot.answer.repository.AnswerRepository;
import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.member.Member;
import com.hoot.member.MemberRepository;
import com.hoot.member.MemberService;
import com.hoot.question.Question;
import com.hoot.question.repository.QuestionRepository;
import com.hoot.question.service.QuestionService;
import com.hoot.reply.entity.AnswerReply;
import com.hoot.reply.entity.QuestionReply;
import com.hoot.security.UserDetailsImpl;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
	private final AnswerRepository answerRepository;
	private final MemberRepository memberRepository;
	private final MemberService memberService;
	private final QuestionRepository questionRepository;

	public AnswerService(AnswerRepository answerRepository, MemberRepository memberRepository, MemberService memberService, QuestionRepository questionRepository) {
		this.answerRepository = answerRepository;
		this.memberRepository = memberRepository;
		this.memberService = memberService;
		this.questionRepository = questionRepository;
	}

	public Answer createdAnswer(UserDetailsImpl user, Long questionId, Answer answer){
		replaceAnswerToLogInMember(user, answer);
		Question question = questionRepository.findById(questionId).orElseThrow(() ->
                      new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
		answer.setQuestion(question);

		return answerRepository.save(answer);
	}


	public Answer updateAnswer(UserDetailsImpl user, Answer answer){
		Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

		memberService.verifyLogInMemberMatchesMember(user.getMemberId(), findAnswer.getMember().getMemberId());

		Optional.ofNullable(answer.getContent())
						.ifPresent(content -> findAnswer.setContent(content));

		findAnswer.setUpdateDate(LocalDateTime.now());
		return answerRepository.save(findAnswer);
	}
	public void deleteAnswer(UserDetailsImpl user, long answerId){
		Answer findAnswer = findVerifiedAnswer(answerId);
		memberService.verifyLogInMemberMatchesMember(user.getMemberId(), findAnswer.getMember().getMemberId());
		answerRepository.delete(findAnswer);
	}


	private Answer findVerifiedAnswer(Long answerId){
		Optional<Answer> optionalAnswer =
				answerRepository.findById(answerId);
		Answer findAnswer = optionalAnswer.orElseThrow(() ->
             new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
		return findAnswer;
	}

	private void replaceAnswerToLogInMember(UserDetailsImpl user, Answer answer) {
		Optional<Member> optionalMember = memberRepository.findById(user.getMemberId());
		Member member = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
		answer.setMember(member);
	}

}
