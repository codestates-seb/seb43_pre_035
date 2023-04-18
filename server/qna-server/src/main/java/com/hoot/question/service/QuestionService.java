package com.hoot.question.service;

import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.member.Member;
import com.hoot.question.Question;
import com.hoot.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

	private final QuestionRepository questionRepository;


	public QuestionService(QuestionRepository questionRepository) {
		this.questionRepository = questionRepository;
	}

	public Question createQuestion(Question question){
		verifyExistTitle(question.getTitle());
		return questionRepository.save(question);
	}
	public Question updateQuestion(Question question){

		Question findQuestion = findVerifiedQuestion(question.getQuestionId());

		Optional.ofNullable(question.getTitle())
				.ifPresent(title -> findQuestion.setTitle(title));
		Optional.ofNullable(question.getContent())
				.ifPresent(content -> findQuestion.setContent(content));

		Optional.ofNullable(question.getQuestionStatus())
				.ifPresent(questionStatus -> findQuestion.setQuestionStatus(questionStatus));
		findQuestion.setUpdateDate(LocalDateTime.now());
		return questionRepository.save(findQuestion);

	}

	public Question findQuestion(long questionId){
		return findVerifiedQuestion(questionId);
	}

//	public Page<Question> findQuestions(int page, int size){
//		return questionRepository.findAll(PageRequest.of(page, size, Sort.sort("questionId").descending()))
//	}

//	public List<Question> findQuestions(){
//
//		List<Question> questions = List.of(
//				new Question(1L, "제목1", "내용1", 1, new Member(), Question.QuestionStatus.QUESTION_REGISTRATION),
//				new Question(2L, "제목1", "내용2", 2, new Member(), Question.QuestionStatus.QUESTION_REGISTRATION)
//		);
//		return questions;
//	}

	public void deleteQuestion(long questionId){
		Question findQuestion = findVerifiedQuestion(questionId);

		findQuestion.setQuestionStatus(Question.QuestionStatus.QUESTION_DELETE);
		findQuestion.setUpdateDate(LocalDateTime.now());
		questionRepository.save(findQuestion);
	}

	public Question findVerifiedQuestion(long questionId){
		Optional<Question> optionalQuestion = questionRepository.findById(questionId);

		Question findQuestion = optionalQuestion.orElseThrow(() ->
                           new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
		return findQuestion;
	}

	private void verifyExistTitle(String title){
		Optional<Question> question = questionRepository.findByTitle(title);
		if(question.isPresent())
			throw  new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND_EXISTS);
	}
}
