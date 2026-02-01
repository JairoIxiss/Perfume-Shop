package com.perfumeria.perfume_shop_api.service;

import java.util.List;

import com.perfumeria.perfume_shop_api.model.Perfume;
import com.perfumeria.perfume_shop_api.model.enums.Concentracion;
import com.perfumeria.perfume_shop_api.model.enums.Genero;

public interface IPerfumeService {
    public void guardarPerfume(Perfume perfume);

    public Perfume buscarPorID(Long idPerfume);

    public List<Perfume> traerPerfumes();

    public void eliminarPerfume(Long idPerfume);

    public Perfume editarPerfume(Long idPerfume, Perfume nuevosDatos);


    public List<Perfume> buscarPorNombre(String nombrePerfume);

    public List<Perfume> buscarPorCategoria(String categoria);

    public List<Perfume> buscarPorGenero(Genero genero);

    public List<Perfume> buscarPorConcentracion(Concentracion concentracion);

    public List<Perfume> buscarPorIdMarca(Long idMarca);

    public List<Perfume> buscarPorRangoPrecio(Double precioMin, Double precioMax);

    public List<Perfume> buscarConStockMayorA(Integer stock);

    public List<Perfume> buscarPorVolumen(String volumen);

    public boolean existenciaPorNombre(String nombrePerfume);

    public List<Perfume> traerTodosOrdenadosPorPrecioDesc();

    public List<Perfume> traerTodosOrdenadosPorPrecioAsc();

    public List<Perfume> buscarPorGeneroYMarcaId(Genero genero, Long marcaId);
    
}
