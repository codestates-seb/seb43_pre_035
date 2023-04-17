package com.hoot.reply.Repository;

import com.hoot.reply.Entity.QuestionReply;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionReplyRepository extends JpaRepository<QuestionReply, Long> {
}
