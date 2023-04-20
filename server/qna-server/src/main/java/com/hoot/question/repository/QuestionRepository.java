package com.hoot.question.repository;

import com.hoot.member.Member;
import com.hoot.question.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository <Question, Long>{
    List<Question> findByMember(Member member);
}
