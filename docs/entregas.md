# Plan de entregas

Referencia directa a la sección 15 de [`CLAUDE.md`](../CLAUDE.md). Este documento resume el
alcance por entrega y el criterio de cierre de cada una desde la perspectiva del repositorio.

## Entrega 1 — 13 de mayo de 2026 (documental + andamiaje)

**Alcance:**

- Documento académico completo (`CLAUDE.md`) con 17 secciones.
- Wireframes en Claude Design + prototipo interactivo.
- Mapa de navegación (Mermaid).
- Backlog con 12 HU en 4 épicas (sección 14).
- Release plan a 6 sprints (sección 15.1).
- **Estructura base del repositorio** (este punto) con placeholders mínimos.

**Criterio de cierre:**

- Repo accesible para los docentes con las carpetas `client/`, `server/`, `db/`, `docs/`.
- README profesional en la raíz que enmarca el estado del proyecto.
- Sin código funcional ni features implementadas.

## Entrega 2 — 25 de junio de 2026 (app funcional)

**Alcance previsto por sprint:**

| Sprint | Semanas | Foco                                                                       |
| ------ | ------- | -------------------------------------------------------------------------- |
| 4      | 10–12   | Auth Firebase, hogares, inventario básico, estructura móvil real.          |
| 5      | 13–15   | OCR (ML Kit), clasificación IA (Claude Haiku), lista compartida, voz, push.|
| 6      | 16–17   | Pulido visual, pruebas en Android real, manejo de errores, demo.           |

**Criterio de cierre:**

- App ejecutable en dispositivo Android real con flujos 1 a 4 (sección 5 de `CLAUDE.md`).
- Backend desplegado (Railway/Render) con base de datos PostgreSQL.
- Documentación final + reporte de cambios E1 → E2 si los hubiera.

## Compromisos transversales

- Reportes de avance cada 3 semanas.
- Acuerdo de alcance definitivo con docentes antes de iniciar Sprint 4.
- Citación del uso de IA en todas las instancias (sección 17 de `CLAUDE.md`).
