package com.hoot.reply.Controller;

import com.hoot.reply.Dto.QuestionReplyDto.QuestionReplyPatchDto;
import com.hoot.reply.Dto.QuestionReplyDto.QuestionReplyPostDto;
import com.hoot.reply.Repository.QuestionReplyRepository;
import com.hoot.reply.Service.QuestionReplyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/")
public class QuestionReplyController {
    private final QuestionReplyService questionReplyService;
    private final QuestionReplyRepository questionReplyRepository;

    public QuestionReplyController(QuestionReplyService questionReplyService, QuestionReplyRepository questionReplyRepository) {
        this.questionReplyService = questionReplyService;
        this.questionReplyRepository = questionReplyRepository;
    }

    @PostMapping
    public ResponseEntity createQuestionReply(@RequestBody QuestionReplyPostDto questionReplyPostDto) {
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/{question-reply-id}")
    public ResponseEntity updateQuestionReply(@PathVariable("question-reply-id") @Positive Long questionReplyId,
                                              @RequestBody QuestionReplyPatchDto questionReplyPatchDto) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{question-reply-id}")
    public ResponseEntity deleteQuestionReply(@PathVariable("question-reply-id") @Positive Long questionReplyId) {
        questionReplyService.deleteQuestionReply(questionReplyId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
