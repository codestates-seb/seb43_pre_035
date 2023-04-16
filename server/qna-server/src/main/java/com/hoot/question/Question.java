package com.hoot.question;

import com.hoot.audit.Timestamped;
import com.hoot.member.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Question extends Timestamped {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long questionId;

    public String title;

    public String content;

    public int viewCount;

    @ManyToOne
    @JoinColumn(name = "member-id")
    public Member member;

    // status enum으로
}
