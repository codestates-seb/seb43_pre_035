package com.hoot.member;

import lombok.Getter;
import lombok.Setter;

public class MemberDto {
    @Getter
    public static class Post {
        private String email;

        private String password;

        private String name;

        private String avatarLink;

        private String displayName;
    }

    @Setter
    public static class Response {
        private String email;

        private String name;

        private String avatarLink;

        private String displayName;
    }

}
