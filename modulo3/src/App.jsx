import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowRight, ArrowLeft, QrCode, Brain, Bot,
  Zap, User, MessageSquare, Sparkles, Terminal,
  Maximize2, Minimize2, Users, Cpu, Layers, FileText,
  Target, Send, Palette, Share2, PenTool, CheckSquare, Home
} from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // --- SLIDES DATA ---
  const slides = [
    {
      id: 'cover',
      layout: 'hero',
      title: 'EVALUATION AND DESIGN',
      subtitle: 'INTELIGENCIA VISUAL Y DINÁMICA',
      tagline: 'En este módulo convertiremos a tu asistente en un evaluador experto y le daremos un rostro.',
      footer: 'MÓDULO 3 • INGENIERIA EN COMPUTACION E INFORMÁTICA'
    },
    {
      id: 'menti-challenge',
      layout: 'interactive',
      title: 'RETO IMPOSIBLE',
      platform: 'Mentimeter',
      code: '35 75 09 44',
      question: 'VENCE A LA IA',
      subtext: 'Reto: "Genera la pregunta académica más difícil que puedas. Gemini debe resolverla."',
      icon: <Zap size={80} className="text-orange-500 md:w-20 md:h-20 w-16 h-16" />
    },
    {
      id: 'pain-point',
      layout: 'big-statement',
      pretitle: 'PROBLEM: STATIC_LEARNING',
      title: 'EL ABURRIMIENTO',
      content: 'Memorizar las mismas preguntas de siempre no sirve. Necesitas desafíos que cambien.',
      highlight: 'EVALUACIÓN ESTÁTICA',
    },
    {
      id: 'dynamic-quiz-concept',
      layout: 'quiz-simulation',
      title: 'CUESTIONARIOS DINÁMICOS',
      subtitle: 'La IA puede cambiar los variables infinitamente.',
      questionTemplate: 'Calcula la velocidad de un objeto que recorre {DISTANCIA} metros en {TIEMPO} segundos.',
      variant1: '...recorre [500] metros en [25] segundos.',
      variant2: '...recorre [1200] metros en [60] segundos.',
      prompt: 'Prompt: "Crea 5 variaciones de este ejercicio cambiando solo los números."',
    },
    {
      id: 'mind-map-concept',
      layout: 'mind-map',
      title: 'MAPAS CONCEPTUALES',
      subtitle: 'Gemini entiende cómo se conectan las ideas.',
      centerNode: 'Concepto Central',
      nodes: ['Idea A', 'Idea B', 'Idea C', 'Detalle'],
      desc: 'La IA no solo resume texto lineal. Puede estructurar redes de conocimiento complejas.'
    },
    {
      id: 'rubric-concept',
      layout: 'center-icon',
      title: 'RÚBRICAS AUTOMÁTICAS',
      desc: 'No solo pidas "corrígeme". Pídele: "Evalúa mi respuesta del 1 al 7 basándote en claridad, precisión y ejemplos".',
      icon: <CheckSquare size={100} className="text-orange-400 animate-pulse md:w-24 md:h-24 w-16 h-16" />
    },
    {
      id: 'visual-identity',
      layout: 'design-prompt',
      title: 'IDENTIDAD VISUAL',
      subtitle: 'Tu asistente necesita una cara.',
      prompt: 'Diseña un logo minimalista para un Asistente de Física Cuántica, estilo futurista, colores neón, vector flat.',
      placeholderText: 'GENERANDO IMAGEN...'
    },
    {
      id: 'activity-day3',
      layout: 'checklist',
      title: 'MISIÓN DE HOY',
      subtitle: 'Integraremos la evaluación y el diseño:',
      tasks: [
        '1. Un Cuestionario Dinámico (Gemini)',
        '2. Un Mapa Conceptual Avanzado',
        '3. Un Avatar/Logo para tu Asistente (CanvaIA, BANANA, DALL-E, etc.)'
      ]
    },
    {
      id: 'closing',
      layout: 'hero',
      title: 'SIGUIENTE MÓDULO:',
      subtitle: 'LA GRAN FINAL',
      tagline: 'Ética, presentación de proyectos y el futuro de la IA.',
      footer: '¡EXCELENTE TRABAJO!',
      nextLink: '../modulo4/index.html',
      nextTitle: 'IR AL MÓDULO 4'
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

  // --- VISUAL COMPONENTS (ORANGE/INDIGO THEME) ---

  const Background = () => (
    <div className="fixed inset-0 -z-10 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-orange-950 opacity-90"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
    </div>
  );

  const ProgressBar = () => (
    <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-indigo-500 transition-all duration-500 z-50"
      style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}></div>
  );

  const renderContent = (slide) => {
    switch (slide.layout) {
      case 'hero':
        return (
          <div className="text-center space-y-6 md:space-y-8 animate-fadeIn px-4 flex flex-col items-center">
            <div className="inline-block p-4 md:p-6 bg-white/5 border border-orange-500/30 rounded-3xl backdrop-blur-md mb-4 md:mb-6 shadow-[0_0_50px_rgba(249,115,22,0.2)]">
              <PenTool size={80} className="text-orange-400 md:w-20 md:h-20 w-16 h-16 stroke-[1.5]" />
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-amber-200 drop-shadow-sm leading-tight">
              {slide.title}
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-indigo-400 tracking-wide uppercase">
              {slide.subtitle}
            </h2>
            <p className="text-lg md:text-2xl text-orange-100/80 font-light max-w-3xl mx-auto leading-relaxed">
              {slide.tagline}
            </p>
            {slide.nextLink && (
              <a
                href={slide.nextLink}
                className="mt-8 mb-16 group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg md:text-xl tracking-wider hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] z-50"
              >
                {slide.nextTitle || "SIGUIENTE MÓDULO"}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            )}
            <div className="pt-8 text-xs md:text-sm font-mono text-orange-500/60 border-t border-white/10 w-full max-w-4xl mx-auto mt-8 md:mt-12">
              {slide.footer}
            </div>
          </div>
        );

      case 'quiz-simulation':
        return (
          <div className="w-full max-w-6xl animate-fadeIn flex flex-col items-center gap-8 px-4">
            <div className="text-center mb-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">{slide.title}</h2>
              <p className="text-xl text-orange-200/80">{slide.subtitle}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-stretch">
              <div className="flex-1 bg-indigo-900/30 border border-indigo-500/30 p-8 rounded-3xl backdrop-blur-sm flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-indigo-500 text-white px-4 py-1 text-xs font-bold rounded-br-lg">TEMPLATE</div>
                <div className="flex items-center gap-3 text-indigo-300 mb-2">
                  <Brain size={24} />
                  <span className="font-mono font-bold">MASTER_PROMPT</span>
                </div>
                <p className="text-xl md:text-2xl font-medium text-white font-mono leading-relaxed">
                  {slide.questionTemplate.split(/({.*?})/).map((part, i) =>
                    part.startsWith('{') ? <span key={i} className="text-orange-400 font-bold">{part}</span> : part
                  )}
                </p>
                <div className="mt-auto pt-6 border-t border-white/10 text-sm text-gray-400 italic">
                  {slide.prompt}
                </div>
              </div>
              <div className="flex items-center justify-center text-orange-500">
                <ArrowRight className="hidden md:block w-10 h-10 animate-pulse" />
                <div className="md:hidden text-3xl animate-bounce">↓</div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-orange-500/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Versión 1</span>
                    <CheckSquare size={16} className="text-green-500" />
                  </div>
                  <p className="text-lg text-gray-200 font-mono">
                    {slide.variant1.split(/(\[.*?\])/).map((part, i) =>
                      part.startsWith('[') ? <span key={i} className="bg-orange-500/20 text-orange-300 px-1 rounded">{part}</span> : part
                    )}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-orange-500/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Versión 2</span>
                    <CheckSquare size={16} className="text-green-500" />
                  </div>
                  <p className="text-lg text-gray-200 font-mono">
                    {slide.variant2.split(/(\[.*?\])/).map((part, i) =>
                      part.startsWith('[') ? <span key={i} className="bg-orange-500/20 text-orange-300 px-1 rounded">{part}</span> : part
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'mind-map':
        return (
          <div className="w-full max-w-6xl animate-fadeIn flex flex-col items-center gap-8 px-4 h-full justify-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center">{slide.title}</h2>
            <p className="text-xl text-center text-indigo-200 max-w-3xl">{slide.desc}</p>
            <div className="relative w-full h-[500px] bg-slate-900/50 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#818cf8" strokeWidth="3" strokeDasharray="5,5" />
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#818cf8" strokeWidth="3" strokeDasharray="5,5" />
                <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#818cf8" strokeWidth="3" strokeDasharray="5,5" />
                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#818cf8" strokeWidth="3" strokeDasharray="5,5" />
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-indigo-600 text-white px-10 py-6 rounded-full font-black text-xl md:text-3xl shadow-[0_0_60px_rgba(79,70,229,0.6)] border-4 border-indigo-400/30 animate-pulse whitespace-nowrap">
                  {slide.centerNode}
                </div>
              </div>
              <div className="absolute top-[15%] left-[10%] md:left-[15%] z-10 bg-white/10 backdrop-blur-md border border-indigo-500/30 px-6 py-4 rounded-2xl text-indigo-100 font-bold hover:scale-110 transition-transform cursor-default max-w-[150px] md:max-w-xs text-center text-sm md:text-lg shadow-lg">
                {slide.nodes[0]}
              </div>
              <div className="absolute top-[15%] right-[10%] md:right-[15%] z-10 bg-white/10 backdrop-blur-md border border-indigo-500/30 px-6 py-4 rounded-2xl text-indigo-100 font-bold hover:scale-110 transition-transform cursor-default max-w-[150px] md:max-w-xs text-center text-sm md:text-lg shadow-lg">
                {slide.nodes[1]}
              </div>
              <div className="absolute bottom-[15%] left-[10%] md:left-[15%] z-10 bg-white/10 backdrop-blur-md border border-indigo-500/30 px-6 py-4 rounded-2xl text-indigo-100 font-bold hover:scale-110 transition-transform cursor-default max-w-[150px] md:max-w-xs text-center text-sm md:text-lg shadow-lg">
                {slide.nodes[2]}
              </div>
              <div className="absolute bottom-[15%] right-[10%] md:right-[15%] z-10 bg-white/10 backdrop-blur-md border border-indigo-500/30 px-6 py-4 rounded-2xl text-indigo-100 font-bold hover:scale-110 transition-transform cursor-default max-w-[150px] md:max-w-xs text-center text-sm md:text-lg shadow-lg">
                {slide.nodes[3]}
              </div>
            </div>
          </div>
        );

      case 'design-prompt':
        return (
          <div className="w-full max-w-5xl animate-fadeIn flex flex-col items-center gap-8 px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white">{slide.title}</h2>
            <p className="text-2xl text-orange-200/80">{slide.subtitle}</p>

            <div className="w-full flex flex-col md:flex-row gap-8 items-center">
              {/* Prompt Box */}
              <div className="flex-1 w-full">
                <div className="bg-slate-800 p-6 rounded-2xl border border-white/10 relative">
                  <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm font-bold tracking-widest">
                    <Terminal size={16} />
                    /IMAGINE
                  </div>
                  <p className="text-xl text-indigo-300 font-mono leading-relaxed">
                    {slide.prompt}
                  </p>
                  <div className="absolute -bottom-3 -right-3 bg-orange-500 p-2 rounded-full text-white shadow-lg">
                    <Send size={20} />
                  </div>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="flex-1 w-full aspect-square bg-black/50 rounded-3xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Palette size={48} className="text-white/20 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-white/40 font-mono text-sm animate-pulse">{slide.placeholderText}</p>
              </div>
            </div>
          </div>
        );

      case 'big-statement':
        return (
          <div className="flex flex-col items-center justify-center animate-fadeIn w-full h-full p-4 overflow-hidden">
            <div className="relative w-full max-w-[90vw] bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl p-12 md:p-16 flex flex-col items-center gap-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-indigo-500 opacity-60"></div>
              {slide.pretitle && (
                <div className="absolute top-4 md:top-8 left-6 md:left-10 flex items-center gap-2 text-orange-400/70 font-mono text-xs md:text-sm tracking-widest">
                  <Terminal size={14} />
                  {slide.pretitle}
                </div>
              )}
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mt-4 text-center uppercase">
                {slide.title}
              </h2>
              <div className="relative group w-auto inline-block mt-4 max-w-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 via-amber-600 to-indigo-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
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

      case 'interactive':
        return (
          <div className="text-center space-y-6 md:space-y-10 animate-fadeIn w-full max-w-4xl relative px-4">
            <div className="absolute -top-20 -right-20 opacity-20 animate-pulse hidden md:block text-orange-500">
              <Sparkles size={120} />
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-orange-600/20 border border-orange-500/50 rounded-full text-orange-300 font-bold uppercase tracking-wider text-sm md:text-base">
              <Users size={18} /> Dinámica {slide.platform}
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white">{slide.title}</h2>
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] backdrop-blur-xl flex flex-col items-center gap-6 md:gap-8 hover:bg-white/10 transition-colors">
              <div className="text-orange-400">{slide.icon}</div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-4xl font-bold text-white">{slide.question}</h3>
                <p className="text-lg md:text-xl text-gray-400">{slide.subtext}</p>
              </div>
              <div className="w-full bg-slate-900/80 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between border border-slate-700 gap-2">
                <span className="text-gray-400 font-mono">CODE:</span>
                <span className="text-3xl md:text-4xl font-mono font-black text-orange-400 tracking-[0.2em]">{slide.code}</span>
              </div>
            </div>
          </div>
        );

      case 'center-icon':
        return (
          <div className="text-center max-w-5xl animate-fadeIn flex flex-col items-center gap-6 md:gap-8 px-4">
            <div className="mb-4 md:mb-8 p-6 bg-white/5 rounded-full backdrop-blur-md text-indigo-400 [&>svg]:w-16 [&>svg]:h-16 md:[&>svg]:w-20 md:[&>svg]:h-20">
              {slide.icon}
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl text-orange-100/80 max-w-3xl mt-4 leading-relaxed">
              {slide.desc}
            </p>
          </div>
        );

      case 'checklist':
        return (
          <div className="flex flex-col items-center animate-fadeIn w-full max-w-4xl px-4">
            <div className="flex items-center gap-3 mb-6 md:mb-8 text-indigo-400">
              <Cpu size={32} />
              <span className="text-lg md:text-xl font-mono font-bold">ACTIVIDAD PRÁCTICA</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black mb-4 text-white text-center leading-tight">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-orange-200/60 mb-8 md:mb-12 font-mono text-center">{slide.subtitle}</p>
            <div className="w-full space-y-3 md:space-y-4">
              {slide.tasks.map((task, index) => (
                <div key={index} className="bg-white/5 border border-orange-500/20 p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-6 hover:bg-white/10 transition-all hover:translate-x-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg md:text-2xl font-medium text-white">{task.substring(3)}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default: return null;
    }
  };

  return (
    <div className="relative min-h-screen w-full font-sans text-white overflow-hidden flex flex-col">
      <Background />
      <ProgressBar />

      {/* HEADER: Home Button + Title + Logo + Controls */}
      <header className="fixed top-0 w-full p-4 flex justify-between items-start z-50 pointer-events-none">

        {/* LEFT: Home Button + Label */}
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
          {/* The 'brightness-0 invert' filter automatically makes it white */}
          <img
            src="/logo-unab.png"
            alt="Logo UNAB"
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