package com.perfumeria.perfume_shop_api.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.perfumeria.perfume_shop_api.security.JwtAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/auth/**").permitAll()
                .requestMatchers("/perfume/traer").permitAll()
                .requestMatchers("/perfume/traer/{id}").permitAll()
                .requestMatchers("/perfume/traer/por-nombre/").permitAll()
                .requestMatchers("/perfume/traer/por-genero/").permitAll()
                .requestMatchers("/perfume/traer/por-categoria/").permitAll()
                .requestMatchers("/perfume/traer/por-concentracion/").permitAll()
                .requestMatchers("/perfume/traer/por-marca/{idMarca}").permitAll()
                .requestMatchers("/perfume/traer/por-concentracion/").permitAll()
                .requestMatchers("/perfume/traer/por-stock/").permitAll()
                .requestMatchers("/perfume/traer/por-volumen/").permitAll()
                .requestMatchers("/perfume/existencia/").permitAll()
                .requestMatchers("/marca/todas").permitAll()
                .requestMatchers("/marca/{id}").permitAll()
                
                .requestMatchers("/perfume/crear").hasRole("ADMIN")
                .requestMatchers("/perfume/editar/**").hasRole("ADMIN")
                .requestMatchers("/perfume/eliminar/**").hasRole("ADMIN")
                .requestMatchers("/marca/crear").hasRole("ADMIN")
                .requestMatchers("/marca/editar/**").hasRole("ADMIN")
                .requestMatchers("/marca/eliminar/**").hasRole("ADMIN")

                .anyRequest().authenticated()
            )

            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
