//package spring.walab.example.jwt;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import io.jsonwebtoken.security.Keys;
//import jakarta.annotation.PostConstruct;
//import jakarta.servlet.http.HttpServletRequest;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.stereotype.Component;
//
//import java.security.Key;
//import java.util.Date;
//
//@Component
//public class JwtTokenProvider {
//
//    @Value("${jwt.secret}")
//    private String secretKey;
//
//    private Key key;
//
//    @PostConstruct
//    public void init() {
//        this.key = Keys.hmacShaKeyFor(secretKey.getBytes());
//    }
//
//    public String createToken(UserDetails userDetails) {
//        Claims claims = Jwts.claims().setSubject(userDetails.getUsername());
//        claims.put("email", userDetails.getUsername()); // 사용자 이메일을 클레임에 포함
//        // 또는 claims.put("userId", userDetails.getUserId()); // 사용자 ID를 클레임에 포함 나중에 이렇게도 한번 시도 ㄱㄱ
//
//        Date now = new Date();
//        Date validity = new Date(now.getTime() + 20000); // 0.2 minutes
//
//        return Jwts.builder()
//                .setClaims(claims)
//                .setIssuedAt(now)
//                .setExpiration(validity)
//                .signWith(key, SignatureAlgorithm.HS512)
//                .compact();
//    }
//
//
//    public String createRefreshToken(UserDetails userDetails) {
//        Claims claims = Jwts.claims().setSubject(userDetails.getUsername());
//        Date now = new Date();
//        Date validity = new Date(now.getTime() + 604800000); // 7 days
//
//        return Jwts.builder()
//                .setClaims(claims)
//                .setIssuedAt(now)
//                .setExpiration(validity)
//                .signWith(key, SignatureAlgorithm.HS512)
//                .compact();
//    }
//
//    public boolean validateToken(String token) {
//        try {
//            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
//            return true;
//        } catch (Exception e) {
//            return false;
//        }
//    }
//
//    public String getUserEmailFromToken(String token) {
//        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody().getSubject();
//    }
//
//    public String resolveToken(HttpServletRequest request) {
//        String bearerToken = request.getHeader("Authorization");
//        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
//            return bearerToken.substring(7);
//        }
//        return null;
//    }
//}
