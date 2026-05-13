/**
 * StockEnCasa — entrypoint del servidor.
 *
 * Placeholder de Entrega 1. La definición real de rutas, middlewares de auth (Firebase Admin),
 * conexión a PostgreSQL y handlers para OCR/IA se implementa en Entrega 2.
 */
import express from 'express';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', stage: 'entrega-1', message: 'StockEnCasa API — placeholder' });
});

// Las rutas reales se montarán aquí en Entrega 2:
// app.use('/api/auth', authRouter);
// app.use('/api/households', householdsRouter);
// app.use('/api/inventory', inventoryRouter);
// app.use('/api/shopping-list', shoppingListRouter);
// app.use('/api/ocr', ocrRouter);

app.listen(port, () => {
  console.log(`[stockencasa] placeholder server escuchando en :${port}`);
});
