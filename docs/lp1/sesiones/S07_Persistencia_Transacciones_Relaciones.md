# S7 - Persistencia, transacciones y relaciones básicas

## 1. Introducción

Tiempo: 20 min.

### 1.1 Propósito

Implementar persistencia de datos y relaciones básicas 1:1 y 1:N usando ORM o acceso nativo según la tecnología definida.

### 1.2 Resultado de aprendizaje

El estudiante conecta el módulo MVC con la base y registra datos relacionados.

### 1.3 Producto de sesión

Módulo persistente con operaciones transaccionales y relaciones básicas.

### 1.4 Motivación de la sesión

La aplicación deja de usar datos temporales y empieza a guardar información real.

### 1.5 Ubicación en el curso

Sesión del desarrollo progresivo del Sistema Web MVC Empresarial.

## 2. Explica

Tiempo: 25 min.

### 2.1 Conceptos clave

- Persistencia
- ORM
- Repositorio
- Servicio
- Transacción
- Relación 1:1
- Relación 1:N
- Clave foránea
- Validación servidor

### 2.2 Arquitectura de la sesión

`mermaid
flowchart TB
    A[REQ: requerimientos y reglas] --> B[LP1: módulo web]
    C[BD1: tablas y consultas] --> B
    B --> D[Prueba funcional]
    D --> E[Producto integrador]
`

### 2.3 Flujo de trabajo

1. Revisar modelo BD1
2. Configurar conexión
3. Mapear entidad
4. Crear repositorio
5. Crear servicio
6. Registrar datos
7. Consultar datos
8. Validar errores
9. Probar relación

### 2.4 Errores frecuentes y diagnóstico

| Problema | Causa probable | Solución |
|---|---|---|
| El módulo no responde al requerimiento | Se programó sin trazabilidad | Revisar historias, reglas y criterios de aceptación |
| La aplicación falla con datos reales | No se revisó BD1 | Alinear campos, relaciones y restricciones |
| Todo queda en el controlador | No se separaron responsabilidades | Mover reglas a servicios y datos a repositorios |
| No hay evidencia de prueba | Solo se programó el caso feliz | Probar errores, validaciones y flujo completo |

## 3. Aplica: actividad práctica guiada

Tiempo: 2h.

### 3.1 Desarrollo guiado

1. Revisar modelo BD1
2. Configurar conexión
3. Mapear entidad
4. Crear repositorio
5. Crear servicio
6. Registrar datos
7. Consultar datos
8. Validar errores
9. Probar relación

### 3.2 Evidencia de integración

| Elemento | Relación con el proyecto integrador | Evidencia |
|---|---|---|
| Requerimiento | Historia, caso de uso o regla que implementa | |
| Datos | Tabla, relación o consulta que usa | |
| Aplicación | Ruta, controlador, vista o servicio | |

### 3.3 Cierre de laboratorio

Registrar cambios, pruebas, errores corregidos y pendientes del módulo.

## 4. Crea: actividad autónoma

Tiempo: 2h fuera del aula.

### 4.1 Plantilla de evidencia individual

`	ext
S##_LP1_Equipo##_ApellidoNombre.pdf
`

### 4.2 Trabajo autónomo realizado

1. Implementar persistencia básica
2. Probar registro
3. Probar consulta
4. Documentar configuración
5. Relacionar con requerimiento

### 4.3 Evidencia técnica

Incluye código relevante, capturas, rutas, pruebas y relación con REQ/BD1.

### 4.4 Error o hallazgo

Describe un error técnico encontrado y cómo lo corregiste.

### 4.5 Reflexión técnica breve

Explica cómo esta sesión mejora la aplicación MVC del proyecto integrador.

## 5. Cierre evaluativo

Tiempo: 20 min.

### 5.1 Resultados esperados

- Módulo o mejora implementada.
- Evidencia técnica verificable.
- Integración con REQ y BD1 explicada.

### 5.2 Evidencia del producto de sesión

Módulo persistente con operaciones transaccionales y relaciones básicas.

### 5.3 Preguntas de defensa y reflexión

1. ¿Qué tabla usas?
2. ¿Qué relación implementaste?
3. ¿Dónde está el repositorio?
4. ¿Qué validación está en servicio?
5. ¿Qué prueba hiciste?

### 5.4 Rúbrica de evaluación

| Dimensión | Peso | 3 - Logro destacado | 2 - Logro | 1 - Proceso | 0 - Inicio | Puntuación obtenida |
|---|---:|---|---|---|---|---:|
| 1. Implementación | 2 | Funcional, clara y alineada al requerimiento. | Funcional con detalles menores. | Parcial o incompleta. | No funciona. | |
| 2. Arquitectura | 2 | Separa capas y responsabilidades correctamente. | Separación suficiente. | Mezcla responsabilidades. | Sin arquitectura clara. | |
| 3. Datos | 2 | Usa modelo/consultas de BD1 correctamente. | Usa datos principales. | Uso parcial o débil. | No integra datos. | |
| 4. Integración | 2 | Relación clara con REQ y BD1. | Relación general. | Relación débil. | No integra. | |
| 5. Evidencia | 1 | Clara y verificable. | Suficiente. | Incompleta. | No evidencia. | |
| 6. Defensa | 1 | Explica decisiones con criterio. | Explica adecuadamente. | Explica parcialmente. | No sustenta. | |

Puntuación acumulada = suma de (Peso * Puntuación obtenida) = ____.

Nota final = (Puntuación acumulada / 30) * 20 = ____.
