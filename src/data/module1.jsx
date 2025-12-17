import { Zap, Gamepad2 } from 'lucide-react';

/**
 * slidesModule1
 *
 * Data definition for Module 1 slides.
 * This file acts as the content layer of the Slide Engine,
 * defining what to render while remaining completely agnostic
 * of how slides are rendered.
 *
 * Each object represents a slide and must include:
 * - `id`: Unique identifier
 * - `layout`: Determines which slide component will render it
 * - Additional properties consumed by the corresponding layout
 *
 * This architecture allows content authors to add or modify slides
 * without touching rendering or navigation logic.
 */
export const slidesModule1 = [
    {
        id: 'cover',
        layout: 'hero-slide',
        title: 'BOOTCAMP IA',
        subtitle: 'HERRAMIENTAS GENERATIVAS',
        tagline: 'Domina la Inteligencia Artificial en tu vida académica',
        footer: 'Ingeniería en Computación e Informática'
    },
    {
        id: 'art-challenge',
        layout: 'art-challenge-slide',
        title: 'DESAFÍO DE ARTE',
        subtitle: '¿Pincel Humano o Píxel Matemático?',
        imgReal: '/curso-ia/images/arte-real.jpg',
        imgAI: '/curso-ia/images/arte-ia.jpg',
        instruction: 'Pasa el mouse o haz clic para revelar la verdad. Fíjate en los trazos repetitivos.'
    },
    {
        id: 'menti-boss',
        layout: 'interactive-slide',
        title: 'TU "JEFE FINAL"',
        platform: 'Mentimeter',
        code: 'https://www.menti.com/algat3m1mmek',
        question: '¿A QUÉ LE TEMES?',
        subtext: '¿Qué es lo más difícil de entrar a la universidad?',
        // Icon rendered directly by the slide component
        icon: <Gamepad2 size={80} className="text-red-500" />
    },
    {
        id: 'mission',
        layout: 'big-statement-slide',
        pretitle: 'BOOTCAMP_IA_2025',
        title: 'TU MISIÓN',
        content: 'No es usar Google. Es crear un compañero que piense contigo.',
        highlight: 'ASISTENTE ACADÉMICO 3000',
    },
    {
        id: 'versus',
        layout: 'versus-slide',
        title: 'ELIGE TU ARMA',
        leftName: 'ChatGPT',
        leftRole: 'EL ESTRATEGA',
        leftDesc: 'Especialista en Lógica Pura y Estructura. Su motor (GPT-4o) es obsesivo con el razonamiento paso a paso.',
        leftStats: [
            'Programación compleja y depuración',
            'Redacción académica estructurada',
            'Análisis de datos masivos',
            'Seguimiento de instrucciones largas'
        ],
        rightName: 'Gemini',
        rightRole: 'EL VISIONARIO',
        rightDesc: 'Nativo Multimodal y Conectado. No solo lee, "ve" y "escucha" en tiempo real gracias al ecosistema Google.',
        rightStats: [
            'Análisis de video y audio nativo',
            'Búsqueda en tiempo real (Google)',
            'Creatividad fluida y Brainstorming',
            'Integración con Docs/Drive'
        ],
    },
    {
        id: 'demo-time',
        layout: 'center-icon-slide',
        title: '¿CÓMO?',
        desc: 'Veamos cómo resolver un problema real de la mejor forma posible.',
        // Visual cue to signal a live demo or key moment
        icon: <Zap size={100} className="text-yellow-400 animate-pulse" />
    },
    {
        id: 'prompt-theory',
        layout: 'formula-slide',
        title: 'LA FÓRMULA MAESTRA',
        subtitle: 'La IA no alucina, responde a la precisión de tus variables',
        // Structured definition used by the FormulaSlide renderer
        formula: [
            {
                label: 'ROL',
                color: 'text-yellow-400',
                border: 'border-yellow-400',
                bg: 'bg-yellow-400/10',
                description: 'Define quién es la IA. Establece el marco cognitivo y el tono.',
                exampleText: 'Actúa como un Profesor Senior de Java experto en pedagogía, '
            },
            {
                label: 'CONTEXTO',
                color: 'text-cyan-400',
                border: 'border-cyan-400',
                bg: 'bg-cyan-400/10',
                description: 'Delimita el entorno, el público y las restricciones.',
                exampleText: 'que le está enseñando a estudiantes de primer año que nunca han programado antes, '
            },
            {
                label: 'INSTRUCCIÓN',
                color: 'text-pink-400',
                border: 'border-pink-400',
                bg: 'bg-pink-400/10',
                description: 'El verbo taxativo. Qué debe hacer y en qué formato.',
                exampleText: 'explica el concepto de "Bucles For" usando una analogía de videojuegos y dame un ejemplo de código simple.'
            },
        ]
    },
    {
        id: 'system-prompt',
        layout: 'big-statement-slide',
        pretitle: 'CORE_CONFIG',
        title: 'SYSTEM PROMPT',
        content: 'Define quién es, cómo habla y qué hace tu IA.',
        highlight: 'LA CÉDULA DE IDENTIDAD',
    },
    {
        id: 'examples',
        layout: 'comparison-vertical-slide',
        title: 'EL EFECTO DEL ROL',
        bad: 'Actúa como profesor de historia.',
        badOutput: 'La Independencia de Chile fue un proceso histórico que permitió la emancipación de la Capitanía General de Chile de la Monarquía Española...',
        good: 'Eres "Profe Max", un experto en Historia de Chile sarcástico pero motivador, que explica usando analogías de fútbol.',
        goodOutput: '¡Cabros! Imaginen que la Independencia fue como la final del mundo. La Primera Junta fue recién el pitazo inicial, ¡ni siquiera habíamos metido gol todavía!',
        result: 'El tono cambia TODO.'
    },
    {
        id: 'activity',
        layout: 'ide-checklist-slide',
        title: 'SYSTEM_INIT',
        subtitle: 'Configura los parámetros de tu nuevo Asistente de Ingeniería.',
        // Ordered checklist consumed by the IDE-style slide
        tasks: [
            {
                step: '01',
                label: 'IDENTIDAD (IDENTITY)',
                text: 'Bautízalo. ¿Es "Jarvis", "La Tía StackOverflow" o "El Senior Gruñón"?',
                color: 'blue'
            },
            {
                step: '02',
                label: 'EXPERIENCIA (KERNELS)',
                text: 'Define su área: ¿Experto en Python? ¿Dios del Cálculo Multivariable? ¿Arquitecto de Cloud?',
                color: 'purple'
            },
            {
                step: '03',
                label: 'PERSONALIDAD (TONE)',
                text: '¿Responde con código directo, usa analogías de videojuegos o te regaña si no comentas el código?',
                color: 'green'
            },
            {
                step: '04',
                label: 'RESTRICCIONES (RULES)',
                text: 'Una regla de oro: "Siempre cita fuentes", "Usa TypeScript" o "Explica como a un niño de 5 años".',
                color: 'red'
            }
        ]
    },
    {
        id: 'closing',
        layout: 'hero-slide',
        title: 'PRÓXIMO MÓDULO:',
        subtitle: 'EXPLICACIONES IMPOSIBLES',
        tagline: 'Aprenderemos a transformar textos aburridos y difíciles en oro.',
        footer: '¡SIGUE ASÍ!',
        nextLink: '/curso-ia/modulo2',
        nextTitle: 'IR AL MÓDULO 2'
    }
];
