import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Copy, 
  CheckCircle2, 
  Printer, 
  Layers, 
  BarChart3, 
  ShieldAlert, 
  Calendar, 
  BookOpen, 
  FileText, 
  Check, 
  TrendingUp, 
  ExternalLink,
  DollarSign,
  AlertCircle,
  Building,
  Target,
  Sparkles,
  Info
} from 'lucide-react';
import { ODSTarget } from '../types/ods';

interface TargetDetailViewProps {
  target: ODSTarget;
  onBack: () => void;
  onSelectTarget: (id: string) => void;
  allTargets: ODSTarget[];
}

export const TargetDetailView: React.FC<TargetDetailViewProps> = ({
  target,
  onBack,
  onSelectTarget,
  allTargets
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'pillars' | 'operations' | 'governance' | 'kpis' | 'risks' | 'sources'>('overview');
  const [copied, setCopied] = useState(false);

  // Find index for Prev / Next navigation
  const currentIndex = allTargets.findIndex((t) => t.id === target.id);
  const prevTarget = currentIndex > 0 ? allTargets[currentIndex - 1] : null;
  const nextTarget = currentIndex < allTargets.length - 1 ? allTargets[currentIndex + 1] : null;

  const handleCopyMarkdown = () => {
    let md = `# ODS 10 – REDUÇÃO DAS DESIGUALDADES\n## ${target.numberLabel}: ${target.officialTitle}\n### Proposta: ${target.solutionName}\n*${target.subtitle}*\n\n`;
    md += `**Meta Oficial ONU:** ${target.officialTargetText}\n`;
    md += `**Indicador Oficial:** ${target.officialIndicator}\n\n`;
    md += `## I. Resumo Executivo\n${target.executiveSummary}\n\n`;
    md += `## II. Marco Normativo e Justificativa\n${target.normativeFramework.map(n => `- ${n}`).join('\n')}\n\n`;
    md += `## III. Diagnóstico e Problemas Identificados\n${target.diagnosis.overview}\n${target.diagnosis.bulletPoints.map(b => `* **${b.title}**: ${b.text}`).join('\n')}\n\n`;
    md += `## IV. Pilares Estratégicos\n${target.pillars.map(p => `### Pilar ${p.number} — ${p.title}\n${p.summary}`).join('\n\n')}\n\n`;
    md += `## V. Governança e Cronograma\n${target.governance.governanceSummary}\n\n`;
    md += `## VI. Metas e Indicadores (KPIs)\n${target.kpis.table.map(k => `* **${k.indicator}**: Meta 2028-29 (${k.meta2028_2029}) | Meta 2030 (${k.meta2030})`).join('\n')}\n\n`;
    md += `## VII. Gestão de Riscos\n${target.riskManagement.map(r => `* **Risco:** ${r.risk} | **Mitigação:** ${r.mitigation}`).join('\n')}\n\n`;
    md += `## VIII. Conclusão\n${target.conclusion}\n\n`;
    md += `## IX. Fontes e Referências\n${target.sources.map(s => `- ${s}`).join('\n')}\n`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id={`target-detail-${target.id}`} className="min-h-screen bg-[#FAF9F6] dark:bg-neutral-950 pb-20 transition-colors">
      
      {/* Top Sticky Bar */}
      <div className="sticky top-14 z-30 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b-2 border-neutral-200 dark:border-neutral-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-2">
          <button
            id="btn-back-to-list"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:text-[#E11484] dark:hover:text-[#E11484] px-3.5 py-1.5 border border-neutral-300 dark:border-neutral-700 bg-[#FAF9F6] dark:bg-neutral-800 transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para as Metas</span>
          </button>

          <div className="flex items-center gap-2">
            {/* Prev Target */}
            {prevTarget && (
              <button
                onClick={() => onSelectTarget(prevTarget.id)}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-[#E11484] px-3 py-1.5 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition cursor-pointer"
                title={`Ir para ${prevTarget.numberLabel}`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{prevTarget.numberLabel}</span>
              </button>
            )}

            {/* Next Target */}
            {nextTarget && (
              <button
                onClick={() => onSelectTarget(nextTarget.id)}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-[#E11484] px-3 py-1.5 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition cursor-pointer"
                title={`Ir para ${nextTarget.numberLabel}`}
              >
                <span>{nextTarget.numberLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              id="btn-copy-markdown"
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 bg-[#FAF9F6] dark:bg-neutral-800 hover:bg-neutral-100 text-neutral-800 dark:text-neutral-200 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 border border-neutral-300 dark:border-neutral-700 transition cursor-pointer"
              title="Copiar proposta completa formatada em Markdown"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-neutral-500" />}
              <span>{copied ? 'Markdown Copiado!' : 'Copiar Markdown'}</span>
            </button>

            <button
              id="btn-print-proposal"
              onClick={handlePrint}
              className="p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 transition cursor-pointer"
              title="Imprimir ou Salvar em PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header for Target */}
      <div className="bg-white dark:bg-neutral-900 border-b-2 border-neutral-200 dark:border-neutral-800 pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="bg-[#E11484] text-white font-black text-xs px-3.5 py-1 uppercase tracking-[0.15em] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)]">
              {target.numberLabel}
            </span>
            <span className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-bold uppercase tracking-wider px-3 py-1 border border-neutral-200 dark:border-neutral-700">
              Âmbito: {target.scope}
            </span>
            <span className="bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider px-3 py-1 border border-emerald-300 dark:border-emerald-800">
              Meta 2030
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 dark:text-white tracking-tight uppercase">
            {target.solutionName}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-medium mt-2 max-w-4xl leading-relaxed">
            {target.subtitle}
          </p>

          {/* Official Target & Indicator Callout Box */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-[#FAF9F6] dark:bg-neutral-950 border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 shadow-[3px_3px_0px_0px_rgba(225,20,132,0.1)]">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E11484] mb-2">
                <Target className="w-4 h-4" />
                <span>Texto Oficial da Meta {target.numberLabel}</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 italic leading-relaxed">
                &quot;{target.officialTargetText}&quot;
              </p>
            </div>

            <div className="p-5 bg-[#FAF9F6] dark:bg-neutral-950 border-l-8 border-neutral-800 dark:border-neutral-400 border-t border-r border-b border-neutral-200 dark:border-neutral-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-neutral-800 dark:text-neutral-200 mb-2">
                <BarChart3 className="w-4 h-4 text-[#E11484]" />
                <span>Indicador Oficial de Acompanhamento</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-semibold leading-relaxed">
                {target.officialIndicator}
              </p>
            </div>
          </div>

          {/* Key Metric Stats Cards */}
          {target.diagnosis.keyStats && target.diagnosis.keyStats.length > 0 && (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {target.diagnosis.keyStats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#FAF9F6] dark:bg-neutral-950 p-4 border-l-4 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 shadow-[2px_2px_0px_0px_rgba(225,20,132,0.12)]"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block truncate">
                    {stat.label}
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-[#E11484] mt-1 font-mono">
                    {stat.value}
                  </div>
                  {stat.source && (
                    <span className="text-[10px] text-neutral-400 dark:text-neutral-500 block mt-1">
                      Fonte: {stat.source}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="mt-8 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-b-2 border-neutral-200 dark:border-neutral-800">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border-t-2 border-l-2 border-r-2 ${
                activeTab === 'overview'
                  ? 'bg-[#E11484] text-white border-[#E11484] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                  : 'text-neutral-600 dark:text-neutral-400 border-transparent hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>I–III. Resumo & Diagnóstico</span>
            </button>

            <button
              onClick={() => setActiveTab('pillars')}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border-t-2 border-l-2 border-r-2 ${
                activeTab === 'pillars'
                  ? 'bg-[#E11484] text-white border-[#E11484] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                  : 'text-neutral-600 dark:text-neutral-400 border-transparent hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>IV. Pilares ({target.pillars.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('operations')}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border-t-2 border-l-2 border-r-2 ${
                activeTab === 'operations'
                  ? 'bg-[#E11484] text-white border-[#E11484] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                  : 'text-neutral-600 dark:text-neutral-400 border-transparent hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>V. Operações & Modelos</span>
            </button>

            <button
              onClick={() => setActiveTab('governance')}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border-t-2 border-l-2 border-r-2 ${
                activeTab === 'governance'
                  ? 'bg-[#E11484] text-white border-[#E11484] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                  : 'text-neutral-600 dark:text-neutral-400 border-transparent hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>VI. Governança 2026-30</span>
            </button>

            <button
              onClick={() => setActiveTab('kpis')}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border-t-2 border-l-2 border-r-2 ${
                activeTab === 'kpis'
                  ? 'bg-[#E11484] text-white border-[#E11484] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                  : 'text-neutral-600 dark:text-neutral-400 border-transparent hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>VII. Metas & KPIs 2030</span>
            </button>

            <button
              onClick={() => setActiveTab('risks')}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border-t-2 border-l-2 border-r-2 ${
                activeTab === 'risks'
                  ? 'bg-[#E11484] text-white border-[#E11484] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                  : 'text-neutral-600 dark:text-neutral-400 border-transparent hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>VIII. Riscos & Mitigação</span>
            </button>

            <button
              onClick={() => setActiveTab('sources')}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border-t-2 border-l-2 border-r-2 ${
                activeTab === 'sources'
                  ? 'bg-[#E11484] text-white border-[#E11484] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                  : 'text-neutral-600 dark:text-neutral-400 border-transparent hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>IX–X. Conclusão & Fontes</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        
        {/* TAB 1: OVERVIEW & DIAGNOSIS */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Executive Summary */}
            <section className="bg-white dark:bg-neutral-900 border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(225,20,132,0.1)]">
              <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 bg-[#E11484] text-white flex items-center justify-center font-black text-xs font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                  I
                </span>
                Resumo Executivo
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {target.executiveSummary}
              </p>
            </section>

            {/* Normative Framework */}
            <section className="bg-white dark:bg-neutral-900 border-l-8 border-neutral-800 dark:border-neutral-300 border-t border-r border-b border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.08)]">
              <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-black text-xs font-mono">
                  II
                </span>
                Marco Normativo, Legislação & Justificativa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {target.normativeFramework.map((framework, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-3 p-3.5 bg-[#FAF9F6] dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <Check className="w-4 h-4 text-[#E11484] shrink-0 mt-0.5" />
                    <span>{framework}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Diagnosis */}
            <section className="bg-white dark:bg-neutral-900 border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(225,20,132,0.1)]">
              <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 bg-[#E11484] text-white flex items-center justify-center font-black text-xs font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                  III
                </span>
                Diagnóstico Técnico e Gargalos Estruturais
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                {target.diagnosis.overview}
              </p>
              <div className="space-y-4">
                {target.diagnosis.bulletPoints.map((bp, i) => (
                  <div 
                    key={i} 
                    className="p-4 bg-[#FAF9F6] dark:bg-neutral-950 border-l-4 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800"
                  >
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-1 uppercase tracking-tight">
                      {bp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {bp.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: STRATEGIC PILLARS */}
        {activeTab === 'pillars' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-900 border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 p-6 shadow-[3px_3px_0px_0px_rgba(225,20,132,0.1)]">
              <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase mb-2">
                IV. Proposta de Solução e Pilares Estratégicos
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                A solução {target.solutionName} organiza-se em {target.pillars.length} pilares fundamentais e complementares de ação:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {target.pillars.map((pillar) => (
                <div 
                  key={pillar.number} 
                  className="bg-white dark:bg-neutral-900 border-l-6 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 p-6 shadow-[3px_3px_0px_0px_rgba(225,20,132,0.12)] hover:shadow-[5px_5px_0px_0px_rgba(225,20,132,0.2)] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-8 bg-[#E11484] text-white font-black text-sm flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                        {pillar.number}
                      </span>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-[#E11484]">
                        Pilar {pillar.number}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2 uppercase">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {pillar.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: OPERATIONAL MECHANISMS */}
        {activeTab === 'operations' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-900 border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(225,20,132,0.1)]">
              <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase mb-3">
                V. Mecanismos Operacionais e Funcionamento Prático
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                {target.operationalMechanisms.description}
              </p>

              {/* Core Solutions list if present */}
              {target.operationalMechanisms.coreSolutions && (
                <div className="mb-8 space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#E11484] border-l-2 border-[#E11484] pl-2">
                    Soluções Estratégicas Chave
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {target.operationalMechanisms.coreSolutions.map((sol, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 bg-[#FAF9F6] dark:bg-neutral-950 border-l-4 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200"
                      >
                        {sol}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stages Timeline / Steps if present */}
              {target.operationalMechanisms.stages && target.operationalMechanisms.stages.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-800 dark:text-neutral-200 mb-2 border-l-2 border-neutral-800 dark:border-neutral-200 pl-2">
                    Ciclo de Execução e Fases
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {target.operationalMechanisms.stages.map((st, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 bg-[#FAF9F6] dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)]"
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-black bg-[#E11484] text-white px-2 py-0.5 uppercase tracking-wider">
                            {st.step}
                          </span>
                          {st.period && (
                            <span className="text-[11px] text-neutral-500 font-mono">
                              {st.period}
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-1 uppercase">
                          {st.title}
                        </h4>
                        <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                          {st.description}
                        </p>
                        {st.expectedResult && (
                          <div className="mt-2 pt-2 border-t border-neutral-200 dark:border-neutral-800 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wide">
                            Resultado: {st.expectedResult}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comparison Table if present */}
              {target.operationalMechanisms.comparisons && (
                <div className="mt-8">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#E11484] mb-3 border-l-2 border-[#E11484] pl-2">
                    Comparativo: Modelo Tradicional vs. Modelo Proposto
                  </h3>
                  <div className="overflow-x-auto border-2 border-neutral-200 dark:border-neutral-800 shadow-[3px_3px_0px_0px_rgba(225,20,132,0.1)]">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#FAF9F6] dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-black uppercase tracking-wider border-b-2 border-neutral-200 dark:border-neutral-800">
                        <tr>
                          <th className="p-3.5">Dimensão</th>
                          <th className="p-3.5 text-neutral-500 dark:text-neutral-400">Modelo Atual (Ineficiente)</th>
                          <th className="p-3.5 text-[#E11484]">Modelo Proposto ({target.solutionName})</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                        {target.operationalMechanisms.comparisons.map((cmp, i) => (
                          <tr key={i} className="hover:bg-white dark:hover:bg-neutral-800/50">
                            <td className="p-3.5 font-bold uppercase text-neutral-900 dark:text-white bg-[#FAF9F6] dark:bg-neutral-950">
                              {cmp.dimension}
                            </td>
                            <td className="p-3.5 text-neutral-600 dark:text-neutral-400">
                              {cmp.currentModel}
                            </td>
                            <td className="p-3.5 font-bold text-neutral-900 dark:text-neutral-100 bg-[#E11484]/5 dark:bg-[#E11484]/15">
                              {cmp.proposedModel}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Services Table for Meta 10.7 */}
              {target.operationalMechanisms.customServicesTable && (
                <div className="mt-8">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#E11484] mb-3 border-l-2 border-[#E11484] pl-2">
                    Matriz de Serviços Especializados Integrados
                  </h3>
                  <div className="overflow-x-auto border-2 border-neutral-200 dark:border-neutral-800">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#FAF9F6] dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-black uppercase tracking-wider border-b-2 border-neutral-200 dark:border-neutral-800">
                        <tr>
                          <th className="p-3.5 w-1/3">Necessidade Identificada</th>
                          <th className="p-3.5">Serviço Integrado Oferecido</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                        {target.operationalMechanisms.customServicesTable.map((srv, i) => (
                          <tr key={i} className="hover:bg-[#FAF9F6] dark:hover:bg-neutral-850">
                            <td className="p-3.5 font-bold text-neutral-900 dark:text-white bg-[#E11484]/10 dark:bg-[#E11484]/20 uppercase text-xs">
                              {srv.need}
                            </td>
                            <td className="p-3.5 text-neutral-700 dark:text-neutral-300">
                              {srv.service}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Budget plan if present */}
              {target.operationalMechanisms.budgetPlan && (
                <div className="mt-8">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-800 dark:text-neutral-200 mb-3 flex items-center gap-1.5 border-l-2 border-emerald-500 pl-2">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    Planejamento Financeiro Estimado (Projeto-Piloto Municipal)
                  </h3>
                  <div className="overflow-x-auto border-2 border-neutral-200 dark:border-neutral-800">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#FAF9F6] dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-black uppercase tracking-wider border-b-2 border-neutral-200 dark:border-neutral-800">
                        <tr>
                          <th className="p-3.5">Item de Investimento</th>
                          <th className="p-3.5 text-right">Custo Estimado (R$)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                        {target.operationalMechanisms.budgetPlan.map((b, i) => (
                          <tr key={i} className={`hover:bg-[#FAF9F6] dark:hover:bg-neutral-850 ${i === target.operationalMechanisms.budgetPlan!.length - 1 ? 'font-black bg-[#E11484]/10 dark:bg-[#E11484]/20' : ''}`}>
                            <td className="p-3.5 text-neutral-800 dark:text-neutral-200">{b.item}</td>
                            <td className="p-3.5 text-right font-mono font-black text-neutral-900 dark:text-white">{b.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* TAB 4: GOVERNANCE & TIMELINE */}
        {activeTab === 'governance' && (
          <div className="space-y-6">
            <section className="bg-white dark:bg-neutral-900 border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(225,20,132,0.1)]">
              <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase mb-4">
                VI. Governança e Atores Envolvidos
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                {target.governance.governanceSummary}
              </p>

              <div className="mb-8">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mb-3 border-l-2 border-neutral-400 pl-2">
                  Atores Institucionais & Parcerias
                </h3>
                <div className="flex flex-wrap gap-2">
                  {target.governance.stakeholders.map((s, i) => (
                    <span 
                      key={i} 
                      className="px-3.5 py-1.5 bg-[#FAF9F6] dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 text-xs font-bold uppercase tracking-wider"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-base font-black uppercase text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#E11484]" />
                Cronograma de Implementação (2026–2030)
              </h3>

              <div className="relative border-l-2 border-[#E11484] ml-4 pl-6 space-y-6">
                {target.governance.timeline.map((phase, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-[#E11484] border-2 border-white dark:border-neutral-900 shadow-sm" />
                    <div className="p-4 bg-[#FAF9F6] dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-[2px_2px_0px_0px_rgba(225,20,132,0.1)]">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-black px-2 py-0.5 bg-[#E11484] text-white uppercase tracking-wider">
                          {phase.period}
                        </span>
                        {phase.phaseName && (
                          <span className="text-xs font-bold uppercase text-neutral-800 dark:text-neutral-200">
                            {phase.phaseName}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mt-2">
                        {phase.actions}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 5: KPIS & TARGET METRICS */}
        {activeTab === 'kpis' && (
          <div className="space-y-6">
            <section className="bg-white dark:bg-neutral-900 border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(225,20,132,0.1)]">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div>
                  <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase">
                    VII. Metas, Indicadores (KPIs) e Avaliação de Impacto
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    Metas intermediárias (2028–2029) e metas finais de conformidade para 2030
                  </p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-3.5 py-1 border border-emerald-300 dark:border-emerald-800">
                  Monitoramento Contínuo
                </span>
              </div>

              {/* Main KPI Table */}
              <div className="overflow-x-auto border-2 border-neutral-200 dark:border-neutral-800 mt-6 shadow-[3px_3px_0px_0px_rgba(225,20,132,0.1)]">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#FAF9F6] dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-black uppercase tracking-wider border-b-2 border-neutral-200 dark:border-neutral-800">
                    <tr>
                      <th className="p-3.5">Indicador de Desempenho</th>
                      <th className="p-3.5 text-amber-700 dark:text-amber-400">Meta Intermediária (2028–2029)</th>
                      <th className="p-3.5 text-[#E11484]">Meta Final (2030)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    {target.kpis.table.map((kpi, idx) => (
                      <tr key={idx} className="hover:bg-[#FAF9F6] dark:hover:bg-neutral-850">
                        <td className="p-3.5 font-bold text-neutral-900 dark:text-white">
                          {kpi.indicator}
                        </td>
                        <td className="p-3.5 text-neutral-700 dark:text-neutral-300 font-medium bg-amber-50/20 dark:bg-amber-950/10">
                          {kpi.meta2028_2029}
                        </td>
                        <td className="p-3.5 text-[#E11484] dark:text-[#ff60b6] font-black bg-[#E11484]/5 dark:bg-[#E11484]/15">
                          {kpi.meta2030}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Complementary Indicators */}
              {target.kpis.complementaryIndicators && (
                <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-700 dark:text-neutral-300 mb-3 border-l-2 border-neutral-400 pl-2">
                    Indicadores Complementares Monitorados
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {target.kpis.complementaryIndicators.map((ci, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2.5 p-3 bg-[#FAF9F6] dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#E11484] shrink-0" />
                        <span>{ci}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </div>
        )}

        {/* TAB 6: RISKS & MITIGATION */}
        {activeTab === 'risks' && (
          <div className="space-y-6">
            <section className="bg-white dark:bg-neutral-900 border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(225,20,132,0.1)]">
              <div className="flex items-center gap-2 mb-6">
                <ShieldAlert className="w-6 h-6 text-amber-500" />
                <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase">
                  VIII. Gestão de Riscos, Viabilidade e Mitigação
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {target.riskManagement.map((riskItem, i) => (
                  <div 
                    key={i} 
                    className="p-5 bg-[#FAF9F6] dark:bg-neutral-950 border-l-4 border-amber-500 border-t border-r border-b border-neutral-200 dark:border-neutral-800 flex flex-col justify-between shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)]"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
                        <AlertCircle className="w-4 h-4" />
                        <span>Risco Identificado</span>
                      </div>
                      <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-3">
                        {riskItem.risk}
                      </h3>
                    </div>
                    <div className="mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                      <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#E11484] block mb-1">
                        Solução Proposta & Mitigação
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {riskItem.mitigation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 7: CONCLUSION & SOURCES */}
        {activeTab === 'sources' && (
          <div className="space-y-8">
            {/* Case Study if present */}
            {target.caseStudy && (
              <section className="bg-white dark:bg-neutral-900 border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(225,20,132,0.12)]">
                <div className="flex items-center gap-2 mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#E11484]">
                  <BookOpen className="w-4 h-4" />
                  <span>Estudo de Caso / Experiência Prática</span>
                </div>
                <h3 className="text-xl font-bold uppercase text-neutral-900 dark:text-white mb-3">
                  {target.caseStudy.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {target.caseStudy.description}
                </p>
              </section>
            )}

            {/* Conclusion */}
            <section className="bg-white dark:bg-neutral-900 border-l-8 border-neutral-800 dark:border-neutral-300 border-t border-r border-b border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.06)]">
              <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase mb-4">
                IX. Conclusão da Proposta
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {target.conclusion}
              </p>
            </section>

            {/* Official Sources & References */}
            <section className="bg-white dark:bg-neutral-900 border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(225,20,132,0.1)]">
              <h2 className="text-xl font-black text-neutral-900 dark:text-white uppercase mb-4">
                X. Fontes e Referências Consultadas
              </h2>
              <ul className="space-y-2.5">
                {target.sources.map((source, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 p-3 bg-[#FAF9F6] dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800"
                  >
                    <BookOpen className="w-4 h-4 text-[#E11484] shrink-0 mt-0.5" />
                    <span>{source}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}

      </div>

      {/* Bottom Navigation between targets */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        {prevTarget ? (
          <button
            onClick={() => onSelectTarget(prevTarget.id)}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-rose-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <div className="text-left">
              <span className="text-[10px] text-slate-400 block font-normal">Meta Anterior</span>
              <span>{prevTarget.numberLabel}: {prevTarget.solutionName}</span>
            </div>
          </button>
        ) : <div />}

        {nextTarget ? (
          <button
            onClick={() => onSelectTarget(nextTarget.id)}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-rose-600 transition"
          >
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block font-normal">Próxima Meta</span>
              <span>{nextTarget.numberLabel}: {nextTarget.solutionName}</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : <div />}
      </div>
    </div>
  );
};
