# StockEnCasa

> Aplicación móvil colaborativa para la gestión de inventario doméstico en hogares compartidos.
>
> **Obligatorio 1 — Interacción Humano-Computadora (IHC)** · Universidad ORT Uruguay · 2026 · Grupo **N8B**
>
> Integrantes: Santiago Villar (256345) · Santiago Sparkov (251817)

---

## Estado del repositorio

Esta es la **base estructural** del proyecto que acompaña la **Entrega 1 (documental)**. No contiene
implementación funcional: solo organiza el repositorio, define la arquitectura y prepara el terreno
para la **Entrega 2**, en la que se desarrollará la aplicación completa.

- **Entrega 1 (13 mayo 2026):** documentación + estructura base del repositorio.
- **Entrega 2 (25 junio 2026):** app funcional + demo al cliente.

La fuente de verdad académica del proyecto es [`CLAUDE.md`](./CLAUDE.md) (17 secciones: problema,
personas, escenarios, decisiones UX, patrones, wireframes, arquitectura, backlog, release plan, etc.).
La documentación dentro de [`docs/`](./docs/) referencia y extiende ese documento.

## Resumen del producto

StockEnCasa permite a un grupo de convivientes mantener un inventario compartido en tiempo real,
generar automáticamente la lista de compras y reducir el desperdicio. El diferenciador técnico es la
combinación de **escaneo de código de barras** (Open Food Facts), **OCR on-device** con Google ML Kit
y **clasificación por IA** (Claude Haiku) para cubrir productos sin código, marcas locales o a granel.

## Stack tecnológico

| Capa            | Tecnología                       |
| --------------- | -------------------------------- |
| Frontend móvil  | React Native + Expo (TypeScript) |
| Backend         | Node.js + Express                |
| Base de datos   | PostgreSQL                       |
| Autenticación   | Firebase Auth                    |
| OCR             | Google ML Kit (on-device)        |
| IA              | Claude Haiku API                 |
| Push            | Expo Push / FCM                  |
| Productos       | Open Food Facts API              |

Justificaciones por capa: ver sección 13 de [`CLAUDE.md`](./CLAUDE.md).

## Estructura del repositorio

```
stockencasa/
├── client/          # App móvil — React Native (Expo + TypeScript)
│   └── src/
│       ├── screens/        # Pantallas (placeholder en E1)
│       ├── components/     # Componentes reutilizables
│       ├── navigation/     # Configuración de navegación
│       ├── services/       # Clientes HTTP, OCR, IA, voz
│       ├── hooks/          # Custom hooks
│       ├── theme/          # Design system "Fresco"
│       ├── assets/         # Imágenes, fuentes, íconos
│       ├── types/          # Tipos TS compartidos
│       └── utils/          # Helpers
├── server/          # API REST — Node.js + Express
│   └── src/
│       ├── routes/         # Definición de endpoints
│       ├── controllers/    # Orquestación de requests
│       ├── services/       # Lógica de negocio
│       ├── middlewares/    # Auth, validación, errores
│       ├── models/         # Acceso a datos (Postgres)
│       ├── config/         # Variables de entorno, conexiones
│       └── utils/          # Helpers
├── db/              # Esquema SQL y migraciones
│   └── migrations/
├── docs/            # Documentación técnica y académica
└── CLAUDE.md        # Documento académico maestro del obligatorio
```

Detalle de cada carpeta y de la convención de ramas: ver [`docs/estructura-repo.md`](./docs/estructura-repo.md).

## Convención de ramas (Git Flow simplificado)

- `main` — releases por sprint, etiquetadas con tag.
- `develop` — rama de integración.
- `feature/<nombre>` — desarrollo por funcionalidad.
- `release/sprint-<n>` — preparación de release.

## Cómo correrá en Entrega 2

> Las siguientes instrucciones describen el flujo previsto; en Entrega 1 no hay nada que ejecutar.

```bash
# Cliente
cd client && npm install && npx expo start

# Servidor
cd server && npm install && npm run dev
```

## Licencia y uso académico

Proyecto académico sin fines comerciales. Uso de IA documentado en la sección 17 de
[`CLAUDE.md`](./CLAUDE.md).
