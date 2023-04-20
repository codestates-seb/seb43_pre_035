package com.hoot.question.repository;

import com.hoot.member.Member;
import com.hoot.question.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository <Question, Long>{
<<<<<<< HEAD
	List<Question> findByTitleContaining(String keyword);
=======
    List<Question> findByMember(Member member);
>>>>>>> 357bd9b9ee82137716f38445c1c30fd37db82dd3
}
