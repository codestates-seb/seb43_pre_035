package com.hoot.reply;

import com.hoot.answer.Answer;
import com.hoot.audit.Timestamped;
import com.hoot.member.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Reply extends Timestamped {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long answerId;

    public String content;

    @ManyToOne
    @JoinColumn(name = "member-id")
    public Member member;

    @ManyToOne
    @JoinColumn(name = "answer-id")
    public Answer answer;
}
