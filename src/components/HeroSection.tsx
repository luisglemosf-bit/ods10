import React from 'react';
import { 
  Target, 
  Layers, 
  CalendarRange, 
  Globe2, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowDownRight,
  BookOpen
} from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const impactMetrics = [
    {
      icon: <Target className="w-5 h-5 text-[#E11484]" />,
      value: '10',
      label: 'Metas Estruturadas',
      description: 'Propostas técnicas completas de 10.1 a 10.c'
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-500" />,
      value: '4+',
      label: 'Pilares Médios por Meta',
      description: 'Eixos estruturantes com planos de ação'
    },
    {
      icon: <CalendarRange className="w-5 h-5 text-emerald-500" />,
      value: '2026–2030',
      label: 'Horizonte Temporal',
      description: 'Metas intermediárias e metas alvo para 2030'
    },
    {
      icon: <Globe2 className="w-5 h-5 text-sky-500" />,
      value: 'Nacional & Global',
      label: 'Escopo de Atuação',
      description: 'Políticas para o Brasil e governança multilateral'
    }
  ];

  return (
    <section id="hero-section" className="relative bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-700 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] dark:shadow-[6px_6px_0px_0px_rgba(225,20,132,0.3)] p-6 sm:p-10 transition-colors">
      
      {/* Decorative top badge */}
      <div className="inline-flex items-center gap-2 bg-[#E11484] text-white text-xs font-black px-3.5 py-1 uppercase tracking-[0.15em] mb-4 shadow-xs">
        <BookOpen className="w-3.5 h-3.5" />
        <span>Objetivo de Desenvolvimento Sustentável 10</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Headlines and Context */}
        <div className="lg:col-span-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-white leading-none">
            Reduzir a Desigualdade no Interior dos Países e entre Eles
          </h1>
          
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal max-w-3xl">
            A desigualdade ameaça o desenvolvimento socioeconômico sustentável, destrói o sentimento de coesão comunitária e aprofunda armadilhas de pobreza. A <strong>Agenda 2030 da ONU</strong> estabelece 10 metas rigorosas que combinam <strong>convergência da renda da base</strong>, <strong>justiça institucional e tributária</strong>, <strong>governança global equitativa</strong> e <strong>inclusão financeira</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-neutral-600 dark:text-neutral-400">
            <span className="inline-flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 border border-neutral-200 dark:border-neutral-700">
              <CheckCircle2 className="w-4 h-4 text-[#E11484]" />
              Embasamento: IPEA, IBGE, ONU, BIS, OMC e Banco Mundial
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 border border-neutral-200 dark:border-neutral-700">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Alinhamento ao Marco Constitucional e Normativo
            </span>
          </div>
        </div>

        {/* Right Column: CTA & Visual Cue */}
        <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end space-y-3">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E11484] hover:bg-[#c91276] text-white text-xs font-black uppercase tracking-widest transition shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.9)] hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explorar as 10 Metas</span>
            <ArrowDownRight className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
            Selecione uma meta para ver a ficha técnica
          </span>
        </div>

      </div>

      {/* 4 Impact Summary Metric Cards */}
      <div className="mt-8 pt-8 border-t-2 border-neutral-200 dark:border-neutral-800 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {impactMetrics.map((metric, idx) => (
          <div 
            key={idx}
            className="p-4 bg-[#FAF9F6] dark:bg-neutral-800/80 border-l-4 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-700 transition"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white font-mono tracking-tight">
                {metric.value}
              </span>
              <div className="p-1.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                {metric.icon}
              </div>
            </div>
            <h2 className="text-xs font-black uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
              {metric.label}
            </h2>
            <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-0.5 leading-snug">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};
