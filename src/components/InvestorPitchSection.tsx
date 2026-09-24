import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  PieChart as PieChartIcon, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight, 
  Download, 
  FileText, 
  Lock, 
  Sparkles,
  Building2,
  Percent,
  Briefcase,
  Award,
  Globe2,
  Layers,
  HelpCircle,
  Gem,
  Coins,
  Scale,
  Users,
  GraduationCap
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Legend 
} from 'recharts';
import { 
  FINANCIAL_PLAN, 
  REVENUE_PROJECTION_CHART, 
  USE_OF_FUNDS_BREAKDOWN, 
  INVESTMENT_TIERS,
  INTELLECTUAL_CAPITAL_DETAILS,
  CORPORATE_EQUITY_STRUCTURE
} from '../data/financialData';
import { ASSET_IMAGES } from '../data/jewelryData';

interface InvestorPitchProps {
  onOpenConcierge: (interest?: string) => void;
}

export const InvestorPitchSection: React.FC<InvestorPitchProps> = ({ onOpenConcierge }) => {
  const [investorTicket, setInvestorTicket] = useState<number>(3200000);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Proportional metrics calculated on selected ticket based on 55% total investor equity
  const totalRound = FINANCIAL_PLAN.totalCapExOpExTarget; // 3.2M
  const equitySharePercent = (investorTicket / totalRound) * FINANCIAL_PLAN.equityOfferedPercent; // based on 55%
  const monthlyDividendShare = FINANCIAL_PLAN.avgMonthlyNetProfit * (equitySharePercent / 100);
  const estimatedPaybackMonths = Math.round(investorTicket / (monthlyDividendShare || 1));
  const projected3YearProfit = (monthlyDividendShare * 36) - investorTicket;
  const projected3YearROI = Math.round((projected3YearProfit / investorTicket) * 100);

  const handleDownloadDeck = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      const printContent = `
================================================================================
VALKIRIA SERRA JOIAS — MEMORANDO CONFIDENCIAL DE INVESTIMENTO & EQUITY
Sede: Balneário Camboriú, Santa Catarina — Brasil
Chancela Técnica: Valkiria Serra, European Gemmologist (UB Barcelona & FEEG)
================================================================================

1. ESTRUTURA DE DIVISÃO SOCIETÁRIA (55% INVESTIDOR / 45% VALKÍRIA SERRA):
   -----------------------------------------------------------------------------
   INVESTIDOR (55% EQUITY):
   - Integralização do capital social no valor total de R$ 3.200.000,00.
   - Garantia dos recursos para instalação do ateliê 360°, estoque físico, segurança e operação.
   
   VALKÍRIA SERRA (45% EQUITY):
   - Capital Intelectual: Gemóloga Internacional formada pela UB Barcelona (Universitat de Barcelona) e titulada pela FEEG (Federation for European Education in Gemmology).
   - Especialização exclusiva em esmeraldas (90% provenientes da Bahia - Carnaíba e Pindobaçu), diamantes e turmalinas nobres.
   - Direção técnica 360° e curadoria rigorosa de todas as gemas na boca da mina.
   - Presença internacional construída (Dubai, Israel e Europa), marca e credibilidade de décadas.
   - Gestão operacional integral e representação oficial da marca.

2. REAJUSTES ESTRATÉGICOS DE PROTEÇÃO AO INVESTIMENTO:
   - PONTO 1: Capital de Giro e Reserva Operacional de R$ 320.000,00 (10% da rodada) garantindo salários, tributos e reposição sem travar o caixa.
   - PONTO 2: Plataforma Digital & Marketing otimizados em R$ 200.000,00, alavancando relacionamentos internacionais já consolidados.
   - PONTO 3: Composição do Lastro Físico (R$ 1.500.000,00) focado em Joias Prontas de Alta Gama, Esmeraldas Brasileiras (90% Bahia - Carnaíba e Pindobaçu), Diamantes Brasileiros, Turmalinas Nobres e Cangas/Minérios para Exportação.
   - PONTO 4: Formalização do Capital Intelectual Internacional de Valkíria Serra com 45% de participação societária.

3. MODELAGEM FINANCEIRA & EXPANSÃO:
   - Faturamento Projetado Inicial (Fase 1): R$ 320.000,00 / mês (Ticket R$ 8.000 x 40 vendas)
   - Faturamento Após 6-12 Meses (Fase 2): R$ 720.000,00 / mês (Ticket R$ 12.000 x 60 vendas)
   - Cenário com Exportação Internacional: R$ 1.000.000,00 a R$ 1.500.000,00 / mês (Dubai, Israel, Europa, EUA)
   - Custos Fixos: R$ 90.000,00 / mês | Despesas Operacionais: R$ 90.000,00 / mês
   - Custo de Estoque / Giro Recorrente: R$ 300.000,00 / mês
   - Rodada de Aporte Total: R$ 3.200.000,00
   - Lucro Líquido Médio Projetado: R$ 500.000,00 / mês
   - Payback Estimado: 18 a 30 meses

4. DESTINAÇÃO DE RECURSOS (R$ 3.200.000,00):
   - Lastro Físico (Joias Prontas, 90% Esmeraldas da Bahia, Diamantes Brasileiros, Cangas & Minérios): R$ 1.500.000,00 (47%)
   - Ateliê de Joias Prontas, Lapidação e Cravação 360° em Balneário Camboriú: R$ 680.000,00 (21%)
   - Segurança, Blindagem, Cofres e Sala VIP Privativa: R$ 500.000,00 (16%)
   - Capital de Giro & Reserva de Liquidez Protegida: R$ 320.000,00 (10%)
   - Plataforma Digital 3D, Conteúdo Editorial & Lançamento: R$ 200.000,00 (6%)

Contato Confidencial: concierge@valkiriaserra.com.br | Balneário Camboriú, SC
================================================================================
      `;
      const blob = new Blob([printContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'VS-Joias-Memorando-Investimento-BC.txt';
      link.click();
      URL.revokeObjectURL(url);
    }, 600);
  };

  return (
    <section className="py-24 bg-[#050508] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Executive Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14A44D]/15 border border-[#14A44D]/30 text-[#14A44D] text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Oportunidade Privada de Equity & Expansão • Balneário Camboriú
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white tracking-wide font-bold leading-tight">
            Proposta de Investimento: Joalheria de Alto Luxo & Gemologia
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-sans-luxury font-light leading-relaxed">
            Uma tese de investimento tangível e de altíssima rentabilidade ancorada no metro quadrado mais valorizado do Brasil, combinando aquisição direta na mina (90% Bahia), ateliê próprio 360°, titulação europeia FEEG / UB Barcelona e exportação global.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300">
              Integralização do Capital: <strong className="text-white">R$ 3.200.000,00 (55% Equity)</strong>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#14A44D]/40 text-zinc-300">
              Lucro Líquido Médio: <strong className="text-[#14A44D]">R$ 500.000,00 / mês</strong>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#38BDF8]/40 text-zinc-300">
              Reserva Operacional: <strong className="text-[#38BDF8]">R$ 320.000,00 Protegidos</strong>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#B76E79]/40 text-zinc-300">
              Payback Estimado: <strong className="text-[#B76E79]">18 a 30 meses</strong>
            </span>
          </div>
        </div>

        {/* Highlighted Corporate Shareholding Division Box (55% Investidor / 45% Valkíria Serra) */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0e0e18] via-[#0b0c12] to-[#140c12] border border-[#B76E79]/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B76E79]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Scale className="w-3.5 h-3.5" />
                Governança & Acordo de Sócios
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white font-bold">
                Divisão de Participação Societária (Equity)
              </h3>
            </div>
            <span className="text-xs px-3.5 py-1.5 rounded-full bg-black/80 border border-white/20 text-zinc-300 font-mono">
              CapTable Fechado: 100%
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* 55% Investidor Box */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-black/70 border border-[#38BDF8]/40 flex flex-col justify-between relative hover:border-[#38BDF8] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-[#38BDF8] flex items-center justify-center font-bold text-lg">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-400 block uppercase tracking-wider">Aporte Financeiro</span>
                      <h4 className="text-xl font-serif-luxury text-white font-bold">Sócio Investidor</h4>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-serif-luxury text-[#38BDF8] font-bold">55%</span>
                    <span className="text-[10px] text-zinc-400 block">Participação Societária</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-xs text-[#38BDF8] font-semibold mb-4">
                  Integralização de R$ 3.200.000,00 no Capital Social
                </div>

                <ul className="space-y-3 text-xs text-zinc-300">
                  {CORPORATE_EQUITY_STRUCTURE.investorRole.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Direito a Dividendos:</span>
                <strong className="text-white">55% do Lucro Líquido Mensal</strong>
              </div>
            </div>

            {/* 45% Valkíria Serra Box */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-black/70 border border-[#B76E79]/50 flex flex-col justify-between relative hover:border-[#B76E79] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#B76E79]/50 shadow-md relative shrink-0">
                      <img
                        src={ASSET_IMAGES.valkiria}
                        alt="Valkíria Serra"
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-400 block uppercase tracking-wider">Capital Intelectual & Gestão</span>
                      <h4 className="text-xl font-serif-luxury text-white font-bold">Valkíria Serra</h4>
                      <span className="text-[11px] text-[#B76E79]">European Gemmologist (UB Barcelona & FEEG)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-serif-luxury text-[#B76E79] font-bold">45%</span>
                    <span className="text-[10px] text-zinc-400 block">Participação Societária</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#B76E79]/10 border border-[#B76E79]/20 text-xs text-[#B76E79] font-semibold mb-4">
                  Capital Intelectual Internacional & Especialidade em Esmeraldas (90% Bahia)
                </div>

                <ul className="space-y-3 text-xs text-zinc-300">
                  {CORPORATE_EQUITY_STRUCTURE.valkiriaRole.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B76E79] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Atribuição:</span>
                <strong className="text-white">Direção Técnica 360° & Gestão Operacional</strong>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Strategic Pillars of Capital Protection */}
        <div className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-[#0c0c14] via-[#09090f] to-[#120a10] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#B76E79] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#14A44D]" />
                Governança & Equilíbrio Operacional do Negócio
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white mt-1">
                4 Pilares Estratégicos de Proteção ao Investimento
              </h3>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-[#14A44D]/20 text-[#14A44D] border border-[#14A44D]/40 font-medium">
              Ajustes Estruturais Validados
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pilar 1: Capital de Giro Protegido */}
            <div className="p-5 rounded-2xl bg-black/60 border border-[#38BDF8]/30 relative flex flex-col justify-between hover:border-[#38BDF8]/60 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-md bg-[#38BDF8]/20 text-[#38BDF8]">
                    Pilar 01
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono">10% da Rodada</span>
                </div>
                <h4 className="text-base font-serif-luxury text-white font-semibold mb-2">
                  Capital de Giro Reforçado (R$ 320k)
                </h4>
                <p className="text-xs text-zinc-300 font-sans-luxury leading-relaxed font-light">
                  Elevação da reserva de liquidez de R$ 200k para <strong>R$ 320.000,00</strong>. Protege a folha salarial, tributos, reposição de pedras preciosas e imprevistos nos primeiros meses, garantindo tranquilidade absoluta aos sócios enquanto consolida o faturamento.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#38BDF8]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Zero risco de travar o caixa inicial</span>
              </div>
            </div>

            {/* Pilar 2: Digital & Marketing Otimizados */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 relative flex flex-col justify-between hover:border-[#B76E79]/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-md bg-[#B76E79]/20 text-[#B76E79]">
                    Pilar 02
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono">R$ 200k Alocados</span>
                </div>
                <h4 className="text-base font-serif-luxury text-white font-semibold mb-2">
                  Marketing & Digital Realistas
                </h4>
                <p className="text-xs text-zinc-300 font-sans-luxury leading-relaxed font-light">
                  Ajuste do orçamento digital de R$ 400k para <strong>R$ 200.000,00</strong>. Valkiria Serra já construiu presença sólida e respeitada no comércio de gemas em <strong>Dubai, Israel e Europa</strong> por décadas, reduzindo drasticamente o Custo de Aquisição de Clientes (CAC).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#B76E79]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Economia realocada no caixa de giro</span>
              </div>
            </div>

            {/* Pilar 3: Especialidade Esmeraldas (90% Bahia) / Diamantes Brasileiros / Cangas & Minérios */}
            <div className="p-5 rounded-2xl bg-black/60 border border-[#14A44D]/30 relative flex flex-col justify-between hover:border-[#14A44D]/60 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-md bg-[#14A44D]/20 text-[#14A44D]">
                    Pilar 03
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono">R$ 1,5M Lastro</span>
                </div>
                <h4 className="text-base font-serif-luxury text-white font-semibold mb-2">
                  Joias Prontas & Gemas Brasileiras
                </h4>
                <p className="text-xs text-zinc-300 font-sans-luxury leading-relaxed font-light">
                  Nossa identidade é especializada em <strong>Joias Prontas de Alta Gama, Esmeraldas (90% Bahia - Carnaíba e Pindobaçu), Diamantes Brasileiros, Turmalinas Nobres e Cangas/Minérios para Exportação</strong>, garantindo altíssima densidade de valor e liquidez internacional.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#14A44D]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Margens brutas superiores a 60%</span>
              </div>
            </div>

            {/* Pilar 4: Capital Intelectual Internacional Formalizado */}
            <div className="p-5 rounded-2xl bg-black/60 border border-amber-400/30 relative flex flex-col justify-between hover:border-amber-400/60 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-md bg-amber-400/20 text-amber-400">
                    Pilar 04
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono">45% Equity</span>
                </div>
                <h4 className="text-base font-serif-luxury text-white font-semibold mb-2">
                  Capital Intelectual UB & FEEG
                </h4>
                <p className="text-xs text-zinc-300 font-sans-luxury leading-relaxed font-light">
                  A formação internacional de <strong>Valkiria Serra (UB Barcelona / FEEG)</strong> — como uma das poucas gemólogas com especialização europeia e foco estrito em esmeraldas e diamantes — consta formalmente com <strong>45% de participação societária</strong>.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-amber-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Diferencial técnico que nenhum dinheiro compra</span>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Key Financial Pillars from Operational Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          {/* 1. Faturamento Inicial */}
          <div className="p-6 rounded-2xl bg-[#0b0b10] border border-white/10 relative overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-[#B76E79]/20 text-[#B76E79] flex items-center justify-center font-bold text-xs mb-4">
              01
            </div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">
              Faturamento Projetado (Início)
            </span>
            <div className="text-2xl font-serif-luxury text-white mb-2">
              R$ 320.000,00 <span className="text-xs text-zinc-400 font-sans-luxury font-normal">/ mês</span>
            </div>
            <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-xs text-zinc-300 space-y-1">
              <div className="flex justify-between">
                <span>Ticket Médio:</span>
                <strong className="text-white">R$ 8.000,00</strong>
              </div>
              <div className="flex justify-between">
                <span>Volume de Vendas:</span>
                <strong className="text-white">40 vendas / mês</strong>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 mt-3">
              Foco inicial no mercado ultra-premium de Balneário Camboriú e Santa Catarina.
            </p>
          </div>

          {/* 2. Fase 6 a 12 Meses */}
          <div className="p-6 rounded-2xl bg-[#0b0b10] border border-white/10 relative overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-[#14A44D]/20 text-[#14A44D] flex items-center justify-center font-bold text-xs mb-4">
              02
            </div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">
              Após 6 a 12 Meses (Escala)
            </span>
            <div className="text-2xl font-serif-luxury text-white mb-2">
              R$ 720.000,00 <span className="text-xs text-zinc-400 font-sans-luxury font-normal">/ mês</span>
            </div>
            <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-xs text-zinc-300 space-y-1">
              <div className="flex justify-between">
                <span>Ticket Médio:</span>
                <strong className="text-white">R$ 12.000,00</strong>
              </div>
              <div className="flex justify-between">
                <span>Volume de Vendas:</span>
                <strong className="text-white">60 vendas / mês</strong>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 mt-3">
              Maturidade da marca, peças de maior quilatagem e venda de lotes de investimento.
            </p>
          </div>

          {/* 3. Cenário com Exportação */}
          <div className="p-6 rounded-2xl bg-[#0b0b10] border border-[#14A44D]/40 relative overflow-hidden shadow-lg shadow-[#14A44D]/5">
            <div className="w-8 h-8 rounded-lg bg-[#14A44D]/30 text-[#14A44D] flex items-center justify-center font-bold text-xs mb-4">
              03
            </div>
            <span className="text-xs text-[#14A44D] uppercase tracking-wider block mb-1 font-semibold">
              Cenário Forte com Exportação
            </span>
            <div className="text-2xl font-serif-luxury text-white mb-2">
              R$ 1,0M a R$ 1,5M <span className="text-xs text-zinc-400 font-sans-luxury font-normal">/ mês</span>
            </div>
            <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-xs text-zinc-300 space-y-1">
              <div className="flex justify-between">
                <span>Hubs Consolidados:</span>
                <strong className="text-white">Dubai, Israel, Europa, Miami</strong>
              </div>
              <div className="flex justify-between">
                <span>Faturamento Anualizado:</span>
                <strong className="text-[#14A44D]">Até R$ 18.000.000,00</strong>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 mt-3">
              Exportação direta alavancando titulação europeia FEEG e rede global de Valkiria Serra.
            </p>
          </div>

          {/* 4. Custos Fixos */}
          <div className="p-6 rounded-2xl bg-[#0b0b10] border border-white/10 relative overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-300 flex items-center justify-center font-bold text-xs mb-4">
              04
            </div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">
              Custos Fixos Estimados
            </span>
            <div className="text-2xl font-serif-luxury text-white mb-2">
              R$ 90.000,00 <span className="text-xs text-zinc-400 font-sans-luxury font-normal">/ mês</span>
            </div>
            <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-xs text-zinc-300 space-y-1">
              <div className="flex justify-between">
                <span>Sede BC & Segurança:</span>
                <strong className="text-zinc-200">R$ 45.000,00</strong>
              </div>
              <div className="flex justify-between">
                <span>Folha Técnica & Gemologia:</span>
                <strong className="text-zinc-200">R$ 45.000,00</strong>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 mt-3">
              Operação enxuta, eficiente e com alta automação digital 3D.
            </p>
          </div>

          {/* 5. Despesas & Custo de Estoque */}
          <div className="p-6 rounded-2xl bg-[#0b0b10] border border-white/10 relative overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-300 flex items-center justify-center font-bold text-xs mb-4">
              05
            </div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">
              Despesas & Giro de Estoque
            </span>
            <div className="text-2xl font-serif-luxury text-white mb-2">
              R$ 90.000,00 <span className="text-xs text-zinc-400 font-sans-luxury font-normal">despesas/mês</span>
            </div>
            <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-xs text-zinc-300 space-y-1">
              <div className="flex justify-between">
                <span>Custo de Estoque / Giro:</span>
                <strong className="text-amber-400">R$ 300.000,00</strong>
              </div>
              <div className="flex justify-between">
                <span>Marketing & Concierge VIP:</span>
                <strong className="text-zinc-200">R$ 90.000,00</strong>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 mt-3">
              Lastro físico direto em joias prontas, esmeraldas (90% Bahia), diamantes brasileiros e cangas para exportação.
            </p>
          </div>

          {/* 6. Payback & Retorno */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b0b10] to-[#140b0e] border border-[#B76E79]/50 relative overflow-hidden shadow-lg shadow-[#B76E79]/10">
            <div className="w-8 h-8 rounded-lg bg-[#B76E79]/30 text-[#B76E79] flex items-center justify-center font-bold text-xs mb-4">
              06
            </div>
            <span className="text-xs text-[#B76E79] uppercase tracking-wider block mb-1 font-semibold">
              Retorno & Payback da Rodada
            </span>
            <div className="text-2xl font-serif-luxury text-white mb-2">
              18 a 30 meses <span className="text-xs text-zinc-400 font-sans-luxury font-normal">payback</span>
            </div>
            <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-xs text-zinc-300 space-y-1">
              <div className="flex justify-between">
                <span>Integralização Total:</span>
                <strong className="text-white">R$ 3.200.000,00 (55%)</strong>
              </div>
              <div className="flex justify-between">
                <span>Lucro Líquido Médio:</span>
                <strong className="text-[#14A44D]">R$ 500.000,00 / mês</strong>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 mt-3">
              Distribuição mensal prioritária com lastro em ativos reais.
            </p>
          </div>

        </div>

        {/* Projection Chart & Interactive Simulator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Chart (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#09090d] border border-white/10 flex flex-col justify-between">
            <div className="mb-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-xl font-serif-luxury text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#14A44D]" />
                  Curva de Projeção Financeira (30 Meses)
                </h3>
                <span className="text-xs text-zinc-400">Em Reais (BRL)</span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">
                Evolução de faturamento mensal e lucro líquido projetado com expansão de exportação para Dubai e Europa.
              </p>
            </div>

            <div className="w-full h-72 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={REVENUE_PROJECTION_CHART} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14A44D" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#14A44D" stopOpacity={0.0}/>
                    </linearGradient>
                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#B76E79" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#B76E79" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis dataKey="month" stroke="#666" fontSize={11} />
                  <YAxis stroke="#666" fontSize={11} tickFormatter={(val) => `R$${val/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0e0e12', borderColor: '#333', borderRadius: '12px', fontSize: '12px' }} 
                    formatter={(value: any) => [`R$ ${Number(value).toLocaleString('pt-BR')}`, '']}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Area type="monotone" dataKey="revenue" name="Faturamento Mensal" stroke="#14A44D" strokeWidth={2} fillOpacity={1} fill="url(#colorRev)" />
                  <Area type="monotone" dataKey="netProfit" name="Lucro Líquido Mensal" stroke="#B76E79" strokeWidth={2} fillOpacity={1} fill="url(#colorProfit)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <span className="text-zinc-500 block">Mês 1 (Início)</span>
                <span className="font-semibold text-white">R$ 320k /mês</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Mês 12 (Nacional)</span>
                <span className="font-semibold text-white">R$ 850k /mês</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Mês 30 (Exportação)</span>
                <span className="font-semibold text-[#14A44D]">R$ 1,5M /mês</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Simulator (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#0e0e14] border border-[#B76E79]/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#B76E79] uppercase tracking-wider flex items-center gap-1.5">
                  <Percent className="w-4 h-4" /> Simulador de Retorno do Investidor
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] font-mono font-semibold">
                  55% Equity Total
                </span>
              </div>

              <h4 className="text-xl font-serif-luxury text-white mb-2">
                Simulador de Aporte & Dividendos
              </h4>
              <p className="text-xs text-zinc-400 mb-6">
                Ajuste o valor para calcular sua fatia no bloco de 55% dos investidores e a estimativa de dividendos sobre o lucro líquido médio de R$ 500k/mês.
              </p>

              {/* Slider / Preset Selector */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-zinc-400">Aporte Simulado:</span>
                  <span className="text-xl font-serif-luxury text-white font-bold">
                    {investorTicket.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>

                <input
                  type="range"
                  min="400000"
                  max="3200000"
                  step="200000"
                  value={investorTicket}
                  onChange={(e) => setInvestorTicket(parseInt(e.target.value))}
                  className="w-full accent-[#B76E79] cursor-pointer"
                />

                <div className="flex justify-between gap-1 text-[10px]">
                  <button 
                    onClick={() => setInvestorTicket(400000)}
                    className={`px-2 py-1 rounded-md border cursor-pointer ${investorTicket === 400000 ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-white' : 'border-white/10 text-zinc-400'}`}
                  >
                    R$ 400k (6.87%)
                  </button>
                  <button 
                    onClick={() => setInvestorTicket(800000)}
                    className={`px-2 py-1 rounded-md border cursor-pointer ${investorTicket === 800000 ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-white' : 'border-white/10 text-zinc-400'}`}
                  >
                    R$ 800k (13.75%)
                  </button>
                  <button 
                    onClick={() => setInvestorTicket(1600000)}
                    className={`px-2 py-1 rounded-md border cursor-pointer ${investorTicket === 1600000 ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-white' : 'border-white/10 text-zinc-400'}`}
                  >
                    R$ 1,6M (27.5%)
                  </button>
                  <button 
                    onClick={() => setInvestorTicket(3200000)}
                    className={`px-2 py-1 rounded-md border cursor-pointer ${investorTicket === 3200000 ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-white' : 'border-white/10 text-zinc-400'}`}
                  >
                    R$ 3,2M (55.0%)
                  </button>
                </div>
              </div>

              {/* Dynamic Results Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs mb-6">
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10">
                  <span className="text-zinc-400 block mb-1">Participação Societária</span>
                  <span className="text-lg font-serif-luxury text-[#38BDF8] font-bold">
                    {equitySharePercent.toFixed(2)}% Equity
                  </span>
                  <span className="text-[10px] text-zinc-500 block mt-0.5">Do total da sociedade</span>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10">
                  <span className="text-zinc-400 block mb-1">Dividendo Médio Estimado</span>
                  <span className="text-lg font-serif-luxury text-[#14A44D] font-bold">
                    {monthlyDividendShare.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
                  </span>
                  <span className="text-[10px] text-zinc-500 block mt-0.5">Mensal prioritário</span>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10">
                  <span className="text-zinc-400 block mb-1">Payback da Cota</span>
                  <span className="text-lg font-serif-luxury text-[#B76E79] font-bold">
                    ~{estimatedPaybackMonths} meses
                  </span>
                  <span className="text-[10px] text-zinc-500 block mt-0.5">Retorno do capital</span>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10">
                  <span className="text-zinc-400 block mb-1">ROI Proj. (36 Meses)</span>
                  <span className="text-lg font-serif-luxury text-amber-400 font-bold">
                    +{projected3YearROI}%
                  </span>
                  <span className="text-[10px] text-zinc-500 block mt-0.5">+ Valor da Participação</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5">
              <button
                onClick={() => onOpenConcierge(`Manifestação de Interesse de Investimento (55% Equity): ${investorTicket.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)}
                className="w-full py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#B76E79] to-[#8f4752] hover:from-[#c58690] hover:to-[#B76E79] text-white shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Lock className="w-4 h-4" />
                <span>Solicitar Reunião com Valkiria Serra & Sócios</span>
              </button>
            </div>

          </div>

        </div>

        {/* Use of Funds Breakdown */}
        <div className="p-8 rounded-3xl bg-[#09090d] border border-white/10 mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold text-[#14A44D] uppercase tracking-wider">
              Destinação Rigorosa de Capital (CapEx & OpEx — R$ 3.200.000,00)
            </span>
            <h3 className="text-2xl font-serif-luxury text-white mt-1">
              Como os Recursos da Integralização Serão Alocados
            </h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              47% dos recursos vão diretamente para lastro físico imediato em Joias Prontas de Alta Gama, Esmeraldas (90% Bahia - Carnaíba e Pindobaçu), Diamantes Brasileiros, Turmalinas nobres e Cangas/Minérios para Exportação, além de uma reserva de liquidez fortalecida de 10% (R$ 320.000,00).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {USE_OF_FUNDS_BREAKDOWN.map((fund, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black/60 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xl font-serif-luxury font-bold" style={{ color: fund.color }}>
                      {fund.percentage}%
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono">
                      {fund.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <h5 className="text-xs font-semibold text-zinc-200 leading-snug mb-1">
                    {fund.category}
                  </h5>
                  <p className="text-[10px] text-zinc-400 leading-tight">
                    {fund.detail}
                  </p>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-4 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${fund.percentage}%`, backgroundColor: fund.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Tiers Table */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-serif-luxury text-white">
              Cotas de Integralização Disponíveis
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Contratos estruturados com custódia de lastro físico (90% esmeraldas da Bahia), reserva operacional de R$ 320k garantida e preferência em rodadas globais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INVESTMENT_TIERS.map((tier, index) => (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all bg-[#0b0b10] ${
                  tier.highlight
                    ? 'border-[#B76E79] shadow-2xl shadow-[#B76E79]/15 relative'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#B76E79] text-white text-[10px] font-bold uppercase tracking-wider">
                    Destaque
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-serif-luxury text-white mb-1">
                    {tier.tierName}
                  </h4>
                  <div className="text-2xl font-serif-luxury text-white font-bold mb-1">
                    {tier.minInvestment.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </div>
                  <span className="inline-block text-xs font-semibold text-[#38BDF8] mb-6">
                    {tier.equityShare}
                  </span>

                  <ul className="space-y-2.5 mb-8 text-xs text-zinc-300">
                    {tier.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#B76E79] shrink-0 mt-0.5" />
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenConcierge(`Interesse na Cota: ${tier.tierName} (${tier.minInvestment.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })})`)}
                  className={`w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    tier.highlight
                      ? 'bg-[#B76E79] hover:bg-[#c58690] text-white shadow-lg'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pitch Deck Download & Confidentiality Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0d0d14] via-[#140f12] to-[#0d0d14] border border-[#B76E79]/30 flex flex-wrap items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B76E79] uppercase tracking-wider mb-2">
              <Lock className="w-4 h-4" /> Documento Confidencial com NDA
            </div>
            <h3 className="text-2xl font-serif-luxury text-white">
              Baixar Resumo Executivo & Tese Completa
            </h3>
            <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
              Faça o download instantâneo do memorando executivo com a modelagem financeira atualizada, titulação europeia <strong>UB Barcelona & FEEG</strong>, divisão societária formal de <strong>55% Investidor / 45% Valkíria Serra</strong>, alocação de R$ 320k em reserva de caixa e lastro em esmeraldas (90% Bahia).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownloadDeck}
              className="px-6 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/20 flex items-center gap-2 cursor-pointer transition-all shadow-md"
            >
              <Download className="w-4 h-4 text-[#14A44D]" />
              <span>{downloadSuccess ? 'Memorando Baixado!' : 'Baixar Memorando (.TXT)'}</span>
            </button>

            <button
              onClick={() => onOpenConcierge('Solicitação de NDA & Reunião Presencial em BC (Divisão 55/45)')}
              className="px-6 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#B76E79] to-[#8f4752] hover:from-[#c58690] hover:to-[#B76E79] text-white flex items-center gap-2 cursor-pointer transition-all shadow-xl"
            >
              <Lock className="w-4 h-4" />
              <span>Assinar NDA & Agendar Call</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
