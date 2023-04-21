package com.hoot.question.repository;

import com.hoot.member.Member;
import com.hoot.question.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository <Question, Long>{

	List<Question> findByMember(Member member);

	@Query(
			value = "SELECT q FROM Question q WHERE (q.title LIKE %:title% OR :title IS NULL) AND (q.content LIKE %:content% OR :content IS NULL)",
			countQuery = "SELECT COUNT(q.questionId) FROM Question q WHERE (q.title LIKE %:title% OR :title IS NULL) AND (q.content LIKE %:content% OR :content IS NULL)"
	)
	Page<Question> findAllSearch(String title, String content, Pageable pageable);
	Page<Question> findByQuestionStatusNot(Question.QuestionStatus questionDelete, Pageable pageable);

}


