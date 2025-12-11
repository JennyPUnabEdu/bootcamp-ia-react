import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowRight, ArrowLeft, QrCode, Brain, Bot,
  Zap, User, MessageSquare, Sparkles, Terminal,
  Maximize2, Minimize2, Users, Cpu, Layers, FileText,
  Target, ShieldAlert, Award, Mic, BookOpen, AlertTriangle, CheckCircle, Home, Play
} from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // --- SLIDES DATA ---
  const slides = [
    {
      id: 'cover',
      layout: 'hero',
      title: 'LA ENTREGA FINAL',
      subtitle: 'ÉTICA, INTEGRACIÓN Y FUTURO',
      tagline: 'En este módulo tu Asistente Académico cobra vida completa y demuestra su valor.',
      footer: 'MÓDULO 4 • INGENIERIA EN COMPUTACION E INFORMÁTICA'
    },
    {
      id: 'intro-ethics',
      layout: 'big-statement',
      pretitle: 'SYSTEM_WARNING: CRITICAL_THINKING',
      title: 'EL PELIGRO',
      content: 'La IA es un copiloto increíble, pero un piloto mentiroso.',
      highlight: 'ALUCINACIONES Y ÉTICA',
    },
    {
      id: 'hallucination-demo',
      layout: 'error-analysis',
      title: 'DETECTA LA ALUCINACIÓN',
      subtitle: '¿Por qué fallan los modelos? Encuentra el error en esta respuesta.',
      aiText: '"La Batalla de Rancagua ocurrió el 1 y 2 de octubre de 1814, donde las tropas realistas derrotaron a los patriotas liderados por Arturo Prat."',
      correction: '¡ERROR! Arturo Prat no nació hasta 1848. El líder fue Bernardo O\'Higgins. La IA mezcló dos héroes patrios por contexto histórico similar.',
      icon: <AlertTriangle size={40} />
    },
    {
      id: 'ethics-core',
      layout: 'center-icon',
      title: 'PRINCIPIOS ÉTICOS',
      desc: '1. Nunca presentes trabajo de IA como propio sin citar.\n2. Verifica siempre los datos (la IA inventa).\n3. Usa la IA para razonar, no para evitar pensar.',
      icon: <ShieldAlert size={100} className="text-red-500 animate-pulse md:w-24 md:h-24 w-16 h-16" />
    },
    {
      id: 'quality-criteria',
      layout: 'rubric-grid',
      title: 'CRITERIOS DE CALIDAD',
      subtitle: '¿Cómo sabemos si tu asistente es bueno?',
      items: [
        { title: 'Identidad', desc: '¿Tiene una personalidad definida en su Prompt?' },
        { title: 'Precisión', desc: '¿Las explicaciones son correctas y verificadas?' },
        { title: 'Utilidad', desc: '¿Realmente ayuda a estudiar o solo genera texto?' },
        { title: 'Creatividad', desc: '¿Usa analogías, mapas y formatos originales?' }
      ]
    },
    {
      id: 'integration-intro',
      layout: 'hero',
      title: 'EL PROYECTO FINAL',
      subtitle: 'INTEGRACIÓN TOTAL',
      tagline: 'Es hora de unir todas las piezas que construimos durante el curso.',
      footer: 'ENSAMBLAJE DEL PORTAFOLIO'
    },
    {
      id: 'project-stack',
      layout: 'project-stack',
      title: 'ARQUITECTURA DEL ASISTENTE',
      subtitle: 'Tu entrega debe contener estos 4 niveles:',
      layers: [
        { name: 'NIVEL 1: IDENTIDAD', desc: 'Nombre, Avatar y System Prompt definido.', color: 'bg-indigo-600' },
        { name: 'NIVEL 2: CONTENIDO', desc: 'Una explicación clara y un resumen estructurado.', color: 'bg-blue-600' },
        { name: 'NIVEL 3: EVALUACIÓN', desc: 'Cuestionario dinámico y Rúbrica.', color: 'bg-teal-600' },
        { name: 'NIVEL 4: VISUALIZACIÓN', desc: 'Mapa Conceptual y Guía de Estudio.', color: 'bg-emerald-600' }
      ]
    },
    {
      id: 'presentation-tips',
      layout: 'checklist',
      title: 'CÓMO DOCUMENTAR',
      subtitle: 'Sigue estos pasos para guardar tu Asistente para siempre:',
      tasks: [
        '1. Crea una carpeta llamada "Mi Asistente IA"',
        '2. Guarda el Prompt Maestro en un archivo de notas o Google Docs',
        '3. Exporta los chats más útiles a PDF o toma capturas',
        '4. Sube tu Avatar como imagen de perfil'
      ]
    },
    {
      id: 'activity-final',
      layout: 'big-statement',
      pretitle: 'MODE: FINAL_RENDERING',
      title: 'MANOS A LA OBRA',
      content: 'Ensambla tu documento, pule tu prompt y compila todo.',
      highlight: 'A tu propio ritmo',
    },
    {
      id: 'final-checklist',
      layout: 'final-checklist',
      title: 'CHECKLIST DE VUELO',
      subtitle: 'Antes de terminar, verifica que tu Asistente tenga estos 4 motores:',
      levels: [
        { name: '1. IDENTIDAD', desc: '¿Tiene nombre, rol y tono definidos?' },
        { name: '2. CONTENIDO', desc: '¿Sabe explicar y resumir materia?' },
        { name: '3. EVALUACIÓN', desc: '¿Puede crear quizzes y corregirte?' },
        { name: '4. VISUAL', desc: '¿Tiene un avatar que lo represente?' }
      ],
      usageTip: 'PARA USARLO SIEMPRE: Guarda tu Prompt Maestro en un archivo de notas. Cada vez que vayas a estudiar, copia ese texto, abre un nuevo chat en ChatGPT o Gemini, pégalo y dale Enter. ¡Tu asistente despertará!'
    },
    {
      id: 'closing-reflection',
      layout: 'hero',
      title: '¡FELICITACIONES!',
      subtitle: 'LA IA NO TE REEMPLAZA',
      tagline: 'Te reemplaza alguien que usa la IA mejor que tú. ¡Sigan aprendiendo!',
      footer: '¡HAZ FINALIZADO EL CURSO!',
      nextLink: '../index.html',
      nextTitle: 'VOLVER AL INICIO'
    }
  ];

  // --- NAVIGATION LOGIC ---
  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) setCurrentSlide(c => c + 1);
  }, [currentSlide, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) setCurrentSlide(c => c - 1);
  }, [currentSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // --- VISUAL COMPONENTS (FINAL THEME: GOLD/RED/BLACK) ---

  const Background = () => (
    <div className="fixed inset-0 -z-10 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-950 via-red-950 to-yellow-950 opacity-90"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
    </div>
  );

  const ProgressBar = () => (
    <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 transition-all duration-500 z-50"
      style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}></div>
  );

  const renderContent = (slide) => {
    switch (slide.layout) {
      case 'hero':
        return (
          <div className="text-center space-y-6 md:space-y-8 animate-fadeIn px-4 flex flex-col items-center min-h-[60vh] justify-center">

            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-red-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative p-6 bg-slate-900/50 border border-white/10 rounded-full backdrop-blur-xl shadow-2xl">
                <Award size={64} className="text-amber-400 md:w-20 md:h-20 w-16 h-16 stroke-[1.5]" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 drop-shadow-sm leading-[0.9]">
                {slide.title}
              </h1>
              <h2 className="text-xl md:text-3xl font-bold text-red-400 tracking-[0.2em] uppercase">
                {slide.subtitle}
              </h2>
            </div>

            <p className="text-lg md:text-xl text-amber-100/80 font-light max-w-2xl mx-auto leading-relaxed">
              {slide.tagline}
            </p>
            {slide.nextLink && (
              <a
                href={slide.nextLink}
                className="group relative mt-10 mb-20 inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 font-mono tracking-widest border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-slate-700"></div>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <span className="relative flex items-center gap-3">
                  {slide.nextTitle}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-amber-400" />
                </span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </a>
            )}

            <div className="w-full max-w-md mx-auto pt-8 border-t border-white/5">
              <p className="text-xs md:text-sm font-mono text-slate-500 uppercase tracking-widest opacity-60">
                {slide.footer}
              </p>
            </div>
          </div>
        );

      case 'error-analysis':
        return (
          <div className="w-full max-w-5xl animate-fadeIn flex flex-col items-center gap-8 px-4 h-full justify-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center">{slide.title}</h2>
            <p className="text-xl text-red-200 text-center">{slide.subtitle}</p>

            <div className="relative w-full group cursor-pointer">
              <div className="bg-slate-800 border-2 border-red-500/30 p-8 md:p-12 rounded-3xl relative overflow-hidden group-hover:blur-sm transition-all duration-300">
                <div className="absolute top-4 left-4 flex items-center gap-2 text-red-400 font-mono text-sm">
                  <Bot size={16} /> RESPUESTA GENERADA
                </div>
                <p className="text-2xl md:text-3xl font-serif text-gray-300 leading-relaxed mt-6">
                  {slide.aiText}
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="bg-red-900/90 border border-red-500 p-8 rounded-2xl max-w-2xl text-center shadow-2xl transform scale-95 group-hover:scale-100 transition-transform">
                  <div className="flex justify-center mb-4 text-red-400">
                    {slide.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">DETECCIÓN DE ALUCINACIÓN</h3>
                  <p className="text-lg text-red-100">{slide.correction}</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 font-mono animate-pulse">Pasa el mouse / toca para revelar la verdad</p>
          </div>
        );

      case 'rubric-grid':
        return (
          <div className="w-full max-w-6xl animate-fadeIn flex flex-col items-center gap-8 px-4 h-full justify-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center">{slide.title}</h2>
            <p className="text-xl text-amber-200/80 text-center">{slide.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {slide.items.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-amber-500/20 p-6 rounded-2xl flex items-start gap-4 hover:bg-amber-900/10 transition-colors">
                  <div className="bg-amber-500/20 p-3 rounded-lg text-amber-400 font-bold text-xl shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'project-stack':
        return (
          <div className="w-full max-w-4xl animate-fadeIn flex flex-col items-center gap-8 px-4 h-full justify-center">
            <div className="text-center mb-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">{slide.title}</h2>
              <p className="text-xl text-amber-200/80">{slide.subtitle}</p>
            </div>

            <div className="w-full flex flex-col-reverse gap-2 md:gap-4 items-center">
              {slide.layers.map((layer, idx) => (
                <div
                  key={idx}
                  className={`w-full ${layer.color} p-4 md:p-6 rounded-xl flex flex-col md:flex-row items-center justify-between shadow-lg transform transition-transform hover:scale-105 hover:z-10 border border-white/10`}
                  style={{ width: `${100 - (idx * 5)}%` }}
                >
                  <div className="flex items-center gap-3">
                    <Layers className="text-white/50" />
                    <h3 className="text-lg md:text-xl font-black text-white tracking-widest">{layer.name}</h3>
                  </div>
                  <p className="text-white/80 text-sm md:text-base text-center md:text-right">{layer.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'checklist':
        return (
          <div className="flex flex-col items-center animate-fadeIn w-full max-w-4xl px-4">
            <div className="flex items-center gap-3 mb-6 md:mb-8 text-amber-400">
              <Play size={32} />
              <span className="text-lg md:text-xl font-mono font-bold">ACTION TIME</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black mb-4 text-white text-center leading-tight">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-amber-200/60 mb-8 md:mb-12 font-mono text-center">{slide.subtitle}</p>

            <div className="w-full space-y-3 md:space-y-4">
              {slide.tasks.map((task, index) => (
                <div key={index} className="bg-white/5 border border-amber-500/20 p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-6 hover:bg-white/10 transition-all hover:translate-x-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg md:text-2xl font-medium text-white">{task.substring(3)}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'big-statement':
        return (
          <div className="flex flex-col items-center justify-center animate-fadeIn w-full h-full p-4 overflow-hidden">
            <div className="relative w-full max-w-[90vw] bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl p-12 md:p-16 flex flex-col items-center gap-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 opacity-60"></div>
              {slide.pretitle && (
                <div className="absolute top-4 md:top-8 left-6 md:left-10 flex items-center gap-2 text-red-400/80 font-mono text-xs md:text-sm tracking-widest">
                  <Terminal size={14} />
                  {slide.pretitle}
                </div>
              )}
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mt-4 text-center uppercase">
                {slide.title}
              </h2>
              <div className="relative group w-auto inline-block mt-4 max-w-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gray-900 rounded-2xl px-12 py-8 text-center shadow-2xl flex items-center justify-center h-full">
                  <p className="text-xl md:text-3xl font-medium text-white leading-normal whitespace-nowrap">
                    {slide.content}
                  </p>
                </div>
              </div>
              {slide.highlight && (
                <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tighter filter drop-shadow-lg mt-6 text-center">
                  {slide.highlight}
                </div>
              )}
            </div>
          </div>
        );

      case 'center-icon':
        return (
          <div className="text-center max-w-5xl animate-fadeIn flex flex-col items-center gap-6 md:gap-8 px-4">
            <div className="mb-4 md:mb-8 p-6 bg-white/5 rounded-full backdrop-blur-md text-amber-400 [&>svg]:w-16 [&>svg]:h-16 md:[&>svg]:w-20 md:[&>svg]:h-20">
              {slide.icon}
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl text-amber-100/80 max-w-3xl mt-4 leading-relaxed whitespace-pre-line">
              {slide.desc}
            </p>
          </div>
        );

      case 'final-checklist':
        return (
          <div className="w-full max-w-5xl animate-fadeIn flex flex-col items-center gap-6 md:gap-8 px-4 h-full justify-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">{slide.title}</h2>
              <p className="text-xl text-amber-200/80">{slide.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
              {slide.levels.map((level, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors group cursor-default">
                  <div className="w-10 h-10 rounded-full border-2 border-amber-500/50 flex items-center justify-center text-amber-500/50 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">{level.name}</h3>
                    <p className="text-sm text-gray-400">{level.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full max-w-4xl bg-gradient-to-r from-indigo-900/80 to-slate-900/80 border border-indigo-500/50 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-xl mt-2">
              <div className="bg-indigo-500/20 p-4 rounded-full text-indigo-400 shrink-0 animate-pulse border border-indigo-500/30">
                <Terminal size={32} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-indigo-300 mb-2 tracking-widest uppercase flex items-center justify-center md:justify-start gap-2">
                  <Zap size={16} /> Cómo activar tu asistente
                </h3>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed font-light">
                  {slide.usageTip}
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen w-full font-sans text-white overflow-hidden flex flex-col">
      <Background />
      <ProgressBar />

      {/* HEADER: Home button + Title + Logo + Controls */}
      <header className="fixed top-0 w-full p-4 flex justify-between items-start z-50 pointer-events-none">

        {/* LEFT: Back button + Label */}
        <div className="flex flex-col gap-2 pointer-events-auto">
          <a
            href="../index.html"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all text-sm font-bold text-white/80 hover:text-white group"
            title="Volver al Menú Principal"
          >
            <Home size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>INICIO</span>
          </a>

          <div className="flex items-center gap-2 px-2 opacity-60">
            <Terminal size={14} />
            <span className="text-xs font-mono tracking-widest">BOOTCAMP_IA_2025</span>
          </div>
        </div>

        {/* RIGHT: UNAB Logo + Controls */}
        <div className="flex flex-col items-end gap-4 pointer-events-auto">

          {/* UNAB Logo (Desde carpeta public) */}
          {/* The 'brightness-0 invert' filter makes it white automatically */}
          <img
            src="/logo-unab.png"
            alt="UNAB Logo"
            className="h-8 md:h-20 object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
          />

          {/* Controls */}
          <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
            <span className="text-xs font-mono text-gray-400">
              {currentSlide + 1} / {slides.length}
            </span>
            <div className="h-4 w-px bg-white/20"></div>
            <button onClick={toggleFullscreen} className="hover:text-white text-gray-400 transition-colors">
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 md:p-12 relative z-10 w-full">
        {renderContent(slides[currentSlide])}
      </main>
      <footer className="fixed bottom-0 w-full p-4 md:p-8 flex justify-between items-center z-40 bg-slate-900/50 md:bg-transparent backdrop-blur-sm">
        <button onClick={prevSlide} disabled={currentSlide === 0} className={`p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <ArrowLeft size={20} />
        </button>
        <div className="flex gap-2 opacity-30">
          {slides.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === currentSlide ? 'w-6 md:w-8 bg-white' : 'w-2 bg-white'}`} />
          ))}
        </div>
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className={`p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md ${currentSlide === slides.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <ArrowRight size={20} />
        </button>
      </footer>

      <style>{`
        @keyframes scan { 0% { top: 0; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        .animate-scan { animation: scan 2.5s linear infinite; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.95) translateY(20px); filter: blur(10px); } to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); } }
        .animate-fadeIn { animation: fadeIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Presentation;