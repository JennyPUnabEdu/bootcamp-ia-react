import React from 'react';
import {
  Calendar, FileText, Play, Download, Terminal,
  ArrowRight, Shield, Zap, Layout, Star, ArrowLeft
} from 'lucide-react';

const LandingPage = () => {

  const modules = [
    {
      day: "Módulo 1",
      title: "Fundamentos e Identidad",
      desc: "Introducción a LLMs, Prompt Engineering y creación del System Prompt.",
      color: "from-blue-600 to-purple-600",
      icon: <Terminal size={32} />,
      linkPres: "./modulo1/index.html",
      linkPaper: "./papers/modulo1.pdf"
    },
    {
      day: "Módulo 2",
      title: "Síntesis y Estructura",
      desc: "Técnica Feynman, resúmenes estructurados y guías de estudio.",
      color: "from-teal-600 to-emerald-600",
      icon: <Layout size={32} />,
      linkPres: "./modulo2/index.html",
      linkPaper: "./papers/modulo2.pdf"
    },
    {
      day: "Módulo 3",
      title: "Evaluación y Diseño",
      desc: "Creación de quizzes dinámicos, mapas conceptuales y avatares IA.",
      color: "from-orange-500 to-indigo-600",
      icon: <Zap size={32} />,
      linkPres: "./modulo3/index.html",
      linkPaper: "./papers/modulo3.pdf"
    },
    {
      day: "Módulo 4",
      title: "Entrega Final y Ética",
      desc: "Protocolos anti-alucinación, integración del proyecto y graduación.",
      color: "from-red-600 to-amber-500",
      icon: <Shield size={32} />,
      linkPres: "./modulo4/index.html",
      linkPaper: "./papers/modulo4.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-500 selection:text-white relative">

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </div>

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-50">
        <a
          href="../index.html"
          className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-bold text-gray-400 hover:text-white transition-all group backdrop-blur-md"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          VOLVER AL PORTAL
        </a>
      </div>

      {/* Header */}
      <header className="container mx-auto px-6 py-16 text-center relative z-10">

        {/* Metadatos */}
        <meta name="description" content="Bootcamp intensivo de Herramientas de IA Generativa. Aprende a crear tu Asistente Académico." />
        <meta property="og:title" content="Bootcamp IA Generativa - UNAB" />
        <meta property="og:description" content="Domina ChatGPT y Gemini para tu vida académica y profesional." />

        <div className="flex flex-col items-center justify-center mb-12 animate-fade-in-down">
          {/* Logo UNAB */}
          <img
            src="/logo-unab.png"
            alt="Logo Universidad Andrés Bello"
            className="h-16 md:h-20 mb-6 hover:opacity-100 transition-opacity filter brightness-0 invert opacity-90"
          />

          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-bold text-white tracking-wide uppercase">
              Facultad de Ingeniería
            </h3>
            <div className="h-0.5 w-12 bg-blue-500 mx-auto my-2 rounded-full"></div>
            <p className="text-sm md:text-base text-blue-300 font-mono tracking-wider font-medium">
              INGENIERÍA EN COMPUTACIÓN E INFORMÁTICA
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-mono tracking-widest text-gray-400">BOOTCAMP 2025</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          BOOTCAMP DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">IA GENERATIVA</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Accede a todos los módulos, clases y recursos para dominar la Inteligencia Artificial y construir tu propio Asistente Académico.
        </p>
      </header>

      {/* Grid de Módulos */}
      <main className="container mx-auto px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modules.map((mod, idx) => (
            <div key={idx} className="group relative bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all hover:-translate-y-1 overflow-hidden">
              {/* Hover Glow */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${mod.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${mod.color} opacity-5 blur-[80px] rounded-full group-hover:opacity-10 transition-opacity`}></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl bg-white/5 text-white ring-1 ring-white/10 group-hover:bg-white/10 transition-colors`}>
                    {mod.icon}
                  </div>
                  <span className="font-mono text-sm text-gray-500 uppercase tracking-wider border border-white/5 px-3 py-1 rounded-full">
                    {mod.day}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-3">{mod.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed h-12">
                  {mod.desc}
                </p>

                <div className="flex gap-4">
                  <a href={mod.linkPres} className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors">
                    <Play size={18} fill="currentColor" /> Ver Clase
                  </a>
                  <a href={mod.linkPaper} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white/5 text-white font-bold py-3 px-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors" title="Descargar Paper">
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
      </footer>
    </div>
  );
};

export default LandingPage;