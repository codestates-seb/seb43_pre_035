package com.hoot.question;

import com.hoot.audit.Timestamped;
import com.hoot.member.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Question extends Timestamped {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;
    @Column(nullable = false, length = 100)
    private String title;
    @Column(nullable = false, length = 200)
    private String content;
    @Column(nullable = false, columnDefinition = "integer default 0")
    private int viewCount;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    public void addMember(Member member){
        this.member = member;
    }
    @Enumerated(EnumType.STRING)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_REGISTRATION;

    public enum QuestionStatus{
        QUESTION_REGISTRATION (1,"질문 등록 상태"),
        QUESTION_ANSWERED(2,"답변 완료 상태"),
        QUESTION_DELETE(3,"질문 삭제 상태");

        @Getter
        private int stepNum;
        private String questDec;
        QuestionStatus(int stepNum, String questDec) {
            this.stepNum = stepNum;
            this.questDec = questDec;
        }
    }
    public void increaseViewCount(){
        this.viewCount++;
    }

}
