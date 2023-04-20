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
        @Pattern(regexp = "/^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/",
                message = "최소 8자리 이상, 숫자, 특수문자가 각각 1개 이상 포함되어야합니다.")
        private String password;

        private String name;

        private String avatarLink;

        private String displayName;
    }

    @Getter
    public static class Login {
        @NotBlank(message = "내용을 입력해주세요.")
        @Email(message = "이메일 형식으로 작성해주세요.")
        private String email;

        @NotBlank(message = "내용을 입력해주세요")
        @Pattern(regexp = "/^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/",
                message = "최소 8자리 이상, 숫자, 특수문자가 각각 1개 이상 포함되어야합니다.")
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
