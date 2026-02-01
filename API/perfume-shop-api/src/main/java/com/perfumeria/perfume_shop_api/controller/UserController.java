package com.perfumeria.perfume_shop_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.perfumeria.perfume_shop_api.model.User;
import com.perfumeria.perfume_shop_api.service.IUserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private IUserService userService;

    @PostMapping("/crear")
    public String crearUsuario(@RequestBody User usuario) {
        userService.guardarUsuario(usuario);
        return "Usuario creado correctamente";
    }

    @GetMapping("/traer")
    public List<User> traerUsuarios(){
        return userService.traerUsuarios();
    }
    
    @GetMapping("/traer/{idUser}")
    public User traerUsuario(@PathVariable Long idUser) {
        return userService.buscarPorID(idUser);
    }

    @GetMapping("/traer-nombre")
    public User traerPorNombre(@RequestParam String nombre) {
        return userService.buscarNombre(nombre);
    }
    
    @PutMapping("editar/{idUser}")
    public User editarUsuario(@PathVariable Long idUser, @RequestBody User nuevosDatos) {
        userService.editarUsuario(idUser, nuevosDatos);
        return userService.buscarPorID(idUser);
    }

    @DeleteMapping("/eliminar/{idUser}")
    public String eliminarUsuario(@PathVariable Long idUser){
        userService.eliminarUsuario(idUser);
        return "Usuario eliminado correctamente";
    }

    @GetMapping("/existe")
    public boolean existeUsuario(@RequestParam String nombre) {
        return userService.existsByNombre(nombre);
    }
    
}
