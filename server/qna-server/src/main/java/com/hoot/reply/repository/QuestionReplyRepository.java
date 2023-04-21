package com.hoot.reply.repository;

import com.hoot.question.Question;
import com.hoot.reply.entity.QuestionReply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionReplyRepository extends JpaRepository<QuestionReply, Long> {
    List<QuestionReply> findByQuestion(Question question);
}
