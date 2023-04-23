package com.hoot.exception;

import lombok.Getter;

public enum ExceptionCode {
    QUESTION_REPLY_NOT_FOUND(404, "Question Comment Not Found"),
    ANSWER_REPLY_NOT_FOUND(404, "Answer Comment Not Found"),
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    QUESTION_NOT_FOUND(404, "Question Comment Not Found"),
    ANSWER_NOT_FOUND(404, "Answer Comment Not Found"),
    CANNOT_ADOPT(404, "Question Already Has Been Adopted" ),
    MEMBER_CANNOT_USE_FEATURE(404, "Feature Not Available To This User");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
