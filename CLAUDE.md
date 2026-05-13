CLAUDE.md — Contexto del proyecto StockEnCasa
Este archivo da contexto completo a Claude sobre el proyecto StockEnCasa para el Primer Obligatorio de Interacción Humano-Computadora (IHC), Universidad ORT Uruguay 2026, Grupo N8B. Integrantes: Santiago Villar (256345) · Santiago Sparkov (251817)


1. RESUMEN EJECUTIVO
StockEnCasa es una aplicación móvil para Android orientada a grupos convivientes (familias, compañeros de piso) que resuelve un problema cotidiano: nadie sabe qué hay en casa, la lista de compras se arma de memoria o por WhatsApp, y el resultado es comprar duplicados o llegar al súper sin saber qué falta.

Diferenciador tecnológico clave (recomendación del docente): Además del escaneo por código de barras (Open Food Facts API), la app implementa OCR on-device con Google ML Kit para leer el texto de cualquier envase con la cámara, sin conexión a internet. El texto se procesa mediante una API de IA que categoriza el producto automáticamente, infiriendo nombre, categoría y unidad de medida incluso de productos sin código, marcas locales o a granel.


2. OBJETIVOS
General: Desarrollar una app móvil colaborativa para Android que permita a convivientes gestionar el inventario doméstico de forma simple e inteligente.

Específicos:

Centralizar el inventario del hogar en una única plataforma compartida
Reducir la fricción del registro mediante escaneo de código de barras, OCR y voz
Disminuir el desperdicio con alertas de stock mínimo
Simplificar la lista de compras compartida, eliminando dependencia de WhatsApp
Implementar UX basada en principios de usabilidad y patrones estándar de Android
Diseñar arquitectura escalable y modular
Aplicar metodologías ágiles con sprints e historias de usuario
Validar decisiones UX/UI a partir de escenarios de uso reales


3. DESCRIPCIÓN DEL PROBLEMA
En hogares compartidos, la gestión del inventario es informal y propenso a errores:

Desconocimiento del stock real: ningún miembro sabe qué hay, en qué cantidad ni dónde
Lista de compras fragmentada: se arma de memoria o en grupos de WhatsApp
Compras redundantes o faltantes: sin sistema centralizado
Desperdicio de alimentos: falta de visibilidad sobre perecederos

Las alternativas existentes (Pantry Check, Out of Milk) son en inglés, de pago o complejas. No existe solución simple, gratuita y en español para el contexto latinoamericano.


4. USUARIOS — PERSONAS
Persona
Perfil
Dolor principal
Cómo usa StockEnCasa
Valentina, 24
Estudiante. Comparte apartamento con dos compañeras.
Siempre falta algo al llegar al súper. Coordinan por WhatsApp.
Escanea al llegar del súper. Ve la lista compartida. Usa voz desde la cocina.
Marcelo, 42
Padre. Trabaja full-time. Organiza compras con su pareja.
Compra duplicados. Le cuesta coordinarse en tiempo real.
Configura alertas de mínimo. Recibe push cuando falta algo.
Bruno, 27
Desordenado y olvidadizo. No tiene hábito de registrar.
Repite compras innecesarias. Le da pereza tipear.
Usa la cámara en segundos. El OCR + IA hace el trabajo pesado.



5. ESCENARIOS DE USO
Escenario 1 — "Llegué del súper" (Valentina) Valentina escanea productos al llegar. El aceite → barcode → autocompleta. El detergente de la feria → sin código → OCR activa → IA clasifica "Limpieza — Detergente". Confirma y guarda. 20 segundos. Su compañera ve el inventario actualizado en tiempo real. Justifica: OCR + IA para cubrir el 100% de productos. Confirmación obligatoria antes de guardar.

Escenario 2 — "Estoy cocinando" (Bruno) Tiene las manos sucias. Toca el micrófono y dice "agregar aceite de oliva". La app confirma y asiente con un toque. Justifica: voz para manos ocupadas. Confirmación para prevenir errores de reconocimiento.

Escenario 3 — "Estoy en el supermercado" (Marcelo) Ve 8 ítems, ya tachó 3. La barra muestra "3 de 8 comprados". Su pareja agrega pan de molde desde casa — aparece en tiempo real. Al terminar, confirma y los productos vuelven al inventario. Justifica: barra de progreso para orientación. Sincronización en tiempo real.

Escenario 4 — "El producto está por acabarse" (Valentina) Recibe push: "¡Leche en stock mínimo! Queda 1 unidad." Toca "agregar a lista" directamente desde la notificación. Justifica: notificaciones push proactivas. Acción directa desde la notificación.


6. DESCRIPCIÓN DE LA SOLUCIÓN
6.1 Detección inteligente — core tecnológico
Código de barras (EAN-13): consulta Open Food Facts API → autocompleta nombre, categoría e imagen
OCR on-device con Google ML Kit: lee texto del envase localmente, sin conexión → back end llama Claude Haiku API → devuelve JSON {nombre, categoría, unidad}
Foto manual: para frutas, verduras, sobras sin texto ni código
6.2 Inventario del hogar
Vista agrupada por categorías (Heladera, Alacena, Limpieza, Bebidas)
Cada producto: foto, nombre, cantidad, estado (en stock / stock bajo / agotado)
Cantidad mínima configurable por producto → dispara alertas automáticas
6.3 Lista de compras compartida
Generación automática con productos agotados o en mínimo
Agregar por voz (manos libres) o manualmente
Sincronización en tiempo real entre convivientes
Progreso visual y confirmación al finalizar
6.4 Notificaciones
Push cuando producto alcanza stock mínimo
Push cuando un conviviente modifica la lista


7. FLUJOS DE USUARIO
Diagramas diseñados en Claude Design. Prototipo interactivo disponible en Vercel.

Flujo 1: Agregar producto por escaneo de código de barras
Flujo 2: Agregar producto por OCR + IA
Flujo 3: Hacer la compra (lista compartida en el supermercado)
Flujo 4: Agregar ítem por voz (manos libres)


8. PATRONES DE DISEÑO
Verificados sobre el prototipo funcional. 10 patrones en 3 categorías.
8.1 Patrones de navegación
Sticky Navigation: Barra inferior persistente (Inicio, Compras, Escanear, Perfil). Permite cambiar de sección sin perder contexto.

Stack Navigation: Flujo de escaneo apilado: Cámara → OCR/IA → Confirmar paso 1 → Confirmar paso 2, con back en cada pantalla.

Segmented Control: Toggle "Código de barras / Texto OCR" en pantalla Escanear. Expone ambos modos sin navegación adicional.
8.2 Patrones de contenido e información
Hierarchical Grouping: Productos agrupados por categoría (HELADERA, ALACENA, LIMPIEZA, BEBIDAS) con SectionHeader y contador. Localización natural sin lista plana.

Status Badges: Badges "En stock" / "Stock bajo" / "Agotado" con colores semánticos (verde, naranja, rojo). Estado del inventario en segundos.

Search & Filter: Barra de búsqueda + chips de categoría en Inventario, filtrado en tiempo real sin recargar.

Progress Indicator: Barra 0–100% en Lista de compras con contador "X de Y comprados".
8.3 Patrones de incorporación y entrada de datos
Onboarding Carousel: 3 slides con dots indicator y botón Skip.

Smart Input: Cámara en escaneo; micrófono solo en Lista de compras.

Default Values & Autocomplete: Pantalla "Confirmar producto" pre-completa nombre, categoría, unidad y marca con datos del escaneo/IA.


9. MAPA DE NAVEGACIÓN
Diagrama Mermaid interactivo disponible (link en el documento).

ONBOARDING → Login/Registro → Crear hogar / Unirse a hogar

↓

APP PRINCIPAL: Inventario - Inicio (HUB)

  ├── Tab Escanear: Cámara → OCR/IA → Confirmar paso 1 → paso 2 → Guardar

  ├── Tab Compras: Lista auto + manual + voz → Confirmar compra

  ├── Tab Perfil: Miembros + Settings

  └── Modal Notificaciones: Stock bajo + Avisos


10. WIREFRAMES
Diseñados en Claude Design. Prototipo interactivo disponible (link en el documento).

5 pantallas documentadas:

Home — Inventario
Escanear — Cámara activa
Confirmación de producto (OCR + IA)
Lista de compras compartida
Onboarding — Bienvenida y creación de hogar


11. DECISIONES DE DISEÑO UX — JUSTIFICADAS
Decisión
Problema que resuelve
Impacto si no estuviera
Confirmación antes de guardar (OCR + IA)
OCR e IA pueden fallar. Un error se propaga a la lista de todos.
Inventario acumula errores silenciosos.
Voz exclusivamente en lista de compras
Agregar ítems con manos ocupadas hace imposible tipear.
Usuario vuelve a WhatsApp, pierde sincronización.
OCR procesado on-device
Protege privacidad y elimina dependencia de red.
Imágenes se transmitirían a servidor externo.
Productos críticos primero
Agotados son urgentes vs. los en mínimo.
Usuario sale sin ítems más importantes.
La IA sugiere, el usuario decide
Clasificación automática puede fallar en marcas locales.
Inventario acumula errores invisibles.
Agrupación por categoría, no alfabético
Usuario piensa "qué hay en la heladera", no por nombre.
Recorrido mental no coincide con la lista.
Color semántico consistente
Sin color uniforme hay que leer cada badge.
Diagnóstico del inventario se vuelve lento.
Filtrado en tiempo real sin confirmación
Respuesta inmediata es clave en búsqueda.
Usuario percibe app lenta.
Un solo Segmented Control para modos de escaneo
Barcode y OCR son alternativas del mismo objetivo.
Usuario queda atrapado en un modo que falló.
Ítems comprados se reordenan al final
Tildado ya no es relevante. Mezclarlos distrae.
Usuario recorre toda la lista para ver qué falta.



12. MANEJO DE ERRORES Y ESTADOS
12.1 Errores
Situación
Mensaje
Acción
Cámara no detecta barcode
"No encontramos el código. ¿Probás con mejor luz?"
[Reintentar] [Usar OCR] [Manual]
OCR no extrae texto
"No pudimos leer el texto. Probá sin reflejos."
[Reintentar] [Foto manual]
IA no clasifica
"No logramos identificar. Completá los datos vos."
[Formulario pre-completado]
Producto duplicado
"Ya tenés [nombre]. ¿Querés sumar esta unidad?"
[Sí, sumar] [Ver existente] [Cancelar]
Sin conexión
"Sin conexión. Se guardará al reconectar."
[Cola local automática]
Lista vacía
"Todo en orden. No hay productos por comprar."
[Ir al inventario] [Agregar manual]

12.2 Estados del sistema
Pantalla
Estado
Qué ve el usuario
Cámara
Activo
Visor con guía + animación de barrido
Cámara
Código detectado
Flash + tarjeta emergente
OCR
Leyendo
Texto resaltado en amarillo en tiempo real
IA
Cargando
Spinner + "Identificando producto..."
Inventario
Stock normal
Card blanca, cantidad normal
Inventario
Stock bajo
Badge naranja "STOCK BAJO"
Inventario
Agotado
Badge rojo "AGOTADO"
Inventario
Vacío
Ilustración + "Escaneá tu primer producto"
Lista
Pendientes
Lista con barra de progreso
Lista
Todos comprados
Barra 100% + "¡Compra completada!"
Lista
Vacía
Ilustración + "Todo en orden"
Sincronización
Sin conexión
Banner: "Sin conexión — cambios guardados local"



13. ARQUITECTURA Y STACK TECNOLÓGICO
Arquitectura cliente-servidor (3 capas: móvil Android, back end REST, BD relacional).

Capa
Tecnología
Justificación
Front end
React Native (Expo)
Multiplataforma, acceso a cámara/micrófono/notificaciones sin config nativa
Escáner
expo-barcode-scanner
On-device, sin latencia de red
OCR
Google ML Kit
On-device, gratuito, sin enviar imágenes a servidores
Voz
@react-native-voice
Speech-to-Text nativo, gratis, español rioplatense
Back end
Node.js + Express
Conocido por el equipo, bien documentado
Base de datos
PostgreSQL (Railway)
Relacional, gratis en Railway
Autenticación
Firebase Auth
Login email/Google, maneja tokens sin infra adicional
Push
Expo Push (FCM)
Notificaciones Android desde back end con una API
Productos
Open Food Facts API
Abierta, gratuita, millones de productos latinoamericanos
IA
Claude Haiku API
Categorización desde OCR, fracción de centavo por llamada
Deploy
Railway / Render
Hosting gratuito para la demo



14. PRODUCT BACKLOG
Las HU representan el alcance funcional objetivo para Entrega 2. La Entrega 1 es completamente documental.

Estimaciones en Story Points (Fibonacci: 1, 2, 3, 5, 8). 4 épicas.

ID
Historia de usuario
SP
Entrega
HU-01
Como usuario quiero apuntar la cámara a un código de barras para que la app complete automáticamente el producto sin tipear nada.
5
E1
HU-02
Como usuario quiero fotografiar cualquier envase y que la app lea su texto con OCR y lo clasifique con IA.
8
E2
HU-03
Como usuario quiero sacar una foto a un producto sin texto ni código y asignarle nombre.
3
E1
HU-04
Como usuario quiero ver todos mis productos agrupados por categoría con cantidad y estado.
5
E1
HU-05
Como usuario quiero marcar un producto como "usé una unidad" con swipe.
3
E2
HU-06
Como usuario quiero configurar cantidad mínima por producto para alertas automáticas.
3
E2
HU-07
Como usuario quiero ver la lista de compras generada automáticamente con productos agotados o en mínimo.
5
E2
HU-08
Como usuario quiero agregar un ítem a la lista por voz con las manos ocupadas.
3
E2
HU-09
Como usuario quiero tildar un ítem al comprarlo y que los convivientes vean el cambio en tiempo real.
3
E2
HU-10
Como usuario quiero ver una barra de progreso de la compra.
2
E2
HU-11
Como usuario quiero crear un hogar y obtener un código de invitación.
5
E1
HU-12
Como usuario quiero recibir push cuando un producto llegue al mínimo o un conviviente modifique la lista.
3
E2



15. PLAN DE ENTREGAS Y REPOSITORIO
15.1 Release Plan
Sprint / Hito
Semanas
Foco
Sprint 1
1–3
Definición del problema, personas, escenarios, propuesta conceptual
Sprint 2
4–6
Diseño UX/UI: mapa de navegación, wireframes, flujos, patrones, decisiones UX
Sprint 3
7–9
Arquitectura, stack, backlog, roadmap, estructura base del repositorio
ENTREGA 1
13 mayo
Entrega documental completa: UX/UI, arquitectura, backlog, navegación, wireframes, repo base
Sprint 4
10–12
Implementación: autenticación Firebase, hogares, inventario básico, estructura móvil
Sprint 5
13–15
Funcionalidades inteligentes: OCR, IA, lista compartida, voz, push
Sprint 6
16–17
Pulido visual, pruebas en dispositivo real, manejo de errores, demo
ENTREGA 2
25 junio
App funcional + documentación final + demo al cliente


El equipo solicita feedback docente sobre funcionalidades, HUs y tiempos. Cualquier ajuste será documentado y acordado antes del inicio de la implementación.
15.2 Repositorio Git
Organización privada de GitHub provista por los docentes. En Entrega 1 solo se crea la estructura base (sin código funcional).

stockencasa/

├── client/          ← React Native (Expo)

│   └── src/

│       ├── screens/

│       ├── components/

│       ├── services/

│       └── hooks/

├── server/          ← Node.js + Express

│   ├── routes/

│   ├── controllers/

│   └── models/

├── db/

│   └── migrations/

├── docs/            ← documentación del proyecto

└── README.md

Convención de ramas:

main → solo merges de release al finalizar cada sprint
develop → integración antes de pasar a main
feature/[nombre] → por funcionalidad
release/sprint-[n] → liberación por sprint con tag de versión


16. ALINEACIÓN CON LA RÚBRICA
Área
Requerido
Cumplimiento
Análisis del problema
Backlog con HU + bocetos UI
12 HU en 4 épicas (sección 14). Wireframes (sección 10). Personas y escenarios (secciones 4 y 5).
Diseño inicial
UI, mapa de navegación, patrones
Wireframes Claude Design (sección 10), Mermaid interactivo (sección 9), 10 patrones (sección 8).
Gestión de proyecto
Release Plan con HU y épicas
6 sprints en 2 fases (sección 15.1). Nota de alcance con solicitud de feedback.
Gestión configuración
Estructura repo por sprint
Estructura de carpetas + convención de ramas (sección 15.2). Repo en org GitHub docentes.
Aseguramiento calidad
Estándares identificados
Material Design 3, REST, convenciones React Native/JS. Validado con herramientas de IA.
Arquitectura
Descripción + justificación
Arquitectura cliente-servidor, justificación por capa (sección 13).
UI/UX — Evolución prototipo
Decisiones desde concepción hasta producto
Bocetos → wireframes (E1) → prototipo interactivo Claude Design → producto final (E2). 10 decisiones UX (sección 11).
Implementación
Código en repo compartido
Repo base compartido. Código funcional en Entrega 2 (sprints 4–6).
Originalidad
Propuestas innovadoras
OCR on-device + IA: privacidad, sin conexión, cobertura total. No disponible en soluciones gratuitas en español.
Demo al cliente
Demostración funcional
Sprint 6 dedicado. App en dispositivo Android real. Prototipo interactivo desde E1.
Avance
Reporte cada 3 semanas
Un reporte por sprint (~3 semanas).



17. CONSIDERACIONES FINALES — USO DE IA
El equipo utilizó múltiples herramientas de IA como parte activa del proceso. Todo el contenido fue revisado y validado por el equipo antes de incorporarse.

Herramienta
Rol
Cómo se usó
Claude (Anthropic)
Asistente principal de documentación
Estructuración de secciones, análisis UX, tablas, decisiones de diseño justificadas, generación de archivos .docx
Claude Design
Diseño visual y prototipado
Diseño de todas las pantallas con el sistema "Fresco", prototipo interactivo navegable, mapa de navegación Mermaid
Claude Code
Implementación (Entrega 2)
Previsto para E2: frontend React Native + backend Node.js siguiendo design system y arquitectura definidos
ChatGPT (OpenAI)
Validación y revisión crítica
Validar coherencia contra la rúbrica, identificar mezclas conceptuales, proponer mejoras de estructura académica


Ninguna decisión de diseño, arquitectura o alcance fue delegada a la IA — todas fueron tomadas y validadas por el equipo.

Compromisos del equipo:

Reportes de avance cada 3 semanas
Acordar alcance definitivo con docentes antes de implementar
Repositorio Git actualizado y accesible para docentes
Documentar cambios de E1 a E2 si correspondiera
Citar correctamente el uso de IA en todas las instancias


NOTAS PARA CLAUDE
Nombre de la app: StockEnCasa (no StockCasa — ese fue el nombre anterior)
Grupo: N8B, Universidad ORT Uruguay
Materia: Interacción Humano-Computadora
Entrega 1: 13 de mayo de 2026 — SOLO documental
Entrega 2: 25 de junio de 2026 — app funcional
Stack: React Native (Expo) + Node.js + PostgreSQL + Firebase Auth + Google ML Kit + Claude Haiku API
Design system: "Fresco" — sage green (#5B7A68) + cream (#F7F5F0), Nunito font
Herramientas usadas: Claude, Claude Design, Claude Code (E2), ChatGPT para validación
Repositorio: organización privada GitHub provista por los docentes
Secciones del documento: 17 secciones. Patrones en sección 8, wireframes en sección 10, decisiones UX en sección 11, stack en sección 13, backlog en sección 14, plan de entregas en sección 15, rúbrica en sección 16, consideraciones finales en sección 17.

