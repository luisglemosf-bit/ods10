import React, { useState } from 'react';
import { 
  X, 
  Github, 
  Copy, 
  CheckCircle2, 
  Terminal, 
  Globe, 
  ExternalLink, 
  Sparkles,
  Layers,
  Code2,
  FileCode
} from 'lucide-react';

interface GitHubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubDeployModal: React.FC<GitHubDeployModalProps> = ({ isOpen, onClose }) => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const steps = [
    {
      title: '1. Criar repositório no GitHub',
      description: 'Acesse o GitHub (github.com), crie um novo repositório público (ex: "ods10-solucoes-onu") sem inicializar com README.',
      code: '# Não precisa de comando, faça pelo site do GitHub'
    },
    {
      title: '2. Inicializar o Git e vincular ao repositório',
      description: 'No terminal da sua máquina (dentro da pasta do projeto baixado):',
      code: `git init
git add .
git commit -m "feat: Portal de Soluções ODS 10 da ONU"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/ods10-solucoes-onu.git
git push -u origin main`
    },
    {
      title: '3. Ativar o GitHub Pages (Automático via Vite/Actions)',
      description: 'No repositório do GitHub, vá em Settings > Pages > Build and deployment > Source: selecione "GitHub Actions" ou utilize a branch "gh-pages". Para build direto:',
      code: `npm run build
npx gh-pages -d dist`
    },
    {
      title: '4. (Alternativa) Deploy Instantâneo na Vercel ou Netlify',
      description: 'Se preferir um link público em 1 clique com HTTPS e CDN mundial gratuito:',
      code: `npx vercel --prod
# Ou importe o repositório diretamente no painel da vercel.com`
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF9F6] dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-700 shadow-[8px_8px_0px_0px_rgba(225,20,132,0.3)] max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-neutral-900 text-white p-6 border-b-4 border-[#E11484]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E11484] text-white flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(255,255,255,0.4)]">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight">
                  Como Publicar seu Site no GitHub
                </h2>
                <p className="text-xs text-[#E11484] font-mono mt-0.5 uppercase tracking-wide">
                  Guia de Implantação e Publicação Gratuita
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white border border-neutral-700 hover:border-white transition cursor-pointer"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          
          <div className="p-4 bg-white dark:bg-neutral-950 border-l-8 border-[#E11484] border-t border-r border-b border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 leading-relaxed shadow-[3px_3px_0px_0px_rgba(225,20,132,0.1)]">
            <span className="font-black uppercase tracking-wider block text-[#E11484] mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Projeto 100% Pronto para Produção (SPA Vite + React + Tailwind)
            </span>
            Todo o código fonte, estilos, tipos e dados estruturados estão organizados e prontos para compilar via <code className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 font-mono text-[11px]">npm run build</code> e rodar estaticamente em qualquer servidor web ou GitHub Pages.
          </div>

          {/* Step Cards */}
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-neutral-950 p-4 border-l-4 border-neutral-800 dark:border-neutral-300 border-t border-r border-b border-neutral-200 dark:border-neutral-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-black uppercase text-neutral-900 dark:text-white text-xs sm:text-sm">
                    {step.title}
                  </h3>
                  {step.code && !step.code.startsWith('# Não precisa') && (
                    <button
                      onClick={() => copyToClipboard(step.code, idx)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#E11484] hover:underline cursor-pointer"
                    >
                      {copiedStep === idx ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Comandos</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                  {step.description}
                </p>

                {step.code && (
                  <pre className="p-3 bg-neutral-950 text-neutral-200 font-mono text-xs overflow-x-auto border-l-2 border-[#E11484]">
                    <code>{step.code}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-neutral-100 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs">
          <span className="text-neutral-500 dark:text-neutral-400 font-mono text-[11px]">
            Você pode exportar o arquivo ZIP pelo menu do AI Studio.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#E11484] text-white font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:opacity-90 transition cursor-pointer"
          >
            Entendido, fechar
          </button>
        </div>

      </div>
    </div>
  );
};
