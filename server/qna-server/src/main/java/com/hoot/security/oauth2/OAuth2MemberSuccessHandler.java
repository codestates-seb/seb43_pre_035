package com.hoot.security.oauth2;

import com.hoot.member.MemberDto;
import com.hoot.member.MemberService;
import com.hoot.security.CustomAuthorityUtils;
import com.hoot.security.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.List;
import java.util.Random;

@RequiredArgsConstructor
public class OAuth2MemberSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenProvider jwtTokenProvider;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberService memberService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        var oAuth2User = (OAuth2User) authentication.getPrincipal();
        String email = String.valueOf(oAuth2User.getAttributes().get("email"));
        List<String> roles = authorityUtils.createRoles(email);
        String firstName = String.valueOf(oAuth2User.getAttributes().get("family_name"));
        String lastName = String.valueOf(oAuth2User.getAttributes().get("given_name"));
        String name = firstName + lastName;

        MemberDto.Post postDto = new MemberDto.Post();
        postDto.setEmail(email);
        postDto.setPassword("password123!!");
        postDto.setName(name);
        postDto.setDisplayName(lastName);

        Random random = new Random();
        String randomNum = String.valueOf(random.nextInt(7) + 1);
        postDto.setAvatarLink("https://mypreprojecttempbucket.s3.ap-northeast-2.amazonaws.com/owl0" + randomNum + ".png");
        // 회원이 존재하지 않으면 회원 가입, 회원이 존재하면 로그인
        try {
            memberService.signup(postDto);
        } catch (DataIntegrityViolationException e) {
            MemberDto.Login login = new MemberDto.Login(email, "password123!!");
            memberService.login(login);
        }

        redirect(request, response, email, roles);
    }

    private void redirect(HttpServletRequest request, HttpServletResponse response, String email, List<String> roles) throws IOException {
        String accessToken = jwtTokenProvider.createToken(email, roles);

        String uri = createURI(accessToken).toString();
        response.setHeader("Authorization", accessToken);
        getRedirectStrategy().sendRedirect(request, response, uri);
    }

    private URI createURI(String accessToken) {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("access_token", accessToken);

        return UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("localhost")
                .port("80")
                .path("/receive-token.html")
                .queryParams(queryParams)
                .build()
                .toUri();
    }
}
