import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Globe, 
  ArrowRight, 
  Zap, 
  Layers, 
  Scale, 
  Sparkles, 
  CheckCircle2,
  Users,
  ShieldCheck
} from 'lucide-react';
import { ODSTarget } from '../types/ods';

interface InteractiveSimulatorsProps {
  onSelectTarget: (id: string) => void;
}

export const InteractiveSimulators: React.FC<InteractiveSimulatorsProps> = ({ onSelectTarget }) => {
  // --- SIMULATOR 1: REMITTANCES (META 10.c) ---
  const [remittanceAmount, setRemittanceAmount] = useState<number>(200);
  const [corridorRate, setCorridorRate] = useState<number>(6.8); // 6.8% global average
  const proposedRate = 2.8; // < 3% target

  const traditionalFee = (remittanceAmount * corridorRate) / 100;
  const proposedFee = (remittanceAmount * proposedRate) / 100;
  const savingsPerTransaction = traditionalFee - proposedFee;
  const receivedTraditional = remittanceAmount - traditionalFee;
  const receivedProposed = remittanceAmount - proposedFee;

  // --- SIMULATOR 2: INCOME GROWTH CRESCE 40+ (META 10.1) ---
  const [baseIncome, setBaseIncome] = useState<number>(850); // R$ per capita inicial da base
  const [nationalGrowth, setNationalGrowth] = useState<number>(2.2); // % ao ano média nacional
  const [advantagePP, setAdvantagePP] = useState<number>(1.5); // +1.5 p.p.

  const base40GrowthRate = nationalGrowth + advantagePP;
  // 5 years projection (2026 to 2030)
  const projectedNationalIncome = baseIncome * Math.pow(1 + nationalGrowth / 100, 5);
  const projectedBase40Income = baseIncome * Math.pow(1 + base40GrowthRate / 100, 5);
  const extraGain5Years = projectedBase40Income - projectedNationalIncome;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-neutral-900 text-white p-6 sm:p-8 border-l-8 border-[#E11484] shadow-[6px_6px_0px_0px_rgba(225,20,132,0.2)]">
        <div className="inline-flex items-center gap-2 bg-[#E11484] text-white text-xs font-black px-3.5 py-1 uppercase tracking-[0.15em] mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
          <Calculator className="w-3.5 h-3.5" />
          Modelagem Interativa de Impacto
        </div>
        <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
          Simuladores e Calculadoras das Soluções ODS 10
        </h1>
        <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-3xl leading-relaxed">
          Teste os efeitos concretos das propostas técnicas nas metas de redução das tarifas de remessas internacionais, no crescimento da renda dos 40% da base e no reequilíbrio multilateral.
        </p>
      </div>

      {/* SIMULATOR 1: REMESSAS META 10.c */}
      <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(225,20,132,0.1)]">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#E11484] text-white text-xs font-black px-2.5 py-0.5 uppercase tracking-wider">
                Meta 10.c
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Plano Global de Interconexão & Tarifas Justas
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase text-neutral-900 dark:text-white mt-1">
              Calculadora de Economia Direta em Remessas de Migrantes
            </h2>
          </div>
          <button
            onClick={() => onSelectTarget('10.c')}
            className="text-xs font-black uppercase tracking-wider text-[#E11484] hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 cursor-pointer border-b border-[#E11484]"
          >
            <span>Ver proposta completa da Meta 10.c</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                Valor Enviado pelo Migrante (USD):
              </label>
              <div className="flex items-center gap-2">
                {[100, 200, 500, 1000].map((val) => (
                  <button
                    key={val}
                    onClick={() => setRemittanceAmount(val)}
                    className={`flex-1 py-2 text-xs font-bold uppercase transition border ${
                      remittanceAmount === val
                        ? 'bg-[#E11484] text-white border-[#E11484] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]'
                        : 'bg-[#FAF9F6] dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    ${val}
                  </button>
                ))}
              </div>
              <input
                type="range"
                min="50"
                max="2000"
                step="50"
                value={remittanceAmount}
                onChange={(e) => setRemittanceAmount(Number(e.target.value))}
                className="w-full mt-3 accent-[#E11484]"
              />
              <div className="text-right text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300">
                Valor selecionado: <strong>US$ {remittanceAmount.toFixed(2)}</strong>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                Corredor de Remessa / Taxa Atual Tradicional:
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { label: 'Média Global (6.8%)', rate: 6.8 },
                  { label: 'América Latina (5.8%)', rate: 5.8 },
                  { label: 'África Subsaariana (11.5%)', rate: 11.5 },
                  { label: 'Pacífico Insular (10.2%)', rate: 10.2 },
                ].map((item) => (
                  <button
                    key={item.rate}
                    onClick={() => setCorridorRate(item.rate)}
                    className={`p-2.5 text-left border transition font-bold uppercase text-[11px] ${
                      corridorRate === item.rate
                        ? 'bg-[#E11484]/15 border-[#E11484] text-[#E11484]'
                        : 'bg-[#FAF9F6] dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-[#FAF9F6] dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300">
              <span className="font-black uppercase tracking-wider block text-neutral-900 dark:text-white mb-1">
                Meta Oficial ODS 10.c:
              </span>
              Teto global máximo ponderado de <strong>&lt; 3,0%</strong> e eliminação completa de corredores acima de <strong>5,0%</strong> até 2030.
            </div>
          </div>

          {/* Results Comparison Grid */}
          <div className="lg:col-span-7 bg-[#FAF9F6] dark:bg-neutral-950 p-6 border-2 border-neutral-200 dark:border-neutral-800 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(225,20,132,0.1)]">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-700 dark:text-neutral-300 mb-4 border-l-2 border-[#E11484] pl-2">
                Comparativo por Transferência (US$ {remittanceAmount})
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Traditional Model */}
                <div className="bg-white dark:bg-neutral-900 p-4 border-l-4 border-red-500 border-t border-r border-b border-neutral-200 dark:border-neutral-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center justify-between text-xs font-black uppercase text-red-600 dark:text-red-400 mb-1">
                    <span>Modelo Tradicional MTO</span>
                    <span>{corridorRate}%</span>
                  </div>
                  <div className="text-xl font-black text-neutral-900 dark:text-white font-mono">
                    Tarifa: US$ {traditionalFee.toFixed(2)}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                    A família recebe: <strong>US$ {receivedTraditional.toFixed(2)}</strong>
                  </div>
                </div>

                {/* Proposed ODS 10.c Model */}
                <div className="bg-white dark:bg-neutral-900 p-4 border-l-4 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 shadow-[2px_2px_0px_0px_rgba(225,20,132,0.15)]">
                  <div className="flex items-center justify-between text-xs font-black uppercase text-[#E11484] mb-1">
                    <span>Modelo Proposto ODS 10.c</span>
                    <span>&lt; 2.8%</span>
                  </div>
                  <div className="text-xl font-black text-[#E11484] font-mono">
                    Tarifa: US$ {proposedFee.toFixed(2)}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                    A família recebe: <strong>US$ {receivedProposed.toFixed(2)}</strong>
                  </div>
                </div>
              </div>

              {/* Direct Savings Callout */}
              <div className="mt-6 p-4 bg-white dark:bg-neutral-900 border-l-8 border-emerald-500 border-t border-r border-b border-neutral-200 dark:border-neutral-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-2 text-xs font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  Economia Preservada no Bolso da Família
                </div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1 font-mono">
                  + US$ {savingsPerTransaction.toFixed(2)} por envio
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 mt-1 leading-relaxed">
                  Em escala planetária, essa redução tarifária injetará mais de <strong>US$ 35 bilhões ao ano</strong> diretamente na alimentação, saúde e educação de famílias vulneráveis no Sul Global.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 font-mono text-[11px]">
              <span>TECNOLOGIA: PIX, FEDNOW, SEPA, UPI & CBDCS</span>
              <span>LIQUIDAÇÃO: 24/7 EM TEMPO REAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* SIMULATOR 2: CRESCE 40+ (META 10.1) */}
      <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(225,20,132,0.1)]">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#E11484] text-white text-xs font-black px-2.5 py-0.5 uppercase tracking-wider">
                Meta 10.1
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Programa Cresce 40+ (Brasil até 2030)
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase text-neutral-900 dark:text-white mt-1">
              Simulador de Convergência da Renda dos 40% da Base
            </h2>
          </div>
          <button
            onClick={() => onSelectTarget('10.1')}
            className="text-xs font-black uppercase tracking-wider text-[#E11484] hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 cursor-pointer border-b border-[#E11484]"
          >
            <span>Ver proposta completa da Meta 10.1</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1">
                Rendimento Domiciliar Per Capita Inicial da Base (R$):
              </label>
              <input
                type="number"
                value={baseIncome}
                onChange={(e) => setBaseIncome(Number(e.target.value))}
                className="w-full text-sm font-bold p-2.5 bg-[#FAF9F6] dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1">
                Taxa de Crescimento Anual da Média Nacional: {nationalGrowth}%
              </label>
              <input
                type="range"
                min="0.5"
                max="5.0"
                step="0.1"
                value={nationalGrowth}
                onChange={(e) => setNationalGrowth(Number(e.target.value))}
                className="w-full accent-[#E11484]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1">
                Vantagem Sustentada de Crescimento da Base (Cresce 40+): +{advantagePP} p.p./ano
              </label>
              <input
                type="range"
                min="0.5"
                max="3.0"
                step="0.1"
                value={advantagePP}
                onChange={(e) => setAdvantagePP(Number(e.target.value))}
                className="w-full accent-[#E11484]"
              />
              <span className="text-xs text-[#E11484] font-black uppercase tracking-wide block mt-1">
                Taxa de crescimento da base: {base40GrowthRate.toFixed(1)}% ao ano
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FAF9F6] dark:bg-neutral-950 p-6 border-2 border-neutral-200 dark:border-neutral-800 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(225,20,132,0.1)]">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-700 dark:text-neutral-300 mb-3 border-l-2 border-[#E11484] pl-2">
                Projeção Cumulativa em 5 Anos (2026–2030)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-neutral-900 border-l-4 border-neutral-400 border-t border-r border-b border-neutral-200 dark:border-neutral-800">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 block font-bold uppercase">
                    Cenário Inercial (Média Geral)
                  </span>
                  <div className="text-xl font-black text-neutral-900 dark:text-white mt-1 font-mono">
                    R$ {projectedNationalIncome.toFixed(2)}
                  </div>
                  <span className="text-[11px] text-neutral-500 font-mono block mt-1">
                    Crescimento a {nationalGrowth}% a.a.
                  </span>
                </div>

                <div className="p-4 bg-white dark:bg-neutral-900 border-l-4 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 shadow-[2px_2px_0px_0px_rgba(225,20,132,0.12)]">
                  <span className="text-xs text-[#E11484] block font-black uppercase">
                    Cenário com Cresce 40+
                  </span>
                  <div className="text-xl font-black text-[#E11484] mt-1 font-mono">
                    R$ {projectedBase40Income.toFixed(2)}
                  </div>
                  <span className="text-[11px] text-[#E11484] font-mono block mt-1 font-bold">
                    Crescimento a {base40GrowthRate.toFixed(1)}% a.a.
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300">
                Ganho adicional acumulado per capita para a família: <strong className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">+ R$ {extraGain5Years.toFixed(2)}/mês</strong> por morador em 2030, acelerando a redução das disparidades regionais e de raça/gênero.
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
