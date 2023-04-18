package com.hoot.reply.Repository;

import com.hoot.reply.Entity.QuestionReply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionReplyRepository extends JpaRepository<QuestionReply, Long> {
}
