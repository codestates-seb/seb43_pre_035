package com.hoot.answer.service;

import com.hoot.answer.entity.Answer;
import com.hoot.answer.repository.AnswerRepository;
import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.question.Question;
import com.hoot.reply.entity.AnswerReply;
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

	@PersistenceContext
	private EntityManager entityManager;

	public AnswerService(AnswerRepository answerRepository) {
		this.answerRepository = answerRepository;
	}

	public Answer createdAnswer(Answer answer){

		return answerRepository.save(answer);
	}
	public Answer updateAnswer(Answer answer){
		Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

		Optional.ofNullable(answer.getContent())
				.ifPresent(content -> findAnswer.setContent(content));
		findAnswer.setUpdateDate(LocalDateTime.now());
		return answerRepository.save(findAnswer);
	}
	public void deleteAnswer(long answerId){
		Answer findAnswer = findVerifiedAnswer(answerId);
		answerRepository.delete(findAnswer);
	}

	//답변조회
//	public List<AnswerReply> getAnswerReliesByQuestionId(Long questionId) {
//		Question question = entityManager.find(Question.class, questionId);
//		List<Answer> answers = question.getAnswers();
//		List<AnswerReply> answerReplies = new ArrayList<>();
//		for (Answer answer : answers) {
//			answerReplies.addAll(answer.getAnswerReplies());
//		}
//		return answerReplies;
//	}





	private Answer findVerifiedAnswer(Long answerId){
		Optional<Answer> optionalAnswer =
				answerRepository.findById(answerId);
		Answer findAnswer = optionalAnswer.orElseThrow(() ->
             new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
		return findAnswer;
	}

}
