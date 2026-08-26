import React from 'react';
import { Search, X, Filter, Sparkles, Building2, Globe2, Wallet } from 'lucide-react';
import { TargetCategory } from '../types/ods';

interface FilterBarProps {
  selectedCategory: TargetCategory;
  onSelectCategory: (category: TargetCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
  filteredCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalCount,
  filteredCount,
}) => {
  const categories: { id: TargetCategory; label: string; countLabel: string; icon: React.ReactNode }[] = [
    { 
      id: 'todas', 
      label: 'Todas as Metas', 
      countLabel: '10',
      icon: <Sparkles className="w-3.5 h-3.5" /> 
    },
    { 
      id: 'brasil_nacional', 
      label: 'Brasil e Políticas Nacionais', 
      countLabel: '10.1, 10.2, 10.3, 10.7',
      icon: <Building2 className="w-3.5 h-3.5" /> 
    },
    { 
      id: 'governanca_global', 
      label: 'Governança Global e Financeira', 
      countLabel: '10.5, 10.6, 10.a, 10.b, 10.c',
      icon: <Globe2 className="w-3.5 h-3.5" /> 
    },
    { 
      id: 'trabalho_renda', 
      label: 'Trabalho e Renda', 
      countLabel: '10.1, 10.4',
      icon: <Wallet className="w-3.5 h-3.5" /> 
    },
  ];

  return (
    <div id="filter-bar-section" className="bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-700 p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] dark:shadow-[4px_4px_0px_0px_rgba(225,20,132,0.25)] transition-colors">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        
        {/* Category Filters Button Group */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border-2 ${
                  isActive
                    ? 'bg-[#E11484] text-white border-neutral-900 dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]'
                    : 'bg-[#FAF9F6] dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700 hover:border-[#E11484] hover:text-[#E11484]'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-xs ${
                  isActive ? 'bg-black/25 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300'
                }`}>
                  {cat.countLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input Box */}
        <div className="relative min-w-[260px] sm:min-w-[320px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            id="search-input-targets"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por termo, indicador, lei ou pilar..."
            className="w-full text-xs font-semibold pl-9 pr-8 py-2.5 bg-[#FAF9F6] dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border-2 border-neutral-300 dark:border-neutral-700 placeholder-neutral-500 focus:outline-hidden focus:border-[#E11484] focus:ring-0 transition"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-[#E11484] cursor-pointer"
              title="Limpar busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Dynamic Results Counter & Reset Button */}
      {(searchQuery || selectedCategory !== 'todas') && (
        <div className="mt-3.5 pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400">
          <span>
            Exibindo <strong>{filteredCount}</strong> de <strong>{totalCount}</strong> propostas estruturadas
            {searchQuery && <span> para a busca &quot;<em>{searchQuery}</em>&quot;</span>}
          </span>
          <button
            onClick={() => {
              onSelectCategory('todas');
              onSearchChange('');
            }}
            className="text-[#E11484] hover:underline font-black uppercase tracking-wider text-[11px] cursor-pointer"
          >
            Redefinir filtros
          </button>
        </div>
      )}
    </div>
  );
};
