package com.hoot.question.service;

import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.member.*;
import com.hoot.question.Question;
import com.hoot.question.dto.PagingDto;
import com.hoot.question.dto.QuestResponseDto;
import com.hoot.question.repository.QuestionRepository;
import com.hoot.security.UserDetailsImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

	private final QuestionRepository questionRepository;
	private final MemberRepository memberRepository;
	private final MemberService memberService;

	public QuestionService(QuestionRepository questionRepository, MemberRepository memberRepository, MemberService memberService) {
		this.questionRepository = questionRepository;
		this.memberRepository = memberRepository;
		this.memberService = memberService;
	}

	public Question createQuestion(Question question, UserDetailsImpl user){
		Optional<Member> findUserName = memberRepository.findByEmail(user.getUsername());
		question.setMember(findUserName.get());
		return questionRepository.save(question);
	}
	public Question updateQuestion(UserDetailsImpl userDetails, Question question){
		Question findQuestion = findVerifiedQuestion(question.getQuestionId());

		memberService.verifyLogInMemberMatchesMember(userDetails.getMemberId(), findQuestion.getMember().getMemberId());

		Optional.ofNullable(question.getTitle())
				.ifPresent(title -> findQuestion.setTitle(title));
		Optional.ofNullable(question.getContent())
				.ifPresent(content -> findQuestion.setContent(content));
		Optional.ofNullable(question.getQuestionStatus())
				.ifPresent(questionStatus -> findQuestion.setQuestionStatus(questionStatus));
		findQuestion.setUpdateDate(LocalDateTime.now());
		return questionRepository.save(findQuestion);

	}

	// 조회수 기능 처리
	public Question questViewCounts(long questionId){
		Optional<Question> question = this.questionRepository.findById(questionId);
		if(question.isPresent()){
			Question question1 = question.get();
			question1.increaseViewCount();
			this.questionRepository.save(question1);
			return question1;
		}else {
			throw  new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND);
		}
	}
	//페이지 조회
	public Page<Question> searchQuestions(String title, String content, Pageable pageRequest) {
		Page<Question> questionPage = questionRepository.findAllSearch(title, content, pageRequest);

		return questionPage;
	}

	public Page<Question> getQuestions(int pageNumber, int pageSize){
		Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by("questionId").descending());
		Page<Question> questionPage = questionRepository.findByQuestionStatusNot(Question.QuestionStatus.QUESTION_DELETE, pageable);

		return questionPage;
	}

	public void deleteQuestion(UserDetailsImpl userDetails, long questionId){
		Question findQuestion = findVerifiedQuestion(questionId);

		memberService.verifyLogInMemberMatchesMember(userDetails.getMemberId(), findQuestion.getMember().getMemberId());

		findQuestion.setQuestionStatus(Question.QuestionStatus.QUESTION_DELETE);
		questionRepository.save(findQuestion);
	}

	//조회할려는 질문이 존재하는지 확인
	public Question findVerifiedQuestion(long questionId){
		Optional<Question> optionalQuestion = questionRepository.findById(questionId);

		Question findQuestion = optionalQuestion.orElseThrow(() ->
				                                                     new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
		return findQuestion;
	}



}
