package spring.walab.example.member.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import spring.walab.example.member.entity.Member;
import spring.walab.example.member.repository.MemberRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public Member save(Member member) {
        return memberRepository.save(member);
    }


    public Optional<Member> findByEmail(String email) {
        return memberRepository.findByEmail(email);
    }

}
