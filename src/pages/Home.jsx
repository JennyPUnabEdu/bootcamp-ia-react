import { Link } from 'react-router-dom';
import {
    Download,
    Layout,
    Play,
    Shield,
    Star,
    Terminal,
    Zap,
    Home as HomeIcon, // Renombrado para evitar conflicto con el nombre del componente
} from 'lucide-react';

/**
 * Home
 *
 * Landing page for the "Bootcamp IA – Interactive Presentation Platform for UNAB".
 * Serves as the main access point to all bootcamp modules and resources.
 *
 * This page is intentionally static and declarative, acting as a gateway
 * to the modular slide-based system implemented inside each module page.
 *
 * The module metadata is currently defined locally but designed to be
 * easily migrated to an external config, CMS, or API.
 */
const Home = () => {
    const modules = [
        {
            day: 'Módulo 1',
            title: 'Fundamentos e Identidad',
            desc: 'Introducción a LLMs, Prompt Engineering y creación del System Prompt.',
            color: 'from-blue-600 to-purple-600',
            icon: <Terminal size={32} />,
            path: '/modulo1',
            linkPaper: '/curso-ia/papers/modulo1.pdf',
        },
        {
            day: 'Módulo 2',
            title: 'Síntesis y Estructura',
            desc: 'Técnica Feynman, resúmenes estructurados y guías de estudio.',
            color: 'from-teal-600 to-emerald-600',
            icon: <Layout size={32} />,
            path: '/modulo2',
            linkPaper: '/curso-ia/papers/modulo2.pdf',
        },
        {
            day: 'Módulo 3',
            title: 'Evaluación y Diseño',
            desc: 'Creación de quizzes dinámicos, mapas conceptuales y avatares IA.',
            color: 'from-orange-500 to-indigo-600',
            icon: <Zap size={32} />,
            path: '/modulo3',
            linkPaper: '/curso-ia/papers/modulo3.pdf',
        },
        {
            day: 'Módulo 4',
            title: 'Entrega Final y Ética',
            desc: 'Protocolos anti-alucinación, integración del proyecto y graduación.',
            color: 'from-red-600 to-amber-500',
            icon: <Shield size={32} />,
            path: '/modulo4',
            linkPaper: '/curso-ia/papers/modulo4.pdf',
        },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-slate-950/50 backdrop-blur-md border-b border-white/5">
                <a
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all text-sm font-bold text-white/80 hover:text-white group border border-white/5"
                    title="Volver al Menú Principal"
                >
                    <HomeIcon size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-mono tracking-[0.2em]">
                        INICIO
                    </span>
                </a>

                <div className="hidden md:block">
                    <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">
                        UNAB • Facultad de Ingeniería
                    </span>
                </div>
            </nav>

            {/* Visual background effects */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            </div>

            <header className="container mx-auto px-6 py-24 text-center relative z-10">
                {/* Logo and faculty info */}
                <div className="flex flex-col items-center justify-center mb-12 animate-fade-in-down">
                    <img
                        src="/curso-ia/logo-unab.png"
                        alt="Logo Universidad Andrés Bello"
                        className="h-16 md:h-20 mb-6 transition-opacity filter brightness-0 invert opacity-90"
                    />

                    <div className="space-y-1">
                        <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase">
                            Facultad de Ingeniería
                        </h3>
                        <div className="h-0.5 w-12 bg-blue-500 mx-auto my-2 rounded-full" />
                        <p className="text-sm md:text-base text-blue-300 font-mono tracking-wider font-medium">
                            INGENIERÍA EN COMPUTACIÓN E INFORMÁTICA
                        </p>
                    </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                    <Star
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                    />
                    <span className="text-sm font-mono tracking-widest text-gray-400">
                        BOOTCAMP 2025
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                    BOOTCAMP DE{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        IA GENERATIVA
                    </span>
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Accede a todos los módulos, clases y recursos para dominar la
                    Inteligencia Artificial y construir tu propio Asistente Académico.
                </p>
            </header>

            <main className="container mx-auto px-6 pb-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {modules.map((module) => (
                        <div
                            key={module.path}
                            className="group relative bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all hover:-translate-y-1 overflow-hidden"
                        >
                            <div
                                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${module.color} opacity-50 group-hover:opacity-100 transition-opacity`}
                            />
                            <div
                                className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${module.color} opacity-5 blur-[80px] rounded-full group-hover:opacity-10 transition-opacity`}
                            />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-4 rounded-2xl bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10 transition-colors">
                                        {module.icon}
                                    </div>
                                    <span className="font-mono text-sm text-gray-500 uppercase tracking-wider border border-white/5 px-3 py-1 rounded-full">
                                        {module.day}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold mb-3">
                                    {module.title}
                                </h3>
                                <p className="text-gray-400 mb-8 leading-relaxed h-12">
                                    {module.desc}
                                </p>

                                <div className="flex gap-4">
                                    <Link
                                        to={module.path}
                                        className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors"
                                    >
                                        <Play size={18} fill="currentColor" />
                                        Ver Clase
                                    </Link>

                                    <a
                                        href={module.linkPaper}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-white/5 text-white font-bold py-3 px-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                                        title="Descargar Paper"
                                    >
                                        <Download size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="text-center py-10 text-gray-600 font-mono text-sm border-t border-white/5 bg-slate-950 relative z-10">
                <p className="mb-2">UNIVERSIDAD ANDRÉS BELLO</p>
                <p>FACULTAD DE INGENIERÍA • 2025</p>
                <p className="pt-1 text-gray-400 text-xs tracking-wide">
                    Ingeniería en Computación e Informática
                </p>
            </footer>
        </div>
    );
};

export default Home;
