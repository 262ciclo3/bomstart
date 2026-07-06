# S14 - Integración física y validación funcional

## 1. Introducción

Tiempo: 20 min.

### 1.1 Propósito

Validar que scripts, datos, restricciones y consultas pueden ejecutarse desde cero y producir resultados correctos.

### 1.2 Resultado de aprendizaje

El estudiante demuestra reproducibilidad y funcionamiento de la base de datos final.

### 1.3 Producto de sesión

Base de datos física validada funcionalmente.

### 1.4 Motivación de la sesión

Una base útil debe poder reconstruirse, poblarse, consultarse y verificarse.

### 1.5 Ubicación en el curso

Sesión del desarrollo progresivo de la base de datos del proyecto integrador.

## 2. Explica

Tiempo: 25 min.

### 2.1 Conceptos clave

- Reproducibilidad
- Script maestro
- Validación funcional
- Integridad referencial
- Datos de prueba
- Resultado esperado
- Checklist
- Evidencia

### 2.2 Arquitectura de la sesión

`mermaid
flowchart TB
    A[REQ: requerimientos y reglas] --> B[BD1: artefacto de datos]
    B --> C[Validación técnica]
    C --> D[LP1: consumo desde la aplicación]
`

### 2.3 Flujo de trabajo

1. Preparar script maestro
2. Ejecutar DDL
3. Ejecutar DML
4. Ejecutar consultas
5. Validar restricciones
6. Registrar resultados
7. Corregir errores
8. Preparar demo

### 2.4 Errores frecuentes y diagnóstico

| Problema | Causa probable | Solución |
|---|---|---|
| El script o consulta no responde al requerimiento | Se trabajó sin trazabilidad | Revisar SRS y matriz de trazabilidad |
| La base no se puede probar | Faltan datos o instrucciones | Agregar datos de prueba y pasos de ejecución |
| LP1 no puede consumir los datos | Nombres o relaciones poco claras | Alinear con diccionario y formularios |
| Se pierde integridad | Faltan claves o restricciones | Revisar PK, FK y reglas de negocio |

## 3. Aplica: actividad práctica guiada

Tiempo: 2h.

### 3.1 Desarrollo guiado

1. Preparar script maestro
2. Ejecutar DDL
3. Ejecutar DML
4. Ejecutar consultas
5. Validar restricciones
6. Registrar resultados
7. Corregir errores
8. Preparar demo

### 3.2 Evidencia de integración

| Elemento | Relación con el proyecto integrador | Evidencia |
|---|---|---|
| Requerimiento | Qué necesidad atiende | |
| Base de datos | Tabla, consulta, regla o script | |
| LP1 | Pantalla, módulo o servicio que lo consume | |

### 3.3 Cierre de laboratorio

Registrar scripts, resultados, errores corregidos y decisiones de diseño.

## 4. Crea: actividad autónoma

Tiempo: 2h fuera del aula.

### 4.1 Plantilla de evidencia individual

`	ext
S##_BD1_Equipo##_ApellidoNombre.pdf
`

### 4.2 Trabajo autónomo realizado

1. Probar base desde cero
2. Documentar pasos
3. Capturar resultados
4. Validar reportes
5. Preparar sustentación

### 4.3 Evidencia técnica

Incluye scripts, capturas de ejecución, tablas, resultados y relación con REQ/LP1.

### 4.4 Error o hallazgo

Describe un error de datos o SQL y cómo lo corregiste.

### 4.5 Reflexión técnica breve

Explica cómo esta sesión fortalece la base de datos del proyecto integrador.

## 5. Cierre evaluativo

Tiempo: 20 min.

### 5.1 Resultados esperados

- Artefacto de datos construido.
- Evidencia técnica verificable.
- Integración con REQ y LP1 explicada.

### 5.2 Evidencia del producto de sesión

Base de datos física validada funcionalmente.

### 5.3 Preguntas de defensa y reflexión

1. ¿Cómo reconstruyes la base?
2. ¿Qué prueba demuestra integridad?
3. ¿Qué consulta valida una regla?
4. ¿Qué necesita LP1?
5. ¿Qué error corregiste?

### 5.4 Rúbrica de evaluación

| Dimensión | Peso | 3 - Logro destacado | 2 - Logro | 1 - Proceso | 0 - Inicio | Puntuación obtenida |
|---|---:|---|---|---|---|---:|
| 1. Producto de datos | 2 | Correcto, completo y alineado al modelo. | Funcional con detalles menores. | Parcial o incompleto. | No evidencia producto. | |
| 2. SQL/modelado | 2 | Aplica conceptos con precisión. | Aplica conceptos principales. | Aplicación limitada. | No aplica. | |
| 3. Integridad/calidad | 2 | Mantiene consistencia y reglas claras. | Calidad suficiente. | Calidad parcial. | Sin calidad verificable. | |
| 4. Integración | 2 | Relación clara con REQ y LP1. | Relación general. | Relación débil. | No integra. | |
| 5. Evidencia | 1 | Clara y verificable. | Suficiente. | Incompleta. | No evidencia. | |
| 6. Defensa | 1 | Explica decisiones con criterio. | Explica adecuadamente. | Explica parcialmente. | No sustenta. | |

Puntuación acumulada = suma de (Peso * Puntuación obtenida) = ____.

Nota final = (Puntuación acumulada / 30) * 20 = ____.
