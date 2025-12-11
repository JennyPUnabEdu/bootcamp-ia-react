import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowRight, ArrowLeft, QrCode, Brain, Bot,
  Zap, User, MessageSquare, Sparkles, Terminal,
  Maximize2, Minimize2, Users, Cpu, Layers, FileText,
  Target, Send, CheckSquare,
  Home
} from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // --- SLIDES DATA ---
  const slides = [
    {
      id: 'cover',
      layout: 'hero',
      title: 'CLARIDAD ABSOLUTA',
      subtitle: 'SÍNTESIS Y ESTRUCTURA CON IA',
      tagline: 'Aprende a transformar el caos de información en conocimiento útil.',
      footer: 'MÓDULO 2 • INGENIERIA EN COMPUTACION E INFORMÁTICA'
    },
    {
      id: 'menti-competition',
      layout: 'interactive',
      title: 'EL RETO',
      platform: 'Mentimeter',
      code: '35 75 09 44cd',
      question: 'SIMPLIFICA LO IMPOSIBLE',
      subtext: '¿Puedes explicar un concepto universitario a un niño de 5 años?',
      icon: <Target size={80} className="text-emerald-400 md:w-20 md:h-20 w-16 h-16" />
    },
    {
      id: 'pain-point',
      layout: 'big-statement',
      pretitle: 'ERROR: DATA_OVERLOAD',
      title: 'EL ENEMIGO',
      content: 'El problema no es que no entiendas. El problema es cómo te explican.',
      highlight: 'TEXTOS INFINITOS',
    },
    {
      id: 'versus-roles',
      layout: 'versus',
      title: 'TU EQUIPO DE ESTUDIO',
      leftName: 'ChatGPT',
      leftRole: 'EL TRADUCTOR',
      leftDesc: 'Experto en lenguaje. Usa analogías, simplifica textos difíciles y explica "en fácil".',
      rightName: 'Gemini',
      rightRole: 'EL ARQUITECTO',
      rightDesc: 'Experto en estructura. Lee PDFs, crea tablas comparativas, cronologías y mapas.',
    },
    {
      id: 'demo-chatgpt',
      layout: 'chat-simulation',
      title: 'MODO TRADUCTOR',
      botName: 'ChatGPT',
      prompt: 'Explícame la Ley de la Termodinámica como si fuera una fiesta en casa llena de gente.',
      response: '¡Claro! Imagina que la energía son los invitados.\n\n1. La energía no se crea ni se destruye: Si entra gente a la fiesta, o se quedan adentro o salen al patio, pero no desaparecen.\n2. La entropía aumenta: A medida que avanza la fiesta, la casa se desordena sola, nunca se ordena sola.',
      color: 'text-teal-400',
      botIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0916-2.3229L15.0859 7.28l.9652.563-5.666 3.269zM19.345 9.87l-5.6708 3.2642-.9652-.563 5.6707-3.2641zm-6.7237 5.253L6.965 11.87l-.9652.5583 5.666 3.269z" />
        </svg>
      )
    },
    {
      id: 'demo-gemini',
      layout: 'chat-simulation',
      title: 'MODO ARQUITECTO',
      botName: 'Gemini',
      prompt: 'Toma este texto sobre la Segunda Guerra Mundial y crea una tabla con: Evento, Año y Consecuencia Principal.',
      response: '| Evento | Año | Consecuencia |\n|---|---|---|\n| Invasión a Polonia | 1939 | Inicio del conflicto |\n| Día D | 1944 | Liberación de Francia |\n| Bomba Atómica | 1945 | Fin de la guerra |',
      color: 'text-cyan-400',
      botIcon: <Sparkles />
    },
    {
      id: 'formula-study',
      layout: 'process-flow',
      title: 'LA FÓRMULA FEYNMAN',
      subtitle: 'Si no puedes explicarlo simple, no lo entiendes.',
      steps: [
        { title: '1. CONCEPTO', desc: 'Elige el tema difícil', icon: <FileText /> },
        { title: '2. SIMPLIFICACIÓN', desc: 'Explícalo sin jerga', icon: <Zap /> },
        { title: '3. ANALOGÍA', desc: 'Usa un ejemplo real', icon: <Brain /> }
      ]
    },
    {
      id: 'activity-day2',
      layout: 'checklist',
      title: 'MISIÓN DE HOY',
      subtitle: 'Vamos a crear los materiales de estudio definitivos:',
      tasks: [
        '1. Una Explicación "A prueba de balas" (ChatGPT)',
        '2. Un Resumen Estructurado en Tabla (Gemini)',
        '3. Una Guía de Estudio Paso a Paso (Gemini)'
      ]
    },
    {
      id: 'closing',
      layout: 'hero',
      title: 'SIGUIENTE MÓDULO:',
      subtitle: 'EL ASISTENTE TE EVALÚA',
      tagline: 'Aprenderemos a crear cuestionarios dinámicos que se corrigen solos.',
      footer: '¡BIEN HECHO!',
      nextLink: '../modulo3/index.html',
      nextTitle: 'IR AL MÓDULO 3'
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

  // --- VISUAL COMPONENTS ---

  const Background = () => (
    <div className="fixed inset-0 -z-10 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-950 via-teal-950 to-emerald-950 opacity-90"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
    </div>
  );

  const ProgressBar = () => (
    <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 transition-all duration-500 z-50"
      style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}></div>
  );

  const renderContent = (slide) => {
    switch (slide.layout) {
      case 'hero':
        return (
          <div className="text-center space-y-6 md:space-y-8 animate-fadeIn px-4 flex flex-col items-center">
            <div className="inline-block p-4 md:p-6 bg-white/5 border border-emerald-500/30 rounded-3xl backdrop-blur-md mb-4 md:mb-6 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
              <FileText size={80} className="text-emerald-300 md:w-20 md:h-20 w-16 h-16 stroke-[1.5]" />
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-teal-200 drop-shadow-sm leading-tight">
              {slide.title}
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-cyan-400 tracking-wide uppercase">
              {slide.subtitle}
            </h2>
            <p className="text-lg md:text-2xl text-emerald-100/80 font-light max-w-3xl mx-auto leading-relaxed">
              {slide.tagline}
            </p>
            {slide.nextLink && (
              <a
                href={slide.nextLink}
                className="mt-8 mb-16 group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg md:text-xl tracking-wider hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] z-50"
              >
                {slide.nextTitle}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            )}
            <div className="pt-8 text-xs md:text-sm font-mono text-emerald-500/60 border-t border-white/10 w-full max-w-4xl mx-auto">
              {slide.footer}
            </div>
          </div>
        );

      case 'chat-simulation':
        return (
          <div className="w-full max-w-5xl animate-fadeIn flex flex-col items-center gap-6 md:gap-8 px-4 h-full justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-2">{slide.title}</h2>
            <div className="w-full bg-slate-900/90 border border-white/10 rounded-3xl p-4 md:p-8 flex flex-col gap-6 shadow-2xl overflow-y-auto no-scrollbar relative max-h-[70vh]">
              <div className="flex items-center gap-2 opacity-50 border-b border-white/5 pb-4 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs font-mono">{slide.botName}_Session.log</span>
              </div>
              <div className="flex gap-4 flex-row-reverse items-end">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <User size={20} className="text-white" />
                </div>
                <div className="bg-emerald-600/20 border border-emerald-500/30 text-emerald-100 p-4 rounded-2xl rounded-tr-none text-base md:text-xl max-w-[85%]">
                  <p className="font-bold text-[10px] md:text-xs text-emerald-400 mb-1 uppercase tracking-wider">TÚ (PROMPT)</p>
                  {slide.prompt}
                </div>
              </div>
              <div className="flex gap-4 items-end">
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${slide.botName === 'ChatGPT' ? 'bg-teal-500' : 'bg-cyan-500'}`}>
                  {slide.botIcon}
                </div>
                <div className="bg-white/5 border border-white/10 text-white p-4 rounded-2xl rounded-tl-none text-base md:text-xl max-w-[90%] shadow-lg">
                  <p className={`font-bold text-[10px] md:text-xs mb-2 uppercase tracking-wider ${slide.color}`}>{slide.botName}</p>
                  <p className="whitespace-pre-line leading-relaxed">{slide.response}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'process-flow':
        return (
          <div className="text-center space-y-8 md:space-y-12 animate-fadeIn w-full max-w-6xl px-4 h-full flex flex-col justify-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">{slide.title}</h2>
              <p className="text-xl md:text-2xl text-emerald-200/80">{slide.subtitle}</p>
            </div>
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8">
              {slide.steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex-1 bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2 group flex flex-col items-center gap-4">
                    <div className="p-4 bg-emerald-500/20 rounded-full text-emerald-300 group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(step.icon, { size: 32 })}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{step.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base">{step.desc}</p>
                  </div>
                  {idx < slide.steps.length - 1 && (
                    <div className="flex items-center justify-center text-emerald-500/50">
                      <ArrowRight className="hidden md:block w-8 h-8" />
                      <div className="md:hidden text-2xl">↓</div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        );

      case 'big-statement':
        return (
          <div className="flex flex-col items-center justify-center animate-fadeIn w-full h-full p-4 overflow-hidden">
            <div className="relative w-full max-w-[90vw] bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl p-12 md:p-16 flex flex-col items-center gap-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-60"></div>
              {slide.pretitle && (
                <div className="absolute top-4 md:top-8 left-6 md:left-10 flex items-center gap-2 text-emerald-400/70 font-mono text-xs md:text-sm tracking-widest">
                  <Terminal size={14} />
                  {slide.pretitle}
                </div>
              )}
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mt-4 text-center uppercase">
                {slide.title}
              </h2>
              <div className="relative group w-auto inline-block mt-4 max-w-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
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
            <div className="absolute -top-20 -right-20 opacity-20 animate-pulse hidden md:block text-cyan-500">
              <Sparkles size={120} />
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-emerald-600/20 border border-emerald-500/50 rounded-full text-emerald-300 font-bold uppercase tracking-wider text-sm md:text-base">
              <Users size={18} /> Dinámica {slide.platform}
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white">{slide.title}</h2>
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] backdrop-blur-xl flex flex-col items-center gap-6 md:gap-8 hover:bg-white/10 transition-colors">
              <div className="text-cyan-400">{slide.icon}</div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-4xl font-bold text-white">{slide.question}</h3>
                <p className="text-lg md:text-xl text-gray-400">{slide.subtext}</p>
              </div>
              <div className="w-full bg-slate-900/80 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between border border-slate-700 gap-2">
                <span className="text-gray-400 font-mono">CODE:</span>
                <span className="text-3xl md:text-4xl font-mono font-black text-emerald-400 tracking-[0.2em]">{slide.code}</span>
              </div>
            </div>
          </div>
        );

      case 'versus':
        return (
          <div className="w-full max-w-7xl animate-fadeIn px-4 py-8 overflow-y-auto max-h-screen no-scrollbar">
            <h2 className="text-center text-3xl md:text-5xl font-black mb-8 md:mb-16 uppercase tracking-[0.2em] text-white/20">
              {slide.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-8 md:gap-16 place-items-center pb-20 md:pb-0">
              <div className="md:col-span-3 bg-gradient-to-b from-emerald-900/40 to-teal-900/10 border border-emerald-500/30 rounded-[2rem] p-6 md:p-10 flex flex-col items-center hover:scale-105 transition-all duration-300 group w-full">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-600 rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-[0_0_30px_rgba(16,185,129,0.4)] group-hover:rotate-12 transition-transform overflow-hidden">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16 text-white" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7865a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0916-2.3229L15.0859 7.28l.9652.563-5.666 3.269zM19.345 9.87l-5.6708 3.2642-.9652-.563 5.6707-3.2641zm-6.7237 5.253L6.965 11.87l-.9652.5583 5.666 3.269z" /></svg>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-white mb-2">{slide.leftName}</h3>
                <span className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest mb-4 md:mb-6">{slide.leftRole}</span>
                <p className="text-center text-emerald-100/70 text-sm md:text-lg leading-relaxed">{slide.leftDesc}</p>
              </div>
              <div className="flex items-center justify-center md:col-span-1 w-full py-4 md:py-0">
                <span className="text-4xl md:text-5xl font-black text-cyan-300 italic">VS</span>
              </div>
              <div className="md:col-span-3 bg-gradient-to-b from-cyan-900/40 to-blue-900/10 border border-cyan-500/30 rounded-[2rem] p-6 md:p-10 flex flex-col items-center hover:scale-105 transition-all duration-300 group w-full">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-cyan-600 rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-[0_0_30px_rgba(8,145,178,0.4)] group-hover:-rotate-12 transition-transform">
                  <Sparkles size={40} className="text-white md:w-10 md:h-10 w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-white mb-2">{slide.rightName}</h3>
                <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-widest mb-4 md:mb-6">{slide.rightRole}</span>
                <p className="text-center text-cyan-100/70 text-sm md:text-lg leading-relaxed">{slide.rightDesc}</p>
              </div>
            </div>
          </div>
        );

      case 'checklist':
        return (
          <div className="flex flex-col items-center animate-fadeIn w-full max-w-4xl px-4">
            <div className="flex items-center gap-3 mb-6 md:mb-8 text-teal-400">
              <Cpu size={32} />
              <span className="text-lg md:text-xl font-mono font-bold">ACTIVIDAD PRÁCTICA</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black mb-4 text-white text-center leading-tight">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-emerald-200/60 mb-8 md:mb-12 font-mono text-center">{slide.subtitle}</p>
            <div className="w-full space-y-3 md:space-y-4">
              {slide.tasks.map((task, index) => (
                <div key={index} className="bg-white/5 border border-emerald-500/20 p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-6 hover:bg-white/10 transition-all hover:translate-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg md:text-2xl font-medium text-white">{task.substring(3)}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center max-w-5xl animate-fadeIn flex flex-col items-center gap-8 px-4">
            {slide.icon && <div className="mb-8 p-6 bg-white/5 rounded-full backdrop-blur-md">{slide.icon}</div>}
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight">
              {slide.title}
            </h2>
            {slide.subtitle && <h3 className="text-2xl md:text-3xl text-pink-400 font-bold">{slide.subtitle}</h3>}
            {slide.content && <p className="text-xl md:text-3xl text-blue-100 font-light leading-relaxed max-w-4xl">{slide.content}</p>}
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen w-full font-sans text-white overflow-hidden flex flex-col">
      <Background />
      <ProgressBar />

      {/* HEADER: Home Button + Title + Logo + Controls */}
      <header className="fixed top-0 w-full p-4 flex justify-between items-start z-50 pointer-events-none">

        {/* LEFT: Back Button + Label */}
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

        {/* RIGHT: Logo UNAB + Controls */}
        <div className="flex flex-col items-end gap-4 pointer-events-auto">

          {/* LOGO UNAB (Desde carpeta public) */}
          {/* The 'brightness-0 invert' filter makes it white automatically */}
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
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <ArrowLeft size={20} className="md:w-6 md:h-6" />
        </button>

        <div className="flex gap-2 opacity-30">
          {slides.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === currentSlide ? 'w-6 md:w-8 bg-white' : 'w-2 bg-white'}`} />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md ${currentSlide === slides.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <ArrowRight size={20} className="md:w-6 md:h-6" />
        </button>
      </footer>

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
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Presentation;