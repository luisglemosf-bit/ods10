import React from 'react';
import { 
  Globe, 
  Search, 
  Github, 
  FileText, 
  Layers, 
  BarChart3, 
  Calculator,
  Moon,
  Sun,
  Award
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
  onOpenDeployModal: () => void;
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
  setDarkMode,
  onOpenDeployModal
}) => {
  return (
    <header id="main-header" className="sticky top-0 z-40 bg-[#FAF9F6] dark:bg-neutral-900 border-b-2 border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
      {/* Top ODS Banner */}
      <div className="bg-[#E11484] text-white px-4 sm:px-8 py-2.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="bg-black/20 text-white px-2.5 py-0.5 font-bold uppercase tracking-[0.2em] text-[10px] border border-white/20">
              Nações Unidas • Agenda 2030
            </span>
            <span className="hidden sm:inline font-medium text-white/95 text-xs">
              Objetivo de Desenvolvimento Sustentável 10: <strong className="font-black">Redução das Desigualdades</strong>
            </span>
          </div>
          <div className="flex items-center gap-4 text-white">
            <span className="hidden md:inline-flex items-center gap-2 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              10 Propostas Estratégicas & Metas 2030
            </span>
            <button 
              id="btn-deploy-guide-top"
              onClick={onOpenDeployModal}
              className="inline-flex items-center gap-1.5 bg-black/20 hover:bg-black/30 text-white px-3 py-1 text-xs transition font-bold uppercase tracking-wider border border-white/25 cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Publicar no GitHub</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Branding */}
          <div 
            id="brand-logo"
            onClick={() => { onSelectTarget(null); setActiveView('grid'); }}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 bg-[#E11484] text-white flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)] group-hover:scale-105 transition-transform duration-200">
              10
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="font-black text-neutral-900 dark:text-white tracking-tight text-lg sm:text-xl uppercase">
                  Portal ODS 10
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest bg-[#E11484]/10 text-[#E11484] dark:bg-[#E11484]/25 dark:text-[#ff60b6] px-2 py-0.5 border-l-2 border-[#E11484]">
                  Soluções Técnicas
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 hidden sm:block tracking-tight">
                Soluções estratégicas para um futuro global equitativo e inclusivo
              </p>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <div className="hidden lg:flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 p-1 border border-neutral-200 dark:border-neutral-700 text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            <button
              id="nav-tab-grid"
              onClick={() => { onSelectTarget(null); setActiveView('grid'); }}
              className={`flex items-center gap-2 px-4 py-2 transition-all cursor-pointer ${
                activeView === 'grid' && selectedTargetId === null
                  ? 'bg-[#E11484] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                  : 'hover:text-[#E11484] dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Propostas por Meta</span>
            </button>
            <button
              id="nav-tab-kpis"
              onClick={() => { onSelectTarget(null); setActiveView('kpis'); }}
              className={`flex items-center gap-2 px-4 py-2 transition-all cursor-pointer ${
                activeView === 'kpis'
                  ? 'bg-[#E11484] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                  : 'hover:text-[#E11484] dark:hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Painel de KPIs 2030</span>
            </button>
            <button
              id="nav-tab-simulators"
              onClick={() => { onSelectTarget(null); setActiveView('simulators'); }}
              className={`flex items-center gap-2 px-4 py-2 transition-all cursor-pointer ${
                activeView === 'simulators'
                  ? 'bg-[#E11484] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                  : 'hover:text-[#E11484] dark:hover:text-white'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Simuladores de Impacto</span>
            </button>
          </div>

          {/* Right Controls (Search, Target Selector, Theme, GitHub) */}
          <div className="flex items-center gap-2.5">
            {/* Quick target dropdown on desktop */}
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
                className="text-xs font-bold uppercase tracking-wider bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 px-3 py-2 pr-8 focus:outline-hidden focus:border-[#E11484] cursor-pointer"
              >
                <option value="">Navegar por Meta...</option>
                {targets.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.numberLabel}: {t.solutionName}
                  </option>
                ))}
              </select>
            </div>

            {/* Dark Mode Toggle */}
            <button
              id="btn-theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-[#E11484] border border-neutral-300 dark:border-neutral-700 transition cursor-pointer"
              title={darkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              aria-label="Alternar tema"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>

            {/* GitHub Deploy button */}
            <button
              id="btn-github-deploy"
              onClick={onOpenDeployModal}
              className="inline-flex items-center gap-1.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-[#E11484] dark:hover:bg-[#E11484] dark:hover:text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2 transition shadow-[3px_3px_0px_0px_rgba(225,20,132,0.4)] cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Exportar / GitHub</span>
            </button>
          </div>
        </div>

        {/* Mobile Submenu Navigation Tabs */}
        <div className="flex lg:hidden items-center justify-between gap-2 mt-3 pt-2.5 border-t border-neutral-200 dark:border-neutral-800 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => { onSelectTarget(null); setActiveView('grid'); }}
            className={`flex-1 py-1.5 text-center transition ${
              activeView === 'grid' && selectedTargetId === null
                ? 'bg-[#E11484] text-white'
                : 'text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800'
            }`}
          >
            Propostas
          </button>
          <button
            onClick={() => { onSelectTarget(null); setActiveView('kpis'); }}
            className={`flex-1 py-1.5 text-center transition ${
              activeView === 'kpis'
                ? 'bg-[#E11484] text-white'
                : 'text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800'
            }`}
          >
            KPIs 2030
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
