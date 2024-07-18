package spring.walab.example.board.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.walab.example.board.dto.request.BoardRequest;
import spring.walab.example.board.dto.response.BoardResponse;
import spring.walab.example.board.service.BoardService;
import spring.walab.example.board.entity.Board;

import jakarta.servlet.http.HttpServletRequest;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/board")
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/articles")
    public ResponseEntity<List<BoardResponse>> getAllBoards() {
        List<BoardResponse> boardResponses = boardService.getAllBoards();
        return ResponseEntity.ok(boardResponses);
    }

    @PostMapping("/write")
    public ResponseEntity<BoardResponse> createPost(@RequestBody BoardRequest request, Principal principal) {
        String uId = principal.getName();
        Board board = boardService.createPost(request.title(), request.content(), uId);
        return ResponseEntity.ok(new BoardResponse(board));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<BoardResponse> updatePost(@PathVariable Long id, @RequestBody BoardRequest request, HttpServletRequest httpRequest) {
        String userEmail = httpRequest.getUserPrincipal().getName();
        Board board = boardService.updatePost(id, request.title(), request.content(), userEmail);
        return ResponseEntity.ok(new BoardResponse(board));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id, HttpServletRequest httpRequest) {
        String userEmail = httpRequest.getUserPrincipal().getName();
        boardService.deletePost(id, userEmail);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BoardResponse> getBoard(@PathVariable Long id) {
        BoardResponse boardResponse = boardService.getBoard(id);
        return ResponseEntity.ok(boardResponse);
    }
}
