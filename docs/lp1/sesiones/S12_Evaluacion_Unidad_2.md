# S12 - Evaluación Unidad 2: aplicación Web MVC

## 1. Introducción

Tiempo: 20 min.

### 1.1 Propósito

Evaluar la aplicación MVC con persistencia, relaciones, consultas, seguridad, validaciones y optimización básica.

### 1.2 Resultado de aprendizaje

El estudiante sustenta el sistema web MVC desarrollado, demuestra evidencias funcionales y explica su aporte individual.

### 1.3 Producto de sesión

Producto U2: aplicación Web MVC con persistencia, relaciones, consultas y control de acceso.

### 1.4 Motivación de la sesión

La evaluación revisa el sistema como producto integrado, no pantallas o controladores aislados.

## 2. Explica

Tiempo: 15 min.

### 2.1 Conceptos clave

- Sistema MVC integrado.
- Evidencia funcional.
- Integración con base de datos.
- Trazabilidad con requerimientos.
- Defensa técnica individual.

### 2.2 Arquitectura del producto evaluado

`mermaid
flowchart TB
    A[REQ: requerimientos] --> B[Aplicación MVC]
    C[BD1: base de datos] --> B
    B --> D[Pruebas y demo]
    D --> E[Sustentación]
`

### 2.3 Criterios mínimos de revisión

- Arquitectura MVC
- Persistencia
- Relaciones básicas y complejas
- Consultas/filtros/paginación
- Autenticación/autorización
- Validaciones servidor
- Manejo de errores
- Relación con REQ
- Base BD1 integrada
- Aporte individual

## 3. Aplica: evaluación práctica

Tiempo: 3h.

### 3.1 Preparar demostración

1. Ejecutar aplicación.
2. Mostrar estructura MVC.
3. Demostrar flujo principal.
4. Demostrar datos y consultas.
5. Demostrar seguridad o validaciones.
6. Explicar integración con REQ y BD1.
7. Sustentar aporte individual.

### 3.2 Ejecutar revisión base

El equipo demuestra funcionamiento, pruebas y evidencias del producto.

### 3.3 Demostración individual

Cada integrante explica qué implementó, qué probó y qué corregió.

## 4. Crea: evidencia individual

Tiempo: 4h fuera del aula.

### 4.1 Plantilla de evidencia individual

`	ext
S##_LP1_Equipo##_ApellidoNombre.pdf
`

### 4.2 Evidencia técnica

- Arquitectura MVC
- Persistencia
- Relaciones básicas y complejas
- Consultas/filtros/paginación
- Autenticación/autorización
- Validaciones servidor
- Manejo de errores
- Relación con REQ
- Base BD1 integrada
- Aporte individual

### 4.3 Error o hallazgo

Describe un problema encontrado y cómo fue corregido.

### 4.4 Reflexión técnica breve

Explica cómo el sistema MVC aporta al proyecto integrador.

## 5. Cierre evaluativo

Tiempo: 20 min.

### 5.1 Resultados esperados

- Sistema sustentado.
- Evidencias completas.
- Integración explicada.
- Observaciones registradas.

### 5.2 Evidencia del producto de sesión

Producto U2: aplicación Web MVC con persistencia, relaciones, consultas y control de acceso.

### 5.3 Preguntas de defensa y reflexión

1. ¿Qué módulo MVC está completo?
2. ¿Qué tabla consume?
3. ¿Qué consulta implementa?
4. ¿Qué ruta protegiste?
5. ¿Qué validación está en servidor?

### 5.4 Rúbrica de evaluación

| Dimensión | Peso | 3 - Logro destacado | 2 - Logro | 1 - Proceso | 0 - Inicio | Puntuación obtenida |
|---|---:|---|---|---|---|---:|
| 1. Producto integrado | 2 | Completo y funcional. | Funcional. | Parcial. | No evidencia. | |
| 2. Arquitectura/calidad | 2 | Capas claras, código ordenado y mantenible. | Calidad suficiente. | Calidad limitada. | Sin calidad. | |
| 3. Datos e integración | 2 | Integra base y requerimientos con claridad. | Integración general. | Integración débil. | No integra. | |
| 4. Evidencias/pruebas | 2 | Completas y verificables. | Suficientes. | Incompletas. | No presenta. | |
| 5. Aporte individual | 1 | Claro y verificable. | Suficiente. | Poco claro. | No evidencia. | |
| 6. Defensa técnica | 1 | Precisa y criteriosa. | Adecuada. | Parcial. | No sustenta. | |

Puntuación acumulada = suma de (Peso * Puntuación obtenida) = ____.

Nota final = (Puntuación acumulada / 30) * 20 = ____.
