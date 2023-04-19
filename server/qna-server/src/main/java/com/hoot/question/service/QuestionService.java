package com.hoot.question.service;

import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.question.Question;
import com.hoot.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

	private final QuestionRepository questionRepository;

	public QuestionService(QuestionRepository questionRepository) {
		this.questionRepository = questionRepository;
	}

	public Question createQuestion(Question question){
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

	/*페이징 처리
	public Page<Question> findQuestions(int page, int size){
		return questionRepository.findAll(PageRequest.of(page, size,
				Sort.by("questionId").descending()));
	}
		 */


	public List<Question> findQuestions(){
		return questionRepository.findAll();
	}

	public void deleteQuestion(long questionId){
		Question findQuestion = findVerifiedQuestion(questionId);
		findQuestion.setQuestionStatus(Question.QuestionStatus.QUESTION_DELETE);
		findQuestion.setUpdateDate(LocalDateTime.now());
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