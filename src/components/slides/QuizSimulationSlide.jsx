import React, { useState, useEffect } from 'react';
import {
    CheckCircle,
    XCircle,
    HelpCircle,
    GraduationCap,
    Terminal,
    Sparkles,
    Brain
} from 'lucide-react';

export const QuizSimulationSlide = ({ slide }) => {
    const [quizState, setQuizState] = useState('generating');
    const [selectedOption, setSelectedOption] = useState(null);

    // Reset quiz state when slide changes
    useEffect(() => {
        setQuizState('generating');
        setSelectedOption(null);

        const timer = setTimeout(() => setQuizState('ready'), 1500);
        return () => clearTimeout(timer);
    }, [slide]);

    const handleOptionClick = (index) => {
        if (quizState === 'answered') return;
        setSelectedOption(index);
        setQuizState('answered');
    };

    // Determines if the selected answer is correct
    const isCorrect = selectedOption === slide.quizData.correctIndex;

    return (
        <div className="w-full max-w-6xl flex flex-col items-center gap-8 px-4 h-full justify-center animate-fadeIn">

            {/* Header */}
            <div className="text-center mb-4">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                    {slide.title}
                </h2>
                <p className="text-xl text-indigo-200/80 font-light">
                    {slide.subtitle}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 w-full items-stretch justify-center">

                {/* Left panel: prompt and evaluation logic */}
                <div className="w-full lg:w-1/3 flex flex-col gap-4">

                    {/* Prompt card */}
                    <div className="bg-slate-900/80 border border-indigo-500/30 p-6 rounded-3xl backdrop-blur-md relative overflow-hidden shadow-lg">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-orange-500" />

                        <div className="flex items-center gap-2 mb-3 text-indigo-400 font-mono text-sm font-bold uppercase tracking-wider">
                            <Terminal size={16} />
                            User instruction
                        </div>

                        <p className="text-white text-lg leading-relaxed font-medium italic opacity-90">
                            "{slide.prompt}"
                        </p>

                        <div className="mt-4 pt-4 border-t border-white/10">
                            {quizState === 'generating' ? (
                                <div className="flex items-center gap-2 text-orange-400 text-sm animate-pulse font-mono">
                                    <Sparkles size={14} />
                                    Generando evaluación...
                                </div>
                            ) : (
                                <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono">
                                    <CheckCircle size={14} />
                                    Pregunta lista
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Evaluation logic explanation */}
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                        <h4 className="text-white font-bold mb-3 flex items-center gap-2 uppercase text-xs tracking-widest">
                            <Brain size={14} className="text-orange-400" />
                            Lógica de evaluación
                        </h4>
                        <ul className="text-sm text-indigo-200 space-y-2">
                            <li className="flex gap-2 items-start">
                                <span className="text-orange-500">▹</span>
                                Detecta errores
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="text-orange-500">▹</span>
                                Feedback personalizado
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="text-orange-500">▹</span>
                                Dificultad adaptativa
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right panel: quiz interaction */}
                <div className="w-full lg:w-2/3 bg-indigo-950/80 border border-indigo-500/50 p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl">

                    {quizState === 'generating' ? (
                        <div className="h-full flex items-center justify-center text-indigo-300 font-mono animate-pulse">
                            Generando pregunta...
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-start mb-6">
                                <span className="bg-indigo-600 text-white px-3 py-1 rounded text-xs font-bold uppercase">
                                    Pregunta 1/1
                                </span>
                                <div className="flex items-center gap-2 text-orange-300 text-xs font-mono">
                                    <GraduationCap size={14} />
                                    Nivel: EXPERTO
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-6">
                                {slide.quizData.question}
                            </h3>

                            {/* Answer options */}
                            <div className="grid gap-3">
                                {slide.quizData.options.map((option, idx) => {
                                    let btnClass =
                                        'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300';
                                    let icon = (
                                        <div className="w-4 h-4 rounded-full border border-white/30" />
                                    );

                                    if (quizState === 'answered') {
                                        if (idx === slide.quizData.correctIndex) {
                                            btnClass =
                                                'bg-emerald-500/20 border-emerald-500 text-emerald-100';
                                            icon = (
                                                <CheckCircle
                                                    size={16}
                                                    className="text-emerald-400"
                                                />
                                            );
                                        } else if (idx === selectedOption) {
                                            btnClass =
                                                'bg-red-500/20 border-red-500 text-red-100';
                                            icon = (
                                                <XCircle
                                                    size={16}
                                                    className="text-red-400"
                                                />
                                            );
                                        } else {
                                            btnClass =
                                                'opacity-30 border-transparent grayscale';
                                        }
                                    }

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionClick(idx)}
                                            disabled={quizState === 'answered'}
                                            className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-4 ${btnClass}`}
                                        >
                                            {icon}
                                            <span className="font-medium">
                                                {option}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Feedback section */}
                            {quizState === 'answered' && (
                                <div
                                    className={`mt-6 p-4 rounded-xl border-l-4 animate-fadeIn ${isCorrect
                                        ? 'bg-emerald-900/20 border-emerald-500'
                                        : 'bg-slate-800 border-orange-500'
                                        }`}
                                >
                                    <div className="flex items-center gap-2 mb-2 font-bold uppercase tracking-wide text-xs">
                                        {isCorrect ? (
                                            <span className="text-emerald-400 flex gap-2 items-center">
                                                <CheckCircle size={16} />
                                                Correcto
                                            </span>
                                        ) : (
                                            <span className="text-orange-400 flex gap-2 items-center">
                                                <HelpCircle size={16} />
                                                Respuesta incorrecta
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-gray-200 text-sm leading-relaxed">
                                        {isCorrect
                                            ? slide.quizData.explanation
                                            : slide.quizData.errorExplanation ||
                                            'Esta no es la respuesta correcta. Revisa los conceptos y vuelve a intentarlo.'}
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
