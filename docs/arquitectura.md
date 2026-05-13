# Arquitectura técnica

> Vista técnica complementaria a la sección 13 de [`CLAUDE.md`](../CLAUDE.md).

## Modelo de capas

StockEnCasa sigue una arquitectura **cliente-servidor en 3 capas**, alineada con el stack acordado:

```
┌──────────────────────────────┐
│         CLIENTE              │   React Native + Expo (TypeScript)
│  screens / components        │
│  navigation                  │
│  services (HTTP, OCR, voz)   │
│  hooks / theme               │
└──────────────┬───────────────┘
               │ HTTPS / JSON (Firebase ID token en Authorization)
┌──────────────▼───────────────┐
│         BACK END             │   Node.js + Express
│  routes → controllers        │
│  → services (negocio)        │
│  → models (acceso a datos)   │
│  middlewares: auth, errores  │
└──────────────┬───────────────┘
               │ SQL parametrizado
┌──────────────▼───────────────┐
│   POSTGRESQL (Railway)       │
└──────────────────────────────┘
```

## Integraciones externas

| Integración        | Dónde corre              | Propósito                                                  |
| ------------------ | ------------------------ | ---------------------------------------------------------- |
| Open Food Facts    | Cliente o servidor       | Autocompletar producto por EAN-13.                         |
| Google ML Kit      | **Cliente (on-device)**  | OCR sin enviar imágenes a internet (privacidad).           |
| Claude Haiku API   | **Servidor**             | Clasificar texto OCR → `{nombre, categoría, unidad}`.      |
| Firebase Auth      | Cliente + servidor       | Login (cliente) + verificación de ID token (servidor).     |
| Expo Push / FCM    | Servidor                 | Push notifications por stock bajo o cambios en la lista.   |

Justificación de las decisiones clave (OCR on-device, IA con confirmación, voz solo en lista de
compras, etc.) en la sección 11 de [`CLAUDE.md`](../CLAUDE.md).

## Flujo de referencia: agregar producto por OCR + IA

1. Cliente captura imagen y ejecuta **ML Kit** localmente → string de texto.
2. Cliente envía el texto al servidor (`POST /api/ocr/classify`).
3. Servidor llama a **Claude Haiku** con un prompt acotado y devuelve JSON estructurado.
4. Cliente muestra pantalla de **confirmación** (decisión UX: la IA sugiere, el usuario decide).
5. Tras confirmar, cliente envía `POST /api/inventory` y el resto del hogar recibe la
   actualización (Entrega 2 valuará si se implementa con polling o WebSockets).
