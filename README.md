# BOM START

**Proyecto Integrador del Ciclo 3**

BOM START es una plantilla academica para desarrollar el proyecto integrador del ciclo 3. Articula requerimientos, base de datos y programacion web server-side en una misma solucion funcional.

El proyecto integra la linea curricular:

```text
REQ -> BD1 -> LP1
```

## Cursos Integrados

* **REQ - Ingenieria de Requerimientos:** especificacion SRS documentada, validada y trazable.
* **BD1 - Administracion de Base de Datos I:** base de datos relacional implementada y validada.
* **LP1 - Lenguaje de Programacion I:** aplicacion web server-side completa con MVC, ORM, CRUD y autenticacion basica.

## Producto Integrador

El producto final del ciclo es una aplicacion web funcional que:

* Parte de una especificacion de requerimientos de software.
* Usa una base de datos relacional modelada e implementada en BD1.
* Implementa una aplicacion web server-side en LP1.
* Mantiene trazabilidad entre requerimientos, datos y funcionalidades.

## Estructura

```text
bomstart/
|-- .github/workflows/  - despliegue automatico a GitHub Pages
|-- req/                - entregables de Ingenieria de Requerimientos
|-- bd1/                - entregables de Administracion de Base de Datos I
|-- lp1/                - entregables de Lenguaje de Programacion I
|-- docs/               - documentacion MkDocs del proyecto integrador
|-- mkdocs.yml          - configuracion del sitio
`-- README.md           - onboarding del proyecto
```

## Documentacion

La documentacion se mantiene en [`docs/`](docs/) y se publica automaticamente con GitHub Actions en la rama `gh-pages`.

Cada curso tiene su propia seccion:

```text
docs/req/index.md
docs/bd1/index.md
docs/lp1/index.md
```

## Despliegue

El workflow ubicado en `.github/workflows/deploy.yml` instala MkDocs en GitHub Actions y ejecuta:

```bash
mkdocs gh-deploy --force
```

Para publicar cambios, basta con subirlos a la rama `main`.

## Uso por Grupos

1. Clonar o crear un repositorio desde esta plantilla.
2. Actualizar el README con el nombre del grupo y proyecto asignado.
3. Completar los entregables en `req/`, `bd1/` y `lp1/`.
4. Mantener la documentacion publica en `docs/`.
5. Publicar GitHub Pages usando el workflow incluido.
