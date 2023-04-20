package com.hoot.member;

import com.hoot.answer.entity.Answer;
import com.hoot.question.Question;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.List;

public class MemberDto {
    @Getter
    @Setter
    public static class Post {
        @NotBlank(message = "내용을 입력해주세요")
        @Email(message = "이메일 형식으로 작성해주세요.")
        private String email;

        @NotBlank(message = "내용을 입력해주세요")
        @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,16}",
                message = "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
        private String password;

        private String name;

        private String avatarLink;

        @Pattern(regexp = "^[ㄱ-ㅎ가-힣a-z0-9-_]{2,15}$",
                message = "닉네임은 특수문자를 제외한 2~15자리여야 합니다.")
        private String displayName;
    }

    @Getter
    public static class Login {
        @NotBlank(message = "내용을 입력해주세요.")
        @Email(message = "이메일 형식으로 작성해주세요.")
        private String email;

        @NotBlank(message = "내용을 입력해주세요")
        @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,16}",
                message = "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
        private String password;
    }

    @Getter
    @Setter
    public static class Response {
        private Long memberId;

        private String email;

        private String name;

        private String avatarLink;

        private String displayName;

        private List<String> roles;
    }

    @Getter
    @Setter
    public static class Get {
        private Long memberId;

        private String email;

        private String name;

        private String displayName;

        private String avatarLink;

        private List<String> roles;

        private List<Answer> answer;

        private List<Question> question;
    }

    @Getter
    public static class Patch {
        private String password;

        private String name;

        private String displayName;
    }
}
