package com.hoot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class QnaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(QnaServerApplication.class, args);
	}

}
