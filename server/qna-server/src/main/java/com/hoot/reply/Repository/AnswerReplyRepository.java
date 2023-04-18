package com.hoot.reply.Repository;

import com.hoot.reply.Entity.AnswerReply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerReplyRepository extends JpaRepository<AnswerReply, Long> {
}
