import React, { useEffect, useState } from 'react';
import { ODS10_TARGETS } from './data/odsData';
import { 
  ArrowDown, 
  ArrowUp, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  Globe2, 
  Scale, 
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Users,
  DollarSign,
  Building2,
  Plane,
  Coins,
  FileText
} from 'lucide-react';

export default function App() {
  const [activeTargetId, setActiveTargetId] = useState<string | null>(null);

  // Icon mapping for targets
  const getTargetIcon = (id: string) => {
    switch (id) {
      case '10.1': return <TrendingUp className="w-6 h-6" />;
      case '10.2': return <Users className="w-6 h-6" />;
      case '10.3': return <Scale className="w-6 h-6" />;
      case '10.4': return <DollarSign className="w-6 h-6" />;
      case '10.5': return <Building2 className="w-6 h-6" />;
      case '10.6': return <Globe2 className="w-6 h-6" />;
      case '10.7': return <Plane className="w-6 h-6" />;
      case '10.a': return <ShieldCheck className="w-6 h-6" />;
      case '10.b': return <Coins className="w-6 h-6" />;
      case '10.c': return <Sparkles className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  const scrollToTarget = (id: string) => {
    setActiveTargetId(id);
    const element = document.getElementById(`meta-${id.replace('.', '-')}`);
    if (element) {
      const yOffset = -20;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTargetId(null);
  };

  // Sync with initial hash if present
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').replace('meta-', '');
    if (hash) {
      const formatted = hash.includes('-') ? hash.replace('-', '.') : hash;
      const found = ODS10_TARGETS.find((t) => t.id.toLowerCase() === formatted.toLowerCase());
      if (found) {
        setTimeout(() => {
          scrollToTarget(found.id);
        }, 150);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-neutral-900 antialiased selection:bg-[#E11484] selection:text-white">
      
      {/* Top Header Bar */}
      <header className="bg-neutral-900 text-white border-b-4 border-[#E11484] sticky top-0 z-30 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#E11484] text-white font-black flex items-center justify-center text-sm shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]">
              10
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#E11484] block">
                Agenda 2030 • ONU
              </span>
              <span className="text-sm font-bold tracking-tight text-neutral-100">
                ODS 10 — Redução das Desigualdades
              </span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-neutral-800 hover:bg-[#E11484] text-neutral-200 hover:text-white transition border border-neutral-700 cursor-pointer flex items-center gap-1.5"
            title="Voltar ao início"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Início / Metas</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-16">
        
        {/* Presentation / Intro Section */}
        <section id="apresentacao" className="bg-white border-2 border-neutral-900 p-6 sm:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]">
          <div className="inline-flex items-center gap-2 bg-[#E11484] text-white text-xs font-black px-3 py-1 uppercase tracking-[0.15em] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Objetivo de Desenvolvimento Sustentável 10
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-none mb-4">
            Reduzir a Desigualdade no Interior dos Países e entre Eles
          </h1>
          
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-4xl font-normal">
            A desigualdade ameaça o desenvolvimento social e econômico a longo prazo, prejudica a redução da pobreza e destrói o sentimento de realização e autoestima das pessoas. A Agenda 2030 da Organização das Nações Unidas (ONU) estabeleceu <strong>10 metas prioritárias</strong> para garantir que ninguém seja deixado para trás.
          </p>

          <div className="mt-6 pt-6 border-t border-neutral-200 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600">
            <ArrowDown className="w-4 h-4 text-[#E11484] animate-bounce" />
            <span>Clique em um dos botões abaixo para ir direto ao texto da meta:</span>
          </div>
        </section>

        {/* Big Buttons Grid (10 Metas) */}
        <section aria-label="Lista de botões das 10 metas">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500">
              Selecione uma Meta (10.1 a 10.c)
            </h2>
            <span className="text-xs font-mono font-bold text-[#E11484]">
              10 Metas Oficiais
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
            {ODS10_TARGETS.map((target) => {
              const isSelected = activeTargetId === target.id;
              return (
                <button
                  key={target.id}
                  onClick={() => scrollToTarget(target.id)}
                  className={`group relative text-left p-5 sm:p-6 transition-all duration-150 cursor-pointer border-2 ${
                    isSelected
                      ? 'bg-[#FAF9F6] border-[#E11484] shadow-[6px_6px_0px_0px_rgba(225,20,132,1)] -translate-y-0.5'
                      : 'bg-white border-neutral-900 hover:border-[#E11484] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(225,20,132,0.8)] hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#E11484] text-white flex items-center justify-center font-black text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform shrink-0">
                        {target.id}
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500 block">
                          {target.numberLabel}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wide text-[#E11484]">
                          {target.scope}
                        </span>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-400 group-hover:text-[#E11484] group-hover:border-[#E11484] group-hover:bg-[#E11484]/10 transition-colors shrink-0">
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-neutral-900 group-hover:text-[#E11484] transition-colors leading-snug line-clamp-2 mb-2">
                    {target.officialTitle}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2">
                    {target.officialTargetText}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-neutral-500 group-hover:text-neutral-900">
                    <span className="font-mono text-[11px]">Proposta: {target.solutionName}</span>
                    <span className="text-[#E11484] font-black uppercase flex items-center gap-1 text-[11px]">
                      Ler meta <ArrowDown className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Separator */}
        <div className="border-t-4 border-neutral-900 pt-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              Textos Completos das 10 Metas
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Consulte a redação oficial da ONU, indicadores e propostas técnicas de cada meta.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider px-3 py-2 border-2 border-neutral-900 bg-white hover:bg-[#E11484] hover:text-white transition shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Topo
          </button>
        </div>

        {/* Individual Meta Sections */}
        <div className="space-y-12">
          {ODS10_TARGETS.map((target, idx) => (
            <article
              key={target.id}
              id={`meta-${target.id.replace('.', '-')}`}
              className="bg-white border-2 border-neutral-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-200"
            >
              {/* Target Header */}
              <div className="bg-neutral-900 text-white p-6 sm:p-8 border-b-4 border-[#E11484]">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-[#E11484] text-white font-black text-xs uppercase tracking-widest">
                      {target.numberLabel}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      Meta {idx + 1} de 10 • {target.scope}
                    </span>
                  </div>

                  <button
                    onClick={scrollToTop}
                    className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 px-3 py-1 border border-neutral-700 cursor-pointer transition"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                    <span>Voltar aos botões</span>
                  </button>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  {target.officialTitle}
                </h2>
                
                <p className="text-xs sm:text-sm text-[#E11484] font-bold uppercase tracking-wide mt-2">
                  Proposta Técnica: {target.solutionName}
                </p>
              </div>

              {/* Target Content Body */}
              <div className="p-6 sm:p-8 space-y-8">
                
                {/* 1. Official Target Text */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#E11484]" />
                    Texto Oficial da Meta (ONU)
                  </h3>
                  <div className="p-5 bg-[#FAF9F6] border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 text-neutral-900 text-base sm:text-lg font-medium leading-relaxed shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)]">
                    "{target.officialTargetText}"
                  </div>
                </div>

                {/* 2. Official Indicator */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E11484]" />
                    Indicador Oficial de Monitoramento
                  </h3>
                  <div className="p-4 bg-white border border-neutral-300 text-xs sm:text-sm text-neutral-800 font-mono">
                    {target.officialIndicator}
                  </div>
                </div>

                {/* 3. Executive Summary / Context */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 mb-2">
                    Resumo e Justificativa da Ação
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    {target.executiveSummary}
                  </p>
                </div>

                {/* 4. Strategic Pillars / Action Lines */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 mb-3">
                    Pilares Estruturais da Solução
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {target.pillars.map((pillar) => (
                      <div
                        key={pillar.number}
                        className="p-4 bg-[#FAF9F6] border-l-4 border-neutral-900 border-t border-r border-b border-neutral-200"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-5 h-5 bg-neutral-900 text-white font-black text-[10px] flex items-center justify-center">
                            {pillar.number}
                          </span>
                          <h4 className="text-xs font-black uppercase text-neutral-900">
                            {pillar.title}
                          </h4>
                        </div>
                        <p className="text-xs text-neutral-600 leading-relaxed mt-1">
                          {pillar.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. KPIs and Targets Table */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 mb-3">
                    Metas e Indicadores de Desempenho (2028–2030)
                  </h3>
                  <div className="overflow-x-auto border border-neutral-300">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#FAF9F6] border-b border-neutral-300 text-neutral-900 font-black uppercase text-[11px] tracking-wider">
                        <tr>
                          <th className="p-3">Indicador</th>
                          <th className="p-3 w-48 text-amber-700">Marco 2028–2029</th>
                          <th className="p-3 w-48 text-[#E11484]">Meta Alvo 2030</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200">
                        {target.kpis.table.map((kpi, kIdx) => (
                          <tr key={kIdx} className="hover:bg-neutral-50">
                            <td className="p-3 font-medium text-neutral-800">{kpi.indicator}</td>
                            <td className="p-3 font-mono text-xs text-neutral-700">{kpi.meta2028_2029}</td>
                            <td className="p-3 font-mono text-xs font-bold text-[#E11484]">{kpi.meta2030}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Bottom Card Navigation */}
                <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-neutral-500 font-mono text-[11px]">
                    Fontes oficiais: {target.sources.slice(0, 2).join(' • ')}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={scrollToTop}
                      className="px-4 py-2 bg-[#E11484] text-white font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:opacity-90 transition cursor-pointer flex items-center gap-1.5"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                      <span>Voltar para as 10 Metas</span>
                    </button>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </main>

      {/* Simple Footer */}
      <footer className="bg-neutral-900 text-neutral-400 border-t-4 border-[#E11484] py-8 mt-20 text-center text-xs">
        <div className="max-w-6xl mx-auto px-4 space-y-2">
          <p className="font-bold text-neutral-200 uppercase tracking-widest">
            Portal das 10 Metas da ODS 10 — ONU Brasil
          </p>
          <p className="text-neutral-500 font-mono text-[11px]">
            Redução das Desigualdades • Objetivos de Desenvolvimento Sustentável • Agenda 2030
          </p>
        </div>
      </footer>

    </div>
  );
}
