# S9 - Reglas de negocio

## 1. Introducción

Tiempo: 20 min.

### 1.1 Propósito

Documentar reglas de negocio que gobiernan operaciones, restricciones, cálculos y decisiones del sistema.

### 1.2 Resultado de aprendizaje

El estudiante identifica reglas de negocio y las vincula con requerimientos, datos y validaciones.

### 1.3 Producto de sesión

Catálogo de reglas de negocio trazable.

### 1.4 Motivación de la sesión

Las reglas de negocio son el corazón del comportamiento del sistema: definen qué se permite, qué se calcula y qué se rechaza.

### 1.5 Ubicación en el curso

Esta sesión continúa el desarrollo progresivo del proyecto integrador y aporta evidencias para el producto de la unidad correspondiente.

## 2. Explica

Tiempo: 25 min.

### 2.1 Conceptos clave

- Regla de negocio
- Restricción
- Cálculo
- Condición
- Excepción
- Validación
- Política
- Trazabilidad
- Impacto en datos
- Impacto en aplicación

### 2.2 Arquitectura de la sesión

`mermaid
flowchart TB
    A[Insumos del proyecto] --> B[Trabajo de la sesión]
    B --> C[Artefacto técnico]
    C --> D[Validación o prueba]
    D --> E[Integración REQ-BD1-LP1]
`

### 2.3 Flujo de trabajo

1. Revisar historias y casos de uso
2. Identificar reglas explícitas
3. Identificar reglas implícitas
4. Clasificar reglas
5. Redactar reglas claras
6. Relacionar con tablas/columnas
7. Relacionar con validaciones LP1
8. Registrar excepciones

### 2.4 Errores frecuentes y diagnóstico

| Problema | Causa probable | Solución |
|---|---|---|
| El avance no se conecta con el proyecto | Se trabajó como ejercicio aislado | Relacionar cada artefacto con requerimientos, datos o módulo web |
| La evidencia no permite verificar el trabajo | Faltan capturas, tablas o explicación | Agregar evidencias breves y legibles |
| Se cambian decisiones sin registrar | Falta control de cambios | Documentar observación, decisión y responsable |
| La integración queda débil | No se revisaron los otros cursos | Usar el SRS, modelo de datos o aplicación como referencia |

## 3. Aplica: actividad práctica guiada

Tiempo: 2h.

### 3.1 Desarrollo guiado

1. Revisar historias y casos de uso
2. Identificar reglas explícitas
3. Identificar reglas implícitas
4. Clasificar reglas
5. Redactar reglas claras
6. Relacionar con tablas/columnas
7. Relacionar con validaciones LP1
8. Registrar excepciones

### 3.2 Evidencia de integración

| Elemento | Relación con el proyecto integrador | Evidencia |
|---|---|---|
| Requerimientos | Qué necesidad o regla atiende | |
| Datos | Qué entidad, tabla, columna o consulta usa | |
| Aplicación | Qué pantalla, ruta, módulo o prueba impacta | |

### 3.3 Cierre de laboratorio

El equipo registra decisiones, pendientes y evidencias para continuar la siguiente sesión.

## 4. Crea: actividad autónoma

Tiempo: 2h fuera del aula.

### 4.1 Plantilla de evidencia individual

Entrega un PDF con el nombre correspondiente a la sesión y curso, por ejemplo:

`	ext
S##_CURSO_Equipo##_ApellidoNombre.pdf
`

### 4.2 Trabajo autónomo realizado

1. Documentar al menos ocho reglas
2. Vincular reglas con requisitos
3. Vincular reglas con BD1
4. Vincular reglas con LP1
5. Preparar evidencia para U2

### 4.3 Evidencia técnica

Incluye capturas, tablas, código, diagramas o resultados necesarios para demostrar el avance de la sesión y el aporte individual.

### 4.4 Error o hallazgo

Describe un problema técnico o metodológico encontrado, cómo lo diagnosticaste y cómo lo corregiste.

### 4.5 Reflexión técnica breve

Explica en 5 a 8 líneas cómo esta sesión mejora el producto integrador.

## 5. Cierre evaluativo

Tiempo: 20 min.

### 5.1 Resultados esperados

- Producto de sesión construido.
- Evidencia individual organizada.
- Relación con el proyecto integrador explicada.
- Pendientes registrados para la siguiente sesión.

### 5.2 Evidencia del producto de sesión

Catálogo de reglas de negocio trazable.

### 5.3 Preguntas de defensa y reflexión

1. ¿Qué regla afecta una transacción?
2. ¿Qué regla se valida en BD1?
3. ¿Qué regla se valida en LP1?
4. ¿Qué excepción existe?
5. ¿Cómo se prueba?

### 5.4 Rúbrica de evaluación

| Dimensión | Peso | 3 - Logro destacado | 2 - Logro | 1 - Proceso | 0 - Inicio | Puntuación obtenida |
|---|---:|---|---|---|---|---:|
| 1. Producto técnico | 2 | Completo, correcto y alineado al objetivo. | Funcional con detalles menores. | Parcial o incompleto. | No evidencia producto. | |
| 2. Aplicación conceptual | 2 | Usa conceptos de la sesión con precisión. | Usa conceptos principales. | Uso limitado o confuso. | No aplica conceptos. | |
| 3. Integración | 2 | Relación clara con REQ, BD1 y LP1 según corresponda. | Relación general. | Relación débil. | No integra. | |
| 4. Evidencia y pruebas | 2 | Evidencia verificable, ordenada y suficiente. | Evidencia suficiente. | Evidencia incompleta. | No evidencia. | |
| 5. Hallazgo técnico | 1 | Analiza problema y solución con criterio. | Presenta hallazgo básico. | Hallazgo superficial. | No presenta. | |
| 6. Defensa y reflexión | 1 | Explica decisiones con claridad. | Explica adecuadamente. | Explica parcialmente. | No sustenta. | |

Puntuación acumulada = suma de (Peso * Puntuación obtenida) = ____.

Nota final = (Puntuación acumulada / 30) * 20 = ____.