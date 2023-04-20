package com.hoot.answer.controller;

import com.hoot.answer.dto.AnswerPatchDto;
import com.hoot.answer.dto.AnswerPostDto;
import com.hoot.answer.entity.Answer;
import com.hoot.answer.mapper.AnswerMapper;
import com.hoot.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@CrossOrigin
@Validated
@RestController
@RequestMapping("/answers")
public class AnswerController {
	private final AnswerService answerService;
	private final AnswerMapper mapper;

	public AnswerController(AnswerService answerService, AnswerMapper mapper) {
		this.answerService = answerService;
		this.mapper = mapper;
	}

	@PostMapping
	public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){
		Answer response
				= answerService.createdAnswer(mapper.answerPostToDtoToAnswer(answerPostDto));

		return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.CREATED);
	}
	@PatchMapping("/{answer-id}")
	public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive Long answerId,
                                    @RequestBody AnswerPatchDto answerPatchDto){

		answerPatchDto.setAnswerId(answerId);
		Answer response
				           = answerService.updateAnswer(mapper.answerPatchToDtoToAnswer(answerPatchDto));
		return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
	}
	@DeleteMapping("/{answer-id}")
	public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive Long answerId){
		answerService.deleteAnswer(answerId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
