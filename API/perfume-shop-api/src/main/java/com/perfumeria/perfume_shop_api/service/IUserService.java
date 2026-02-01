package com.perfumeria.perfume_shop_api.service;

import java.util.List;

import com.perfumeria.perfume_shop_api.model.User;
import com.perfumeria.perfume_shop_api.model.enums.Rol;

public interface IUserService {
    public void guardarUsuario(User user);

    public User buscarPorID(Long idUser);

    public List<User> buscarNombre(String nombre);

    public List<User> traerUsuarios();

    public void eliminarUsuario(Long idUser);

    public User editarUsuario(Long idUser, User nuevosDatos);

    public boolean existsByNombre(String nombre);

    public boolean existsByEmail(String email);

    public List<User> traerUsuariosPorRol(Rol rol);

    public User buscarPorEmail(String email); 
}
