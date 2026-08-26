import React from 'react';
import { Globe, Heart, BookOpen, ExternalLink, ShieldCheck, Scale } from 'lucide-react';

interface FooterProps {
  onSelectTarget: (id: string) => void;
  onOpenDeployModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTarget, onOpenDeployModal }) => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t-4 border-[#E11484] pt-12 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-800">
          
          {/* Col 1: About Portal */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E11484] text-white flex items-center justify-center font-black text-lg shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)]">
                10
              </div>
              <div>
                <span className="font-black text-white text-base tracking-tight uppercase">
                  Portal ODS 10 • Redução das Desigualdades
                </span>
                <span className="block text-xs text-[#E11484] font-bold uppercase tracking-wider">
                  Estratégias Técnicas e Propostas Governamentais até 2030
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-lg">
              Plataforma dedicada a compilar, sistematizar e apresentar propostas técnicas de alto impacto para cumprimento rigoroso das metas 10.1 a 10.c dos Objetivos de Desenvolvimento Sustentável da ONU no Brasil e no cenário multilateral.
            </p>
            <div className="flex items-center gap-3 text-xs text-neutral-400 pt-1">
              <span className="flex items-center gap-1.5 font-mono text-[11px]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Fontes Oficiais: IBGE, IPEA, ONU, OMC, BIS & Banco Mundial
              </span>
            </div>
          </div>

          {/* Col 2: Quick Jump */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-3 border-l-2 border-[#E11484] pl-2">
              Metas Nacionais
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li>
                <button onClick={() => onSelectTarget('10.1')} className="hover:text-[#E11484] transition cursor-pointer text-left">
                  Meta 10.1 — Programa Cresce 40+
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTarget('10.2')} className="hover:text-[#E11484] transition cursor-pointer text-left">
                  Meta 10.2 — Inclusão Universal
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTarget('10.3')} className="hover:text-[#E11484] transition cursor-pointer text-left">
                  Meta 10.3 — Equidade e Justiça Fiscal
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTarget('10.4')} className="hover:text-[#E11484] transition cursor-pointer text-left">
                  Meta 10.4 — Pacto Redistributivo
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTarget('10.5')} className="hover:text-[#E11484] transition cursor-pointer text-left">
                  Meta 10.5 — Framework FISP
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Global & Multi */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-3 border-l-2 border-[#E11484] pl-2">
              Metas Globais
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li>
                <button onClick={() => onSelectTarget('10.6')} className="hover:text-[#E11484] transition cursor-pointer text-left">
                  Meta 10.6 — Framework VOICE
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTarget('10.7')} className="hover:text-[#E11484] transition cursor-pointer text-left">
                  Meta 10.7 — Projeto Rede Acolher
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTarget('10.a')} className="hover:text-[#E11484] transition cursor-pointer text-left">
                  Meta 10.a — Reforma SDT na OMC
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTarget('10.b')} className="hover:text-[#E11484] transition cursor-pointer text-left">
                  Meta 10.b — Financiamento Concessional
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTarget('10.c')} className="hover:text-[#E11484] transition cursor-pointer text-left">
                  Meta 10.c — Tarifas Justas em Remessas
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            AGENDA 2030 • ORGANIZAÇÃO DAS NAÇÕES UNIDAS
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDeployModal}
              className="text-neutral-400 hover:text-white transition uppercase font-bold tracking-wider cursor-pointer"
            >
              Publicar no GitHub Pages
            </button>
            <span>•</span>
            <span className="uppercase">Conteúdo Aberto</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
