package com.hoot.member;

import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.security.UserDetailsImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        Member findMember = findVerifiedMemberByEmail(loginDto.getEmail());

        if (!passwordEncoder.matches(loginDto.getPassword(), findMember.getPassword())) {
            throw new UsernameNotFoundException("이메일 또는 비밀번호를 확인해주세요.");
        }

        return mapper.entityToResponse(findMember);
    }

    private List<String> createRoles(String email) {
        if (email.equals(adminEmail)) {
            return ADMIN_ROLES_STRING;
        }
        return USER_ROLES_STRING;
    }

    public MemberDto.Get getMember(long memberId) {
        Member findMember = findVerifiedMemberById(memberId);
        MemberDto.Get response = mapper.entityToGet(findMember);
        return response;
    }

    public MemberDto.Get modifyMember(UserDetailsImpl user, long memberId, MemberDto.Patch patchDto) {
        Member findMember = verifyLogInMemberMatchesMember(user.getMemberId(), memberId);

        Optional.ofNullable(patchDto.getPassword())
                        .ifPresent(password -> {
                            findMember.setPassword(patchDto.getPassword());
                            findMember.encodePassword(passwordEncoder);
                        });
        Optional.ofNullable(patchDto.getName())
                        .ifPresent(findMember::setName);
        Optional.ofNullable(patchDto.getDisplayName())
                        .ifPresent(findMember::setDisplayName);

        Member save = memberRepository.save(findMember);

        return mapper.entityToGet(save);
    }

    public void deleteMember(UserDetailsImpl user, long memberId) {
        Member findMember = verifyLogInMemberMatchesMember(user.getMemberId(), memberId);
        memberRepository.delete(findMember);
    }

    private Member verifyLogInMemberMatchesMember(long loginMemberId, long memberId) {
        Member loginMember = findVerifiedMemberById(loginMemberId);
        Member findMember = findVerifiedMemberById(memberId);

        if (!findMember.equals(loginMember)) throw new RuntimeException("자신의 정보만 수정 및 삭제할 수 있습니다.");
        return findMember;
    }

    public Member findVerifiedMemberById(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    public Member findVerifiedMemberByEmail(String email) {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }
}
