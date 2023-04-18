package com.hoot.member;

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

}
