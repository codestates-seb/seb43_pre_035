package com.hoot.exception;

import lombok.Getter;

public enum ExceptionCode {
    QUESTION_REPLY_NOT_FOUND(404, "Question Comment Not Found"),
    ANSWER_REPLY_NOT_FOUND(404, "Answer Comment Not Found"),
    MEMBER_NOT_FOUND(404, "Member Not Found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
