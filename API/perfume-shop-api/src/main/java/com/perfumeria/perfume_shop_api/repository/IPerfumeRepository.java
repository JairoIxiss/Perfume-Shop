package com.perfumeria.perfume_shop_api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.perfumeria.perfume_shop_api.model.Perfume;
import com.perfumeria.perfume_shop_api.model.enums.Concentracion;
import com.perfumeria.perfume_shop_api.model.enums.Genero;

@Repository
public interface IPerfumeRepository extends JpaRepository<Perfume, Long>{
    Optional<Perfume> findByIdPerfume(Long idPerfume);
    
    List<Perfume> findByNombrePerfumeContaining(String nombrePerfume);

    List<Perfume> findByCategoria(String categoria);

    List<Perfume> findByGenero(Genero genero);

    List<Perfume> findByConcentracion(Concentracion concentracion);

    List<Perfume> findByMarca_idMarca(Long idMarca);

    List<Perfume> findByPrecioBetween(Double precioMin, Double precioMax);

    List<Perfume> findByStockGreaterThan(Integer stock);

    List<Perfume> findByVolumen(String volumen);

    boolean existsByNombrePerfume(String nombrePerfume);

    List<Perfume> findAllByOrderByPrecioDesc();

    List<Perfume> findAllByOrderByPrecioAsc();
    
    List<Perfume> findByGeneroAndMarca_idMarca(Genero genero, Long idMarca);
}
