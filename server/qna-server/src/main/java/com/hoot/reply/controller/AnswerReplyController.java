package com.hoot.reply.controller;

import com.hoot.reply.dto.answer_reply_dto.AnswerReplyPatchDto;
import com.hoot.reply.dto.answer_reply_dto.AnswerReplyPostDto;
import com.hoot.reply.entity.AnswerReply;
import com.hoot.reply.mapper.AnswerReplyMapper;
import com.hoot.reply.service.AnswerReplyService;
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
@RequestMapping("/answers/{answer_id}")
public class AnswerReplyController {
    private AnswerReplyService answerReplyService;
    private AnswerReplyMapper mapper;

    public AnswerReplyController(AnswerReplyService answerReplyService, AnswerReplyMapper mapper) {
        this.answerReplyService = answerReplyService;
        this.mapper = mapper;
    }

    @PostMapping("/answer_replies")
    public ResponseEntity createAnswerReply(@AuthenticationPrincipal UserDetailsImpl user,
                                            @PathVariable("answer-id") @Positive long answerId,
                                            @Valid @RequestBody AnswerReplyPostDto answerReplyPostDto) {
        AnswerReply answerReply
                = answerReplyService.createAnswerReply(user,answerId, mapper.answerReplyPostDtoToAnswerReply(answerReplyPostDto));

        return new ResponseEntity<>(mapper.answerReplyToAnswerReplyResponseDto(answerReply), HttpStatus.CREATED);
    }

    @PatchMapping("/answer_replies/{answer-reply-id}")
    public ResponseEntity updateAnswerReply(@AuthenticationPrincipal UserDetailsImpl user,
                                            @PathVariable("answer-reply-id") @Positive long answerReplyId,
                                             @Valid @RequestBody AnswerReplyPatchDto answerReplyPatchDto) {

        answerReplyPatchDto.setAnswerReplyId(answerReplyId);

        AnswerReply answerReply
                = answerReplyService.updateAnswerReply(user, mapper.answerReplyPatchDtoToAnswerReply(answerReplyPatchDto));

        return new ResponseEntity<>(mapper.answerReplyToAnswerReplyResponseDto(answerReply), HttpStatus.OK);
    }

    @DeleteMapping("/answer_replies/{answer-reply-id}")
    public ResponseEntity deleteAnswerReply(@AuthenticationPrincipal UserDetailsImpl user,
                                            @PathVariable("answer-reply-id") @Positive Long answerReplyId) {
        answerReplyService.deleteAnswerReply(user, answerReplyId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
