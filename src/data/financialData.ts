import { FinancialSimulation } from '../types';

export const FINANCIAL_PLAN: FinancialSimulation = {
  initialPhase: {
    phaseName: 'Fase 1: Lançamento & Consolidação Regional',
    timeframe: 'Meses 1 a 6',
    ticketMedio: 8000,
    salesPerMonth: 40,
    monthlyRevenue: 320000,
    annualizedRevenue: 3840000,
    growthDriver: 'Boutique digital + atendimento VIP presencial em Balneário Camboriú para o público A+ e investidores locais.',
  },
  mediumPhase: {
    phaseName: 'Fase 2: Expansão Nacional & Alta Joalheria',
    timeframe: 'Meses 6 a 12',
    ticketMedio: 12000,
    salesPerMonth: 60,
    monthlyRevenue: 720000,
    annualizedRevenue: 8640000,
    growthDriver: 'Aumento do ticket médio com peças de maior quilatagem, combos de investimento (ouro + esmeralda) e campanhas restritas em SP/RJ/Sul.',
  },
  exportPhase: {
    minMonthlyRevenue: 1000000,
    maxMonthlyRevenue: 1500000,
    annualizedRevenueMax: 18000000,
    description: 'Cenário forte consolidado com exportação direta para mercados de alto poder aquisitivo (Miami, Dubai, Zurique e Lisboa) e private sales.',
  },
  fixedCostsMonthly: 90000,
  expensesMonthly: 90000,
  inventoryStockCost: 300000,
  totalCapExOpExTarget: 3200000,
  avgMonthlyNetProfit: 500000,
  paybackMonthsMin: 18,
  paybackMonthsMax: 30,
  equityOfferedPercent: 20, // 20% equity for R$ 3.2M round (R$ 16M Post-Money Valuation)
};

export const REVENUE_PROJECTION_CHART = [
  { month: 'Mês 1', revenue: 320000, netProfit: 140000, costs: 180000, cumProfit: 140000 },
  { month: 'Mês 3', revenue: 380000, netProfit: 185000, costs: 195000, cumProfit: 480000 },
  { month: 'Mês 6', revenue: 520000, netProfit: 290000, costs: 230000, cumProfit: 1250000 },
  { month: 'Mês 9', revenue: 720000, netProfit: 450000, costs: 270000, cumProfit: 2420000 },
  { month: 'Mês 12', revenue: 850000, netProfit: 540000, costs: 310000, cumProfit: 3900000 },
  { month: 'Mês 18', revenue: 1100000, netProfit: 710000, costs: 390000, cumProfit: 7700000 },
  { month: 'Mês 24', revenue: 1350000, netProfit: 880000, costs: 470000, cumProfit: 12500000 },
  { month: 'Mês 30', revenue: 1500000, netProfit: 980000, costs: 520000, cumProfit: 18100000 },
];

export const USE_OF_FUNDS_BREAKDOWN = [
  { category: 'Aquisição de Gemas Brutas & Estoque de Ouro 24k na Origem', amount: 1500000, percentage: 47, color: '#14A44D' },
  { category: 'Ateliê Próprio de Lapidação e Cravação 360° em Balneário Camboriú', amount: 650000, percentage: 20, color: '#B76E79' },
  { category: 'Infraestrutura de Segurança, Blindagem, Cofres e Concierge VIP', amount: 450000, percentage: 14, color: '#D4AF37' },
  { category: 'Plataforma Digital 3D, Marketing Ultra-Luxury & Expansão Internacional', amount: 400000, percentage: 13, color: '#E5E4E2' },
  { category: 'Capital de Giro e Reserva Operacional de Liquidez', amount: 200000, percentage: 6, color: '#71717A' },
];

export const INVESTMENT_TIERS = [
  {
    tierName: 'Cota Seed Luxury',
    minInvestment: 400000,
    equityShare: '2.5% Equity',
    benefits: [
      'Pro-rata de dividendos mensais prioritários',
      'Desconto exclusivo de 25% na aquisição de gemas e joias para acervo próprio',
      'Acesso antecipado a novos lotes da mina antes do mercado aberto',
      'Relatórios trimestrais com auditoria independente de estoques'
    ],
    highlight: false,
    cta: 'Manifestar Interesse'
  },
  {
    tierName: 'Cota Majoritária / Strategic Angel',
    minInvestment: 800000,
    equityShare: '5.0% Equity',
    benefits: [
      'Assento no Conselho Consultivo de Gemologia & Expansão',
      'Prioridade na recompra de lote com garantia de liquidez',
      'Atendimento Concierge personalizado com a Gemóloga Valkiria Serra',
      'Direito de preferência em rodadas subsequentes de expansão global (Dubai/Miami)'
    ],
    highlight: true,
    cta: 'Solicitar Memorando Confidencial'
  },
  {
    tierName: 'Lote Âncora (Lead Investor)',
    minInvestment: 1600000,
    equityShare: '10.0% Equity',
    benefits: [
      'Participação ativa no Comitê de Alocação de Ativos e Aquisições de Minas',
      'Garantia real em lastro físico de gemas e ouro custodiado',
      'Acesso à rede internacional de compradores privados em Antuérpia e Genebra',
      'Contrato estruturado de Payback acelerado em 18 meses'
    ],
    highlight: false,
    cta: 'Agendar Reunião com Sócios Fundadores'
  }
];
