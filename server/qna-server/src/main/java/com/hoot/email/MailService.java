package com.hoot.email;

import com.hoot.email.MailDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class MailService {
    private final JavaMailSender mailSender;
    private final TemplateEngine templateEngine;

    @Value("${email.from.address}")
    private String FROM_ADDRESS;

    public MailService(JavaMailSender mailSender, TemplateEngine templateEngine) {
        this.mailSender = mailSender;
        this.templateEngine = templateEngine;
    }

    public void sendMail(MailDto mailDto) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setTo(mailDto.getEmail());
        helper.setFrom(FROM_ADDRESS);
        helper.setSubject(String.format("%S 님, 회원 가입이 완료되었습니다.", mailDto.getName()));
        helper.setText(mailDto.getMessage());

        Context context = new Context();

        String html = templateEngine.process("email", context);
        helper.setText(html, true);

        helper.addInline("image", new ClassPathResource("static/logo.png"));

        mailSender.send(message);
    }
}
