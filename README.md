# 📘 Documentación General del Proyecto - Bootcamp 360: Herramientas de IA Generativa para Principiantes

## 1. Introducción
**Herramientas de IA Generativa para Principiantes** es una plataforma web educativa de alto nivel, interactiva y modular, diseñada para la enseñanza de herramientas de Inteligencia Artificial Generativa (ChatGPT y Google Gemini) a estudiantes de educación media. Este proyecto fue desarrollado en el contexto de una práctica profesional para la Facultad de Ingeniería de la Universidad Andrés Bello (UNAB).

La plataforma moderniza la experiencia de aprendizaje, reemplazando las presentaciones estáticas tradicionales por un entorno web gamificado que simula interacciones reales con IA.

## 2. Objetivo General y Objetivos Específicos
**Objetivo General:**
Desarrollar una plataforma web interactiva que permita a los estudiantes experimentar y comprender el funcionamiento de las IAs generativas mediante simulaciones prácticas y contenido dinámico.

**Objetivos Específicos:**
- **Simulación Realista:** Proveer interfaces de chat simuladas que imitan a ChatGPT y Gemini para practicar *Prompt Engineering* sin necesidad de cuentas externas.
- **Interactividad:** Implementar un sistema de slides dinámicas (Slide Engine) que responda a las acciones del usuario.
- **Evaluación Automatizada:** Integrar motores de quizzes y rúbricas automatizadas que brindan feedback inmediato.
- **Acceso a Recursos:** Centralizar la distribución de material de estudio (papers, resúmenes) en un formato accesible.

## 3. Alcance del Proyecto
 El sistema abarca una suite de aplicaciones "Single Page Application" (SPA) integradas bajo un mismo enrutador. Su alcance incluye:
- **Motor de Presentación:** Un núcleo reutilizable que renderiza contenido educativo basado en estructuras de datos (JSON-like), separando la lógica de la información.
- **Módulos Independientes:** Secciones temáticas (Módulo 1 al 4) que funcionan como unidades de aprendizaje autónomas.
- **Modo Versus:** Comparativas interactivas entre modelos de IA.
- **Sistema de Checklists y Rúbricas:** Herramientas de seguimiento del progreso del estudiante.

## 4. Público Objetivo
- **Estudiantes de Enseñanza Media o Universidad (UNAB):** Usuarios finales que interactúan con el material docente.
- **Cuerpo Docente:** Usuarios que utilizan la herramienta como apoyo en clases presenciales o remotas.

## 5. Stack Tecnológico
El proyecto utiliza tecnologías modernas de desarrollo web frontend, optimizadas para rendimiento y mantenibilidad:

- **Core:** React 19 (Componentes Funcionales & Hooks)
- **Build Tool:** Vite 7 (Generación de código optimizado y servidor de desarrollo rápido)
- **Estilos:** Tailwind CSS 4 (Diseño responsivo, animaciones avanzadas, glassmorphism)
- **Routing:** React Router DOM 7 (Manejo de navegación SPA)
- **Iconografía:** Lucide React
- **Infraestructura de Servidor:**
    - Sistema Operativo: Ubuntu (AWS EC2)
    - Servidor Web: Apache 2
    - CMS Principal: WordPress (convive en el servidor)

## 6. Arquitectura General del Sistema
La arquitectura es una **Single Page Application (SPA)** desacoplada, servida estáticamente pero con lógica dinámica en el cliente.

- **Frontend:** La aplicación React gestiona toda la interfaz de usuario y la lógica de presentación.
- **Datos:** El enfoque es *Data-Driven*. El contenido de las lecciones reside en archivos de datos (`src/data/*.jsx`), mientras que los componentes (`src/components/`) solo definen la estructura visual y comportamiento.
- **Despliegue:** La aplicación se compila a archivos estáticos (HTML, CSS, JS) que se sirven desde un subdirectorio (`/curso-ia`) en un servidor Apache compartido con un sitio WordPress.

## 7. Diagrama Lógico
Descripción del flujo de la arquitectura:

1.  **Petición del Cliente:** El navegador del usuario solicita `proyectos.icinf.icfunab.cl/curso-ia`.
2.  **Resolución DNS:** El dominio apunta a la IP pública del servidor AWS EC2.
3.  **Servidor Web (Apache):**
    *   Apache recibe la petición.
    *   Identifica que la ruta `/curso-ia` corresponde a un directorio físico con archivos estáticos (el build de React).
    *   Sirve el archivo `index.html`.
4.  **Carga en Cliente (Navegador):**
    *   El navegador descarga `index.html`, `index.css` y el bundle de JavaScript (`index.js`).
    *   React "hidrata" la página y toma el control (Client-Side Rendering).
5.  **Navegación Interna:**
    *   React Router intercepta los cambios de URL.
    *   Al navegar a `/curso-ia/modulo1`, no se recarga la página; React renderiza el componente correspondiente dinámicamente.
6.  **Interacción de Datos:**
    *   El "Slide Engine" lee los arrays de contenido local y actualiza la vista instantáneamente.

## 8. Flujo General de Funcionamiento
1.  **Inicio:** El usuario ve la Landing Page (`Home.jsx`) con acceso a los distintos módulos.
2.  **Selección de Módulo:** Al hacer clic en un módulo, el enrutador carga la vista del módulo específico.
3.  **Navegación de Slides:** Dentro de un módulo, el usuario avanza/retrocede entre conceptos. El estado global mantiene el progreso.
4.  **Interactividad:** En slides interactivas, el usuario inputa texto o selecciona opciones; el sistema simula respuestas de IA usando temporizadores y estados locales.

## 9. Estructura de Carpetas (Código Fuente)
La estructura del proyecto en desarrollo sigue el estándar de Vite + React:

- `/src`
    - `/assets`: Recursos estáticos (imágenes, iconos).
    - `/components`: Bloques de construcción de la UI (Botones, Layouts, Slides).
    - `/data`: Contenido de los módulos (Texto, preguntas, configuración de slides).
    - `/pages`: Componentes de alto nivel que orquestan cada módulo (Home, Modulo1, etc.).
    - `/styles`: Configuraciones globales de CSS.
    - `App.jsx`: Definición de rutas y estructura raíz.
    - `main.jsx`: Punto de entrada de React.
- `/public`: Archivos estáticos públicos que se copian tal cual al build (PDFs, favicons).
- `vite.config.js`: Configuración del bundler (define el `base path`).

## 10. Entornos (Desarrollo / Producción)
El proyecto maneja dos entornos claramente diferenciados:

- **Entorno de Desarrollo (Local):**
    - Ejecutado mediante `npm run dev`.
    - Servidor local Vite con *Hot Module Replacement* (HMR).
    - Las rutas funcionan desde la raíz (`localhost:5173/`).

- **Entorno de Producción (Servidor):**
    - Generado mediante `npm run build`.
    - Archivos estáticos optimizados y minificados en la carpeta `dist/`.
    - ruta base configurada como `/curso-ia/`.
    - Requiere servidor web (Apache) configurado para servir SPA (reglas de rewrite para redirigir tráfico a `index.html`).

---

## Autoría original

Proyecto original desarrollado por **Bastian Carrizo V.**  
Repositorio base (upstream): https://github.com/crizoz/bootcamp-ia-react

Este fork contiene adaptaciones locales para uso académico.
