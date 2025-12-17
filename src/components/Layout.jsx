import { Link } from 'react-router-dom';

import {
    Home,
    Terminal,
    Minimize2,
    Maximize2,
    ArrowLeft,
    ArrowRight,
} from 'lucide-react';

/**
 * Layout
 *
 * Core layout wrapper used by all slide-based modules in the
 * "Bootcamp IA – Interactive Presentation Platform".
 *
 * This component is responsible for:
 * - Global visual theming per module
 * - Background effects and gradients
 * - Header (branding, progress, fullscreen controls)
 * - Footer navigation (previous / next slide)
 *
 * It is intentionally UI-focused and presentation-agnostic:
 * all slide content is injected via `children`.
 */
export const Layout = ({
    children,
    currentSlide,
    totalSlides,
    nextSlide,
    prevSlide,
    toggleFullscreen,
    isFullscreen,
    theme = 'indigo', // Supported themes: 'indigo', 'emerald', 'orange', 'amber'
}) => {
    /**
     * Theme configuration map.
     * Each theme represents a module and defines all visual tokens
     * (gradients, glow blobs, progress bar, borders).
     *
     * This allows consistent theming without leaking styles
     * into individual slide components.
     */
    const themes = {
        indigo: {
            gradient: 'from-slate-900 via-indigo-900 to-purple-900',
            blob1: 'bg-purple-600/30',
            blob2: 'bg-blue-600/10',
            blob3: 'bg-pink-600/20',
            progress: 'from-cyan-400 to-purple-500',
            border: 'border-white/10',
        },
        emerald: {
            gradient: 'from-slate-950 via-teal-950 to-emerald-950',
            blob1: 'bg-emerald-600/20',
            blob2: 'bg-cyan-600/10',
            blob3: 'bg-teal-600/20',
            progress: 'from-emerald-400 to-cyan-500',
            border: 'border-emerald-500/30',
        },
        orange: {
            gradient: 'from-slate-950 via-indigo-950 to-orange-950',
            blob1: 'bg-orange-600/20',
            blob2: 'bg-indigo-600/10',
            blob3: 'bg-amber-600/20',
            progress: 'from-orange-500 to-indigo-500',
            border: 'border-orange-500/30',
        },
        amber: {
            gradient: 'from-slate-950 via-red-950 to-yellow-950',
            blob1: 'bg-red-600/20',
            blob2: 'bg-amber-600/10',
            blob3: 'bg-yellow-600/20',
            progress: 'from-amber-500 via-red-500 to-amber-500',
            border: 'border-amber-500/30',
        },
    };

    // Resolve active theme, falling back to indigo for safety
    const t = themes[theme] || themes.indigo;

    return (
        <div className="relative min-h-screen w-full font-sans text-white overflow-hidden flex flex-col">
            {/* Unified animated background shared across all slides */}
            <div className="fixed inset-0 -z-10 bg-slate-950 overflow-hidden">
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-90`}
                />
                <div
                    className={`absolute -top-40 -left-40 w-96 h-96 ${t.blob1} rounded-full blur-[100px] animate-pulse`}
                />
                <div
                    className={`absolute top-1/2 left-1/2 w-[800px] h-[800px] ${t.blob2} rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2`}
                />
                <div
                    className={`absolute bottom-0 right-0 w-[600px] h-[600px] ${t.blob3} rounded-full blur-[100px]`}
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            {/* Slide progress indicator driven by currentSlide / totalSlides */}
            <div
                className={`fixed top-0 left-0 h-1 bg-gradient-to-r ${t.progress} transition-all duration-500 z-50`}
                style={{
                    width: `${((currentSlide + 1) / totalSlides) * 100}%`,
                }}
            />

            {/* Fixed header with navigation, branding and fullscreen controls */}
            <header className="fixed top-0 w-full p-4 flex justify-between items-start z-50 pointer-events-none">
                <div className="flex flex-col gap-2 pointer-events-auto">
                    {/* Home shortcut for quick exit from presentation mode */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all text-sm font-bold text-white/80 hover:text-white group"
                        title="Volver al Menú Principal"
                    >
                        <Home
                            size={16}
                            className="group-hover:-translate-x-1 transition-transform"
                        />
                        <span>INICIO</span>
                    </Link>

                    <div className="flex items-center gap-2 px-2 opacity-60">
                        <Terminal size={14} />
                        <span className="text-xs font-mono tracking-widest">
                            BOOTCAMP_IA_2025
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-4 pointer-events-auto">
                    <img
                        src="/curso-ia/logo-unab.png"
                        alt="Logo UNAB"
                        className="h-16 md:h-24 object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                    />

                    <div
                        className={`flex items-center gap-3 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border ${t.border}`}
                    >
                        <span className="text-xs font-mono text-gray-400">
                            {currentSlide + 1} / {totalSlides}
                        </span>

                        <div className="h-4 w-px bg-white/20" />

                        <button
                            onClick={toggleFullscreen}
                            className="hover:text-white text-gray-400 transition-colors"
                        >
                            {isFullscreen ? (
                                <Minimize2 size={16} />
                            ) : (
                                <Maximize2 size={16} />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* 
                Main content container.
                Padding and alignment are intentionally asymmetric to:
                - Preserve header space on mobile
                - Allow vertical scrolling for tall slides
                - Center content on desktop while keeping mobile readable
            */}
            <main className="flex-1 flex flex-col items-start md:items-center justify-start md:justify-center p-4 pt-34 pb-24 md:p-12 relative z-10 w-full overflow-y-auto overflow-x-hidden no-scrollbar">
                {children}
            </main>

            {/* Footer navigation optimized for presentation flow */}
            <footer className="fixed bottom-0 w-full p-4 md:p-8 flex justify-between items-center z-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className={`pointer-events-auto p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md ${currentSlide === 0
                        ? 'opacity-0 pointer-events-none'
                        : 'opacity-100'
                        }`}
                >
                    <ArrowLeft size={20} className="md:w-6 md:h-6" />
                </button>

                <div className="hidden md:flex gap-2 opacity-30">
                    {Array.from({ length: totalSlides }).map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all ${idx === currentSlide
                                ? 'w-8 bg-white'
                                : 'w-2 bg-white'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    disabled={currentSlide === totalSlides - 1}
                    className={`pointer-events-auto p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md ${currentSlide === totalSlides - 1
                        ? 'opacity-0 pointer-events-none'
                        : 'opacity-100'
                        }`}
                >
                    <ArrowRight size={20} className="md:w-6 md:h-6" />
                </button>
            </footer>

            {/* Hide native scrollbars to preserve presentation aesthetics */}
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};
