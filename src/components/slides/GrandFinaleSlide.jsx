import { useState, useEffect, useRef } from 'react';
import { Power, Home, Activity, Download } from 'lucide-react';

export const GrandFinaleSlide = ({ slide }) => {
    const [bootStatus, setBootStatus] = useState('standby');
    const [logs, setLogs] = useState([]);
    const [progress, setProgress] = useState(0);
    const logsEndRef = useRef(null);

    const bootSequence = [
        "Inicializando Kernel...",
        "Cargando Módulo 'Identidad'... OK",
        "Montando 'Base de Conocimiento'... OK",
        "Verificando Protocolos Éticos... SEGURO",
        "Optimizando Motor de Prompts... 100%",
        "Conectando a Red Neuronal...",
        "Desplegando Interfaz Visual...",
        "Chequeo de Integridad del Sistema... APROBADO",
        "INICIANDO SISTEMA FINAL..."
    ];

    const startBoot = () => {
        setBootStatus('booting');
        let currentLog = 0;

        const logInterval = setInterval(() => {
            if (currentLog >= bootSequence.length) {
                clearInterval(logInterval);
                setTimeout(() => setBootStatus('online'), 800);
            } else {
                setLogs(prev => [...prev, bootSequence[currentLog]]);
                setProgress(prev => prev + (100 / bootSequence.length));
                currentLog++;
            }
        }, 400);
    };

    // Auto-scrolls the log container as new entries appear
    useEffect(() => {
        if (logsEndRef.current) {
            logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [logs]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center font-mono z-10">
            <div className="absolute inset-0 opacity-20 pointer-events-none -z-20 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
            {bootStatus === 'online' && (
                <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0 overflow-hidden">
                    {[...Array(70)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute -top-10 rounded shadow-sm opacity-90 animate-confetti-fall ${['bg-amber-400', 'bg-orange-500', 'bg-red-500', 'bg-yellow-200', 'bg-white'][
                                Math.floor(Math.random() * 5)
                            ]
                                }`}
                            style={{
                                left: Math.random() * 100 + 'vw',
                                width: Math.random() * 8 + 6 + 'px',
                                height: Math.random() * 8 + 6 + 'px',
                                animationDelay: Math.random() * 2 + 's',
                                animationDuration: Math.random() * 3 + 3 + 's'
                            }}
                        />
                    ))}
                </div>
            )}
            {bootStatus === 'standby' && (
                <div className="fixed inset-0 w-full h-[100dvh] z-10 flex flex-col items-center justify-center p-4 text-center overflow-hidden overscroll-none animate-fadeIn">
                    <div className="mb-8">
                        <h2 className="text-amber-200/60 tracking-[0.3em] md:tracking-[0.5em] text-xs md:text-sm uppercase mb-2">
                            Compilación de Bootcamp IA v1.0
                        </h2>
                        <h1 className="text-4xl md:text-7xl font-black text-white uppercase leading-tight drop-shadow-xl">
                            Listo para Desplegar
                        </h1>
                    </div>
                    <button
                        onClick={startBoot}
                        className="group relative w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-amber-500/30
                                   flex items-center justify-center bg-amber-900/20 hover:bg-amber-500/20
                                   transition-all duration-500 hover:scale-110
                                   shadow-[0_0_50px_rgba(245,158,11,0.2)]
                                   hover:shadow-[0_0_80px_rgba(245,158,11,0.5)]
                                   backdrop-blur-sm"
                    >
                        <Power
                            size={64}
                            className="text-amber-500 group-hover:text-amber-300 transition-colors
                                       w-16 h-16 md:w-20 md:h-20"
                        />
                        <div className="absolute inset-0 rounded-full border-t-4 border-amber-400 animate-spin-slow opacity-50" />
                    </button>

                    <p className="mt-8 text-amber-400/80 animate-pulse text-sm md:text-base font-bold tracking-widest">
                        CLICK PARA INICIAR
                    </p>
                </div>
            )}
            {bootStatus === 'booting' && (
                <div className="z-10 w-full max-w-3xl p-4 animate-fadeIn relative">
                    <div className="bg-slate-900/90 border border-amber-500/30 rounded-xl p-6 shadow-2xl
                                    font-mono text-sm md:text-base h-[450px] flex flex-col
                                    relative overflow-hidden backdrop-blur-md"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/10 to-transparent h-4 animate-scanline pointer-events-none" />

                        <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar relative z-10">
                            {logs.map((log, i) => (
                                <div key={i} className="flex items-start gap-2 text-amber-300/90">
                                    <span className="text-amber-600/80 text-xs md:text-sm">
                                        [{new Date().toLocaleTimeString()}]
                                    </span>
                                    <span className="leading-tight">{log}</span>
                                </div>
                            ))}
                            <div ref={logsEndRef} />
                        </div>
                        <div className="mt-4 pt-4 border-t border-amber-500/20 relative z-10">
                            <div className="flex justify-between text-xs text-amber-400 mb-1 uppercase tracking-wider">
                                <span>Cargando sistema...</span>
                                <span>{Math.round(progress)}%</span>
                            </div>
                            <div className="w-full h-3 bg-amber-900/40 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-amber-600 to-amber-400
                                               shadow-[0_0_15px_rgba(245,158,11,0.8)]
                                               transition-all duration-300 ease-out relative"
                                    style={{ width: `${progress}%` }}
                                >
                                    <div className="absolute inset-0 bg-white/30 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {bootStatus === 'online' && (
                <div className="z-10 flex flex-col w-full max-w-lg items-center text-center animate-zoomIn px-8 py-12 relative overflow-visible">
                    <div className="mb-8 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                        w-[300px] h-[300px] bg-amber-500/20 blur-[80px]
                                        rounded-full animate-pulse-slow pointer-events-none"
                        />
                        <Activity
                            size={120}
                            className="text-amber-300 relative z-10
                                       drop-shadow-[0_0_30px_rgba(245,158,11,0.8)]
                                       animate-bounce-slight"
                            strokeWidth={1.5}
                        />
                    </div>
                    <h1 className="text-4xl md:text-8xl font-black text-transparent bg-clip-text
                                   bg-gradient-to-b from-white via-amber-200 to-orange-400
                                   drop-shadow-2xl mb-8 tracking-tighter leading-none"
                    >
                        ¡FELICITACIONES!
                    </h1>
                    <div className="bg-amber-950/60 border-2 border-amber-500/50 px-12 py-8
                                    rounded-3xl backdrop-blur-md shadow-[0_0_60px_rgba(245,158,11,0.3)]
                                    mb-12 transform hover:scale-105 transition-transform duration-500"
                    >
                        <h2 className="text-3xl md:text-5xl text-white font-black mb-4 uppercase">
                            Bootcamp Completado
                        </h2>
                        <div className="h-1.5 w-32 bg-amber-500 mx-auto mb-6 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                        <p className="text-amber-100 text-sm md:text-xl tracking-[0.2em] uppercase font-bold">
                            Facultad de Ingeniería <span className="text-white">UNAB</span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 w-full max-w-2xl">
                        {slide.nextLink && (
                            <a
                                href={slide.nextLink}
                                className="group relative px-12 py-5 bg-gradient-to-r from-amber-600 to-orange-600
                                       text-white font-black text-xl tracking-[0.2em] rounded-full
                                       hover:from-amber-500 hover:to-orange-500
                                       transition-all hover:scale-105 active:scale-95
                                       shadow-[0_0_40px_rgba(245,158,11,0.6)] z-20 overflow-hidden"
                            >
                                <span className="flex items-center gap-3 relative z-10">
                                    <Home size={24} /> {slide.nextTitle}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                                            -translate-x-full group-hover:translate-x-full
                                            transition-transform duration-700 ease-in-out skew-x-12"
                                />
                            </a>
                        )}
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
                    </div>
                </div>
            )}

            <style>{`
                .animate-spin-slow { animation: spin 4s linear infinite; }
                .animate-scanline { animation: scanline 3s linear infinite; }
                .animate-zoomIn { animation: zoomIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
                .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
                .animate-bounce-slight { animation: bounceSlight 3s ease-in-out infinite; }

                @keyframes confetti-fall {
                    0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
                }

                .animate-confetti-fall { animation: confetti-fall linear forwards; }

                @keyframes scanline {
                    0% { transform: translateY(-100%); opacity: 0.5; }
                    50% { opacity: 1; }
                    100% { transform: translateY(500%); opacity: 0.5; }
                }

                @keyframes zoomIn {
                    from { transform: scale(0.8); opacity: 0; filter: blur(10px); }
                    to { transform: scale(1); opacity: 1; filter: blur(0); }
                }

                @keyframes bounceSlight {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
            `}</style>
        </div>
    );
};
