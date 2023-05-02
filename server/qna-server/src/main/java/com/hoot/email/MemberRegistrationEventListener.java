package com.hoot.email;

import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.member.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.mail.MailSendException;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Component;

@EnableAsync
@Component
@Slf4j
public class MemberRegistrationEventListener {
    private final MailService mailService;
    private final MemberService memberService;

    public MemberRegistrationEventListener(MailService mailService, MemberService memberService) {
        this.mailService = mailService;
        this.memberService = memberService;
    }

    @Async
    @EventListener
    public void listen(MemberRegistrationApplicationEvent event) throws Exception {
        try {
            log.info("메일 전송");

            MailDto mailDto = new MailDto();
            mailDto.setEmail(event.getMember().getEmail());
            mailDto.setName(event.getMember().getName());
            mailService.sendMail(mailDto);
        } catch (MailSendException e) {
            e.printStackTrace();
            log.error("MailSendException: rollback for Member Registration:");
            memberService.deleteMember(event.getMember().getMemberId());
            throw new BusinessLogicException(ExceptionCode.FAILED_TO_JOIN);
        }
    }
}
