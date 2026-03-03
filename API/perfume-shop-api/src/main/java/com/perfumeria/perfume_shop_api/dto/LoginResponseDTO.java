package com.perfumeria.perfume_shop_api.dto;

import com.perfumeria.perfume_shop_api.model.enums.Rol;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor @AllArgsConstructor
public class LoginResponseDTO {
    private String token;
    private String email;
    private Rol rol;
}
