package com.hoot.answer.entity;

import com.hoot.audit.Timestamped;
import com.hoot.member.Member;
import com.hoot.question.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Answer extends Timestamped {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(length = 100, nullable = false)
    private String content;

    @Column(nullable = false)
    private Boolean selection = false;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;
//
//    @OneToMany(mappedBy = "answer")
//    private List<AnswerReply> answerReplies;
}
