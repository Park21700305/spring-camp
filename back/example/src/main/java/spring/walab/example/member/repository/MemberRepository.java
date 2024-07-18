package spring.walab.example.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring.walab.example.member.entity.Member;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);
    Optional<Member> findByUid(String uid);

    Optional<Member> findByNickname(String nickname);
}
