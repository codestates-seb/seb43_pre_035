package com.hoot.question.dto;

import com.hoot.answer.dto.AnswerResponseDto;
import com.hoot.member.Member;
import com.hoot.member.MemberDto;
import com.hoot.question.Question;
import com.hoot.reply.dto.question_reply_dto.QuestionReplyResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.List;


@Getter
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class QuestResponseDto {
	private Long questionId;
	private String title;
	private String content;
	private int viewCount;
	private LocalDateTime createdDate;
	private LocalDateTime updateDate;
	private Question.QuestionStatus questionStatus;
	private MemberDto.Response member;
	private List<AnswerResponseDto> answers;
	private List<QuestionReplyResponseDto> questionReplies;
}

