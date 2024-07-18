package spring.walab.example.board.service;

import lombok.extern.slf4j.Slf4j;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import spring.walab.example.board.dto.response.BoardResponse;
import spring.walab.example.board.entity.Board;
import spring.walab.example.board.repository.BoardRepository;
import spring.walab.example.member.entity.Member;
import spring.walab.example.member.repository.MemberRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardService {

    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;

    @Transactional
    public Board createPost(String title, String content, String uId) {
        log.info("Creating post for user: {}", uId);
        Member member = memberRepository.findByUid(uId)
                .orElseThrow(() -> new IllegalArgumentException("이 이메일에 해당하는 사람없어용"));
        Board board = Board.builder()
                .title(title)
                .content(content)
                .member(member)
                .build();
        return boardRepository.save(board);
    }

    @Transactional
    public Board updatePost(Long id, String title, String content, String uId) {
        Member member = memberRepository.findByUid(uId)
                .orElseThrow(() -> new IllegalArgumentException("이 계정에 해당하는 사람없어용"));
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 id에 해당하는 게시글 없어용"));
        if (!board.getMember().getEmail().equals(uId)) {
            throw new IllegalArgumentException("본인 게시글만 수정 가능해용");
        }
        board.update(title, content);
        return board;
    }

    @Transactional
    public void deletePost(Long id, String uId) {
        Member member = memberRepository.findByEmail(uId)
                .orElseThrow(() -> new IllegalArgumentException("이 이메일에 해당하는 사람없어용"));
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 id에 해당하는 게시글 없어용"));
        if (!board.getMember().getEmail().equals(uId)) {
            throw new IllegalArgumentException("본인 게시글만 삭제 가능해용");
        }
        boardRepository.delete(board);
    }

    @Transactional(readOnly = true)
    public BoardResponse getBoard(Long id) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 id에 해당하는 게시글 없어용"));
        return new BoardResponse(board);
    }

    @Transactional(readOnly = true)
    public List<BoardResponse> getAllBoards() {
        List<Board> boards = boardRepository.findAll();
        return boards.stream()
                .map(BoardResponse::new)
                .collect(Collectors.toList());
    }
}
