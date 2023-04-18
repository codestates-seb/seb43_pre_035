package com.hoot.member;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final MemberMapper mapper;
    private final PasswordEncoder passwordEncoder;

    @Value("${email.address.admin}")
    private String adminEmail;
    private final List<String> ADMIN_ROLES_STRING = List.of("ROLE_ADMIN", "ROLE_USER");
    private final List<String> USER_ROLES_STRING = List.of("ROLE_USER");

    public MemberDto.Response signup(MemberDto.Post postDto) {
        Member member = mapper.postDtoToEntity(postDto);
        member.encodePassword(passwordEncoder);
        member.setRoles(createRoles(postDto.getEmail()));
        Member save = memberRepository.save(member);
        return mapper.entityToResponse(save);
    }

    public MemberDto.Response login(MemberDto.Login loginDto) {
        Member member = memberRepository.findByEmail(loginDto.getEmail());
        if (!passwordEncoder.matches(loginDto.getPassword(), member.getPassword())) {
            throw new UsernameNotFoundException("이메일 또는 비밀번호를 확인해주세요.");
        }
        return mapper.entityToResponse(member);
    }

    private List<String> createRoles(String email) {
        if (email.equals(adminEmail)) {
            return ADMIN_ROLES_STRING;
        }
        return USER_ROLES_STRING;
    }
}
