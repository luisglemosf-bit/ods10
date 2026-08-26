import React, { useEffect, useState, useMemo } from 'react';
import { ODS10_TARGETS } from './data/odsData';
import { TargetCategory } from './types/ods';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FilterBar } from './components/FilterBar';
import { TargetCard } from './components/TargetCard';
import { TargetDetailView } from './components/TargetDetailView';
import { DashboardKPIs } from './components/DashboardKPIs';
import { InteractiveSimulators } from './components/InteractiveSimulators';
import { Footer } from './components/Footer';
import { BookOpen } from 'lucide-react';

export default function App() {
  const [selectedTargetId, setSelectedTargetId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'grid' | 'kpis' | 'simulators'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<TargetCategory>('todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Theme state: dark / light mode
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ods10_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply dark mode class to html element and persist
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('ods10_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('ods10_theme', 'light');
    }
  }, [darkMode]);

  // Sync hash routing (e.g. #10.1 or #meta-10-1)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').replace('meta-', '');
      if (hash) {
        const formatted = hash.includes('-') ? hash.replace('-', '.') : hash;
        const found = ODS10_TARGETS.find((t) => t.id.toLowerCase() === formatted.toLowerCase());
        if (found) {
          setSelectedTargetId(found.id);
          setActiveView('grid');
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectTarget = (id: string | null) => {
    setSelectedTargetId(id);
    if (id) {
      window.location.hash = id;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Category & search filtering logic
  const filteredTargets = useMemo(() => {
    return ODS10_TARGETS.filter((target) => {
      // 1. Category check
      let matchesCategory = true;
      if (selectedCategory === 'brasil_nacional') {
        matchesCategory = ['10.1', '10.2', '10.3', '10.7'].includes(target.id);
      } else if (selectedCategory === 'governanca_global') {
        matchesCategory = ['10.5', '10.6', '10.a', '10.b', '10.c'].includes(target.id);
      } else if (selectedCategory === 'trabalho_renda') {
        matchesCategory = ['10.1', '10.4'].includes(target.id);
      }

      // 2. Search query check
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inId = target.id.toLowerCase().includes(q);
        const inTitle = target.officialTitle.toLowerCase().includes(q);
        const inSolution = target.solutionName.toLowerCase().includes(q);
        const inSubtitle = target.subtitle.toLowerCase().includes(q);
        const inOfficialText = target.officialTargetText.toLowerCase().includes(q);
        const inIndicator = target.officialIndicator.toLowerCase().includes(q);
        const inPillars = target.pillars.some(p => p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q));
        const inNorms = target.normativeFramework.some(n => n.toLowerCase().includes(q));

        matchesSearch = inId || inTitle || inSolution || inSubtitle || inOfficialText || inIndicator || inPillars || inNorms;
      }

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const selectedTarget = useMemo(() => {
    if (!selectedTargetId) return null;
    return ODS10_TARGETS.find((t) => t.id === selectedTargetId) || null;
  }, [selectedTargetId]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased selection:bg-[#E11484] selection:text-white transition-colors duration-200">
      
      {/* 1. Header with Dark/Light Mode Toggle */}
      <Header
        targets={ODS10_TARGETS}
        selectedTargetId={selectedTargetId}
        onSelectTarget={handleSelectTarget}
        activeView={activeView}
        setActiveView={setActiveView}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* 2. Main Content Views */}
      <main className="transition-all">
        
        {/* VIEW 1: SELECTED TARGET DETAIL VIEW (CAMADA 2) */}
        {selectedTarget ? (
          <TargetDetailView
            target={selectedTarget}
            onBack={() => handleSelectTarget(null)}
            onSelectTarget={handleSelectTarget}
            allTargets={ODS10_TARGETS}
          />
        ) : activeView === 'kpis' ? (
          /* VIEW 2: CONSOLIDATED KPIS DASHBOARD */
          <DashboardKPIs
            targets={ODS10_TARGETS}
            onSelectTarget={handleSelectTarget}
          />
        ) : activeView === 'simulators' ? (
          /* VIEW 3: IMPACT SIMULATORS */
          <InteractiveSimulators
            onSelectTarget={handleSelectTarget}
          />
        ) : (
          /* VIEW 4: OVERVIEW & GRID (CAMADA 1) */
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-10">
            
            {/* Hero Section */}
            <HeroSection
              onExploreClick={() => {
                const el = document.getElementById('grid-propostas-section');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />

            {/* Filter Bar */}
            <div id="grid-propostas-section">
              <FilterBar
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                totalCount={ODS10_TARGETS.length}
                filteredCount={filteredTargets.length}
              />
            </div>

            {/* Grid of 10 Targets */}
            <section aria-label="Catálogo das 10 Metas do ODS 10">
              {filteredTargets.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredTargets.map((target, idx) => (
                    <TargetCard
                      key={target.id}
                      target={target}
                      index={idx}
                      onSelect={handleSelectTarget}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-700 p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
                  <div className="w-12 h-12 bg-[#E11484]/10 text-[#E11484] flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-black uppercase text-neutral-900 dark:text-white">
                    Nenhuma proposta encontrada
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 max-w-md mx-auto">
                    Não encontramos resultados para o termo &quot;{searchQuery}&quot; na categoria selecionada.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('todas');
                    }}
                    className="mt-4 px-4 py-2 bg-[#E11484] text-white text-xs font-black uppercase tracking-wider shadow-xs hover:opacity-90 transition cursor-pointer"
                  >
                    Ver todas as 10 metas
                  </button>
                </div>
              )}
            </section>

          </div>
        )}

      </main>

      {/* 3. Footer */}
      <Footer
        onSelectTarget={handleSelectTarget}
      />

    </div>
  );
}
