package com.perfumeria.perfume_shop_api.security;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private Long expiration;

    private Key getSigningKey() {
        return Keys.hmacShaKeyFor(secret.getBytes());
    }

    private String crearToken(Map<String, Object> claims, String subject) {
        Date now = new Date();
        Date fechaExpiracion = new Date(now.getTime() + expiration);

        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(now).setExpiration(fechaExpiracion)
                .signWith(getSigningKey(), SignatureAlgorithm.HS256).compact();
    }

    public String generarToken(String email) {
        Map<String, Object> claims = new HashMap<>();
        return crearToken(claims, email);
    }

    public Boolean validarToken(String token, String email) {
        final String tokenSubject = extraerEmail(token);
        return (tokenSubject.equals(email) && !isTokenExpired(token));
    }

    public String extraerEmail(String token) {
        return extraerClaim(token, Claims::getSubject);
    }

    public Date extraerExpiration(String token) {
        return extraerClaim(token, Claims::getExpiration);
    }

    public <T> T extraerClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extraerAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extraerAllClaims(String token) {
        return Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJws(token).getBody();
    }

    private Boolean isTokenExpired(String token) {
        return extraerExpiration(token).before(new Date());
    }
}
