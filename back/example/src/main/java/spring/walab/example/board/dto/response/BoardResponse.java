package spring.walab.example.board.dto.response;

import spring.walab.example.board.entity.Board;

import java.time.LocalDateTime;

public record BoardResponse(Long id, String title, String content, String writer, LocalDateTime createdAt, LocalDateTime updatedAt) {
    public BoardResponse(Board board) {
        this(board.getId(), board.getTitle(), board.getContent(), board.getMember().getNickname(), board.getCreatedAt(), board.getUpdatedAt());
    }
}
