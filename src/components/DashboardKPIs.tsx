import React, { useState } from 'react';
import { 
  BarChart3, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  Target, 
  Layers, 
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import { ODSTarget } from '../types/ods';

interface DashboardKPIsProps {
  targets: ODSTarget[];
  onSelectTarget: (id: string) => void;
}

export const DashboardKPIs: React.FC<DashboardKPIsProps> = ({ targets, onSelectTarget }) => {
  const [filterScope, setFilterScope] = useState<'all' | 'nacional' | 'global'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Flatten all KPIs with their parent target info
  const allKPIItems = targets.flatMap((t) =>
    t.kpis.table.map((kpi, idx) => ({
      targetId: t.id,
      targetNumber: t.numberLabel,
      solutionName: t.solutionName,
      scope: t.scope,
      category: t.category,
      indicator: kpi.indicator,
      meta2028_2029: kpi.meta2028_2029,
      meta2030: kpi.meta2030,
      uniqueKey: `${t.id}-${idx}`,
    }))
  );

  const filteredKPIs = allKPIItems.filter((item) => {
    const matchesScope =
      filterScope === 'all' ||
      (filterScope === 'nacional' && item.scope.includes('Nacional')) ||
      (filterScope === 'global' && item.scope.includes('Global'));

    const matchesSearch =
      searchTerm === '' ||
      item.indicator.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.targetNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.solutionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.meta2030.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesScope && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      {/* Top Banner */}
      <div className="bg-neutral-900 text-white p-6 sm:p-8 mb-8 border-l-8 border-[#E11484] shadow-[6px_6px_0px_0px_rgba(225,20,132,0.2)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E11484] text-white text-xs font-black px-3.5 py-1 uppercase tracking-[0.15em] mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
              <Target className="w-3.5 h-3.5" />
              Painel Integrado de Monitoramento
            </div>
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Matriz Consolidada de KPIs e Metas 2030
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-3xl leading-relaxed">
              Consolidação de todos os indicadores quantitativos e qualitativos estabelecidos nas propostas técnicas das 10 metas da ODS 10 da ONU.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-neutral-800 p-4 border border-neutral-700 text-center min-w-[100px] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)]">
              <span className="text-2xl font-black text-white font-mono">{targets.length}</span>
              <span className="text-[10px] uppercase font-bold text-[#E11484] block mt-1 tracking-wider">Metas</span>
            </div>
            <div className="bg-neutral-800 p-4 border border-neutral-700 text-center min-w-[100px] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)]">
              <span className="text-2xl font-black text-emerald-400 font-mono">{allKPIItems.length}</span>
              <span className="text-[10px] uppercase font-bold text-emerald-400 block mt-1 tracking-wider">KPIs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-neutral-900 p-4 border border-neutral-200 dark:border-neutral-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.05)] mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Scope selector */}
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          <button
            onClick={() => setFilterScope('all')}
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition border ${
              filterScope === 'all'
                ? 'bg-[#E11484] text-white border-[#E11484] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                : 'bg-[#FAF9F6] dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100'
            }`}
          >
            Todos ({allKPIItems.length})
          </button>
          <button
            onClick={() => setFilterScope('nacional')}
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition border ${
              filterScope === 'nacional'
                ? 'bg-[#E11484] text-white border-[#E11484] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                : 'bg-[#FAF9F6] dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100'
            }`}
          >
            Brasil / Nacional
          </button>
          <button
            onClick={() => setFilterScope('global')}
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition border ${
              filterScope === 'global'
                ? 'bg-[#E11484] text-white border-[#E11484] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                : 'bg-[#FAF9F6] dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100'
            }`}
          >
            Global / Multilateral
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-neutral-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar indicador ou meta..."
            className="w-full text-xs pl-9 pr-3 py-2 bg-[#FAF9F6] dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-[#E11484]"
          />
        </div>
      </div>

      {/* KPI Table */}
      <div className="bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(225,20,132,0.1)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#FAF9F6] dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-black uppercase tracking-wider border-b-2 border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="p-3.5 w-48">Meta & Solução</th>
                <th className="p-3.5">Indicador de Desempenho</th>
                <th className="p-3.5 text-amber-700 dark:text-amber-400 w-56">Marco 2028–2029</th>
                <th className="p-3.5 text-[#E11484] w-64">Meta Alvo 2030</th>
                <th className="p-3.5 text-right w-24">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {filteredKPIs.length > 0 ? (
                filteredKPIs.map((item) => (
                  <tr key={item.uniqueKey} className="hover:bg-[#FAF9F6] dark:hover:bg-neutral-850 transition-colors">
                    <td className="p-3.5 font-bold">
                      <button
                        onClick={() => onSelectTarget(item.targetId)}
                        className="text-left group cursor-pointer"
                      >
                        <span className="inline-block bg-[#E11484] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-wider mb-1 shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)]">
                          {item.targetNumber}
                        </span>
                        <div className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-[#E11484] transition-colors uppercase">
                          {item.solutionName}
                        </div>
                      </button>
                    </td>
                    <td className="p-3.5 text-neutral-700 dark:text-neutral-300 font-medium">
                      {item.indicator}
                    </td>
                    <td className="p-3.5 text-neutral-600 dark:text-neutral-400 bg-amber-50/20 dark:bg-amber-950/10">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs">
                        <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{item.meta2028_2029}</span>
                      </span>
                    </td>
                    <td className="p-3.5 font-bold text-neutral-900 dark:text-neutral-100 bg-[#E11484]/5 dark:bg-[#E11484]/15">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-black text-[#E11484]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E11484] shrink-0" />
                        <span>{item.meta2030}</span>
                      </span>
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => onSelectTarget(item.targetId)}
                        className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#E11484] hover:text-black dark:hover:text-white p-1.5 border border-[#E11484] transition cursor-pointer"
                        title="Ver proposta completa"
                      >
                        <span>Ver</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-neutral-500 dark:text-neutral-400 font-mono text-xs">
                    Nenhum indicador encontrado para o filtro selecionado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
