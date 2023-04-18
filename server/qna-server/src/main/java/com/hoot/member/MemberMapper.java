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

        response.setEmail(member.getEmail());
        response.setName(member.getName());
        response.setDisplayName(member.getDisplayName());
        response.setAvatarLink(member.getAvatarLink());

        return response;
    }
}
