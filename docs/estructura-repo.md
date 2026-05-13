# Estructura del repositorio

Documenta el propósito de cada carpeta y la convención de ramas. Alinea con la sección 15.2 de
[`CLAUDE.md`](../CLAUDE.md).

## Árbol

```
stockencasa/
├── client/                  React Native + Expo (TypeScript)
│   ├── App.tsx              Entrypoint placeholder (E1)
│   ├── app.json             Configuración Expo
│   ├── babel.config.js
│   ├── tsconfig.json
│   ├── package.json
│   └── src/
│       ├── screens/         Pantallas (HU-* de E2)
│       ├── components/      UI reutilizable (Card, Badge, SectionHeader…)
│       ├── navigation/      Tabs + stack de escaneo
│       ├── services/        API, Open Food Facts, ML Kit, voz, Firebase
│       ├── hooks/           useInventory, useShoppingList, useHousehold…
│       ├── theme/           Design system "Fresco"
│       ├── assets/          Imágenes, íconos, fuentes
│       ├── types/           Tipos TS compartidos
│       └── utils/           Helpers puros
│
├── server/                  Node.js + Express (ESM)
│   ├── .env.example
│   ├── package.json
│   └── src/
│       ├── index.js         Entrypoint placeholder (E1)
│       ├── routes/          /api/auth, /households, /inventory, /shopping-list, /ocr
│       ├── controllers/     Orquestación de requests
│       ├── services/        Lógica de negocio
│       ├── middlewares/     Auth Firebase, validación, errores
│       ├── models/          Repos Postgres
│       ├── config/          env, Firebase Admin, pg pool, Anthropic
│       └── utils/           Logging y helpers
│
├── db/
│   ├── schema.sql           Boceto referencial
│   ├── migrations/          Migraciones numeradas (E2)
│   └── README.md
│
├── docs/
│   ├── arquitectura.md
│   ├── estructura-repo.md   (este archivo)
│   └── entregas.md
│
├── CLAUDE.md                Documento académico maestro (17 secciones)
├── README.md                Vista general del repo
├── .editorconfig
└── .gitignore
```

## Convención de ramas

| Rama                     | Propósito                                                                  |
| ------------------------ | -------------------------------------------------------------------------- |
| `main`                   | Releases por sprint, etiquetadas con tag de versión. Solo merges revisados.|
| `develop`                | Integración previa al merge en `main`.                                     |
| `feature/<nombre>`       | Trabajo por funcionalidad o HU.                                            |
| `release/sprint-<n>`     | Preparación de release al cierre de cada sprint.                           |

Flujo: `feature/* → develop → release/sprint-<n> → main` (con tag `v0.<sprint>.0`).

## Estado por carpeta en Entrega 1

| Carpeta   | Contenido en E1                                          | A completar en E2                          |
| --------- | -------------------------------------------------------- | ------------------------------------------ |
| `client/` | Estructura, theme Fresco, `App.tsx` placeholder.         | Pantallas, navegación, OCR/IA/voz.         |
| `server/` | Estructura, `index.js` con `/health`, `.env.example`.    | Rutas reales, modelos, integraciones.      |
| `db/`     | `schema.sql` comentado.                                  | Migraciones reales + seed.                 |
| `docs/`   | Arquitectura, estructura y plan de entregas.             | Bitácora de sprints + cambios E1→E2.       |
