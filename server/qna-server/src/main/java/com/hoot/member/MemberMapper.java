package com.hoot.member;

import com.hoot.answer.repository.AnswerRepository;
import com.hoot.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MemberMapper {
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;

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
        response.setQuestion(questionRepository.findByMember(member));
        response.setAnswer(answerRepository.findByMember(member));

        return response;
    }
}
