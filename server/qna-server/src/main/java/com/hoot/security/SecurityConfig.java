package com.hoot.security;

import com.hoot.member.MemberService;
import com.hoot.security.oauth2.OAuth2MemberSuccessHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final JwtTokenProvider jwtTokenProvider;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberService memberService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http    // HTTP 기본 인증 비활성화
                .httpBasic().disable()
                // CSRF 비활성화
                .csrf().disable()
                // 세션 관리 및 세션 정책 설정
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                // request 에 대한 인증 및 권한 부여 설정
                .authorizeRequests()
                .antMatchers("/oauth2/**").permitAll()
                .antMatchers("/users/signup", "/users/login").permitAll()
                .antMatchers("/users/**").hasRole("USER")
                .antMatchers(HttpMethod.GET,"/questions/**").permitAll()
                .antMatchers(HttpMethod.POST,"/questions/**").hasRole("USER")
                .antMatchers(HttpMethod.PATCH,"/questions/**").hasRole("USER")
                .antMatchers(HttpMethod.DELETE,"/questions/**").hasRole("USER")
                .anyRequest().authenticated()
                .and()
                // JWT Token 필터를 id,password 인증 필터 이전에 추가하여, JWT로 인증 처리를 하도록 한다
                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class)
                // JwtVerificationFilter를 OAuth2LoginAuthenticationFilter 뒤에 추가한다
                .apply(new CustomFilterConfigurer())
                .and()
                // OAuth2 로 로그인을 실행한다
                .oauth2Login(oauth2 -> oauth2.successHandler(new OAuth2MemberSuccessHandler(jwtTokenProvider, authorityUtils, memberService)));
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(jwtTokenProvider);

            builder.addFilterAfter(jwtAuthenticationFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }
}


