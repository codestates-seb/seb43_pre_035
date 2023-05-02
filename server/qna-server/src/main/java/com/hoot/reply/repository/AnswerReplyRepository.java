package com.hoot.reply.repository;

import com.hoot.answer.entity.Answer;
import com.hoot.reply.entity.AnswerReply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerReplyRepository extends JpaRepository<AnswerReply, Long> {
    List<AnswerReply> findByAnswer(Answer answer);
}
