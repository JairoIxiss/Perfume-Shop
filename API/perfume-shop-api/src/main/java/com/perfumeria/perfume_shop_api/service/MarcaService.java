package com.perfumeria.perfume_shop_api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.perfumeria.perfume_shop_api.model.Marca;
import com.perfumeria.perfume_shop_api.repository.IMarcaRepository;

@Service
public class MarcaService implements IMarcaService{
    @Autowired
    private IMarcaRepository marcaRepository;

    @Override
    public void guardarMarca(Marca marca) {
        marcaRepository.save(marca);
    }

    @Override
    public Marca buscarMarca(Long id_marca) {
        return marcaRepository.findById(id_marca).orElse(null);
    }

    @Override
    public List<Marca> traerMarcas() {
        return marcaRepository.findAll();
    }

    @Override
    public void eliminarMarca(Long id_marca) {
        marcaRepository.deleteById(id_marca);
    }

    @Override
    public Marca editarMarca(Long id_marca, Marca nuevosDatos) {
        Marca marcaExistente = marcaRepository.findById(id_marca).orElse(null);

        marcaExistente.setNombreMarca(nuevosDatos.getNombreMarca());
        marcaExistente.setDescripcion(nuevosDatos.getDescripcion());

        return marcaRepository.save(marcaExistente);
    }

    @Override
    public Marca findByNombreMarca(String nombreMarca) {
        return marcaRepository.findByNombreMarca(nombreMarca);
    }
    
}
