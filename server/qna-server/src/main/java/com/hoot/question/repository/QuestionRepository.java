package com.hoot.question.repository;

import com.hoot.question.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository <Question, Long>{
	Optional<Question> findByTitle(String title);
}
