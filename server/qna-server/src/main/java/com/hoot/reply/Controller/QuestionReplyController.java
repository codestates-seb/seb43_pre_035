package com.hoot.reply.Controller;

import com.hoot.reply.Dto.QuestionReplyDto.QuestionReplyPatchDto;
import com.hoot.reply.Dto.QuestionReplyDto.QuestionReplyPostDto;
import com.hoot.reply.Entity.QuestionReply;
import com.hoot.reply.Mapper.QuestionReplyMapper;
import com.hoot.reply.Service.QuestionReplyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/question_replies")
public class QuestionReplyController {
    private final QuestionReplyService questionReplyService;
    private final QuestionReplyMapper mapper;

    public QuestionReplyController(QuestionReplyService questionReplyService, QuestionReplyMapper mapper) {
        this.questionReplyService = questionReplyService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity createQuestionReply(@Valid @RequestBody QuestionReplyPostDto questionReplyPostDto) {
        QuestionReply questionReply
                = questionReplyService.createQuestionReply(mapper.questionReplyPostDtoToQuestionReply(questionReplyPostDto));

        return new ResponseEntity<>(mapper.questionReplyToQuestionReplyResponseDto(questionReply),HttpStatus.CREATED);
    }

    @PatchMapping("/{question-reply-id}")
    public ResponseEntity updateQuestionReply(@PathVariable("question-reply-id") @Positive Long questionReplyId,
                                              @RequestBody QuestionReplyPatchDto questionReplyPatchDto) {
        QuestionReply questionReply
                = questionReplyService.updateQuestionReply(mapper.questionReplyPatchDtoToQuestionReply(questionReplyPatchDto));


        return new ResponseEntity<>(mapper.questionReplyToQuestionReplyResponseDto(questionReply) , HttpStatus.OK);
    }

    @DeleteMapping("/{question-reply-id}")
    public ResponseEntity deleteQuestionReply(@PathVariable("question-reply-id") @Positive Long questionReplyId) {
        questionReplyService.deleteQuestionReply(questionReplyId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
