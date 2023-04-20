package com.hoot.member;

import com.hoot.security.JwtTokenProvider;
import com.hoot.security.UserDetailsImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Validated
public class MemberController {
    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/signup")
    public ResponseEntity<MemberDto.Response> signup(@Valid @RequestBody MemberDto.Post postDto) {
        return new ResponseEntity<>(memberService.signup(postDto), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<MemberDto.Response> login(@Valid @RequestBody MemberDto.Login loginDto) {
        MemberDto.Response response = memberService.login(loginDto);

        String token = jwtTokenProvider.createToken(response.getEmail(), response.getRoles());
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", "Bearer " + token);

        return new ResponseEntity<>(response, httpHeaders, HttpStatus.OK);
    }

    @GetMapping("/{user_id}")
    public ResponseEntity<MemberDto.Get> getMember(@AuthenticationPrincipal UserDetailsImpl user,
                                                   @Positive @PathVariable("user_id") long memberId) {
        return new ResponseEntity<>(memberService.getMember(user, memberId), HttpStatus.OK);
    }

    @PatchMapping("/{user_id}")
    public ResponseEntity<MemberDto.Get> modifyMember(@AuthenticationPrincipal UserDetailsImpl user,
                                                      @Positive @PathVariable("user_id") long memberId,
                                                      @Valid @RequestBody MemberDto.Patch patchDto) {
        return new ResponseEntity<>(memberService.modifyMember(user, memberId, patchDto), HttpStatus.OK);
    }

    @DeleteMapping("/{user_id}")
    public ResponseEntity deleteMember(@AuthenticationPrincipal UserDetailsImpl user,
                                       @Positive @PathVariable("user_id") long memberId) {
        memberService.deleteMember(user, memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
