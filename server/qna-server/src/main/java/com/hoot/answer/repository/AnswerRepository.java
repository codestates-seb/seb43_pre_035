package com.hoot.answer.repository;

import com.hoot.answer.entity.Answer;
import com.hoot.member.Member;
import com.hoot.question.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerRepository  extends JpaRepository<Answer,Long> {
    List<Answer> findByMember(Member member);

    List<Answer> findByQuestion(Question question);
}
