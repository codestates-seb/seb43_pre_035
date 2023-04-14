package com.hoot.answer;

import com.hoot.member.Member;
import com.hoot.question.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long answerId;

    public String content;

    public LocalDateTime createdDate = LocalDateTime.now();

    public LocalDateTime updateDate;

    @ManyToOne
    @JoinColumn(name = "member-id")
    public Member member;

    @ManyToOne
    @JoinColumn(name = "question-id")
    public Question question;
}
