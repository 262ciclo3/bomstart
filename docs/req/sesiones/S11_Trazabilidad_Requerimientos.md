# S11 - Trazabilidad de requerimientos

## 1. Introducción

Tiempo: 20 min.

### 1.1 Propósito

Construir la matriz de trazabilidad entre problema, requerimientos, reglas, prototipos, datos, módulos y pruebas.

### 1.2 Resultado de aprendizaje

El estudiante verifica cobertura y consistencia del proyecto mediante trazabilidad hacia BD1 y LP1.

### 1.3 Producto de sesión

Matriz de trazabilidad del proyecto.

### 1.4 Motivación de la sesión

La trazabilidad permite demostrar que el sistema no fue construido por intuición sino desde requerimientos verificables.

### 1.5 Ubicación en el curso

Esta sesión continúa el desarrollo progresivo del proyecto integrador y aporta evidencias para el producto de la unidad correspondiente.

## 2. Explica

Tiempo: 25 min.

### 2.1 Conceptos clave

- Trazabilidad
- Cobertura
- Requerimiento
- Regla
- Pantalla
- Tabla
- Módulo
- Prueba
- Estado
- Control de cambios

### 2.2 Arquitectura de la sesión

`mermaid
flowchart TB
    A[Insumos del proyecto] --> B[Trabajo de la sesión]
    B --> C[Artefacto técnico]
    C --> D[Validación o prueba]
    D --> E[Integración REQ-BD1-LP1]
`

### 2.3 Flujo de trabajo

1. Listar requerimientos
2. Vincular reglas
3. Vincular prototipos
4. Vincular tablas y columnas
5. Vincular módulos LP1
6. Vincular pruebas
7. Detectar vacíos
8. Registrar cambios

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

1. Listar requerimientos
2. Vincular reglas
3. Vincular prototipos
4. Vincular tablas y columnas
5. Vincular módulos LP1
6. Vincular pruebas
7. Detectar vacíos
8. Registrar cambios

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

1. Construir matriz de trazabilidad
2. Identificar requerimientos sin implementación
3. Identificar tablas sin requerimiento
4. Identificar vistas sin requisito
5. Preparar evaluación U2

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

Matriz de trazabilidad del proyecto.

### 5.3 Preguntas de defensa y reflexión

1. ¿Qué requerimiento no tiene pantalla?
2. ¿Qué tabla no tiene requerimiento?
3. ¿Qué módulo implementa RF-01?
4. ¿Qué prueba verifica un RNF?
5. ¿Qué cambió y por qué?

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