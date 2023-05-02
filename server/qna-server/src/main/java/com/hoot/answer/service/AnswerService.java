package com.hoot.answer.service;

import com.hoot.answer.entity.Answer;
import com.hoot.answer.repository.AnswerRepository;
import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.member.Member;
import com.hoot.member.MemberRepository;
import com.hoot.member.MemberService;
import com.hoot.question.Question;
import com.hoot.question.service.QuestionService;
import com.hoot.security.UserDetailsImpl;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
	private final AnswerRepository answerRepository;
	private final MemberRepository memberRepository;
	private final MemberService memberService;
	private final QuestionService questionService;

	public AnswerService(AnswerRepository answerRepository, MemberRepository memberRepository, MemberService memberService, QuestionService questionService) {
		this.answerRepository = answerRepository;
		this.memberRepository = memberRepository;
		this.memberService = memberService;
		this.questionService = questionService;
	}

	public Answer createdAnswer(UserDetailsImpl user, Long questionId, Answer answer){
		replaceAnswerToLogInMember(user, answer);

		Question findQuestion = questionService.findVerifiedQuestion(questionId);
		answer.setQuestion(findQuestion);

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

	public void adoptAnswer(UserDetailsImpl user, Long questionId, Long answerId) {
		// 해당 질문에 대하여
		Question findQuestion = questionService.findVerifiedQuestion(questionId);
		// 채택하는 사람은 질문을 올린 사람이어야한다 (채택 버튼을 누른 로그인 사용자 == 질문올린 사람)
		memberService.verifyLogInMemberMatchesMember(user.getMemberId(), findQuestion.getMember().getMemberId());

		// 채택이 완료 되지 않은 질문만
		// 채택을 진행한다
		if (!findQuestion.getQuestionStatus().equals(Question.QuestionStatus.QUESTION_ANSWERED)) {
			Answer findAnswer = findVerifiedAnswer(answerId);
			findAnswer.setSelection(true);
			findQuestion.setQuestionStatus(Question.QuestionStatus.QUESTION_ANSWERED);
			answerRepository.save(findAnswer);
		}
		else {
			throw new BusinessLogicException(ExceptionCode.CANNOT_ADOPT);
		}
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
