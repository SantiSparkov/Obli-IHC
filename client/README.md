# client — StockEnCasa (Expo + React Native)

Aplicación móvil Android del proyecto StockEnCasa. **En Entrega 1 esta carpeta contiene únicamente
la estructura base y placeholders**; la implementación funcional corresponde a Entrega 2.

## Estructura de `src/`

| Carpeta        | Responsabilidad                                                                          |
| -------------- | ---------------------------------------------------------------------------------------- |
| `screens/`     | Pantallas de la app (Home, Escanear, Confirmar, Lista, Onboarding, Perfil).              |
| `components/`  | Componentes reutilizables (Card, Badge, SectionHeader, etc.).                            |
| `navigation/`  | Configuración de React Navigation (Bottom Tabs + Stack de escaneo).                      |
| `services/`    | Integraciones externas: API propia, Open Food Facts, ML Kit OCR, voz, Firebase Auth.     |
| `hooks/`       | Custom hooks (`useInventory`, `useShoppingList`, `useHousehold`, etc.).                  |
| `theme/`       | Design system **Fresco** (paleta, tipografía Nunito, spacing, badges semánticos).        |
| `assets/`      | Imágenes, íconos y fuentes.                                                              |
| `types/`       | Tipos TypeScript compartidos (`Product`, `Household`, `ShoppingItem`...).                |
| `utils/`       | Helpers puros (formatos, validaciones, parsers).                                         |

## Stack previsto (Entrega 2)

- React Native + Expo (managed workflow) con TypeScript.
- React Navigation (bottom tabs + stack).
- `expo-barcode-scanner` para EAN-13.
- `@react-native-ml-kit/text-recognition` (Google ML Kit) para OCR on-device.
- `@react-native-voice/voice` para speech-to-text en español rioplatense.
- Firebase Auth (email/Google) y Expo Push (FCM).

## Scripts (preparados, no funcionales aún)

```bash
npm install
npm run start       # expo start
npm run android
```
