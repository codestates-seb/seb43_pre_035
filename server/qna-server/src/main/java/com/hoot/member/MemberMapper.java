package com.hoot.member;

import org.springframework.stereotype.Component;

@Component
public class MemberMapper {
    public Member postDtoToEntity(MemberDto.Post postDto) {
        Member member = new Member();

        member.setEmail(postDto.getEmail());
        member.setPassword(postDto.getPassword());
        member.setName(postDto.getName());
        member.setDisplayName(postDto.getDisplayName());
        member.setAvatarLink(postDto.getAvatarLink());

        return member;
    }

    public MemberDto.Response entityToResponse(Member member) {
        MemberDto.Response response = new MemberDto.Response();

        response.setMemberId(member.getMemberId());
        response.setEmail(member.getEmail());
        response.setName(member.getName());
        response.setDisplayName(member.getDisplayName());
        response.setAvatarLink(member.getAvatarLink());
        response.setRoles(member.getRoles());

        return response;
    }

    public MemberDto.Get entityToGet(Member member) {
        MemberDto.Get response = new MemberDto.Get();

        response.setMemberId(member.getMemberId());
        response.setEmail(member.getEmail());
        response.setName(member.getName());
        response.setDisplayName(member.getDisplayName());
        response.setAvatarLink(member.getAvatarLink());
        response.setRoles(member.getRoles());
        /**
         * Answer, Question 구현 완료 시, 추가 */
//        response.setAnswer();
//        response.setQuestion();

        return response;
    }
}
