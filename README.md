# UniSpark Path

**Contexto y Objetivo Principal:**

Te estoy proporcionando el código base de un frontend en React + Vite. Tu tarea es rediseñar la interfaz y refactorizar la estructura de "Inspírate UNI", una agrupación estudiantil de la Universidad Nacional de Ingeniería que brinda orientación vocacional. El objetivo es informar sobre la universidad, cerrar la brecha de género en STEM ("Inspírate Girl"), gestionar eventos y facilitar la reserva de asesorías vocacionales (OVPGs).

**Tono y Sentimiento:**

El tono debe ser sumamente cálido, empático, juvenil y dinámico. Queremos que el estudiante de colegio sienta que la universidad le abre las puertas, reduciendo la ansiedad de la elección vocacional y fomentando el descubrimiento.

**Identidad Visual y Paleta de Colores:**

- **Colores principales:** Magenta vibrante, Naranja cálido, Verde fresco y Azul eléctrico (basados en el logo oficial). 

- **Fondo:** Utiliza colores cálidos y muy suaves (blanco roto, crema, gris ultra claro) para que los colores del logo resalten.

- **Tipografía:** Fuentes sans-serif redondeadas, amigables y modernas (ej. Nunito, Quicksand, Varela Round).

- **Motivos visuales:** Integra sutilmente elementos abstractos inspirados en una "bombilla/foco" o un "rayo de energía".

**Directrices Estrictas de Diseño (Evitar el "Estilo IA"):**

- **PROHIBIDO EL USO DE TARJETAS (NO CARDS):** Está estrictamente prohibido usar el diseño estilo "Bento Box". Cero contenedores rectangulares con `border-radius` o `box-shadow` que aíslen el contenido.

- **Concepto Visual "El Camino":** La navegación debe sentirse como un flujo continuo. Utiliza separadores de sección en SVG con formas orgánicas, ondas o diagonales. Integra una línea visual sutil que conecte las distintas secciones hacia abajo.

- **Layout Asimétrico y Orgánico:** Usa formas irregulares (blobs) de fondo con baja opacidad. Prioriza un estilo de capas (*layering*), superponiendo imágenes recortadas sobre textos o manchas de color para romper la cuadrícula estática.

**Estructura de Páginas a Mantener y Diseñar:**

Mantén el enrutamiento en `src/main.jsx` y rediseña las siguientes vistas:

1. **Home/Default:** Hero section inspirador ("Descubre tu camino en la UNI") con llamados a la acción claros.

2. **OpenDay (`/OpenDay`):** Destacar la diversión y experiencia presencial en el campus de la UNI.

3. **Inspírate Girl (`/Igirl`):** Diseño enfocado en empoderamiento femenino en STEM.

4. **Eventos (`/eventos`):** Lista de actividades y charlas con filtros visualmente integrados en el flujo (no en cajas rígidas).

5. **Orientación Vocacional (`/ovpgs`):** Formularios de inscripción y calendarios de asesorías que se sientan amigables y cero burocráticos.

6. **Auth (`/Login`):** Interfaz de acceso limpia y coherente con el resto del diseño.

**Directrices de Arquitectura y Refactorización:**

- **Implementación Rigurosa y Desde Cero:** Evita importar frameworks de UI de alto nivel o librerías de componentes pesadas (como Bootstrap o Material UI). Construye las interfaces y componentes visuales desde cero utilizando exclusivamente Tailwind CSS para asegurar un control riguroso de la estructura.

- **Estandarización de Estilos:** Elimina la mezcla de CSS plano y styled-components. Migra y unifica todos los estilos a Tailwind CSS.

- **Modularidad y Datos:** Extrae la información "hardcodeada" de los archivos `.jsx` (como `eventosData`, `igirlData`) y simula una estructura de consumo de API (ej. creando un directorio `src/services` o hooks personalizados) para preparar el proyecto para una futura integración de Backend/CMS.

- **Gestión de Assets:** Mueve y centraliza todas las imágenes estáticas y SVGs a la carpeta `src/assets` o `/public`.

- **Preparación para Tests:** Estructura los componentes visuales de forma pura y desacoplada para facilitar la futura implementación de pruebas automatizadas con Jest o Vitest.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1d009f91-95ff-4506-81d9-7200e060ed33).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
