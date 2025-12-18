import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

export const FormulaSlide = ({ slide }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Handles tap interaction on touch devices
    const handleMobileTap = (idx) => {
        setHoveredIndex(prev => (prev === idx ? null : idx));
    };

    return (
        <div className="text-center space-y-6 md:space-y-8 w-full max-w-6xl flex flex-col items-center px-4 py-4 relative">

            {/* Title section */}
            <div className="space-y-2 md:space-y-4 animate-fadeIn w-full">
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight break-words">
                    {slide.title}
                </h2>
                <p className="text-base sm:text-xl md:text-2xl text-gray-300 font-light tracking-wide px-4">
                    {slide.subtitle}
                </p>
            </div>

            {/* Interactive formula blocks */}
            <div
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6
                           relative z-10 w-full animate-fadeIn"
                style={{ animationDelay: '0.2s' }}
            >
                {slide.formula.map((item, idx) => (
                    <React.Fragment key={idx}>
                        <div
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => handleMobileTap(idx)}
                            className={`
                                relative w-full sm:w-auto flex-1 sm:flex-none
                                px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8
                                rounded-2xl md:rounded-3xl border-2
                                ${item.border} ${item.bg} ${item.color}
                                backdrop-blur-md text-xl sm:text-2xl md:text-4xl font-black tracking-widest shadow-xl
                                transform transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1)
                                cursor-pointer select-none
                                ${hoveredIndex === idx
                                    ? 'scale-105 sm:scale-110 -translate-y-2 sm:-translate-y-4 ring-2 sm:ring-4 ring-white/20 z-20'
                                    : 'hover:-translate-y-2'}
                            `}
                        >
                            <div className="flex items-center justify-center text-center">
                                {item.label}
                            </div>

                            {/* Visual indicator for active block */}
                            {hoveredIndex === idx && (
                                <div
                                    className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2
                                                w-0 h-0 border-l-8 border-r-8 border-t-8
                                                border-l-transparent border-r-transparent
                                                ${item.border.replace('border-', 'border-t-')}`}
                                />
                            )}
                        </div>

                        {/* Responsive separators */}
                        {idx < slide.formula.length - 1 && (
                            <>
                                <span className="text-3xl md:text-5xl text-gray-500 font-bold opacity-50 hidden sm:block animate-pulse">
                                    +
                                </span>
                                <span className="text-2xl text-gray-500 font-bold opacity-30 sm:hidden">
                                    ↓
                                </span>
                            </>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Contextual description panel */}
            <div className="min-h-[100px] md:min-h-[120px] w-full max-w-3xl mx-auto flex items-center justify-center px-2">
                {hoveredIndex !== null ? (
                    <div
                        className={`
                            px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl
                            bg-gray-900/95 border border-gray-700 backdrop-blur-xl shadow-2xl
                            text-sm md:text-lg text-gray-200 leading-relaxed
                            text-left md:text-center
                            border-l-4 ${slide.formula[hoveredIndex].border.replace('border-', 'border-l-')}
                            w-full animate-floatUp
                        `}
                    >
                        <span
                            className={`block font-bold mb-1 ${slide.formula[hoveredIndex].color}
                                        text-[10px] md:text-xs uppercase tracking-wider`}
                        >
                            Definición
                        </span>
                        {slide.formula[hoveredIndex].description}
                    </div>
                ) : (
                    <div className="text-gray-500 italic text-sm md:text-lg animate-pulse px-4 text-center">
                        <span className="hidden sm:inline">
                            Pasa el mouse por los bloques para ver los detalles
                        </span>
                        <span className="sm:hidden">
                            Toca los bloques para ver los detalles
                        </span>
                    </div>
                )}
            </div>

            {/* Live prompt preview */}
            <div
                className="w-full max-w-4xl mt-2 md:mt-4 bg-black/60 rounded-xl p-3 md:p-6
                           border border-white/10 font-mono text-left shadow-2xl
                           relative overflow-hidden group animate-fadeIn
                           flex flex-col max-h-[200px] md:max-h-none
                           overflow-y-auto custom-scrollbar"
                style={{ animationDelay: '0.4s' }}
            >
                <div className="flex items-center gap-2 mb-2 md:mb-4 border-b border-white/10 pb-2 shrink-0">
                    <Terminal size={16} className="text-green-500 md:w-[18px]" />
                    <span className="text-gray-400 text-[10px] md:text-sm tracking-widest truncate">
                        LIVE_PROMPT_PREVIEW.exe
                    </span>
                    <div className="flex-1" />
                    <div className="flex gap-1.5">
                        <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500/50" />
                        <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500/50" />
                    </div>
                </div>

                <p className="text-sm sm:text-lg md:text-2xl leading-relaxed text-gray-500 break-words">
                    {slide.formula.map((item, i) => (
                        <span
                            key={i}
                            className={`
                                transition-all duration-500 px-1 rounded inline-block mb-1
                                ${hoveredIndex === i
                                    ? 'text-white bg-white/10 font-bold scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                                    : hoveredIndex !== null
                                        ? 'opacity-20 blur-[1px]'
                                        : 'opacity-100 text-gray-300'}
                                ${item.color.replace('text-', 'selection:bg-').replace('-400', '-900')}
                            `}
                        >
                            {item.exampleText}
                        </span>
                    ))}
                    <span className="inline-block w-2 md:w-3 h-4 md:h-6 bg-green-500 ml-1 animate-pulse align-middle" />
                </p>
            </div>

            {/* Local animations and scrollbar styling */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
                    to { opacity: 1; transform: translateY(0); filter: blur(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                    opacity: 0;
                }

                @keyframes floatUp {
                    from { opacity: 0; transform: translateY(10px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-floatUp {
                    animation: floatUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }

                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255,255,255,0.05);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255,255,255,0.2);
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};
