# Manual del Proyecto: Plataforma Bootcamp IA "Herramientas de IA Generativa para Principiantes"
**Versión del Documento:** 1.1
**Fecha:** 19 de Diciembre, 2025
**Proyecto:**  Bootcamp 360 Plataforma Cursos - IA (UNAB)
---
## HISTORIAL DE VERSIONES
| Versión | Fecha | Autor | Descripción |
| :--- | :--- | :--- | :--- |
| **1.0** | 19/12/2025 | Bastián Carrizo V. | Creación inicial del documento. Estructura base y manuales core. |
| **1.1** | 19/12/2025 | Bastián Carrizo V. | Incorporación de secciones académicas (Requisitos, Limitaciones, Roles) y detalles técnicos de despliegue (.htaccess, permisos). |
---
## ÍNDICE DE CONTENIDOS
1.  [BLOQUE 1: DOCUMENTACIÓN GENERAL DEL PROYECTO](#bloque-1-documentación-general-del-proyecto)
2.  [BLOQUE 2: MANUAL DE USUARIO](#bloque-2-manual-de-usuario)
3.  [BLOQUE 3: MANUAL DE ANALISTA / TÉCNICO](#bloque-3-manual-de-analista--técnico)
4.  [BLOQUE 4: DESPLIEGUE Y OPERACIÓN](#bloque-4-despliegue-y-operación)
5.  [ANEXOS (GLOSARIO)](#anexos)
---
<a name="bloque-1-documentación-general-del-proyecto"></a>
# BLOQUE 1: DOCUMENTACIÓN GENERAL DEL PROYECTO
## 1.1 Introducción
**Bootcamp 360 Plataforma Cursos - IA** es una plataforma web educativa de alto nivel, interactiva y modular, diseñada para la enseñanza de herramientas de Inteligencia Artificial Generativa (ChatGPT y Google Gemini) a estudiantes de ingeniería. Este proyecto fue desarrollado en el contexto de una práctica profesional para la Facultad de Ingeniería de la Universidad Andrés Bello (UNAB).
La plataforma moderniza la experiencia de aprendizaje, reemplazando las presentaciones estáticas tradicionales por un entorno web gamificado que simula interacciones reales con IA.
## 1.2 Objetivo General y Objetivos Específicos
**Objetivo General:**
Desarrollar una plataforma web interactiva que permita a los estudiantes experimentar y comprender el funcionamiento de las IAs generativas mediante simulaciones prácticas y contenido dinámico.
**Objetivos Específicos:**
- **Simulación Realista:** Proveer interfaces de chat simuladas que imitan a ChatGPT y Gemini para practicar *Prompt Engineering* sin necesidad de cuentas externas.
- **Interactividad:** Implementar un sistema de slides dinámicas (Slide Engine) que responda a las acciones del usuario.
- **Evaluación Automatizada:** Integrar motores de quizzes y rúbricas automatizadas que brindan feedback inmediato.
- **Acceso a Recursos:** Centralizar la distribución de material de estudio (papers, resúmenes) en un formato accesible.
## 1.3 Alcance del Proyecto
El sistema abarca una suite de aplicaciones "Single Page Application" (SPA) integradas bajo un mismo enrutador. Su alcance incluye:
- **Motor de Presentación:** Un núcleo reutilizable que renderiza contenido educativo basado en estructuras de datos (JSON-like), separando la lógica de la información.
- **Módulos Independientes:** Secciones temáticas que funcionan como unidades de aprendizaje autónomas.
- **Modo Versus:** Comparativas interactivas entre modelos de IA.
- **Sistema de Checklists y Rúbricas:** Herramientas de seguimiento del progreso del estudiante.
## 1.4 Público Objetivo
- **Estudiantes de Ingeniería (UNAB):** Usuarios finales que interactúan con el material docente.
- **Cuerpo Docente:** Usuarios que utilizan la herramienta como apoyo en clases presenciales o remotas.
## 1.5 Stack Tecnológico
El proyecto utiliza tecnologías modernas de desarrollo web frontend:
- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Estilos:** Tailwind CSS 4
- **Routing:** React Router DOM 7
- **Servidor Web:** Apache 2 (sobre Ubuntu AWS EC2)
- **CMS Conviviente:** WordPress (en raíz del dominio)
## 1.6 Arquitectura General del Sistema
La arquitectura es una **SPA (Single Page Application)** servida estáticamente.
- **Frontend-First:** La lógica reside en el cliente (navegador).
- **Data-Driven:** El contenido de las lecciones está desacoplado de la interfaz.
- **Sub-Directory Deployment:** La aplicación vive en un subdirectorio (`/curso-ia`) del dominio principal, configurada para manejar su propio enrutamiento sin conflictos con la raíz.
## 1.7 Diagrama Lógico
1.  **Browser:** Usuario pide URL.
2.  **AWS EC2 (Apache):** Recibe petición HTTP.
3.  **Routing Servidor:** Si la URL empieza con `/curso-ia`, Apache sirve el `index.html` de React. Si no, sirve WordPress.
4.  **React Init:** El navegador carga JS/CSS. React Router toma el control de la URL.
5.  **Render:** La vista se genera dinámicamente según la ruta (`/modulo1`, `/modulo2`, etc.).
## 1.8 Estructura de Carpetas (Resumen)
- `/var/www/curso-ia`: Código fuente (Repositorio).
- `/var/www/proyectos.../html/curso-ia`: Build de producción (Archivos públicos).
- `src/`: Código fuente React.
- `public/`: Assets estáticos.
## 1.9 Entornos
- **Desarrollo:** `npm run dev` (Localhost, HMR activo).
- **Producción:** `npm run build` -> Salida en `/dist` -> Copiado a servidor Apache.
## 1.10 Roles y Responsabilidades
Para el correcto funcionamiento y mantenimiento del sistema, se definen los siguientes roles:
| Rol | Responsabilidad Principal | Perfil Sugerido |
| :--- | :--- | :--- |
| **Administrador del Sistema (SysAdmin)** | Mantenimiento del servidor (AWS), configuración de Apache, gestión de DNS y backups. | Ingeniero en Infraestructura / DevOps. |
| **Desarrollador Frontend** | Mantenimiento del código React, creación de nuevos módulos y corrección de bugs visuales. | Desarrollador React semi-senior. |
| **Editor de Contenido** | Edición de los archivos de datos (`src/data/`) para actualizar textos o ejercicios sin tocar la lógica. | Ayudante de cátedra / Profesor con nociones de JSON/JS. |
| **Usuario Final** | Estudiante que consume el contenido y realiza las actividades. | Estudiantes de Ingeniería. |
## 1.11 Requisitos No Funcionales
1.  **Disponibilidad:** El sistema debe estar disponible 24/7, salvo ventanas de mantenimiento programadas.
2.  **Rendimiento:** El tiempo de carga inicial ("Time into Interactive") en redes 4G promedio no debe superar los 3 segundos.
3.  **Compatibilidad:** Soportar las últimas 2 versiones estables de Chrome, Firefox, Edge y Safari.
4.  **Escalabilidad:** La arquitectura modular debe permitir agregar "Módulo n" sin refactorizar el motor central.
5.  **Seguridad:** No se almacenan datos sensibles de usuarios en esta versión (stateless), minimizando riesgos de GDPR/privacidad.
## 1.12 Limitaciones Conocidas
1.  **Persistencia de Datos:** Al ser una SPA sin backend de base de datos propio (stateless), el progreso del alumno se pierde si borra la caché del navegador o cambia de dispositivo, a menos que se implemente una solución de almacenamiento local (Local Storage) o integración futura con Firebase.
2.  **Conexión a Internet:** Requiere conexión constante para cargar assets, aunque se cachean agresivamente. No es una PWA offline-first en esta versión.
3.  **Simulación, no Realidad:** Los chats con "IA" son simulaciones pre-programadas para fines didácticos, no consultan APIs reales de OpenAI/Google en tiempo real (para evitar costos y latencia), por lo que las respuestas son finitas.
## 1.13 Casos de Uso del Sistema (Alto Nivel)
### CU-01: Realizar Módulo de Aprendizaje
*   **Actor:** Estudiante.
*   **Precondición:** Estar en la pantalla de inicio.
*   **Flujo:**
    1.  El usuario selecciona un módulo.
    2.  El sistema carga la primera vista (Slide).
    3.  El usuario navega linealmente (Siguiente/Atrás).
    4.  El usuario completa interacciones (Quiz/Chat).
    5.  El sistema muestra pantalla final de éxito.
### CU-02: Actualizar Contenido Docente
*   **Actor:** Desarrollador / Editor.
*   **Precondición:** Acceso al repositorio Git.
*   **Flujo:**
    1.  Editor modifica archivo `src/data/moduleX.jsx`.
    2.  Editor hace commit y push.
    3.  SysAdmin despliega nueva versión.
    4.  El contenido se refleja automáticamente sin cambiar código fuente de componentes.
---
<a name="bloque-2-manual-de-usuario"></a>
# BLOQUE 2: MANUAL DE USUARIO
**Bienvenido a la Plataforma de Aprendizaje IA.** Este manual le guiará en el uso de la herramienta interactiva.
## 2.1 ¿Qué es la plataforma?
Es un sitio web interactivo diseñado para enseñar cómo usar Inteligencia Artificial (ChatGPT y Gemini). A diferencia de un PowerPoint normal, aquí podrás interactuar, responder preguntas y ver simulaciones en tiempo real.
## 2.2 Requisitos para usarla
- **Dispositivo:** Computador (PC/Mac) recomendado para mejor experiencia visual, o Tablet.
- **Navegador:** Google Chrome, Edge, Firefox o Safari (versiones recientes).
- **Conexión:** Acceso a internet estable para cargar los módulos inicialmente (luego la navegación es rápida).
## 2.3 Cómo acceder
1.  Abra su navegador web.
2.  Ingrese a la dirección: `proyectos.icinf.icfunab.cl/curso-ia`
3.  Verá la pantalla de bienvenida.
## 2.4 Pantalla de Inicio
La página principal muestra el menú de módulos disponibles. Verá tarjetas con títulos como "Módulo 1", "Módulo 2", etc.
- Haga clic en el botón **"Iniciar Módulo"** de la tarjeta correspondiente para entrar a esa lección.
## 2.5 Navegación General
Una vez dentro de un módulo:
- **Avanzar:** Use el botón de flecha derecha (`>`) o haga clic en la zona derecha de la pantalla (en algunas vistas).
- **Retroceder:** Use el botón de flecha izquierda (`<`).
- **Barra de Progreso:** En la parte inferior verá cuánto falta para terminar el módulo.
- **Volver al Inicio:** Busque el icono de "Casa" o "Home" en la esquina superior para regresar al menú principal.
## 2.6 Uso de los Módulos
Los módulos contienen diferentes tipos de diapositivas:
- **Informativas:** Solo texto e imágenes. Lea y avance.
- **Interactivas (Chats):** Verá una simulación de chat. Escriba en el campo de texto si se le solicita, o haga clic en los botones de "Run" para ver cómo responde la IA simulada.
- **Comparativas:** Deslice el cursor o use los controles para ver las diferencias entre ChatGPT y Gemini.
## 2.7 Descarga de Recursos
En ciertas secciones, encontrará botones para descargar material complementario (Papers, PDFs).
- Haga clic en el botón **"Descargar PDF"** o el icono de documento.
- El archivo se abrirá en una nueva pestaña o se descargará a su dispositivo.
## 2.8 Evaluaciones y Tests
La plataforma incluye "Momentos de Quiz" para verificar su aprendizaje.
1.  Lea la pregunta en pantalla.
2.  Haga clic en la opción que crea correcta.
3.  El sistema le indicará inmediatamente si acertó o falló, y le explicará por qué.
## 2.9 Errores Comunes y Soluciones
- **"La página está en blanco":** Intente recargar la página (F5 o botón recargar). Verifique su conexión.
- **"No avanza la slide":** Asegúrese de haber completado la interacción requerida (ej. hacer clic en una opción) si la slide lo pide.
- **"Error 404":** Si intenta entrar a una dirección antigua, vuelva al inicio (`/curso-ia`) y navegue desde allí.
## 2.10 Buenas Prácticas
- Use la plataforma en pantalla completa (F11) para mayor inmersión.
- No cierre la pestaña en medio de un módulo si desea mantener su progreso visual (aunque puede reiniciar rápidamente).
## 2.11 Flujos de Usuario Típicos
### Flujo de Estudio Básico
1.  **Inicio:** Ingreso a la plataforma.
2.  **Selección:** Elección del Módulo 1 (Introducción).
3.  **Interacción:** Lectura de slides -> Ejecución de simulación ChatGPT -> Respuesta de Quiz.
4.  **Descarga:** Obtención del resumen PDF al final del módulo.
5.  **Cierre:** Retorno al menú principal para seleccionar el siguiente módulo.
---
<a name="bloque-3-manual-de-analista--técnico"></a>
# BLOQUE 3: MANUAL DE ANALISTA / TÉCNICO
Esta sección está dirigida a desarrolladores, analistas y administradores de sistemas.
## 3.1 Arquitectura Frontend
El núcleo es **React** inicializado con **Vite**.
### Separación de Contenido y Presentación (Data-Driven)
El proyecto no "hardcodea" el contenido en los componentes JSX.
- **Datos:** `src/data/` contiene archivos `.jsx` o `.js` que exportan arrays de objetos. Cada objeto representa una "Slide" con propiedades como `title`, `content`, `type`, `image`.
- **Renderizado:** Un componente "Master" (ej. `Module1.jsx`) itera sobre este array y decide qué componente renderizar (`<HeroSlide>`, `<ContentSlide>`, etc.) según el `type` de la slide.
- **Ventaja:** Permite al analista agregar nuevas diapositivas editando solo un archivo de datos, sin tocar la lógica de los componentes.
### Manejo de Rutas
Se usa `react-router-dom`.
- **basename:** Configurado en `App.jsx` usando `import.meta.env.BASE_URL`. Esto es CRÍTICO para que la app funcione en el subdirectorio `/curso-ia` sin creer que está en la raíz del servidor.
- **Routes:** Cada módulo tiene su propia ruta (`/modulo1`, `/modulo2`).
### Assets
- Las imágenes y PDFs públicos están en la carpeta `public/` en desarrollo.
- Al compilar, Vite copia todo el contenido de `public/` a la raíz de `dist/`.
- Referencia en código: `<img src="/curso-ia/imagen.png" />`. Se debe usar siempre el prefijo `/curso-ia/` (o una variable de entorno) para asegurar que funcione en producción.
## 3.2 Desarrollo Local
### Requisitos
- Node.js (v18+ recomendado)
- npm
### Ejecución
1.  Clonar repositorio.
2.  `npm install` (Instala dependencias).
3.  `npm run dev` (Levanta servidor en `http://localhost:5173`).
### Estructura
- `src/components/slides`: Contiene las plantillas de diapositivas individuales.
- `src/layouts`: Layouts generales (MainLayout).
- `src/pages`: Vistas principales asociadas a rutas.
## 3.3 Build & Producción
### Configuración de Vite
En `vite.config.js`, la propiedad `base: '/curso-ia/'` es vital. Indica a Vite que todos los assets (CSS, JS) deben ser enlazados con ese prefijo y no con `/`.
### Generación del Build
Comando: `npm run build`
- Limpia la carpeta `dist/`.
- Compila React a JS vanilla optimizado.
- Genera nombres con hash para cache-busting (ej. `index-XyZ.js`).
- **Resultado:** La carpeta `dist/` es lo ÚNICO que se sube al servidor público.
## 3.4 Apache & WordPress
### VirtualHost
El servidor Apache atiende el dominio `proyectos.icinf.icfunab.cl` con `DocumentRoot /var/www/proyectos.icinf.icfunab.cl/html`.
- En ese `DocumentRoot` está instalado WordPress (index.php).
- La carpeta `curso-ia` es una subcarpeta física dentro de ese root.
### Convivencia
Apache sirve archivos. Si la URL es `/curso-ia`, busca en esa carpeta.
- **Problema de SPA:** Si un usuario entra directo a `/curso-ia/modulo1`, Apache buscará la carpeta `modulo1` (que no existe). Daría 404.
- **Solución (.htaccess):** Un archivo `.htaccess` dentro de `/curso-ia` intercepta estas peticiones y le dice a Apache: "Si no encuentras el archivo, sirve `index.html`". Así React carga y procesa la ruta `/modulo1`.
#### Configuración detallada del `.htaccess`
**Ubicación:** `/var/www/proyectos.icinf.icfunab.cl/html/curso-ia/.htaccess`
**Contenido Requerido:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  # Define la base de la URL para las reglas de reescritura
  RewriteBase /curso-ia/
  # Si el archivo solicitado existe físicamente, sírvelo directamente (imágenes, css)
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  # Si no existe, redirige todo a index.html para que React Router maneje la URL
  RewriteRule . /curso-ia/index.html [L]
</IfModule>
```
**Errores comunes:**
*   **Falta el archivo:** Apache devolverá "Error 404 Not Found" al recargar cualquier página interna (ej. `/curso-ia/modulo1`).
*   **RewriteBase incorrecto:** Si se pone `/` en lugar de `/curso-ia/`, React podría intentar cargar rutas desde la raíz del dominio, rompiendo la aplicación.
## 3.5 Git & Mantenimiento
### Flujo recomendado
1.  Desarrollar en local (`git checkout -b feature/nueva-cosa`).
2.  Probar con `npm run dev`.
3.  Commit y Push a GitHub.
4.  Conectarse al servidor vía SSH.
5.  `git pull` en la carpeta de código fuente (NO en la carpeta pública del servidor web).
6.  `npm run build`.
7.  Copiar `dist/*` a la carpeta pública.
### Advertencias Críticas sobre Git Pull
> [!WARNING]
> **NUNCA ejecute `git pull` directamente en la carpeta pública (`html/curso-ia`).**
> La carpeta pública contiene el *build* compilado (`dist`), no el código fuente.
**Flujo Incorrecto (PELIGRO):**
*   Entrar a `/var/www/proyectos.../html/curso-ia`
*   Hacer `git pull`.
*   *Consecuencia:* Esto mezclará archivos de código fuente con archivos compilados, exponiendo el código fuente al público y rompiendo el sitio.
**Flujo Correcto:**
1.  Ir a la carpeta privada: `cd /var/www/curso-ia` (fuente).
2.  Hacer `git pull` aquí.
3.  Compilar: `npm run build`.
4.  Copiar el resultado: `cp -r dist/* ...` a la carpeta pública.
## 3.7 Buenas Prácticas para Futuras Modificaciones
1.  **Atomicidad:** Modificar un solo módulo a la vez en ramas de git separadas (`feature/modulo-nuevo`).
2.  **Linting:** Ejecutar `npm run lint` antes de cualquier build para detectar errores de sintaxis o variables no usadas.
3.  **No tocar el Core:** Evitar modificar `src/components/SlideEngine.jsx` a menos que sea estrictamente necesario corregir un bug del motor de renderizado. Para cambios visuales, preferir CSS o Tailwind.
## 3.6 DNS
El dominio `proyectos.icinf.icfunab.cl` tiene un registro **tipo A** que apunta a la IP elástica de AWS. El navegador resuelve este nombre a la IP para contactar al servidor.
---
<a name="bloque-4-despliegue-y-operación"></a>
# BLOQUE 4: DESPLIEGUE Y OPERACIÓN
## 4.1 Flujo Completo de Despliegue
Este procedimiento actualiza la versión pública de la plataforma.
1.  **Conexión SSH:**
    ```bash
    ssh ubuntu@<IP_DEL_SERVIDOR>
    ```
2.  **Ir al directorio de código fuente:**
    (Este directorio contiene el `package.json` y el código git, NO es lo que ve el público).
    ```bash
    cd /var/www/curso-ia
    ```
3.  **Actualizar código:**
    ```bash
    git pull origin main
    ```
4.  **Instalar dependencias (solo si hubo cambios):**
    ```bash
    npm install
    ```
5.  **Compilar (Build):**
    ```bash
    npm run build
    ```
    Esto actualiza la carpeta `/var/www/curso-ia/dist`.
6.  **Desplegar a Público:**
    Copiar el contenido de `dist` al directorio web de Apache.
    *Nota: Se recomienda limpiar el destino antes o usar rsync, pero un cp recursivo suele bastar si no se borraron archivos.*
    ```bash
    # (Opcional) Backup de versión anterior
    # sudo cp -r /var/www/proyectos.icinf.icfunab.cl/html/curso-ia /var/www/backups/curso-ia-bkp
    # Copiar archivos nuevos (sobrescribir)
    sudo cp -r dist/* /var/www/proyectos.icinf.icfunab.cl/html/curso-ia/
    ```
7.  **Verificar Permisos:**
    Asegurar que Apache pueda leer los archivos.
    ```bash
    sudo chown -R www-data:www-data /var/www/proyectos.icinf.icfunab.cl/html/curso-ia
    sudo chmod -R 755 /var/www/proyectos.icinf.icfunab.cl/html/curso-ia
    ```
    **Justificación Técnica:**
    *   `chown www-data`: El usuario de Apache (`www-data`) necesita ser dueño de los archivos para servirlos correctamente.
    *   `chmod 755`: Permite que el propietario (Apache) escriba/lea, y que el público (mundo) solo pueda leer y ejecutar (acceder a directorios), pero NO modificar. Esto es crucial por seguridad.
## 4.2 Ubicación Correcta
- **Código Fuente (Git):** `/var/www/curso-ia/` (Aquí se compila).
- **Sitio Público (Apache):** `/var/www/proyectos.icinf.icfunab.cl/html/curso-ia/` (Aquí se sirve).
## 4.3 Troubleshooting (Solución de Problemas)
- **Cambios no se ven:** El navegador puede estar cacheando. Pruebe Ctrl+F5 o borre caché. Asegúrese de haber ejecutado el paso de `sudo cp` tras el build.
- **Error 404 al recargar:** Verifique que el archivo `.htaccess` esté presente en la carpeta pública `/curso-ia/`. A veces al borrar/copiar se pierde si no se copian archivos ocultos (usar `cp -a` o verificar explícitamente).
- **Error de Permisos (Forbidden):** Ejecute los comandos de `chown` y `chmod` mencionados arriba.
## 4.5 Estrategia de Respaldo y Recuperación (Disaster Recovery)
Dado que la aplicación es *stateless* (sin base de datos propia crítica), la estrategia de respaldo es simple pero vital:
1.  **Código Fuente:** El repositorio en GitHub/GitLab actúa como respaldo principal ("Source of Truth").
2.  **Assets Públicos:** Los archivos binarios (PDFs, imágenes grandes) que no estén en el repo deben tener copia en S3 o en un disco de respaldo local.
3.  **Recuperación ante Desastre:**
    *   Si el servidor explota o se borra:
        1.  Levantar nueva instancia EC2.
        2.  Clonar repo.
        3.  Instalar dependencias y Node.js.
        4.  Ejecutar `npm run build`.
        5.  No se requiere restaurar base de datos. Tiempo estimado de recuperación (RTO): < 30 minutos.
## 4.6 Mantenimiento a Futuro
- **Certificados SSL:** Si usa HTTPS (Let's Encrypt), asegúrese de que la renovación automática (certbot) esté activa.
- **Logs:** Si la app falla (Internal Server Error 500), revise `/var/log/apache2/error.log`.
- **Node.js:** Mantenga la versión de Node actualizada en el servidor si actualiza las dependencias de React en el futuro.
---
<a name="anexos"></a>
# ANEXOS
## A. Glosario de Términos
*   **SPA (Single Page Application):** Aplicación web que carga una sola página HTML y actualiza dinámicamente el contenido cuando el usuario interactúa con la app, sin recargar la página completa.
*   **Vite:** Herramienta de construcción (bundler) de próxima generación para frontend, conocida por su rapidez en desarrollo.
*   **React Router:** Librería estándar para el enrutamiento (navegación) en aplicaciones React.
*   **VirtualHost:** Directiva de configuración de Apache que permite servir múltiples sitios web (dominios) desde un mismo servidor físico.
*   **Cache Busting:** Técnica usada por los bundlers (como Vite) agregando un hash al nombre del archivo (ej. `index-a1b2.js`) para obligar al navegador a descargar la nueva versión si el contenido cambió.
*   **Deploy:** Proceso de llevar el código desde el entorno de desarrollo al servidor de producción donde los usuarios pueden usarlo.
*   **EC2 (Elastic Compute Cloud):** Servicio de servidores virtuales en la nube de Amazon Web Services (AWS).
*   **Prompt Engineering:** Arte de diseñar entradas (prompts) efectivas para guiar a los modelos de Inteligencia Artificial Generativa.
