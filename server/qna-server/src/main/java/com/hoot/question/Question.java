package com.hoot.question;

import com.hoot.member.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long questionId;

    public String title;

    public String content;

    public int viewCount;

    public LocalDateTime createdDate = LocalDateTime.now();

    public LocalDateTime updateDate;

    @ManyToOne
    @JoinColumn(name = "member-id")
    public Member member;

    // status enum으로
}
