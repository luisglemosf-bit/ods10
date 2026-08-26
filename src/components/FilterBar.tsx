import React from 'react';
import { Search, X, Filter, Sparkles, Building2, Globe2, Wallet, Users, Landmark } from 'lucide-react';
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
  const categories: { id: TargetCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'todos', label: 'Todas as 10 Metas', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'nacional', label: 'Brasil / Nacional', icon: <Building2 className="w-3.5 h-3.5" /> },
    { id: 'global', label: 'Global / Multilateral', icon: <Globe2 className="w-3.5 h-3.5" /> },
    { id: 'renda_trabalho', label: 'Renda & Trabalho', icon: <Wallet className="w-3.5 h-3.5" /> },
    { id: 'direitos_inclusao', label: 'Direitos & Inclusão', icon: <Users className="w-3.5 h-3.5" /> },
    { id: 'financas_comercio', label: 'Finanças & Comércio', icon: <Landmark className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="bg-[#FAF9F6] dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 py-4 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-btn-${cat.id}`}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#E11484] text-white border-[#E11484] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]'
                      : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 hover:border-[#E11484] hover:text-[#E11484]'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              id="search-input-targets"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar meta, pilar, diagnóstico..."
              className="w-full text-xs font-semibold pl-9 pr-8 py-2 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 placeholder-neutral-400 focus:outline-hidden focus:border-[#E11484] focus:ring-1 focus:ring-[#E11484] transition"
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

        {/* Counter Info Bar */}
        {(searchQuery || selectedCategory !== 'todos') && (
          <div className="mt-3 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800 pt-2">
            <span>
              Exibindo <strong>{filteredCount}</strong> de <strong>{totalCount}</strong> propostas estruturadas
              {searchQuery && <span> para a busca &quot;<em>{searchQuery}</em>&quot;</span>}
            </span>
            <button
              onClick={() => {
                onSelectCategory('todos');
                onSearchChange('');
              }}
              className="text-[#E11484] hover:underline font-bold uppercase tracking-wider text-[11px] cursor-pointer"
            >
              Redefinir filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
