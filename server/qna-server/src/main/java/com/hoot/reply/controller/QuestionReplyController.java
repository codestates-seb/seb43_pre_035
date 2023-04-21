package com.hoot.reply.controller;

import com.hoot.reply.dto.question_reply_dto.QuestionReplyPatchDto;
import com.hoot.reply.dto.question_reply_dto.QuestionReplyPostDto;
import com.hoot.reply.entity.QuestionReply;
import com.hoot.reply.mapper.QuestionReplyMapper;
import com.hoot.reply.service.QuestionReplyService;
import com.hoot.security.UserDetailsImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@CrossOrigin
@Validated
@RestController
@RequestMapping("/questions/{question-id}")
public class QuestionReplyController {
    private final QuestionReplyService questionReplyService;
    private final QuestionReplyMapper mapper;

    public QuestionReplyController(QuestionReplyService questionReplyService, QuestionReplyMapper mapper) {
        this.questionReplyService = questionReplyService;
        this.mapper = mapper;
    }

    @PostMapping("/question_replies")
    public ResponseEntity createQuestionReply(@AuthenticationPrincipal UserDetailsImpl user,
                                              @PathVariable("question-id") @Positive long questionId,
                                              @Valid @RequestBody QuestionReplyPostDto questionReplyPostDto) {
        QuestionReply questionReply
                = questionReplyService.createQuestionReply(user, questionId, mapper.questionReplyPostDtoToQuestionReply(questionReplyPostDto));

        return new ResponseEntity<>(mapper.questionReplyToQuestionReplyResponseDto(questionReply),HttpStatus.CREATED);
    }

    @PatchMapping("/question_replies/{question-reply-id}")
    public ResponseEntity updateQuestionReply(@AuthenticationPrincipal UserDetailsImpl user,
                                              @PathVariable("question-reply-id") @Positive long questionReplyId,
                                              @Valid @RequestBody QuestionReplyPatchDto questionReplyPatchDto) {

        questionReplyPatchDto.setQuestionReplyId(questionReplyId);

        QuestionReply questionReply
                = questionReplyService.updateQuestionReply(user, mapper.questionReplyPatchDtoToQuestionReply(questionReplyPatchDto));


        return new ResponseEntity<>(mapper.questionReplyToQuestionReplyResponseDto(questionReply), HttpStatus.OK);
    }

    @DeleteMapping("/question_replies/{question-reply-id}")
    public ResponseEntity deleteQuestionReply(@AuthenticationPrincipal UserDetailsImpl user,
                                              @PathVariable("question-reply-id") @Positive Long questionReplyId) {
        questionReplyService.deleteQuestionReply(user,questionReplyId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
