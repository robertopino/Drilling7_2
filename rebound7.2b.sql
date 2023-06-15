-- Rebound 7_2
-- 1.- Seleccione todos los estudiantes que sean mayores de 25 años.

select * from estudiantes where edad > 25;

-- 2.- Seleccione todos los estudiantes, y ordene el resultado reflejando el apellido en forma
-- descendente.

select * from estudiantes order by apellidos desc;

-- 3.- Seleccione todos los cursos disponibles.

select * from cursos;