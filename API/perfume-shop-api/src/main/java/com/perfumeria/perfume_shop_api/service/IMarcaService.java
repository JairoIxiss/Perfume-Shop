package com.perfumeria.perfume_shop_api.service;

import java.util.List;

import com.perfumeria.perfume_shop_api.model.Marca;

public interface IMarcaService {
    public void guardarMarca(Marca marca);

    public Marca buscarMarca(Long id_marca);

    public List<Marca> traerMarcas();

    public void eliminarMarca(Long id_marca);

    public Marca editarMarca(Long id_marca, Marca nuevosDatos);

    public Marca findByNombreMarca(String nombreMarca);
}
