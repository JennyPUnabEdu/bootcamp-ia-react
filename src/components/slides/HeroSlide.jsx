import { Award, ArrowRight, Download } from 'lucide-react';

export const HeroSlide = ({ slide, theme = 'indigo' }) => {
    // Receives a theme prop to dynamically adjust visual styling (default: indigo)

    // Dynamic color configuration based on theme
    const styles = {
        indigo: {
            iconGlow: "from-blue-400 to-purple-600",
            iconColor: "text-blue-400",
            subtitle: "text-purple-400",
            tagline: "text-blue-100/80",
            buttonGlow: "from-blue-500 via-purple-500 to-blue-500",
            buttonBorder: "via-blue-500",
            arrow: "text-blue-400"
        },
        emerald: {
            iconGlow: "from-emerald-400 to-teal-600",
            iconColor: "text-emerald-400",
            subtitle: "text-teal-400",
            tagline: "text-emerald-100/80",
            buttonGlow: "from-emerald-500 via-teal-500 to-emerald-500",
            buttonBorder: "via-emerald-500",
            arrow: "text-emerald-400"
        },
        orange: {
            iconGlow: "from-orange-400 to-amber-600",
            iconColor: "text-orange-400",
            subtitle: "text-amber-400",
            tagline: "text-orange-100/80",
            buttonGlow: "from-orange-500 via-amber-500 to-orange-500",
            buttonBorder: "via-orange-500",
            arrow: "text-orange-400"
        },
        amber: {
            iconGlow: "from-amber-400 to-red-600",
            iconColor: "text-amber-400",
            subtitle: "text-red-400",
            tagline: "text-amber-100/80",
            buttonGlow: "from-amber-500 via-red-500 to-amber-500",
            buttonBorder: "via-amber-500",
            arrow: "text-amber-400"
        }
    };

    const s = styles[theme] || styles.indigo;

    return (
        <div className="text-center space-y-6 md:space-y-8 animate-fadeIn px-4 flex flex-col items-center min-h-[60vh] justify-center">
            <div className="relative inline-block group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${s.iconGlow} rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000`} />
                <div className="relative p-6 bg-slate-900/50 border border-white/10 rounded-full backdrop-blur-xl shadow-2xl">
                    <Award size={64} className={`${s.iconColor} md:w-20 md:h-20 w-16 h-16 stroke-[1.5]`} />
                </div>
            </div>
            <div className="space-y-4">
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 drop-shadow-sm leading-tight md:leading-[0.9]">
                    {slide.title}
                </h1>
                <h2 className={`text-xl md:text-3xl font-bold ${s.subtitle} tracking-[0.2em] uppercase`}>
                    {slide.subtitle}
                </h2>
            </div>
            <p className={`text-lg md:text-xl ${s.tagline} font-light max-w-2xl mx-auto leading-relaxed`}>
                {slide.tagline}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-2xl">
                {slide.downloadLink && (
                    <a
                        href={slide.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-white/5 text-white font-bold py-4 px-8 rounded-full border border-white/10 hover:bg-white/10 hover:scale-105 transition-all w-full md:w-auto font-mono tracking-widest text-sm"
                        title="Descargar Resumen del Módulo"
                    >
                        <Download size={20} className="text-gray-300" />
                        <span>DESCARGAR PDF</span>
                    </a>
                )}
                {slide.nextLink && (
                    <a
                        href={slide.nextLink}
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 font-mono tracking-widest border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 overflow-hidden"
                    >
                        <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 bg-gradient-to-b from-transparent via-transparent to-slate-700" />
                        <div className={`absolute inset-0 w-full h-full bg-gradient-to-r ${s.buttonGlow} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                        <span className="relative flex items-center gap-3">
                            {slide.nextTitle}
                            <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${s.arrow}`} />
                        </span>
                        <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${s.buttonBorder} to-transparent opacity-50 group-hover:opacity-100 transition-opacity`} />
                    </a>
                )}
            </div>
            <div className="w-full max-w-md mx-auto pt-8 border-t border-white/5">
                <p className="text-xs md:text-sm font-mono text-slate-500 uppercase tracking-widest">
                    {slide.footer}
                </p>
            </div>
        </div>
    );
};
