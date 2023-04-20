package com.hoot.member;

import com.hoot.exception.BusinessLogicException;
import com.hoot.exception.ExceptionCode;
import com.hoot.security.CustomAuthorityUtils;
import com.hoot.security.UserDetailsImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final MemberMapper mapper;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils customAuthorityUtils;

    public MemberDto.Response signup(MemberDto.Post postDto) {
        Member member = mapper.postDtoToEntity(postDto);
        member.encodePassword(passwordEncoder);
        member.setRoles(customAuthorityUtils.createRoles(postDto.getEmail()));
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

    public MemberDto.Get getMember(UserDetailsImpl user, long memberId) {
        Member findMember = verifyLogInMemberMatchesMember(user.getMemberId(), memberId);
        MemberDto.Get response = mapper.entityToGet(findMember);
        return response;
    }

    public MemberDto.Get modifyMember(UserDetailsImpl user, long memberId, MemberDto.Patch patchDto) {
        Member findMember = verifyLogInMemberMatchesMember(user.getMemberId(), memberId);

        Optional.ofNullable(patchDto.getPassword())
                        .ifPresent(password -> {
                            findMember.setPassword(password);
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

    public Member verifyLogInMemberMatchesMember(long loginMemberId, long memberId) {
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
