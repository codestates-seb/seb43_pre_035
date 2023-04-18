package com.hoot.answer;

import com.hoot.audit.Timestamped;
import com.hoot.member.Member;
import com.hoot.question.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Answer extends Timestamped {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long answerId;

    public String content;

    @ManyToOne
    @JoinColumn(name = "member_id")
    public Member member;

    @ManyToOne
    @JoinColumn(name = "question_id")
    public Question question;
}
