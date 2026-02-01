package com.perfumeria.perfume_shop_api.model;

import com.perfumeria.perfume_shop_api.model.enums.Concentracion;
import com.perfumeria.perfume_shop_api.model.enums.Genero;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "perfumes")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Perfume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPerfume;
    private String nombrePerfume;
    private String descripcion;
    private Double precio;
    private Integer stock;
    @Enumerated(EnumType.STRING)
    private Concentracion concentracion;
    @Enumerated(EnumType.STRING)
    private Genero genero;
    private String categoria;
    private String volumen;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_marca")
    private Marca marca;
}
