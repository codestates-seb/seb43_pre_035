package com.hoot.reply.repository;

import com.hoot.reply.entity.QuestionReply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionReplyRepository extends JpaRepository<QuestionReply, Long> {
}
