package com.hoot.question;

import com.hoot.audit.Timestamped;
import com.hoot.member.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class Question extends Timestamped {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;
    @Column(nullable = false, length = 100)
    private String title;
    @Column(nullable = false, length = 200)
    private String content;
    @Column(nullable = false)
    private int viewCount;

    @ManyToOne
    @JoinColumn(name = "member-id")
    private Member member;

    public void addMember(Member member){
        this.member = member;
    }
    @Enumerated(EnumType.STRING)
    private QuestionStatus questionStatus;

    public enum QuestionStatus{
        QUESTION_REGISTRATION ("질문 등록 상태"),
        QUESTION_ANSWERED("답변 완료 상태"),
        QUESTION_DELETE("질문 삭제 상태");
        @Getter
        private String questDec;
        QuestionStatus(String questDec) {
            this.questDec = questDec;
        }
    }

    @Override
    public LocalDateTime getCreatedDate() {
        return super.getCreatedDate();
    }

    @Override
    public LocalDateTime getUpdateDate() {
        return super.getUpdateDate();
    }
}
