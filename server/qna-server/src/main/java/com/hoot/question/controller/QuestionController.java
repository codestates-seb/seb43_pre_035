package com.hoot.question.controller;

import com.hoot.question.dto.PagingDto;
import com.hoot.question.mapper.QuestionMapper;
import com.hoot.question.Question;
import com.hoot.question.dto.QuestPatchDto;
import com.hoot.question.dto.QuestResponseDto;
import com.hoot.question.service.QuestionService;
import com.hoot.security.UserDetailsImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
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
	public ResponseEntity<QuestResponseDto> postQuestion(@Valid @RequestBody Question question, @AuthenticationPrincipal UserDetailsImpl userDetails){
		Question response = questionService.createQuestion(question, userDetails);
		return new ResponseEntity<>(mapper.questionToResponseDto(response), HttpStatus.CREATED);
	}
	@PatchMapping("/{question-id}")
	public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,

	                                      @RequestBody QuestPatchDto questPatchDto,
										@AuthenticationPrincipal UserDetailsImpl userDetails){

		questPatchDto.setQuestionId(questionId);
		Question response =
				questionService.updateQuestion(userDetails, mapper.questPatchDtoToQuestion(questPatchDto));
		return new ResponseEntity<>(mapper.questionToResponseDto(response), HttpStatus.OK);
	}


	@GetMapping("/{question-id}")
	public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
		Question response = questionService.questViewCounts(questionId);
		return new ResponseEntity<>(mapper.questionToResponseDto(response), HttpStatus.OK);
	}

	//전체목록조회하기
	@GetMapping
	public ResponseEntity<Page<Question>> getQuestions(@RequestParam(defaultValue = "0") int pageNumber,
	                                                   @RequestParam(defaultValue = "10") int pageSize) {
		Page<Question> page = questionService.getQuestions(pageNumber, pageSize);
		return new ResponseEntity<>(page, HttpStatus.OK);
	}

	@GetMapping("/search")
	public ResponseEntity<Page<QuestResponseDto>> searchPaging(@RequestParam String title,
	                                                    @RequestParam String content,
	                                                    @PageableDefault(size = 10, sort = "questionId") org.springframework.data.domain.Pageable pageRequest){

		Page<QuestResponseDto> pagingList = questionService.searchQuestions(title, content, pageRequest);
		return new ResponseEntity<>(pagingList, HttpStatus.OK);
	}


	@DeleteMapping("/{question-id}")
	public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId,

										 @AuthenticationPrincipal UserDetailsImpl userDetails){

		questionService.deleteQuestion(userDetails, questionId);
		return new ResponseEntity(HttpStatus.NO_CONTENT);
	}
}
