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
  Briefcase
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
  INVESTMENT_TIERS 
} from '../data/financialData';

interface InvestorPitchProps {
  onOpenConcierge: (interest?: string) => void;
}

export const InvestorPitchSection: React.FC<InvestorPitchProps> = ({ onOpenConcierge }) => {
  const [investorTicket, setInvestorTicket] = useState<number>(800000);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Proportional metrics calculated on selected ticket
  const totalRound = FINANCIAL_PLAN.totalCapExOpExTarget; // 3.2M
  const equitySharePercent = (investorTicket / totalRound) * FINANCIAL_PLAN.equityOfferedPercent; // based on 20%
  const monthlyDividendShare = FINANCIAL_PLAN.avgMonthlyNetProfit * (equitySharePercent / 100);
  const estimatedPaybackMonths = Math.round(investorTicket / monthlyDividendShare);
  const projected3YearProfit = (monthlyDividendShare * 36) - investorTicket;
  const projected3YearROI = Math.round((projected3YearProfit / investorTicket) * 100);

  const handleDownloadDeck = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      // Trigger a printable executive summary window or virtual memo
      const printContent = `
        VALKIRIA SERRA JOIAS - MEMORANDO CONFIDENCIAL DE INVESTIMENTO
        Sede: Balneário Camboriú, SC - Brasil
        
        1. Faturamento Projetado Inicial: R$ 320.000,00 / mês (Ticket R$ 8.000 x 40 vendas)
        2. Faturamento Após 6-12 Meses: R$ 720.000,00 / mês (Ticket R$ 12.000 x 60 vendas)
        3. Cenário com Exportação Internacional: R$ 1.000.000,00 a R$ 1.500.000,00 / mês
        4. Custos Fixos: R$ 90.000,00 / mês
        5. Despesas Operacionais: R$ 90.000,00 / mês | Custo de Estoque: R$ 300.000,00
        6. Rodada de Investimento: R$ 3.200.000,00
        7. Lucro Líquido Médio Projetado: R$ 500.000,00 / mês
        8. Payback Estimado: 18 a 30 meses
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
            Uma tese de investimento tangível de alta rentabilidade ancorada no metro quadrado mais valorizado do Brasil, combinando aquisição direta de gemas na mina, ateliê próprio 360° e exportação global.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300">
              Rodada: <strong className="text-white">R$ 3.200.000,00</strong>
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300">
              Lucro Líquido Médio: <strong className="text-[#14A44D]">R$ 500.000,00 / mês</strong>
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300">
              Payback Estimado: <strong className="text-[#B76E79]">18 a 30 meses</strong>
            </span>
          </div>
        </div>

        {/* 6 Key Pillars from User's Financial Simulation */}
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
                <span>Mercados-Alvo:</span>
                <strong className="text-white">Dubai, Miami, Zurique</strong>
              </div>
              <div className="flex justify-between">
                <span>Faturamento Anualizado:</span>
                <strong className="text-[#14A44D]">Até R$ 18.000.000,00</strong>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 mt-3">
              Exportação direta de esmeraldas lapidadas de alta pureza e joias assinadas.
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
                <span>Folha Especializada & Gemologia:</span>
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
              Lastro direto em gemas e ouro de altíssima liquidez imediata.
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
                <span>Investimento Total:</span>
                <strong className="text-white">R$ 3.200.000,00</strong>
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
                Evolução de faturamento mensal e lucro líquido projetado com expansão de exportação.
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
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#14A44D]/20 text-[#14A44D]">
                  Equity 20% Base
                </span>
              </div>

              <h4 className="text-xl font-serif-luxury text-white mb-2">
                Calcule a Sua Cota de Participação
              </h4>
              <p className="text-xs text-zinc-400 mb-6">
                Ajuste o aporte para visualizar a projeção de dividendos mensais, equity e estimativa de retorno.
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
                  min="200000"
                  max="3200000"
                  step="100000"
                  value={investorTicket}
                  onChange={(e) => setInvestorTicket(parseInt(e.target.value))}
                  className="w-full accent-[#B76E79] cursor-pointer"
                />

                <div className="flex justify-between gap-1 text-[10px]">
                  <button 
                    onClick={() => setInvestorTicket(400000)}
                    className={`px-2 py-1 rounded-md border ${investorTicket === 400000 ? 'bg-[#B76E79]/20 border-[#B76E79] text-white' : 'border-white/10 text-zinc-400'}`}
                  >
                    R$ 400k (Seed)
                  </button>
                  <button 
                    onClick={() => setInvestorTicket(800000)}
                    className={`px-2 py-1 rounded-md border ${investorTicket === 800000 ? 'bg-[#B76E79]/20 border-[#B76E79] text-white' : 'border-white/10 text-zinc-400'}`}
                  >
                    R$ 800k (Angel)
                  </button>
                  <button 
                    onClick={() => setInvestorTicket(1600000)}
                    className={`px-2 py-1 rounded-md border ${investorTicket === 1600000 ? 'bg-[#B76E79]/20 border-[#B76E79] text-white' : 'border-white/10 text-zinc-400'}`}
                  >
                    R$ 1,6M (Lead)
                  </button>
                  <button 
                    onClick={() => setInvestorTicket(3200000)}
                    className={`px-2 py-1 rounded-md border ${investorTicket === 3200000 ? 'bg-[#B76E79]/20 border-[#B76E79] text-white' : 'border-white/10 text-zinc-400'}`}
                  >
                    R$ 3,2M (Total)
                  </button>
                </div>
              </div>

              {/* Dynamic Results Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs mb-6">
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10">
                  <span className="text-zinc-400 block mb-1">Participação Societária</span>
                  <span className="text-lg font-serif-luxury text-white font-bold">
                    {equitySharePercent.toFixed(1)}% Equity
                  </span>
                  <span className="text-[10px] text-zinc-500 block mt-0.5">Valuation R$ 16M</span>
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
                  <span className="text-[10px] text-zinc-500 block mt-0.5">+ Valor de Equity</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5">
              <button
                onClick={() => onOpenConcierge(`Manifestação de Interesse de Investimento: ${investorTicket.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)}
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
              Destinação de Capital (CapEx & OpEx)
            </span>
            <h3 className="text-2xl font-serif-luxury text-white mt-1">
              Como os R$ 3.200.000,00 serão alocados
            </h3>
            <p className="text-xs text-zinc-400 mt-2">
              47% dos recursos vão diretamente para lastro físico imediato (compra de gemas brutas e estoque de ouro 24k na boca da mina com desconto de atacado).
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
                  <h5 className="text-xs font-semibold text-zinc-200 leading-snug">
                    {fund.category}
                  </h5>
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
              Cotas Disponíveis para Aporte
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Contratos estruturados com custódia de lastro físico, relatórios de auditoria e preferência em rodadas globais.
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
                    Mais Procurado
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-serif-luxury text-white mb-1">
                    {tier.tierName}
                  </h4>
                  <div className="text-2xl font-serif-luxury text-white font-bold mb-1">
                    {tier.minInvestment.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </div>
                  <span className="inline-block text-xs font-semibold text-[#14A44D] mb-6">
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
              Faça o download instantâneo do memorando executivo com a modelagem financeira de 30 meses, cronograma de abertura do ateliê em Balneário Camboriú e termo de confidencialidade.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownloadDeck}
              className="px-6 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/20 flex items-center gap-2 cursor-pointer transition-all shadow-md"
            >
              <Download className="w-4 h-4 text-[#14A44D]" />
              <span>{downloadSuccess ? 'Memorando Baixado!' : 'Baixar Memorando (.TXT/PDF)'}</span>
            </button>

            <button
              onClick={() => onOpenConcierge('Solicitação de NDA & Reunião Presencial em BC')}
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
