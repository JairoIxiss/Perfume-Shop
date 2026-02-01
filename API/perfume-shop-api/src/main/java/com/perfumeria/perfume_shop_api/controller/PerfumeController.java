package com.perfumeria.perfume_shop_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.perfumeria.perfume_shop_api.model.Perfume;
import com.perfumeria.perfume_shop_api.model.enums.Concentracion;
import com.perfumeria.perfume_shop_api.model.enums.Genero;
import com.perfumeria.perfume_shop_api.service.IPerfumeService;

@RestController
@RequestMapping("/perfume")
@CrossOrigin(origins = "*")
public class PerfumeController {

    @Autowired
    private IPerfumeService perfumeService;

    @PostMapping("/crear")
    public String crearPerfume(@RequestBody Perfume perfume){
        perfumeService.guardarPerfume(perfume);
        return"Perfume creado correctamente";
    }

    @GetMapping("/traer/{id}")
    public Perfume traerPerfumePorId(@PathVariable Long id){
        return perfumeService.buscarPorID(id);
    }

    @GetMapping("/traer")
    public List<Perfume> traerPerfumes(){
        return perfumeService.traerPerfumes();
    }

    @PutMapping("/editar/{id}")
    public Perfume editarPerfume(@PathVariable Long id, @RequestBody Perfume nuevosDatos){
        perfumeService.editarPerfume(id, nuevosDatos);
        return perfumeService.buscarPorID(id);
    }

    @DeleteMapping("/eliminar/{id}")
    public String eliminarPerfume (@PathVariable Long id){
        perfumeService.eliminarPerfume(id);
        return "Perfume eliminado correctamente";
    }

    @GetMapping("/traer/por-nombre/")
    public List<Perfume> buscarPorNombre(@RequestParam String nombre){
        return perfumeService.buscarPorNombre(nombre);
    }

    @GetMapping("/traer/por-categoria/")
    public List<Perfume> buscarPorCategoria(@RequestParam String Categoria){
        return perfumeService.buscarPorCategoria(Categoria);
    }

    @GetMapping("/traer/por-genero/")
    public List<Perfume> buscarPorGenero(@RequestParam Genero genero){
        return perfumeService.buscarPorGenero(genero);
        
    }

    @GetMapping("/traer/por-concentracion/")
    public List<Perfume> buscarPorConcentracion(@RequestParam Concentracion concentracion){
        return perfumeService.buscarPorConcentracion(concentracion);
    }

    @GetMapping("/traer/por-marca/{idMarca}")
    public List<Perfume> buscarPorIdMarca(@PathVariable Long idMarca){
        return perfumeService.buscarPorIdMarca(idMarca);
        
    }

    @GetMapping("/traer/")
    public List<Perfume> buscarPorRangoPrecio(@RequestParam Double precioMin, @RequestParam Double precioMax){
        return perfumeService.buscarPorRangoPrecio(precioMin, precioMax);
    }

    @GetMapping("/traer/por-stock/")
    public List<Perfume> buscarPorStockMayorA(@RequestParam Integer stock){
        return perfumeService.buscarConStockMayorA(stock);
        
    }

    @GetMapping("/traer/por-volumen/")
    public List<Perfume> buscarPorVolumen(@RequestParam String volumen){
        return perfumeService.buscarPorVolumen(volumen);
    }

    @GetMapping("/existencia/")
    public boolean existenciaPorNombre(@RequestParam String nombrePerfume){
        return perfumeService.existenciaPorNombre(nombrePerfume);
    }

    @GetMapping("/traer/ordenados-precio-desc/")
    public List<Perfume> traerTodosOrdenadosPorPrecioDesc(){
        return perfumeService.traerTodosOrdenadosPorPrecioDesc();
    }

    @GetMapping("/traer/ordenados-precio-asc/")
    public List<Perfume> traerTodosOrdenadosPorPrecioAsc(){
        return perfumeService.traerTodosOrdenadosPorPrecioAsc();
    }   

    @GetMapping("/traer/por-genero-marca/")
    public List<Perfume> buscarPorGeneroYMarcaId(@RequestParam Genero genero, @RequestParam Long marcaId){
        return perfumeService.buscarPorGeneroYMarcaId(genero, marcaId);
    }
}
