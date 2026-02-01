package com.perfumeria.perfume_shop_api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.perfumeria.perfume_shop_api.model.User;
import com.perfumeria.perfume_shop_api.model.enums.Rol;
import com.perfumeria.perfume_shop_api.repository.IUserRepository;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    @Override
    public void guardarUsuario(User user) {
        userRepository.save(user);
    }

    @Override
    public User buscarPorID(Long idUser) {
        return userRepository.findById(idUser).orElse(null);
    }

    @Override
    public List<User> buscarNombre(String nombre){
        return userRepository.findByNombreContaining(nombre);
    }

    @Override
    public List<User> traerUsuarios() {
        return userRepository.findAll();
    }

    @Override
    public void eliminarUsuario(Long idUser) {
        userRepository.deleteById(idUser);
    }

    @Override
    public User editarUsuario(Long idUser, User nuevosDatos) {
        User userExistente = userRepository.findById(idUser).orElse(null);

        userExistente.setNombre(nuevosDatos.getNombre());
        userExistente.setEmail(nuevosDatos.getEmail());
        userExistente.setPassword(nuevosDatos.getPassword());
        userExistente.setRol(nuevosDatos.getRol());

        return userRepository.save(userExistente);
    }

    @Override
    public boolean existsByNombre(String nombre) {
        return userRepository.existsByNombre(nombre);
    }

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public List<User> traerUsuariosPorRol(Rol rol) {
        return userRepository.findByRol(rol);
    }

    @Override
    public User buscarPorEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }
}
