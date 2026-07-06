# S10 - Autenticación, autorización y sesiones

## 1. Introducción

Tiempo: 20 min.

### 1.1 Propósito

Implementar control de acceso mediante autenticación, autorización básica y gestión de sesiones.

### 1.2 Resultado de aprendizaje

El estudiante protege rutas y funciones según roles o permisos definidos por el proyecto.

### 1.3 Producto de sesión

Sistema con autenticación, autorización básica y gestión de sesión.

### 1.4 Motivación de la sesión

No todo usuario debe acceder a todas las operaciones del sistema.

### 1.5 Ubicación en el curso

Sesión del desarrollo progresivo del Sistema Web MVC Empresarial.

## 2. Explica

Tiempo: 25 min.

### 2.1 Conceptos clave

- Autenticación
- Autorización
- Sesión
- Rol
- Login
- Logout
- Guard
- Middleware
- Ruta protegida
- Seguridad básica

### 2.2 Arquitectura de la sesión

`mermaid
flowchart TB
    A[REQ: requerimientos y reglas] --> B[LP1: módulo web]
    C[BD1: tablas y consultas] --> B
    B --> D[Prueba funcional]
    D --> E[Producto integrador]
`

### 2.3 Flujo de trabajo

1. Revisar stakeholders y roles
2. Crear usuario de prueba
3. Implementar login
4. Crear sesión
5. Proteger rutas
6. Implementar logout
7. Validar acceso
8. Registrar evidencia

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

1. Revisar stakeholders y roles
2. Crear usuario de prueba
3. Implementar login
4. Crear sesión
5. Proteger rutas
6. Implementar logout
7. Validar acceso
8. Registrar evidencia

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

1. Probar login
2. Probar ruta protegida
3. Probar rol
4. Documentar credenciales de prueba
5. Relacionar con RNF de seguridad

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

Sistema con autenticación, autorización básica y gestión de sesión.

### 5.3 Preguntas de defensa y reflexión

1. ¿Qué rol definiste?
2. ¿Qué ruta protegiste?
3. ¿Qué pasa sin sesión?
4. ¿Qué RNF cumple?
5. ¿Dónde se guarda usuario?

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
