package com.hoot.question.controller;

import com.hoot.question.Mapper.QuestionMapper;
import com.hoot.question.Question;
import com.hoot.question.dto.QuestPatchDto;
import com.hoot.question.dto.QuestPostDto;
import com.hoot.question.dto.QuestResponseDto;
import com.hoot.question.service.QuestionService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.awt.image.MultiResolutionImage;
import java.util.List;
import java.util.stream.Collectors;

@Validated
@RestController
@RequestMapping("/questions")
public class QuestionController {

	private final QuestionService questionService;
	private final QuestionMapper mapper;

	public QuestionController(QuestionService questionService, QuestionMapper mapper) {
		this.questionService = questionService;
		this.mapper = mapper;
	}
	@PostMapping
	public ResponseEntity postQuestion(@Valid @RequestBody QuestPostDto questPostDto){
		Question response = questionService.createQuestion(mapper.questPostDtoToQuestion(questPostDto));
		return new ResponseEntity<>(mapper.questionToQuestResponseDto(response), HttpStatus.CREATED);
	}
	@PatchMapping("/{question-id}")
	public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
	                                      @RequestBody QuestPatchDto questPatchDto){

		questPatchDto.setQuestionId(questionId);
		Question response = questionService.updateQuestion(mapper.questPatchDtoToQuestion(questPatchDto));
		return new ResponseEntity<>(mapper.questionToQuestResponseDto(response), HttpStatus.OK);
	}
	@GetMapping("/{question-id}")
	public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId){
		Question response = questionService.findQuestion(questionId);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	@GetMapping
//	public ResponseEntity getQuestions(){
//
//		List<Question> questions = questionService.findQuestions();
//		List<QuestResponseDto> response = questions.stream()
//				.map(question -> mapper.questionToQuestResponseDto(question))
//				.collect(Collectors.toList());
//
//		return new ResponseEntity<>(response, HttpStatus.OK);
//	}
//
//		public ResponseEntity getQuestions(@Positive @RequestParam int page,
//	                                     @Positive @RequestParam int size){
//		Page<Question> pageQuests = questionService.findQuestions(page - 1, size);
//		List<Question> questions = pageQuests.getContent();
//		return new ResponseEntity<>(HttpStatus.OK);
//	}


	@DeleteMapping("/{question-id}")
	public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId){
		questionService.deleteQuestion(questionId);
		System.out.println("삭제되는거야?");
		return new ResponseEntity(HttpStatus.NO_CONTENT);
	}
}
