import React from 'react';
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Globe2, 
  Layers, 
  ShieldCheck,
  Building2,
  Users,
  Coins,
  Ship,
  Zap,
  Scale,
  Briefcase,
  HeartHandshake
} from 'lucide-react';
import { ODSTarget } from '../types/ods';

interface TargetCardProps {
  target: ODSTarget;
  onSelect: (id: string) => void;
  index: number;
}

export const TargetCard: React.FC<TargetCardProps> = ({ target, onSelect, index }) => {
  // Select icon based on target.id
  const getIcon = () => {
    switch (target.id) {
      case '10.1': return <TrendingUp className="w-5 h-5" />;
      case '10.2': return <Users className="w-5 h-5" />;
      case '10.3': return <Scale className="w-5 h-5" />;
      case '10.4': return <Briefcase className="w-5 h-5" />;
      case '10.5': return <ShieldCheck className="w-5 h-5" />;
      case '10.6': return <Globe2 className="w-5 h-5" />;
      case '10.7': return <HeartHandshake className="w-5 h-5" />;
      case '10.a': return <Ship className="w-5 h-5" />;
      case '10.b': return <Coins className="w-5 h-5" />;
      case '10.c': return <Zap className="w-5 h-5" />;
      default: return <Target className="w-5 h-5" />;
    }
  };

  const highlightStat = target.diagnosis.keyStats?.[0] || {
    value: target.kpis.table[0]?.meta2030 || 'Meta 2030',
    label: target.kpis.table[0]?.indicator || 'Indicador Principal',
  };

  return (
    <div
      id={`target-card-${target.id}`}
      onClick={() => onSelect(target.id)}
      className="group relative flex flex-col justify-between bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-700 hover:border-[#E11484] dark:hover:border-[#E11484] p-5 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] dark:shadow-[4px_4px_0px_0px_rgba(225,20,132,0.25)] hover:shadow-[6px_6px_0px_0px_rgba(225,20,132,0.9)] hover:-translate-y-1 transition-all duration-150 cursor-pointer"
    >
      <div>
        {/* Top Header Row: Target Badge + Scope Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-[#E11484] text-white font-black text-xs px-2.5 py-1 tracking-wider uppercase shadow-xs">
              {target.numberLabel}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 border border-neutral-200 dark:border-neutral-700">
              {target.scope}
            </span>
          </div>

          <div className="p-2 bg-[#FAF9F6] dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 group-hover:bg-[#E11484] group-hover:text-white transition-colors">
            {getIcon()}
          </div>
        </div>

        {/* Official Target Title & Solution Name */}
        <h2 className="text-base sm:text-lg font-black uppercase text-neutral-900 dark:text-white leading-snug group-hover:text-[#E11484] dark:group-hover:text-[#ff60b6] transition-colors mb-1.5 line-clamp-2">
          {target.solutionName}
        </h2>

        <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-tight mb-3 line-clamp-1">
          {target.officialTitle}
        </p>

        {/* Brief Summary */}
        <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed line-clamp-3 mb-5">
          {target.subtitle}
        </p>
      </div>

      {/* Bottom Section: Highlight Metric & CTA Button */}
      <div className="space-y-4 pt-3 border-t border-neutral-200 dark:border-neutral-800">
        
        {/* Key Metric Snapshot */}
        <div className="p-3 bg-[#FAF9F6] dark:bg-neutral-800/90 border-l-4 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-700">
          <div className="text-base sm:text-lg font-black text-neutral-900 dark:text-white font-mono tracking-tight">
            {highlightStat.value}
          </div>
          <div className="text-[11px] font-bold text-neutral-600 dark:text-neutral-400 line-clamp-1">
            {highlightStat.label}
          </div>
        </div>

        {/* Pillars Count & Action Button */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            {target.pillars.length} Pilares Estruturais
          </span>

          <button
            id={`btn-explore-${target.id}`}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white bg-[#E11484] group-hover:bg-neutral-900 dark:group-hover:bg-white dark:group-hover:text-neutral-900 px-3 py-1.5 transition-colors shadow-xs"
          >
            <span>Explorar</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-150" />
          </button>
        </div>

      </div>
    </div>
  );
};
