package com.hoot.reply.Entity;

import com.hoot.answer.Answer;
import com.hoot.audit.Timestamped;
import com.hoot.member.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class AnswerReply extends Timestamped {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerReplyId;

    @Column(length = 100, nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;
}
