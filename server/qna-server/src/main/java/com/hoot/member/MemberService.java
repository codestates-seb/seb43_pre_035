package com.hoot.member;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
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
    private final List<String> ADMIN_ROLES_STRING = List.of("ADMIN", "USER");
    private final List<String> USER_ROLES_STRING = List.of("USER");

    public MemberDto.Response signup(MemberDto.Post postDto) {
        Member member = mapper.postDtoToEntity(postDto);
        member.encodePassword(passwordEncoder);
        member.setRoles(createRoles(postDto.getEmail()));
        Member save = memberRepository.save(member);
        return mapper.entityToResponse(save);
    }

    private List<String> createRoles(String email) {
        if (email.equals(adminEmail)) {
            return ADMIN_ROLES_STRING;
        }
        return USER_ROLES_STRING;
    }
}
