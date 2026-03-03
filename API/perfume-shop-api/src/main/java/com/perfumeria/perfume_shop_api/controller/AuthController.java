package com.perfumeria.perfume_shop_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perfumeria.perfume_shop_api.dto.LoginRequestDTO;
import com.perfumeria.perfume_shop_api.dto.LoginResponseDTO;
import com.perfumeria.perfume_shop_api.dto.RegisterRequestDTO;
import com.perfumeria.perfume_shop_api.model.User;
import com.perfumeria.perfume_shop_api.model.enums.Rol;
import com.perfumeria.perfume_shop_api.security.JwtUtil;
import com.perfumeria.perfume_shop_api.service.IUserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private IUserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequestDTO request) {
        
        try{
            if (userService.existsByEmail(request.getEmail())){
                return ResponseEntity.badRequest().body("El email ya está en uso.");
            }

            User user = new User();
            user.setNombre(request.getNombre());
            user.setEmail(request.getEmail());
            user.setPassword(request.getPassword());
            user.setRol(Rol.USER);

            User savedUser = userService.guardarUsuario(user);

            return ResponseEntity.status(HttpStatus.CREATED).body("Usuario registrado exitosamente con el correo: " + savedUser.getEmail());

        } catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al registrar el usuario: " + e.getMessage());
        }
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO request) {
        
        try{
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );

            User user = userService.buscarPorEmail(request.getEmail());
            String token = jwtUtil.generarToken(user.getEmail());

            LoginResponseDTO reponse = new LoginResponseDTO(
                token,
                user.getEmail(),
                user.getRol()
            );

            return ResponseEntity.ok(reponse);
        } catch(BadCredentialsException e){
            return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body("Email o contraseña incorrectos");
        } catch(Exception e){
            return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Error al hacer login: " + e.getMessage());
        }
    }
}
