import React, { useState, useEffect, useCallback } from 'react';
import imgArteReal from './assets/arte-real.jpg';
import imgArteIa from './assets/arte-ia.jpg';
import {
  ArrowRight, ArrowLeft, QrCode, Brain, Bot,
  Gamepad2, Zap, User, MessageSquare,
  CheckCircle, XCircle, Sparkles, Terminal,
  Maximize2, Minimize2, Users, Cpu, Code, Home,
  Palette
} from 'lucide-react';


const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // --- SLIDE DATA ---
  const slides = [
    {
      id: 'cover',
      layout: 'hero',
      title: 'BOOTCAMP IA',
      subtitle: 'HERRAMIENTAS GENERATIVAS',
      tagline: 'Domina la Inteligencia Artificial en tu vida académica',
      footer: 'Ingeniería en Computación e Informática'
    },
    {
      id: 'art-challenge',
      layout: 'art-challenge',
      title: 'DESAFÍO DE ARTE',
      subtitle: '¿Pincel Humano o Píxel Matemático?',
      imgA: imgArteReal,
      imgB: imgArteIa,
      labelA: 'OBRA A',
      labelB: 'OBRA B',
      reveal: 'RESPUESTA: La Obra B es la IA (fíjate en los trazos repetitivos).',
    },
    {
      id: 'menti-boss',
      layout: 'interactive',
      title: 'TU "JEFE FINAL"',
      platform: 'Mentimeter',
      code: '35 75 09 44',
      question: '¿A QUÉ LE TEMES?',
      subtext: '¿Qué es lo más difícil de entrar a la universidad?',
      icon: <Gamepad2 size={80} className="text-red-500" />
    },
    {
      id: 'mission',
      layout: 'big-statement',
      pretitle: 'BOOTCAMP_IA_2025',
      title: 'TU MISIÓN',
      content: 'No es usar Google. Es crear un compañero que piense contigo.',
      highlight: 'ASISTENTE ACADÉMICO 3000',
    },
    {
      id: 'versus',
      layout: 'versus',
      title: 'ELIGE TU ARMA',
      leftName: 'ChatGPT',
      leftRole: 'EL SABIO',
      leftDesc: 'Experto en lenguaje, explicaciones profundas y redacción creativa.',
      rightName: 'Gemini',
      rightRole: 'EL MAGO',
      rightDesc: 'Conectado a internet, analítico, creador de mapas y esquemas.',
    },
    {
      id: 'demo-time',
      layout: 'center-icon',
      title: '¿CÓMO?',
      desc: 'Veamos cómo resuelven un problema real en tiempo real.',
      icon: <Zap size={100} className="text-yellow-400 animate-pulse" />
    },
    {
      id: 'prompt-theory',
      layout: 'formula',
      title: 'LA FÓRMULA SECRETA',
      subtitle: 'La IA no lee tu mente, lee tu PROMPT',
      formula: [
        { label: 'ROL', color: 'text-yellow-400', border: 'border-yellow-400', bg: 'bg-yellow-400/10' },
        { label: 'CONTEXTO', color: 'text-cyan-400', border: 'border-cyan-400', bg: 'bg-cyan-400/10' },
        { label: 'INSTRUCCIÓN', color: 'text-pink-400', border: 'border-pink-400', bg: 'bg-pink-400/10' },
      ]
    },
    {
      id: 'system-prompt',
      layout: 'big-statement',
      pretitle: 'CORE_CONFIG',
      title: 'SYSTEM PROMPT',
      content: 'Define quién es, cómo habla y qué hace tu IA.',
      highlight: 'LA CÉDULA DE IDENTIDAD',
    },
    {
      id: 'examples',
      layout: 'comparison-vertical',
      title: 'EL EFECTO DEL ROL',
      bad: 'Actúa como profesor de historia.',
      good: 'Eres "Profe Max", un experto en Historia de Chile sarcástico pero motivador, que explica usando analogías de fútbol.',
      result: 'El tono cambia TODO.'
    },
    {
      id: 'activity',
      layout: 'checklist',
      title: 'BUILD MODE: ON',
      subtitle: 'Abre tu Google Docs. Empieza a desarrolla tu asistente académico.',
      tasks: [
        '1. Bautiza a tu Asistente (Nombre Creativo)',
        '2. Define su Área (¿Ciencias? ¿Matemáticas?)',
        '3. Escribe su Personalidad',
        '4. Define 3 Funciones Principales'
      ]
    },
    {
      id: 'closing',
      layout: 'hero',
      title: 'PRÓXIMO MÓDULO:',
      subtitle: 'EXPLICACIONES IMPOSIBLES',
      tagline: 'Aprenderemos a transformar textos aburridos y difíciles en oro.',
      footer: '¡SIGUE ASÍ!',
      nextLink: '../modulo2/index.html',
      nextTitle: 'IR AL MÓDULO 2'
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

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // --- DESIGN COMPONENTS ---

  // Animated Background
  const Background = () => (
    <div className="fixed inset-0 -z-10 bg-slate-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 opacity-80"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[100px]"></div>
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
    </div>
  );



  // Progress Bar
  const ProgressBar = () => (
    <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 z-50"
      style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}></div>
  );

  // Slide Renderer
  const renderContent = (slide) => {
    switch (slide.layout) {
      case 'hero':
        return (
          <div className="text-center animate-fadeIn px-4 flex flex-col items-center justify-center min-h-[60vh]">

            {/* --- SUPERIOR BLOCK: LOGO AND IDENTITY --- */}
            <div className="flex flex-col items-center justify-center mb-8 space-y-4">
              <div className="inline-block p-4 md:p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                <Bot size={60} className="text-white md:w-20 md:h-20 w-16 h-16" />
              </div>
              <div className="flex flex-col items-center opacity-90">
                <h3 className="text-sm md:text-base font-bold text-white tracking-widest uppercase mb-1">
                  Facultad de Ingeniería
                </h3>
                <div className="h-0.5 w-12 bg-indigo-500 rounded-full mb-1"></div>
                <p className="text-xs md:text-sm text-indigo-300 font-mono tracking-wider font-medium">
                  INGENIERÍA EN COMPUTACIÓN E INFORMÁTICA
                </p>
              </div>
            </div>
            <div className="space-y-4 mb-12">
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-purple-200 drop-shadow-sm leading-tight">
                {slide.title}
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-pink-400 tracking-wide uppercase">
                {slide.subtitle}
              </h2>
              <p className="text-lg md:text-2xl text-blue-200 font-light max-w-3xl mx-auto leading-relaxed">
                {slide.tagline}
              </p>
            </div>
            <div className="flex flex-col items-center w-full">
              {slide.nextLink && (
                <a
                  href={slide.nextLink}
                  className="mb-16 group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg md:text-xl tracking-wider hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] z-50"
                >
                  {slide.nextTitle}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              )}
              <div className="w-full max-w-2xl border-t border-white/10 pt-8 text-xs md:text-sm font-mono text-gray-400">
                {slide.footer}
              </div>
            </div>
          </div>
        );

      case 'art-challenge':
        return (
          <div className="w-full max-w-6xl animate-fadeIn flex flex-col items-center gap-8 px-4 h-full justify-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">{slide.title}</h2>
              <p className="text-xl text-purple-200">{slide.subtitle}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center">

              {/* Option A */}
              <div className="flex-1 flex flex-col items-center gap-4 group w-full max-w-md">
                <div className="relative w-full aspect-square bg-slate-800 rounded-3xl overflow-hidden border-4 border-white/5 group-hover:border-purple-500 transition-all shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-black/40">
                    <Palette size={64} />
                  </div>
                  <img src={slide.imgA} alt="Arte A" className="relative w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform" />
                </div>
                <span className="text-2xl font-bold text-white bg-white/10 px-8 py-2 rounded-full border border-white/5">{slide.labelA}</span>
              </div>

              {/* VS */}
              <div className="flex items-center justify-center">
                <span className="text-5xl font-black text-white/20 italic">VS</span>
              </div>

              {/* Option B */}
              <div className="flex-1 flex flex-col items-center gap-4 group w-full max-w-md">
                <div className="relative w-full aspect-square bg-slate-800 rounded-3xl overflow-hidden border-4 border-white/5 group-hover:border-pink-500 transition-all shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-black/40">
                    <Cpu size={64} />
                  </div>
                  <img src={slide.imgB} alt="Arte B" className="relative w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform" />
                </div>
                <span className="text-2xl font-bold text-white bg-white/10 px-8 py-2 rounded-full border border-white/5">{slide.labelB}</span>
              </div>
            </div>
            <div className="mt-4 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center w-full max-w-3xl cursor-help group hover:bg-black/80 hover:border-purple-500/50 transition-all duration-300">
              <div className="relative min-h-[3rem] flex items-center justify-center">
                <p className="text-xl md:text-2xl text-white font-medium transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2 absolute w-full">
                  ¿Cuál tiene la pincelada humana y cuál es una imitación matemática?
                </p>
                <p className="text-xl md:text-2xl text-green-400 font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 absolute w-full">
                  {slide.reveal}
                </p>
                <p className="text-xl md:text-2xl opacity-0 pointer-events-none">
                  ¿Cuál tiene la pincelada humana y cuál es una imitación matemática?
                </p>
              </div>
              <div className="mt-2 text-xs text-gray-500 font-mono uppercase tracking-widest group-hover:opacity-0 transition-opacity">
                (Pasa el mouse para revelar)
              </div>
            </div>
          </div>
        );

      case 'interactive':
        return (
          <div className="text-center space-y-10 animate-fadeIn w-full max-w-4xl relative">
            <div className="absolute -top-20 -right-20 opacity-20 animate-pulse">
              <Sparkles size={120} />
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full text-purple-300 font-bold uppercase tracking-wider">
              <Users size={18} /> Dinámica {slide.platform}
            </div>

            <h2 className="text-7xl font-black text-white">{slide.title}</h2>

            <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-xl flex flex-col items-center gap-8 hover:bg-white/10 transition-colors">
              {slide.icon}
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-white">{slide.question}</h3>
                <p className="text-xl text-gray-400">{slide.subtext}</p>
              </div>
              <div className="w-full bg-gray-800 rounded-2xl p-6 flex items-center justify-between border border-gray-700">
                <span className="text-gray-400 font-mono">CODE:</span>
                <span className="text-4xl font-mono font-black text-white tracking-[0.2em]">{slide.code}</span>
              </div>
            </div>
          </div>
        );

      case 'versus':
        return (
          <div className="w-full max-w-7xl animate-fadeIn">

            <h2 className="text-center text-5xl font-black mb-16 uppercase tracking-[0.2em] text-white/20">
              {slide.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-8 md:gap-16 place-items-center">
              <div className="md:col-span-3 bg-gradient-to-b from-teal-900/40 to-emerald-900/10 border border-teal-500/30 rounded-[2rem] p-6 md:p-10 flex flex-col items-center hover:scale-105 transition-all duration-300 group w-full">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-teal-500 rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-[0_0_30px_rgba(20,184,166,0.4)] group-hover:rotate-12 transition-transform overflow-hidden">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16 text-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7865a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0916-2.3229L15.0859 7.28l.9652.563-5.666 3.269zM19.345 9.87l-5.6708 3.2642-.9652-.563 5.6707-3.2641zm-6.7237 5.253L6.965 11.87l-.9652.5583 5.666 3.269z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-white mb-2">{slide.leftName}</h3>
                <span className="text-teal-400 font-mono text-xs md:text-sm tracking-widest mb-4 md:mb-6">{slide.leftRole}</span>
                <p className="text-center text-teal-100/70 text-sm md:text-lg leading-relaxed">{slide.leftDesc}</p>
              </div>
              <div className="flex items-center justify-center md:col-span-1 w-full">
                <span className="text-5xl font-black text-red-500 italic">
                  VS
                </span>
              </div>
              <div className="md:col-span-3 bg-gradient-to-b from-blue-900/40 to-indigo-900/10 border border-blue-500/30 rounded-[2rem] p-10 flex flex-col items-center hover:scale-105 transition-all duration-300 group w-full">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(37,99,235,0.4)] group-hover:-rotate-12 transition-transform">
                  <Sparkles size={40} className="text-white" />
                </div>
                <h3 className="text-4xl font-black text-white mb-2">{slide.rightName}</h3>
                <span className="text-blue-400 font-mono text-sm tracking-widest mb-6">{slide.rightRole}</span>
                <p className="text-center text-blue-100/70 text-lg leading-relaxed">{slide.rightDesc}</p>
              </div>

            </div>

          </div>
        );

      case 'formula':
        return (
          <div className="text-center space-y-16 animate-fadeIn w-full max-w-5xl">
            <h2 className="text-6xl font-bold text-white">{slide.title}</h2>
            <p className="text-2xl text-purple-200">{slide.subtitle}</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {slide.formula.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className={`px-10 py-8 rounded-2xl border-2 ${item.border} ${item.bg} ${item.color} backdrop-blur-sm text-3xl font-black tracking-widest shadow-xl transform hover:-translate-y-2 transition-transform`}>
                    {item.label}
                  </div>
                  {idx < slide.formula.length - 1 && (
                    <span className="text-4xl text-gray-600 font-bold">+</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        );

      case 'checklist':
        return (
          <div className="flex flex-col items-center animate-fadeIn w-full max-w-4xl">
            <div className="flex items-center gap-3 mb-8 text-orange-400">
              <Cpu size={32} />
              <span className="text-xl font-mono font-bold">ACTIVIDAD PRÁCTICA</span>
            </div>
            <h2 className="text-7xl font-black mb-4 text-white text-center">
              {slide.title}
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-mono">{slide.subtitle}</p>

            <div className="w-full space-y-4">
              {slide.tasks.map((task, index) => (
                <div key={index} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-all hover:translate-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-2xl font-medium text-white">{task.substring(3)}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'comparison-vertical':
        return (
          <div className="w-full max-w-5xl animate-fadeIn">
            <h2 className="text-5xl font-bold text-center mb-12 text-white">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-950/30 border border-red-500/20 p-8 rounded-3xl relative">
                <div className="absolute top-6 right-6 text-red-500"><XCircle size={32} /></div>
                <h3 className="text-xl font-bold text-red-400 mb-4 tracking-widest">PROMPT GENÉRICO</h3>
                <p className="text-2xl text-gray-300 font-light leading-relaxed">"{slide.bad}"</p>
              </div>
              <div className="bg-green-950/30 border border-green-500/20 p-8 rounded-3xl relative">
                <div className="absolute top-6 right-6 text-green-500"><CheckCircle size={32} /></div>
                <h3 className="text-xl font-bold text-green-400 mb-4 tracking-widest">PROMPT EXPERTO</h3>
                <p className="text-2xl text-white font-medium leading-relaxed">"{slide.good}"</p>
              </div>
            </div>
            <p className="text-center mt-12 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {slide.result}
            </p>
          </div>
        );

      case 'big-statement':
        return (
          <div className="flex flex-col items-center justify-center animate-fadeIn w-full h-full p-4 overflow-hidden">
            <div className="relative w-full max-w-[90vw] bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl p-12 md:p-16 flex flex-col items-center gap-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
              {slide.pretitle && (
                <div className="absolute top-8 left-10 flex items-center gap-2 text-gray-400 font-mono text-sm tracking-widest opacity-70">
                  <Terminal size={14} />
                  {slide.pretitle}
                </div>
              )}
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mt-4 text-center uppercase">
                {slide.title}
              </h2>
              <div className="relative group w-auto inline-block mt-4 max-w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
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

      default: // 'big-statement', 'center-icon', 'concept-card'
        return (
          <div className="text-center max-w-5xl animate-fadeIn flex flex-col items-center gap-8">
            {slide.icon && <div className="mb-8 p-6 bg-white/5 rounded-full backdrop-blur-md">{slide.icon}</div>}
            {slide.pretitle && <span className="text-blue-400 font-mono tracking-widest uppercase mb-4 block">{slide.pretitle}</span>}
            <h2 className="text-6xl md:text-7xl font-black text-white leading-tight">
              {slide.title}
            </h2>
            {slide.subtitle && <h3 className="text-3xl text-pink-400 font-bold">{slide.subtitle}</h3>}
            {slide.content && <p className="text-2xl md:text-3xl text-blue-100 font-light leading-relaxed max-w-4xl">{slide.content}</p>}
            {slide.highlight && <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mt-4">{slide.highlight}</div>}
            {slide.desc && <p className="text-2xl text-gray-400 max-w-3xl mt-4">{slide.desc}</p>}
          </div>
        );
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

          {/* UNAB Logo */}
          {/* The 'brightness-0 invert' filter automatically makes it white in slides */}
          <img
            src="/logo-unab.png"
            alt="Logo UNAB"
            className="h-8 md:h-20 object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
          />

          {/* Controles */}
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

      {/* Main Area */}
      <main className="flex-1 flex items-center justify-center p-6 md:p-12 relative z-10">
        {renderContent(slides[currentSlide])}
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 w-full p-8 flex justify-between items-center z-40">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md ${currentSlide === 0 ? 'opacity-0' : 'opacity-100'}`}
        >
          <ArrowLeft size={24} />
        </button>

        <div className="flex gap-2 opacity-30">
          {slides.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white'}`} />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md ${currentSlide === slides.length - 1 ? 'opacity-0' : 'opacity-100'}`}
        >
          <ArrowRight size={24} />
        </button>
      </footer>

      {/* Global Styles for animations */}
      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 2.5s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); filter: blur(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Presentation;