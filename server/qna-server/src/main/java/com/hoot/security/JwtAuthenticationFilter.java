package com.hoot.security;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtTokenProvider jwtTokenProvider;
    private final Logger LOGGER = LoggerFactory.getLogger(JwtAuthenticationFilter.class);

    // 1. HTTP request 로부터 인증 정보 추출
    // 2. 추출한 인증 정보를 통해 해당 요청이 인증되었는지 검증
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        // request 로 부터 token 값 추출
        String token = jwtTokenProvider.resolveToken(request);
        LOGGER.info("[doFilterInternal] token 값 추출 완료. token : {}", token);
        if (token != null) {
            token = token.replace("Bearer", "");
        }

        // token 값 유효성 검사
        LOGGER.info("[doFilterInternal] token 값 유효성 체크 시작");
        if (jwtTokenProvider.validateToken(token)) {
            Authentication authentication = jwtTokenProvider.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            LOGGER.info("[doFilterInternal] token 값 유효성 체크 완료");
        } else {
            LOGGER.info("[doFilterInternal] token 값 유효성 체크 실패");
        }

        // 다음 필터로 이동
        filterChain.doFilter(request, response);
    }
}
