package com.hoot.answer.controller;

import com.hoot.answer.dto.AnswerPatchDto;
import com.hoot.answer.dto.AnswerPostDto;
import com.hoot.answer.dto.AnswerResponseDto;
import com.hoot.answer.entity.Answer;
import com.hoot.answer.mapper.AnswerMapper;
import com.hoot.answer.service.AnswerService;
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
@RequestMapping("/questions")
public class AnswerController {
	private final AnswerService answerService;
	private final AnswerMapper mapper;

	public AnswerController(AnswerService answerService, AnswerMapper mapper) {
		this.answerService = answerService;
		this.mapper = mapper;
	}

	@PostMapping("/{question-id}/answers")
	public ResponseEntity<AnswerResponseDto> postAnswer(@AuthenticationPrincipal UserDetailsImpl user,
			@PathVariable("question-id")@Positive Long questionId,
	                                 @Valid @RequestBody AnswerPostDto answerPostDto){
		Answer response = answerService.createdAnswer(user, questionId, mapper.answerPostToDtoToAnswer(answerPostDto));
		return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.CREATED);
	}

	@PatchMapping("/{question-id}/answers/{answer-id}")
	public ResponseEntity patchAnswer(@AuthenticationPrincipal UserDetailsImpl user,
																		@PathVariable("answer-id") @Positive Long answerId,
                                    @RequestBody AnswerPatchDto answerPatchDto){

		answerPatchDto.setAnswerId(answerId);
		Answer response
				           = answerService.updateAnswer(user, mapper.answerPatchToDtoToAnswer(answerPatchDto));
		return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
	}
	@DeleteMapping("/{question-id}/answers/{answer-id}")
	public ResponseEntity deleteAnswer(@AuthenticationPrincipal UserDetailsImpl user, @PathVariable("answer-id") @Positive Long answerId){
		answerService.deleteAnswer(user, answerId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@PostMapping("/{question-id}/answers/{answer-id}/adopt")
	public ResponseEntity adoptAnswer(@AuthenticationPrincipal UserDetailsImpl user,
									  @PathVariable("question-id") @Positive Long questionId,
									  @PathVariable("answer-id") @Positive Long answerId){
		answerService.adoptAnswer(user, questionId, answerId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
