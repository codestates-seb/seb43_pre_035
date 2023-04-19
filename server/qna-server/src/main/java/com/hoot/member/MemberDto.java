package com.hoot.member;

import com.hoot.answer.Answer;
import com.hoot.question.Question;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class MemberDto {
    @Getter
    public static class Post {
        private String email;

        private String password;

        private String name;

        private String avatarLink;

        private String displayName;
    }

    @Getter
    public static class Login {
        private String email;

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

        private Answer answer;

        private Question question;
    }

    @Getter
    public static class Patch {
        private String password;

        private String name;

        private String displayName;
    }
}
