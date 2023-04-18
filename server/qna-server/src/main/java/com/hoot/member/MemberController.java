package com.hoot.member;

import com.hoot.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/signup")
    public ResponseEntity<MemberDto.Response> signup(@RequestBody MemberDto.Post postDto) {
        return new ResponseEntity<>(memberService.signup(postDto), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<MemberDto.Response> login(@RequestBody MemberDto.Login loginDto) {
        MemberDto.Response response = memberService.login(loginDto);

        String token = jwtTokenProvider.createToken(response.getEmail(), response.getRoles());
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", "Bearer" + token);

        return new ResponseEntity<>(response, httpHeaders, HttpStatus.OK);
    }
}
