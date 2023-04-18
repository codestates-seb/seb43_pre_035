package com.hoot.question.service;

import com.hoot.member.Member;
import com.hoot.question.Question;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService {
	public Question createQuestion(Question question){
		Question createdQuest = question;
		return createdQuest;
	}
	public Question updateQuestion(Question question){
		Question updateQuest = question;
		return updateQuest;
	}

	public Question findQuestion(long questionId){
		Question question = new Question();
		question.setQuestionId(questionId);
		question.setTitle("제목입니다.");
		question.setContent("내용입니다.");
		question.setQuestionStatus(Question.QuestionStatus.QUESTION_REGISTRATION);
		return question;
	}

	public List<Question> findQuestions(){

		List<Question> questions = List.of(
				new Question(1L, "제목1", "내용1", 1, new Member(), Question.QuestionStatus.QUESTION_REGISTRATION),
				new Question(2L, "제목1", "내용2", 2, new Member(), Question.QuestionStatus.QUESTION_REGISTRATION)
		);
		return questions;
	}

	public void deleteQuestion(long questionId){

	}
}
