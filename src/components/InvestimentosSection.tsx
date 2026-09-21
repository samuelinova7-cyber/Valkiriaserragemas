import React, { useState } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Gem, 
  Coins, 
  ArrowUpRight, 
  Lock, 
  CheckCircle2, 
  Layers, 
  Eye,
  FileText,
  BarChart3
} from 'lucide-react';
import { InvestmentLot, JewelryItem } from '../types';
import { INVESTMENT_LOTS, ASSET_IMAGES } from '../data/jewelryData';

interface InvestimentosProps {
  onOpenConcierge: (interest?: string) => void;
  onSelect3DModel?: (lot: InvestmentLot) => void;
  onNavigateToInvestorPitch?: () => void;
}

export const InvestimentosSection: React.FC<InvestimentosProps> = ({ 
  onOpenConcierge,
  onSelect3DModel,
  onNavigateToInvestorPitch
}) => {
  const [selectedLot, setSelectedLot] = useState<InvestmentLot>(INVESTMENT_LOTS[0]);

  return (
    <section className="py-24 bg-black border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Banner with Macro Investment Assets Image */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0a0a0f] mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14A44D]/20 border border-[#14A44D]/40 text-[#14A44D] text-xs font-semibold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                Mercado Premium & Proteção Patrimonial
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury text-white tracking-wide font-bold leading-tight">
                Esmeraldas e Ouro 24k: Ativos Físicos Seguros & Precisos
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans-luxury font-light">
                Nosso modelo de negócio foca na aquisição de matéria-prima de altíssima qualidade (gemas brutas e lapidadas) na origem, eliminando intermediários e garantindo altas margens de lucro e controle de segurança.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed font-sans-luxury">
                Ao investir em gemas, você diversifica seu patrimônio com um ativo físico, tangível e com demanda global crescente, protegido contra a inflação e volatilidade do mercado financeiro tradicional.
              </p>

              {/* 3 Differentials Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-[#14A44D] mb-1.5" />
                  <h4 className="text-xs font-semibold text-white">Origem Rastreada</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Certificação mineral direta da mina</p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10">
                  <Layers className="w-5 h-5 text-[#B76E79] mb-1.5" />
                  <h4 className="text-xs font-semibold text-white">Controle Técnico 360°</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Inspeção da mina à lapidação</p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10">
                  <Gem className="w-5 h-5 text-amber-400 mb-1.5" />
                  <h4 className="text-xs font-semibold text-white">Certificados GIA/IGI</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Liquidez e aceitação mundial</p>
                </div>
              </div>

              {/* Header Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConcierge('Consultoria de Investimento com Gemóloga (Confidencial)')}
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#B76E79] to-[#8f4752] hover:from-[#c58690] hover:to-[#B76E79] text-white shadow-xl flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Lock className="w-4 h-4" />
                  <span>Agendar Consultoria de Investimento (Confidencial)</span>
                </button>

                {onNavigateToInvestorPitch && (
                  <button
                    onClick={onNavigateToInvestorPitch}
                    className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/15 flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <BarChart3 className="w-4 h-4 text-[#14A44D]" />
                    <span>Ver Proposta da Rodada R$ 3,2M</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Side Image in Banner */}
            <div className="lg:col-span-5 h-full min-h-[380px] lg:min-h-[560px] relative">
              <img
                src={ASSET_IMAGES.investment}
                alt="Barras de Ouro 24k e Lotes de Esmeraldas Certificadas para Investimento"
                className="w-full h-full object-cover object-center absolute inset-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-transparent to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent lg:hidden" />
            </div>

          </div>
        </div>

        {/* Available Investment Lots Showcase */}
        <div className="mb-12">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold text-[#B76E79] uppercase tracking-wider">
                Portfólio Disponível para Alocação
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white mt-1">
                Lotes de Alta Rentabilidade & Reserva Tangível
              </h3>
            </div>
            <p className="text-xs text-zinc-400 max-w-md">
              Todos os lotes contam com laudo gemológico internacional, custódia assegurada em cofre blindado em Balneário Camboriú e opção de entrega via concierge privado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INVESTMENT_LOTS.map((lot) => {
              const isSelected = selectedLot.id === lot.id;
              return (
                <div
                  key={lot.id}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all bg-[#0a0a0e] relative overflow-hidden ${
                    isSelected
                      ? 'border-[#B76E79] shadow-2xl shadow-[#B76E79]/10'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#14A44D]/15 text-[#14A44D] border border-[#14A44D]/30">
                      {lot.badgeText}
                    </span>
                    <span className="text-xs text-[#B76E79] font-mono">
                      {lot.totalCarats} ct
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-serif-luxury text-white mb-2 leading-snug">
                      {lot.title}
                    </h4>
                    <p className="text-xs text-zinc-400 font-sans-luxury leading-relaxed mb-4">
                      {lot.description}
                    </p>

                    {/* Price & ROI */}
                    <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1.5 mb-4">
                      <div className="flex justify-between items-baseline">
                        <span className="text-[11px] text-zinc-400">Valor do Lote:</span>
                        <span className="text-lg font-serif-luxury text-white font-semibold">
                          {lot.priceBrl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                      </div>
                      <div className="flex justify-between items-baseline text-xs">
                        <span className="text-zinc-400">Valor Atacado Est.:</span>
                        <span className="text-[#14A44D] font-medium">
                          {lot.currentWholesaleEst.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                      </div>
                      <div className="flex justify-between items-baseline text-xs">
                        <span className="text-zinc-400">Valorização Proj.:</span>
                        <span className="text-[#B76E79] font-medium">{lot.projectedAnnualAppreciation}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-6 text-[11px] text-zinc-300">
                      {lot.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#14A44D] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lot Action CTAs */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <button
                      onClick={() => onOpenConcierge(`Reserva de Lote: ${lot.title}`)}
                      className="w-full py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-[#B76E79] hover:bg-[#c58690] text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Solicitar Aquisição do Lote</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
