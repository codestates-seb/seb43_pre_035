package com.hoot.reply.Controller;

import com.hoot.reply.Dto.AnswerReplyDto.AnswerReplyPatchDto;
import com.hoot.reply.Dto.AnswerReplyDto.AnswerReplyPostDto;
import com.hoot.reply.Entity.AnswerReply;
import com.hoot.reply.Mapper.AnswerReplyMapper;
import com.hoot.reply.Service.AnswerReplyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/answer_reply")
public class AnswerReplyController {
    private AnswerReplyService answerReplyService;
    private AnswerReplyMapper mapper;

    public AnswerReplyController(AnswerReplyService answerReplyService, AnswerReplyMapper mapper) {
        this.answerReplyService = answerReplyService;
        this.mapper = mapper;
    }

    @PostMapping
    private ResponseEntity createAnswerReply(@Valid @RequestBody AnswerReplyPostDto answerReplyPostDto) {
        AnswerReply answerReply
                = answerReplyService.createAnswerReply(mapper.answerReplyPostDtoToAnswerReply(answerReplyPostDto));

        return new ResponseEntity<>(mapper.answerReplyToAnswerReplyResponseDto(answerReply), HttpStatus.CREATED);
    }

    @PatchMapping("/{answer-reply-id}")
    private ResponseEntity updateAnswerReply(@PathVariable("answer-reply-id") @Positive long answerReplyId,
                                             @RequestBody AnswerReplyPatchDto answerReplyPatchDto) {
        AnswerReply answerReply
                = answerReplyService.updateAnswerReply(mapper.answerReplyPatchDtoToAnswerReply(answerReplyPatchDto));

        return new ResponseEntity<>(mapper.answerReplyToAnswerReplyResponseDto(answerReply), HttpStatus.OK);
    }

    @DeleteMapping("/{answer-reply-id}")
    private ResponseEntity deleteAnswerReply(@PathVariable("answer-reply-id") @Positive Long answerReplyId) {
        answerReplyService.deleteAnswerReply(answerReplyId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
