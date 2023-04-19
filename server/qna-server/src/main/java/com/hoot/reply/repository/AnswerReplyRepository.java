package com.hoot.reply.repository;

import com.hoot.reply.entity.AnswerReply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerReplyRepository extends JpaRepository<AnswerReply, Long> {
}
