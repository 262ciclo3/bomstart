# S11 - Bases de datos no relacionales

## 1. Introducción

Tiempo: 20 min.

### 1.1 Propósito

Comparar el modelo relacional del proyecto con alternativas NoSQL para justificar la elección tecnológica según el dominio.

### 1.2 Resultado de aprendizaje

El estudiante analiza cuándo conviene un modelo NoSQL y cuándo mantener el modelo relacional.

### 1.3 Producto de sesión

Análisis comparativo NoSQL aplicado al dominio del proyecto.

### 1.4 Motivación de la sesión

NoSQL no reemplaza automáticamente lo relacional; se elige según estructura, consultas, volumen y flexibilidad.

### 1.5 Ubicación en el curso

Sesión del desarrollo progresivo de la base de datos del proyecto integrador.

## 2. Explica

Tiempo: 25 min.

### 2.1 Conceptos clave

- NoSQL
- Documento
- Clave-valor
- Colección
- Desnormalización
- Flexibilidad
- Consistencia
- Caso de uso
- Comparación técnica

### 2.2 Arquitectura de la sesión

`mermaid
flowchart TB
    A[REQ: requerimientos y reglas] --> B[BD1: artefacto de datos]
    B --> C[Validación técnica]
    C --> D[LP1: consumo desde la aplicación]
`

### 2.3 Flujo de trabajo

1. Revisar dominio
2. Identificar datos flexibles
3. Comparar relacional vs documento
4. Evaluar consultas
5. Evaluar integridad
6. Justificar decisión
7. Documentar conclusión

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

1. Revisar dominio
2. Identificar datos flexibles
3. Comparar relacional vs documento
4. Evaluar consultas
5. Evaluar integridad
6. Justificar decisión
7. Documentar conclusión

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

1. Elaborar comparación
2. Proponer caso NoSQL si aplica
3. Justificar por qué se mantiene relacional
4. Relacionar con LP1
5. Preparar evaluación U2

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

Análisis comparativo NoSQL aplicado al dominio del proyecto.

### 5.3 Preguntas de defensa y reflexión

1. ¿Qué dato podría ser documento?
2. ¿Qué perderías sin FK?
3. ¿Qué gana el modelo relacional?
4. ¿Qué consulta se complicaría?
5. ¿Cuál es tu conclusión?

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
