# server — StockEnCasa (Node.js + Express)

API REST del proyecto StockEnCasa. **En Entrega 1 esta carpeta contiene únicamente la estructura
base y un servidor placeholder** con un endpoint `/health`. Los routers, controladores, modelos y
servicios reales se desarrollan en Entrega 2.

## Estructura de `src/`

| Carpeta         | Responsabilidad                                                                              |
| --------------- | -------------------------------------------------------------------------------------------- |
| `routes/`       | Definición de endpoints REST agrupados por recurso (`auth`, `households`, `inventory`, etc.).|
| `controllers/`  | Orquestación de requests: validación, llamado a servicios, formato de respuesta.             |
| `services/`     | Lógica de negocio (inventario, lista de compras, clasificación IA, push, OFF API).           |
| `middlewares/`  | Autenticación (Firebase Admin), validación de payloads, manejo de errores.                   |
| `models/`       | Acceso a datos sobre PostgreSQL (queries parametrizadas / repos).                            |
| `config/`       | Carga de env vars, instancia de Firebase Admin, pool de Postgres, cliente Anthropic.         |
| `utils/`        | Helpers puros y de logging.                                                                  |

## Endpoints previstos (Entrega 2)

- `POST /api/auth/session` — verifica idToken de Firebase y crea/sincroniza usuario.
- `POST /api/households` · `POST /api/households/join` — crear / unirse por código.
- `GET /api/inventory` · `POST /api/inventory` · `PATCH /api/inventory/:id` · `DELETE`.
- `GET /api/shopping-list` · `POST /api/shopping-list/items` · `PATCH /api/shopping-list/items/:id`.
- `POST /api/ocr/classify` — recibe texto OCR y devuelve `{nombre, categoria, unidad}` (Claude Haiku).

## Variables de entorno

Copiar `.env.example` a `.env` y completar. **No commitear `.env`.**

## Scripts

```bash
npm install
npm run dev    # node --watch src/index.js
```
