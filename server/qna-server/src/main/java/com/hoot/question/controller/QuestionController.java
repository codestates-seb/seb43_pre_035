package com.hoot.question.controller;

import com.hoot.question.dto.QuestPatchDto;
import com.hoot.question.dto.QuestPostDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/questions")
public class QuestionController {
	@PostMapping
	public ResponseEntity postQuestion(@RequestBody QuestPostDto questPostDto){
		return new ResponseEntity<>(questPostDto, HttpStatus.CREATED);
	}
	@PatchMapping("/{question_id}")
	public ResponseEntity patchQuestion(@PathVariable("question_id") @Positive long questionId,
	                                      @RequestBody QuestPatchDto questPatchDto){
		return new ResponseEntity<>(questPatchDto, HttpStatus.OK);
	}
	@GetMapping("/{question_id}")
	public ResponseEntity getQuestion(@PathVariable("question_id") @Positive long questionId){
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping
	public ResponseEntity getQuestions(){
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/{question_id}")
	public ResponseEntity deleteQuestion(@PathVariable("question_id") long questionId){
		return new ResponseEntity(HttpStatus.NO_CONTENT);
	}
}
