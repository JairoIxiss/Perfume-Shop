package com.perfumeria.perfume_shop_api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor @AllArgsConstructor
public class RegisterRequestDTO {
    private String nombre;
    private String email;
    private String password;
}
