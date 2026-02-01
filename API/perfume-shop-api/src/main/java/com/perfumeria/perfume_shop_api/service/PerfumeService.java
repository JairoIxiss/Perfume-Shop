package com.perfumeria.perfume_shop_api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.perfumeria.perfume_shop_api.model.Perfume;
import com.perfumeria.perfume_shop_api.model.enums.Concentracion;
import com.perfumeria.perfume_shop_api.model.enums.Genero;
import com.perfumeria.perfume_shop_api.repository.IPerfumeRepository;

@Service
public class PerfumeService implements IPerfumeService {

    @Autowired
    private IPerfumeRepository perfumeRepository;

    @Override
    public void guardarPerfume(Perfume perfume) {
        perfumeRepository.save(perfume);
    }

    @Override
    public Perfume buscarPorID(Long idPerfume) {
        return perfumeRepository.findById(idPerfume).orElse(null);
    }

    @Override
    public List<Perfume> traerPerfumes() {
        return perfumeRepository.findAll();
    }

    @Override
    public void eliminarPerfume(Long idPerfume) {
        perfumeRepository.deleteById(idPerfume);
    }

    @Override
    public Perfume editarPerfume(Long idPerfume, Perfume nuevosDatos) {
        Perfume perfumeExistente = perfumeRepository.findById(idPerfume).orElse(null);

        perfumeExistente.setNombrePerfume(nuevosDatos.getNombrePerfume());
        perfumeExistente.setDescripcion(nuevosDatos.getDescripcion());
        perfumeExistente.setPrecio(nuevosDatos.getPrecio());
        perfumeExistente.setStock(nuevosDatos.getStock());
        perfumeExistente.setCategoria(nuevosDatos.getCategoria());
        perfumeExistente.setVolumen(nuevosDatos.getVolumen());
        perfumeExistente.setMarca(nuevosDatos.getMarca());

        return perfumeRepository.save(perfumeExistente);
    }

    @Override
    public List<Perfume> buscarPorNombre(String nombrePerfume) {
        return perfumeRepository.findByNombrePerfumeContaining(nombrePerfume);
    }

    @Override
    public List<Perfume> buscarPorCategoria(String categoria) {
        return perfumeRepository.findByCategoria(categoria);
    }

    @Override
    public List<Perfume> buscarPorGenero(Genero genero) {
        return perfumeRepository.findByGenero(genero);
    }

    @Override
    public List<Perfume> buscarPorConcentracion(Concentracion concentracion) {
        return perfumeRepository.findByConcentracion(concentracion);
    }

    @Override
    public List<Perfume> buscarPorIdMarca(Long idMarca) {
        return perfumeRepository.findByMarca_idMarca(idMarca);
    }

    @Override
    public List<Perfume> buscarPorRangoPrecio(Double precioMin, Double precioMax) {
        return perfumeRepository.findByPrecioBetween(precioMin, precioMax);
    }

    @Override
    public List<Perfume> buscarConStockMayorA(Integer stock) {
        return perfumeRepository.findByStockGreaterThan(stock);
    }

    @Override
    public List<Perfume> buscarPorVolumen(String volumen) {
        return perfumeRepository.findByVolumen(volumen);
    }

    @Override
    public boolean existenciaPorNombre(String nombrePerfume) {
        return perfumeRepository.existsByNombrePerfume(nombrePerfume);
    }

    @Override
    public List<Perfume> traerTodosOrdenadosPorPrecioDesc() {
        return perfumeRepository.findAllByOrderByPrecioDesc();
    }

    @Override
    public List<Perfume> traerTodosOrdenadosPorPrecioAsc() {
        return perfumeRepository.findAllByOrderByPrecioAsc();
    }

    @Override
    public List<Perfume> buscarPorGeneroYMarcaId(Genero genero, Long marcaId) {
        return perfumeRepository.findByGeneroAndMarca_idMarca(genero, marcaId);
    }

}
