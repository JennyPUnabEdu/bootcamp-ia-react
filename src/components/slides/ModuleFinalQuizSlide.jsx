import React, { useState } from 'react';
import {
    Zap,
    Brain,
    ChevronRight,
    AlertTriangle,
    Check,
    Trophy,
    RefreshCcw
} from 'lucide-react';

export const ModuleFinalQuizSlide = ({ slide }) => {
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [gameState, setGameState] = useState('intro'); // intro | playing | feedback | finished
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(0);
    const [shake, setShake] = useState(false);

    const question = slide.questions[currentQIndex];
    const totalQuestions = slide.questions.length;

    /**
     * Determines the background orb gradient based on quiz state and result.
     */
    const getOrbColor = () => {
        if (gameState === 'feedback') {
            return selectedOption === question.correctIndex
                ? 'from-emerald-500 to-cyan-500'
                : 'from-red-600 to-orange-600';
        }
        if (gameState === 'finished') return 'from-yellow-400 to-purple-600';
        return 'from-blue-600 to-indigo-600';
    };

    /**
     * Handles option selection and evaluates correctness.
     */
    const handleOptionSelect = (idx) => {
        if (gameState === 'feedback') return;

        setSelectedOption(idx);
        setGameState('feedback');

        const isCorrect = idx === question.correctIndex;

        if (isCorrect) {
            setScore(s => s + 1);
            setCombo(c => c + 1);
        } else {
            setCombo(0);
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    /**
     * Advances to the next question or ends the quiz.
     */
    const nextQuestion = () => {
        if (currentQIndex < totalQuestions - 1) {
            setCurrentQIndex(prev => prev + 1);
            setGameState('playing');
            setSelectedOption(null);
        } else {
            setGameState('finished');
        }
    };

    /**
     * Resets the quiz to its initial playable state.
     */
    const restartGame = () => {
        setCurrentQIndex(0);
        setScore(0);
        setCombo(0);
        setGameState('playing');
        setSelectedOption(null);
    };

    /**
     * Intro state: onboarding and quiz initialization.
     */
    if (gameState === 'intro') {
        return (
            <>
                <style>{`
                    @keyframes shake {
                        0%, 100% { transform: translateX(0); }
                        10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
                        20%, 40%, 60%, 80% { transform: translateX(4px); }
                    }
                    .animate-shake {
                        animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
                    }
                `}</style>
                <div className="fixed inset-0 w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden overscroll-none z-10">
                    <div className="relative w-full max-w-4xl px-4 flex flex-col items-center justify-center">
                        <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full transform scale-50 animate-pulse pointer-events-none" />
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-200 mb-4 sm:mb-5 md:mb-6 text-center leading-tight sm:leading-snug md:leading-tight relative z-20">
                            {slide.title}
                        </h1>
                        <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto text-center shadow-2xl transition-transform duration-300 md:hover:scale-105 px-4 relative z-20">
                            <Brain size={64} className="text-cyan-400 mx-auto mb-6" />
                            <p className="text-xl text-indigo-200 mb-8 font-light">
                                {slide.subtitle}
                            </p>
                            <button
                                onClick={() => setGameState('playing')}
                                className="w-full py-4 bg-white text-slate-900 font-black tracking-widest rounded-xl hover:bg-cyan-400 transition-colors shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
                            >
                                <Zap fill="currentColor" />
                                INICIAR SINCRONIZACIÓN
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    /**
     * Final state: score summary and replay option.
     */
    if (gameState === 'finished') {
        const percentage = Math.round((score / totalQuestions) * 100);

        return (
            <div className="fixed inset-0 w-full h-[100dvh] flex items-center justify-center z-50 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" />
                <div className="relative z-10 w-full max-w-2xl flex flex-col items-center animate-fadeIn">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${getOrbColor()} blur-[120px] opacity-40 pointer-events-none`} />
                    <div className="bg-slate-950/90 border border-white/20 p-6 sm:p-10 rounded-3xl sm:rounded-[3rem] text-center w-full shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500" />
                        <Trophy className="text-yellow-400 mx-auto mb-6 drop-shadow-glow animate-bounce w-16 h-16 sm:w-20 sm:h-20" />
                        <h2 className="text-3xl sm:text-5xl font-black text-white mb-2 break-words leading-tight">
                            {percentage === 100 ? 'ENTRENAMIENTO COMPLETADO' : 'BUEN INTENTO!'}
                        </h2>
                        <div className="text-6xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 my-4 sm:my-8">
                            {percentage}%
                        </div>
                        <p className="text-indigo-300 text-base sm:text-lg mb-6 sm:mb-8 px-2 sm:px-8">
                            {percentage === 100
                                ? 'Tu razonamiento es preciso y consistente, excelente trabajo.'
                                : 'Buen intento. La mejora viene de la iteración.'}
                        </p>
                        <button
                            onClick={restartGame}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full border border-white/20 text-white font-mono hover:bg-white/10 transition-colors flex items-center justify-center gap-2 mx-auto text-sm sm:text-base"
                        >
                            <RefreshCcw size={16} />
                            REINICIAR SIMULACIÓN
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    /**
     * Main gameplay state.
     */
    return (
        <div className="w-full max-w-4xl mx-auto h-full flex flex-col items-center justify-center relative z-10 px-4">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] md:w-[800px] md:h-[800px] bg-gradient-to-r ${getOrbColor()} rounded-full blur-[100px] opacity-20 transition-all duration-700 pointer-events-none`} />

            {/* Progress indicator and combo feedback */}
            <div className="w-full flex justify-between items-end mb-8 relative z-20">
                <div>
                    <div className="text-xs font-mono text-cyan-400 mb-1 tracking-widest">
                        PROGRESO DEL SISTEMA
                    </div>
                    <div className="flex gap-1">
                        {slide.questions.map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 w-8 rounded-full transition-all duration-500 ${i < currentQIndex
                                    ? 'bg-cyan-400'
                                    : i === currentQIndex
                                        ? 'bg-white animate-pulse'
                                        : 'bg-white/10'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {combo > 1 && (
                    <div className="animate-bounce text-right">
                        <div className="text-2xl font-black italic text-yellow-400 tracking-tighter drop-shadow-lg">
                            COMBO x{combo}
                        </div>
                    </div>
                )}
            </div>

            {/* Question card */}
            <div className={`relative w-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl transition-transform duration-300 ${shake ? 'animate-shake border-red-500/50' : ''
                }`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-indigo-300 uppercase tracking-wider mb-6">
                    <Brain size={12} />
                    Desafío de Lógica
                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-white mb-10 leading-tight">
                    {question.question}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {question.options.map((opt, idx) => {
                        const isSelected = selectedOption === idx;
                        const isCorrect = idx === question.correctIndex;
                        const showResult = gameState === 'feedback';

                        let styleClass =
                            'border-white/10 hover:bg-white/5 hover:border-white/30 text-indigo-100';

                        if (showResult) {
                            if (isCorrect) {
                                styleClass =
                                    'bg-emerald-500/20 border-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.3)]';
                            } else if (isSelected) {
                                styleClass =
                                    'bg-red-500/20 border-red-500 text-red-200';
                            } else {
                                styleClass = 'opacity-30 border-transparent blur-[1px]';
                            }
                        } else if (isSelected) {
                            styleClass =
                                'bg-white text-slate-900 border-white scale-[1.02]';
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => handleOptionSelect(idx)}
                                disabled={gameState === 'feedback'}
                                className={`relative p-6 rounded-2xl border-2 text-left font-semibold transition-all duration-300 group ${styleClass}`}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{opt}</span>
                                    {showResult && isCorrect && <Check className="text-emerald-400" />}
                                    {showResult && isSelected && !isCorrect && (
                                        <AlertTriangle className="text-red-400" />
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Feedback and explanation */}
                {gameState === 'feedback' && (
                    <div className="mt-8 pt-6 border-t border-white/10 animate-fadeInUp">
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                            <div>
                                <h4
                                    className={`text-lg font-black uppercase mb-1 ${selectedOption === question.correctIndex
                                        ? 'text-emerald-400'
                                        : 'text-orange-400'
                                        }`}
                                >
                                    {selectedOption === question.correctIndex
                                        ? 'Respuesta Correcta'
                                        : 'Razonamiento Incorrecto'}
                                </h4>
                                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                                    {selectedOption === question.correctIndex
                                        ? question.explanation
                                        : question.errorExplanation ||
                                        'Revisa el concepto subyacente.'}
                                </p>
                            </div>

                            <button
                                onClick={nextQuestion}
                                className="px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:scale-105 transition-transform shadow-lg flex items-center gap-2 whitespace-nowrap"
                            >
                                {currentQIndex < totalQuestions - 1
                                    ? 'SIGUIENTE'
                                    : 'VER RESULTADOS'}
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 text-white/20 font-mono text-xs uppercase tracking-[0.3em]">
                {slide.footer || 'SYSTEM EVALUATION'}
            </div>
        </div>
    );
};
