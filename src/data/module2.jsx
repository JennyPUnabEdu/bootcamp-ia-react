import { FileText, Target, Zap, Brain, Sparkles } from 'lucide-react';

/**
 * slidesModule2
 *
 * Data definition for Module 2 slides.
 * This module focuses on clarity, synthesis and structure,
 * teaching students how to transform complex information
 * into understandable knowledge using Generative AI.
 *
 * As part of the Slide Engine architecture, this file defines
 * *what* is rendered, while layout components define *how* it is rendered.
 */
export const slidesModule2 = [
    {
        id: 'cover',
        layout: 'hero-slide',
        title: 'CLARIDAD ABSOLUTA',
        subtitle: 'SÍNTESIS Y ESTRUCTURA CON IA',
        tagline: 'Aprende a transformar el caos de información en conocimiento útil.',
        footer: 'MÓDULO 2 • INGENIERIA EN COMPUTACION E INFORMÁTICA'
    },
    {
        id: 'menti-competition',
        layout: 'interactive-slide',
        title: 'EL RETO',
        platform: 'Mentimeter',
        code: 'https://www.menti.com/alm32n1mefeb',
        question: 'SIMPLIFICA LO IMPOSIBLE',
        subtext: '¿Puedes explicar un concepto universitario a un niño de 5 años?',
        // Engagement-focused icon rendered by the interactive slide
        icon: <Target size={80} className="text-emerald-400 md:w-20 md:h-20 w-16 h-16" />
    },
    {
        id: 'pain-point',
        layout: 'big-statement-slide',
        pretitle: 'ERROR: DATA_OVERLOAD',
        title: 'EL ENEMIGO',
        content: 'El problema no es que no entiendas. El problema es cómo te explican.',
        highlight: 'TEXTOS INFINITOS',
    },
    {
        id: 'versus-roles',
        layout: 'versus-v2-slide',
        title: 'TU EQUIPO DE ESTUDIO',
        leftName: 'ChatGPT',
        leftRole: 'EL TRADUCTOR',
        leftDesc: 'Experto en lenguaje. Usa analogías, simplifica textos difíciles y explica "en fácil".',
        leftStats: [
            'Analogías didácticas',
            'Simplificación de texto',
            'Parafraseo "humano"'
        ],
        rightName: 'Gemini',
        rightRole: 'EL ARQUITECTO',
        rightDesc: 'Experto en estructura. Lee PDFs, crea tablas comparativas, cronologías y mapas.',
        rightStats: [
            'Lectura profunda de PDFs',
            'Tablas comparativas',
            'Estructura de datos'
        ],
    },
    {
        id: 'demo-chatgpt',
        layout: 'chat-simulation-slide',
        title: 'MODO TRADUCTOR',
        botName: 'ChatGPT',
        prompt: 'Explícame la Ley de la Termodinámica como si fuera una fiesta en casa llena de gente.',
        response: '¡Claro! Imagina que la energía son los invitados.\n\n1. **La energía no se crea ni se destruye:** Si entra gente a la fiesta, o se quedan adentro o salen al patio, pero no desaparecen.\n2. **La entropía aumenta:** A medida que avanza la fiesta, la casa se desordena sola, nunca se ordena sola.',
        color: 'text-teal-400',
        type: 'text',
        // Inline SVG used to avoid external icon dependencies for chat avatars
        botIcon: (
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 md:w-6 md:h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108..." />
            </svg>
        )
    },
    {
        id: 'demo-gemini',
        layout: 'chat-simulation-slide',
        title: 'MODO ARQUITECTO',
        botName: 'Gemini',
        prompt: 'Toma este texto sobre la Segunda Guerra Mundial y crea una tabla con: Evento, Año y Consecuencia Principal.',
        response: '| Evento | Año | Consecuencia |\n|---|---|---|\n| Invasión a Polonia | 1939 | Inicio del conflicto |\n| Día D | 1944 | Liberación de Francia |\n| Bomba Atómica | 1945 | Fin de la guerra |',
        color: 'text-indigo-400',
        type: 'table',
        icon: <Sparkles />
    },
    {
        id: 'formula-study',
        layout: 'process-flow-slide',
        title: 'LA FÓRMULA FEYNMAN',
        subtitle: 'Si no puedes explicarlo simple, no lo entiendes.',
        // Ordered learning framework consumed by the ProcessFlowSlide
        steps: [
            {
                title: '1. CONCEPTO',
                desc: 'Identifica tus lagunas.',
                icon: <FileText />,
                actions: [
                    'Escribe el título en una hoja en blanco.',
                    'Desarrolla el tema como si estuvieras enseñando una clase.',
                    'Identifica dónde te detienes o dudas.'
                ]
            },
            {
                title: '2. SIMPLIFICACIÓN',
                desc: 'Elimina la complejidad.',
                icon: <Zap />,
                actions: [
                    'Traduce el lenguaje técnico a español simple.',
                    'Si usas una palabra compleja, defínela.',
                    'Imagina que se lo explicas a un niño de 12 años.'
                ]
            },
            {
                title: '3. ANALOGÍA',
                desc: 'Conecta con lo real.',
                icon: <Brain />,
                actions: [
                    'Usa ejemplos de la vida cotidiana.',
                    'Ej: "El voltaje es como la presión del agua".',
                    'La memoria retiene mejor las historias que los datos.'
                ]
            }
        ]
    },
    {
        id: 'activity-day2',
        layout: 'checklist-slide',
        title: 'MISIÓN: QUANTUM LEAP',
        subtitle: 'Tema Objetivo: COMPUTACIÓN CUÁNTICA. Entiende lo imposible en 3 pasos.',
        // Practical application combining multiple AI tools
        tasks: [
            {
                title: 'Traduce el Concepto (ChatGPT)',
                tool: 'ChatGPT',
                desc: 'Prompt: "Explícame la Superposición Cuántica como si fuera una moneda girando. Usa una analogía simple."'
            },
            {
                title: 'Estructura la Data (Gemini)',
                tool: 'Gemini',
                desc: 'Prompt: "Crea una tabla comparativa técnica: Bit Clásico vs. Qubit (Estados, Velocidad, Tasa de Error)".'
            },
            {
                title: 'Traza la Ruta (Gemini)',
                tool: 'Gemini',
                desc: 'Prompt: "Genera un Roadmap de 4 semanas para aprender los fundamentos de Quantum Computing siendo programador."'
            }
        ]
    },
    {
        id: 'closing',
        layout: 'hero-slide',
        title: 'SIGUIENTE MÓDULO:',
        subtitle: 'EL ASISTENTE TE EVALÚA',
        tagline: 'Aprenderemos a crear cuestionarios dinámicos que se corrigen solos.',
        footer: '¡BIEN HECHO!',
        nextLink: '/curso-ia/modulo3',
        nextTitle: 'IR AL MÓDULO 3'
    }
];
