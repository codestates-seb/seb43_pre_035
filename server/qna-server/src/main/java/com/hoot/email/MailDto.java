package com.hoot.email;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MailDto {
    private String email;
    private String name;
    private String message = "회원 가입이 완료되었습니다.";
}
