# db — Esquema y migraciones PostgreSQL

Esta carpeta contiene el esquema y las migraciones de la base de datos relacional de StockEnCasa.
**En Entrega 1 solo hay placeholders**: el esquema definitivo se versiona en Entrega 2 a partir
del modelo de datos derivado del backlog (sección 14 de `CLAUDE.md`).

## Entidades previstas

- `users` — usuarios autenticados vía Firebase.
- `households` — hogares, con código de invitación.
- `household_members` — relación N:M `users` ↔ `households` con rol.
- `categories` — categorías del inventario (Heladera, Alacena, Limpieza, Bebidas, ...).
- `products` — productos del inventario por hogar, con cantidad y mínimo.
- `shopping_list_items` — ítems de lista compartida con estado de compra.
- `notifications` — registro de pushes enviados.

## Migraciones

Se usará una herramienta simple (por ejemplo `node-pg-migrate`) o scripts SQL numerados en
`migrations/`. La decisión final se documenta al inicio del Sprint 4.
