package com.perfumeria.perfume_shop_api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.perfumeria.perfume_shop_api.model.User;
import java.util.List;
import com.perfumeria.perfume_shop_api.model.enums.Rol;


@Repository
public interface IUserRepository extends JpaRepository <User, Long>{
    Optional<User> findByIdUser(Long idUser);
    
    Optional<User> findByNombreContaining(String nombre);
    
    boolean existsByNombre(String nombre);

    boolean existsByEmail(String email);

    List<User> findByRol(Rol rol);
}
