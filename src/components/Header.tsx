import React from 'react';
import { 
  Globe2, 
  Search, 
  FileText, 
  Layers, 
  BarChart3, 
  Calculator,
  Moon,
  Sun,
  X,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { ODSTarget } from '../types/ods';

interface HeaderProps {
  targets: ODSTarget[];
  selectedTargetId: string | null;
  onSelectTarget: (id: string | null) => void;
  activeView: 'grid' | 'kpis' | 'simulators';
  setActiveView: (view: 'grid' | 'kpis' | 'simulators') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  targets,
  selectedTargetId,
  onSelectTarget,
  activeView,
  setActiveView,
  searchQuery,
  setSearchQuery,
  darkMode,
  setDarkMode
}) => {
  return (
    <header id="main-header" className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b-2 border-neutral-200 dark:border-neutral-800 transition-colors duration-200 shadow-xs">
      
      {/* Top UN Flag Banner */}
      <div className="bg-[#E11484] text-white px-4 sm:px-8 py-2 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="bg-black/25 text-white px-2.5 py-0.5 font-black uppercase tracking-[0.2em] text-[10px] border border-white/20">
              AGENDA 2030 • ONU
            </span>
            <span className="font-medium text-white/95 text-xs">
              ODS 10 — <strong className="font-black">Redução das Desigualdades</strong> no Interior dos Países e entre Eles
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-white">
            <span className="inline-flex items-center gap-2 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              10 Propostas Técnicas para as Metas 10.1 a 10.c
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Identification */}
          <div 
            id="brand-logo"
            onClick={() => { onSelectTarget(null); setActiveView('grid'); }}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 bg-[#E11484] text-white flex items-center justify-center font-black text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.9)] group-hover:scale-105 transition-transform duration-150">
              10
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-neutral-900 dark:text-white tracking-tight text-base sm:text-lg uppercase">
                  Portal ODS 10
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#E11484]/10 text-[#E11484] dark:bg-[#E11484]/20 dark:text-[#ff60b6] px-2 py-0.5 border border-[#E11484]/30">
                  Soluções 2030
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 hidden sm:block tracking-tight">
                Diretrizes e Propostas Estruturadas para a Redução das Desigualdades
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 p-1 border border-neutral-200 dark:border-neutral-700 text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            <button
              id="nav-tab-grid"
              onClick={() => { onSelectTarget(null); setActiveView('grid'); }}
              className={`flex items-center gap-2 px-3.5 py-1.5 transition-all cursor-pointer ${
                activeView === 'grid' && selectedTargetId === null
                  ? 'bg-[#E11484] text-white shadow-xs'
                  : 'hover:text-[#E11484] dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>10 Metas (Painel)</span>
            </button>
            <button
              id="nav-tab-kpis"
              onClick={() => { onSelectTarget(null); setActiveView('kpis'); }}
              className={`flex items-center gap-2 px-3.5 py-1.5 transition-all cursor-pointer ${
                activeView === 'kpis'
                  ? 'bg-[#E11484] text-white shadow-xs'
                  : 'hover:text-[#E11484] dark:hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Matriz de KPIs</span>
            </button>
            <button
              id="nav-tab-simulators"
              onClick={() => { onSelectTarget(null); setActiveView('simulators'); }}
              className={`flex items-center gap-2 px-3.5 py-1.5 transition-all cursor-pointer ${
                activeView === 'simulators'
                  ? 'bg-[#E11484] text-white shadow-xs'
                  : 'hover:text-[#E11484] dark:hover:text-white'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Simuladores</span>
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Quick target selector dropdown */}
            <div className="relative hidden md:block">
              <select
                id="target-quick-select"
                value={selectedTargetId || ''}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val) {
                    onSelectTarget(val);
                  } else {
                    onSelectTarget(null);
                  }
                }}
                className="text-xs font-bold uppercase tracking-wider bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 px-3 py-2 pr-7 focus:outline-hidden focus:border-[#E11484] cursor-pointer"
              >
                <option value="">Ir para uma Meta...</option>
                {targets.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.numberLabel}: {t.solutionName}
                  </option>
                ))}
              </select>
            </div>

            {/* Dark / Light Mode Toggle with Clear Visual Design */}
            <button
              id="btn-theme-toggle"
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="inline-flex items-center gap-2 px-3 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-100 border-2 border-neutral-300 dark:border-neutral-600 transition-all cursor-pointer font-bold text-xs uppercase tracking-wider shadow-xs select-none"
              title={darkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              aria-label="Alternar tema claro/escuro"
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="hidden sm:inline">Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-neutral-700 shrink-0" />
                  <span className="hidden sm:inline">Escuro</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="flex lg:hidden items-center justify-between gap-2 mt-3 pt-2 border-t border-neutral-200 dark:border-neutral-800 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => { onSelectTarget(null); setActiveView('grid'); }}
            className={`flex-1 py-1.5 text-center transition ${
              activeView === 'grid' && selectedTargetId === null
                ? 'bg-[#E11484] text-white'
                : 'text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800'
            }`}
          >
            10 Metas
          </button>
          <button
            onClick={() => { onSelectTarget(null); setActiveView('kpis'); }}
            className={`flex-1 py-1.5 text-center transition ${
              activeView === 'kpis'
                ? 'bg-[#E11484] text-white'
                : 'text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800'
            }`}
          >
            Matriz KPIs
          </button>
          <button
            onClick={() => { onSelectTarget(null); setActiveView('simulators'); }}
            className={`flex-1 py-1.5 text-center transition ${
              activeView === 'simulators'
                ? 'bg-[#E11484] text-white'
                : 'text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800'
            }`}
          >
            Simuladores
          </button>
        </div>
      </div>
    </header>
  );
};
