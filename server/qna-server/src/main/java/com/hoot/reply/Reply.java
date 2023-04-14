package com.hoot.reply;

import com.hoot.answer.Answer;
import com.hoot.member.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class Reply {
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
    @JoinColumn(name = "answer-id")
    public Answer answer;
}
