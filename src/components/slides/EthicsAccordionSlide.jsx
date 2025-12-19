import React, { useState } from 'react';
import { ShieldAlert, SearchCheck, BrainCircuit } from 'lucide-react';

export const EthicsAccordionSlide = ({ slide }) => {
    const [activeCard, setActiveCard] = useState(1);

    return (
        <div className="w-full max-w-6xl animate-fadeIn flex flex-col items-center gap-6 md:gap-10 px-4 py-6 h-[85vh] md:h-full justify-start md:justify-center overflow-y-auto custom-scrollbar">

            {/* Header */}
            <div className="text-center z-10 shrink-0">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-red-900/30 border border-red-500/30 text-red-400 backdrop-blur-md">
                    <ShieldAlert size={16} className="animate-pulse" />
                    <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                        Protocolo de seguridad
                    </span>
                </div>

                <h2 className="text-3xl md:text-6xl font-black text-white mb-2 md:mb-4 tracking-tight drop-shadow-2xl leading-tight">
                    {slide.title}
                </h2>

                <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto font-light px-2">
                    {slide.subtitle}
                </p>
            </div>

            {/* Accordion cards */}
            <div className="flex flex-col md:flex-row gap-4 w-full min-h-[500px] md:h-[450px] shrink-0 pb-6 md:pb-0">
                {slide.principles.map((card, index) => {
                    const isActive = activeCard === index;

                    // Icon mapping based on configuration
                    const Icon = {
                        ShieldAlert,
                        SearchCheck,
                        BrainCircuit
                    }[card.icon] || ShieldAlert;

                    return (
                        <div
                            key={index}
                            onClick={() => setActiveCard(index)}
                            onMouseEnter={() => setActiveCard(index)}
                            className={`
                                relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                                flex flex-col justify-end p-6 border
                                ${isActive
                                    ? 'flex-[3] border-white/20 shadow-2xl opacity-100'
                                    : 'flex-[1] border-white/5 opacity-60 hover:opacity-80'
                                }
                                min-h-[140px] md:min-h-0
                            `}
                        >
                            {/* Background layers */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${card.color} transition-opacity duration-500
                                    ${isActive ? 'opacity-20' : 'opacity-5'}
                                `}
                            />
                            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm -z-10" />

                            {/* Decorative background icon */}
                            <Icon
                                size={200}
                                className={`absolute -top-10 -right-10 text-white/5 pointer-events-none transition-all duration-700
                                    ${isActive ? 'scale-[2.5] rotate-12 opacity-10' : 'scale-100 opacity-0'}
                                `}
                            />

                            {/* Card content */}
                            <div className="relative z-10 flex flex-col gap-4">
                                <div
                                    className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${card.color}
                                        shadow-lg transition-all duration-500 shrink-0
                                    `}
                                >
                                    <Icon size={24} className="text-white md:w-8 md:h-8" />
                                </div>

                                <div className="space-y-1">
                                    {/* Rotated title when inactive (desktop only) */}
                                    <h3
                                        className={`text-xl md:text-3xl font-black text-white uppercase leading-none transition-all duration-300
                                            ${!isActive && 'md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-24 md:left-6 md:whitespace-nowrap'}
                                        `}
                                    >
                                        {card.title}
                                    </h3>

                                    {/* Expanded content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500
                                            ${isActive ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0'}
                                        `}
                                    >
                                        <p className={`font-bold text-base md:text-lg ${card.textColor} mb-2`}>
                                            {card.headline}
                                        </p>
                                        <p className="text-gray-300 text-xs md:text-base leading-relaxed border-l-2 border-white/10 pl-3">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Interaction hints */}
                            {!isActive && (
                                <>
                                    <div className="absolute bottom-6 right-6 text-white/20 animate-bounce hidden md:block">
                                        <span className="text-2xl">↗</span>
                                    </div>
                                    <div className="absolute top-4 right-4 text-white/20 md:hidden">
                                        <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                                            Toca para expandir
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Custom scrollbar */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255,255,255,0.2);
                    border-radius: 4px;
                }
            `}</style>
        </div>
    );
};
