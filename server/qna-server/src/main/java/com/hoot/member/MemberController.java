package com.hoot.member;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/signup")
    public ResponseEntity<MemberDto.Response> signup(@RequestBody MemberDto.Post postDto) {
        return new ResponseEntity<>(memberService.signup(postDto), HttpStatus.CREATED);
    }
}
