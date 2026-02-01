package com.perfumeria.perfume_shop_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perfumeria.perfume_shop_api.model.Marca;
import com.perfumeria.perfume_shop_api.service.IMarcaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/marca")
@CrossOrigin(origins = "*")
public class MarcaController {
    @Autowired
    private IMarcaService marcaService;

    @PostMapping("/crear")
    public String crearMarca(@RequestBody Marca marca) {
        marcaService.guardarMarca(marca);
        return "Marca creada correctamente";
    }

    @GetMapping("/{id}")
    public Marca marcaPorId(@PathVariable Long id) {
        return marcaService.buscarMarca(id);
    }

    @GetMapping("/buscarPorNombre")
    public Marca marcaPorNombre(@RequestParam String nombreMarca) {
        return marcaService.findByNombreMarca(nombreMarca);
    }

    @GetMapping("/todas")
    public List<Marca> traerMarcas() {
        return marcaService.traerMarcas();
    }

    @PutMapping("/editar/{id}")
    public Marca editMarca(@PathVariable Long id, @RequestBody Marca nuevosDatos) {
        marcaService.editarMarca(id, nuevosDatos);
        return marcaService.buscarMarca(id);
    }

    @DeleteMapping("/eliminar/{id}")
    public String eliminarMarca(@PathVariable Long id) {
        marcaService.eliminarMarca(id);
        return "Marca eliminada correctamente";
    }
}
