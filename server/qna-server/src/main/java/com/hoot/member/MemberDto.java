package com.hoot.member;

import com.hoot.answer.entity.Answer;
import com.hoot.question.Question;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class MemberDto {
    @Getter
    public static class Post {
        @NotBlank(message = "내용을 입력해주세요")
        private String email;

        @NotBlank(message = "내용을 입력해주세요")
        private String password;

        private String name;

        private String avatarLink;

        private String displayName;
    }

    @Getter
    public static class Login {
        @NotBlank(message = "내용을 입력해주세요")
        private String email;

        @NotBlank(message = "내용을 입력해주세요")
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
