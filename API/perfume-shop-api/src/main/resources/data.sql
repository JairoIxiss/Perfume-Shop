SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE perfumes;
TRUNCATE TABLE marcas;
TRUNCATE TABLE user;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO marcas (id_marca, nombre_marca, descripcion) VALUES
(2, 'Dior', 'Casa de moda francesa de lujo fundada en 1946'),
(3, 'Chanel', 'Marca francesa de alta costura fundada por Coco Chanel'),
(4, 'Hugo Boss', 'Marca alemana de moda y fragancias'),
(5, 'Rabanne', 'Marca innovadora y vanguardista de moda y perfumería'),
(7, 'Jean Paul Gaultier', 'Marca francesa audaz, sensual y provocadora'),
(9, 'Valentino', 'Casa de moda italiana de lujo y elegancia sofisticada'),
(10, 'Parfums de Marly', 'Perfumería de lujo inspirada en la Francia del siglo XVIII'),
(11, 'Emporio Armani', 'Línea moderna y urbana de Giorgio Armani'),
(12, 'Tom Ford', 'Marca de lujo elegante y audaz'),
(13, 'Versace', 'Marca italiana audaz, glamurosa y llena de personalidad'),
(14, 'Giorgio Armani', 'Prestigiosa casa italiana de elegancia atemporal'),
(15, 'Tommy Hilfiger', 'Marca estadounidense clásica con toque moderno'),
(23, 'Yves Saint Laurent', 'Marca francesa sofisticada, audaz y vanguardista'),
(25, 'Dolce & Gabbana', 'Marca italiana de lujo con tradición mediterránea');

INSERT INTO perfumes (
    id_perfume,
    nombre_perfume,
    categoria,
    concentracion,
    descripcion,
    genero,
    precio,
    stock,
    volumen,
    id_marca
) VALUES
(2, 'Sauvage', 'Fresco', 'EAU_DE_PARFUM',
 'Fragancia fresca y especiada inspirada en espacios abiertos',
 'MASCULINO', 1250, 25, '100ml', 2),

(3, 'Invictus Parfum', 'Fresco', 'EAU_DE_PARFUM',
 'Fragancia fresca y especiada con carácter ganador',
 'MASCULINO', 2600, 10, '100ml', 5),

(5, 'Born In Roma Coral Fantasy', 'Fresco', 'EAU_DE_PARFUM',
 'Fragancia fresca y vibrante con matices afrutados',
 'MASCULINO', 2800, 25, '100ml', 9),

(6, 'Miss Dior', 'Fresco', 'EAU_DE_PARFUM',
 'Fragancia floral y elegante',
 'FEMENINO', 2250, 25, '100ml', 2),

(8, 'Y Iced Cologne', 'Fresco', 'EAU_DE_TOILETTE',
 'Perfume fresco e intenso a la vez',
 'MASCULINO', 3200, 10, '100ml', 23),

(9, 'The One For Men', 'Dulce', 'EAU_DE_PARFUM',
 'Aroma profundo y sofisticado para expertos',
 'MASCULINO', 2600, 10, '100ml', 25),

(10, 'Born In Roma Purple Melancholia', 'Fresco', 'EAU_DE_PARFUM',
 'Un perfume moderno y urbano que destaca',
 'MASCULINO', 3400, 10, '100ml', 9),

(11, 'Scandal Elixir', 'Dulce', 'PARFUM',
 'Un perfume potente y nocturno que te hará notar',
 'MASCULINO', 2900, 15, '100ml', 7);

 INSERT INTO user (id_user, nombre, email, password, rol) VALUES
 (1, 'Juan Pérez', 'juan@mail.com', '$2a$10$Ve5Dj.sZNI02P1ZoGi5IfuSUTbIz32cgOHMA1Xw8jQgneDrhCKTku', 'USER'),
 (3, 'Admin', 'admin@mail.com', '$2a$10$sOjLc.q57bBePWFqJ2sPMeyNPy8VIrPGXlgfWytzBX3YrHTmQoBr2', 'ADMIN'),
 (4, 'jairo', 'jairo@gmail.com', '$2a$10$SG71VPfFzlD4wpI5Fvlxn.u9ogQIgL/9/dGG/xjYn4G7xDKZa/6aq', 'USER');

 ALTER TABLE marcas AUTO_INCREMENT = 27;
 ALTER TABLE perfumes AUTO_INCREMENT = 14;
 ALTER TABLE user AUTO_INCREMENT = 5;