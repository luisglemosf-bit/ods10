import React, { useState } from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Scale, 
  BadgePercent, 
  Landmark, 
  Globe2, 
  HeartHandshake, 
  Ship, 
  Coins, 
  Zap,
  CheckCircle2,
  Copy,
  Layers,
  Sparkles,
  BarChart2
} from 'lucide-react';
import { ODSTarget } from '../types/ods';

interface TargetCardProps {
  target: ODSTarget;
  onSelect: (id: string) => void;
  onOpenKPIs?: (id: string) => void;
}

export const TargetCard: React.FC<TargetCardProps> = ({ target, onSelect }) => {
  const [copied, setCopied] = useState(false);

  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5' };
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Scale': return <Scale {...props} />;
      case 'BadgePercent': return <BadgePercent {...props} />;
      case 'Landmark': return <Landmark {...props} />;
      case 'Globe2': return <Globe2 {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      case 'Ship': return <Ship {...props} />;
      case 'Coins': return <Coins {...props} />;
      case 'Zap': return <Zap {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const handleCopySummary = (e: React.MouseEvent) => {
    e.stopPropagation();
    const textToCopy = `[${target.numberLabel}] ${target.solutionName}\nMeta Oficial: ${target.officialTargetText}\n\nResumo:\n${target.executiveSummary}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Primary key metric if available
  const topStat = target.diagnosis.keyStats?.[0];

  return (
    <div
      id={`target-card-${target.id}`}
      onClick={() => onSelect(target.id)}
      className="group relative bg-white dark:bg-neutral-900 border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 hover:border-[#E11484] p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(225,20,132,0.12)] hover:shadow-[6px_6px_0px_0px_rgba(225,20,132,0.25)] transition-all duration-200 cursor-pointer"
    >
      <div>
        {/* Header Row: Big Geometric Number Watermark + Badge & Actions */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-3xl sm:text-4xl font-black text-[#E11484] opacity-35 tracking-tighter select-none font-mono">
              {target.numberLabel}
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#E11484] bg-[#E11484]/10 px-2 py-0.5 border border-[#E11484]/20">
              {target.scope}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-[#E11484] group-hover:scale-125 transition-transform" />
            <button
              id={`btn-copy-card-${target.id}`}
              onClick={handleCopySummary}
              className="p-1.5 text-neutral-400 hover:text-[#E11484] dark:hover:text-white transition cursor-pointer"
              title="Copiar resumo da proposta"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Solution Title */}
        <h3 className="text-lg sm:text-xl font-bold leading-snug text-neutral-800 dark:text-neutral-100 group-hover:text-[#E11484] transition-colors line-clamp-2 mt-1">
          {target.solutionName}
        </h3>

        {/* Subtitle / Purpose */}
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed line-clamp-2">
          {target.subtitle}
        </p>

        {/* Official Target Callout */}
        <div className="mt-3.5 p-3 bg-[#FAF9F6] dark:bg-neutral-950 border-l-2 border-[#E11484]/50 text-xs text-neutral-600 dark:text-neutral-300">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#E11484] block mb-0.5">
            Texto Oficial da Meta:
          </span>
          <p className="italic line-clamp-2 text-[11px] leading-relaxed">
            &quot;{target.officialTargetText}&quot;
          </p>
        </div>

        {/* Highlight Stats Snippet */}
        {topStat && (
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="bg-[#FAF9F6] dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-2.5">
              <span className="text-[9px] uppercase tracking-wider font-bold text-[#E11484] block truncate">
                {topStat.label}
              </span>
              <span className="text-sm sm:text-base font-black text-neutral-900 dark:text-white">
                {topStat.value}
              </span>
            </div>
            <div className="bg-[#FAF9F6] dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-2.5">
              <span className="text-[9px] uppercase tracking-wider font-bold text-neutral-500 dark:text-neutral-400 block truncate">
                Estrutura Técnica
              </span>
              <span className="text-sm sm:text-base font-black text-neutral-800 dark:text-neutral-200 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-[#E11484]" />
                {target.pillars.length} Pilares
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="mt-5 pt-3.5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#E11484] flex items-center gap-1.5 group-hover:underline">
          <span>Ver Proposta Completa</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </span>
        <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
          ONU 2030
        </span>
      </div>
    </div>
  );
};
