import { FinancialSimulation } from '../types';

export const FINANCIAL_PLAN: FinancialSimulation = {
  initialPhase: {
    phaseName: 'Fase 1: Lançamento & Consolidação Regional',
    timeframe: 'Meses 1 a 6',
    ticketMedio: 8000,
    salesPerMonth: 40,
    monthlyRevenue: 320000,
    annualizedRevenue: 3840000,
    growthDriver: 'Boutique digital + atendimento VIP presencial em Balneário Camboriú com foco em joias prontas de alta joalheria, gemas brasileiras e cangas de coleção.',
  },
  mediumPhase: {
    phaseName: 'Fase 2: Expansão Nacional & Alta Joalheria',
    timeframe: 'Meses 6 a 12',
    ticketMedio: 12000,
    salesPerMonth: 60,
    monthlyRevenue: 720000,
    annualizedRevenue: 8640000,
    growthDriver: 'Aumento do ticket médio com joias prontas de maior quilatagem, encomendas de altíssimo valor de esmeraldas colombianas (Muzo), lotes da Bahia, diamantes brasileiros e cangas para colecionadores.',
  },
  exportPhase: {
    minMonthlyRevenue: 1000000,
    maxMonthlyRevenue: 1500000,
    annualizedRevenueMax: 18000000,
    description: 'Cenário forte consolidado com exportação direta de pedras preciosas brasileiras, cangas e minérios para mercados globais (Dubai, Israel, Zurique, Miami e Europa) alavancando a titulação europeia FEEG/UB Barcelona e a rede de contatos construída por Valkiria Serra.',
  },
  fixedCostsMonthly: 90000,
  expensesMonthly: 90000,
  inventoryStockCost: 300000,
  totalCapExOpExTarget: 3200000,
  avgMonthlyNetProfit: 500000,
  paybackMonthsMin: 18,
  paybackMonthsMax: 30,
  equityOfferedPercent: 55, // 55% equity total para a integralização do capital de R$ 3.2M
};

export const CORPORATE_EQUITY_STRUCTURE = {
  investorShare: 55,
  investorCapital: 3200000,
  investorRole: [
    'Integralização total do capital social no valor de R$ 3.200.000,00',
    'Garantia dos recursos para instalação do ateliê 360° de joias prontas em Balneário Camboriú',
    'Financiamento do lastro físico tangível (Joias Prontas, 90% Esmeraldas da Bahia, Diamantes Brasileiros, Cangas & Minérios para Exportação)',
    'Infraestrutura de alta segurança, blindagem, cofres e capital de giro protegido (R$ 320k)'
  ],
  valkiriaShare: 45,
  valkiriaRole: [
    'Capital Intelectual: Gemóloga Internacional pela UB Barcelona e diplomada FEEG (Federation for European Education in Gemmology)',
    'Especialização exclusiva em pedras preciosas brasileiras: esmeraldas (90% Bahia), diamantes brasileiros e turmalinas nobres',
    'Curadoria e seleção técnica direta de cangas e minérios de alto valor para exportação e colecionadores',
    'Presença e reputação internacional construída em Dubai, Israel e Europa por décadas valorizando as gemas brasileiras',
    'Direção técnica 360°, gestão operacional integral e representação oficial da marca'
  ]
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
  { 
    category: 'Lastro Físico: Joias Prontas, Pedras Brasileiras (90% Bahia) & Cangas/Minérios para Exportação', 
    amount: 1500000, 
    percentage: 47, 
    color: '#14A44D',
    detail: 'Estoque físico em joias prontas de alto valor, gemas soltas lapidadas da Bahia e cangas de esmeralda de padrão museu para exportação.'
  },
  { 
    category: 'Ateliê Próprio de Joias Prontas, Lapidação e Cravação 360° em Balneário Camboriú', 
    amount: 680000, 
    percentage: 21, 
    color: '#B76E79',
    detail: 'Maquinário de lapidação micrométrica alemã, fornos de fundição e bancadas de alta joalheria para finalização de peças exclusivas.'
  },
  { 
    category: 'Infraestrutura de Segurança, Blindagem, Cofres e Concierge VIP', 
    amount: 500000, 
    percentage: 16, 
    color: '#D4AF37',
    detail: 'Cofres de alta segurança, sistema de biometria, monitoramento 24h e sala de visualização privativa para clientes e investidores.'
  },
  { 
    category: 'Capital de Giro e Reserva Operacional de Liquidez (Proteção Reforçada)', 
    amount: 320000, 
    percentage: 10, 
    color: '#38BDF8',
    detail: 'Proteção financeira para salários, impostos, reposição contínua de gemas e tranquilidade societária inicial.'
  },
  { 
    category: 'Plataforma Digital 3D, Conteúdo Editorial & Lançamento de Alta Gama', 
    amount: 200000, 
    percentage: 6, 
    color: '#E5E4E2',
    detail: 'Investimento otimizado e eficiente: relações internacionais consolidadas em Dubai e Israel reduzem custo de marketing.'
  },
];

export const INTELLECTUAL_CAPITAL_DETAILS = {
  partnerName: 'Valkiria Serra, European Gemmologist (UB Barcelona / FEEG)',
  title: 'Gemóloga Internacional & Sócia Fundadora (45% Equity)',
  academicCredentials: [
    'Universitat de Barcelona (UB) - Formação Gemológica Superior Europeia',
    'FEEG (Federation for European Education in Gemmology) - European Gemmologist',
  ],
  originFocus: 'Pedras Preciosas 100% Brasileiras (90% das Esmeraldas das lavras da Bahia - Carnaíba e Pindobaçu)',
  globalExperienceHubs: ['Dubai (Emirados Árabes)', 'Israel (Ramat Gan Diamond Exchange)', 'Europa (Antuérpia, Barcelona e Genebra)'],
  specialties: [
    'Joias Prontas de Alta Gama & Peças Assinadas',
    'Esmeraldas Brasileiras (90% Bahia - Carnaíba e Pindobaçu)',
    'Grandes Encomendas de Esmeraldas Colombianas (Muzo) de Altíssimo Valor',
    'Diamantes Brasileiros de Investimento',
    'Cangas de Esmeralda & Minérios Nobres para Exportação',
    'Turmalinas Brasileiras Nobres (Paraíba & Indicolita)'
  ],
  coreValuePillars: [
    'Gemóloga com titulação internacional europeia (UB Barcelona e FEEG - European Gemmologist).',
    'Propósito claro consolidado em Dubai: máxima valorização das pedras preciosas brasileiras no mercado global de luxo.',
    'Acesso direto e exclusivo a mineradores nas lavras da Bahia (Carnaíba e Pindobaçu), eliminando intermediários.',
    'Portfólio diversificado em Joias Prontas de alta joalheria, pedras soltas lapidadas, cangas de museu e minérios de exportação.',
    'Rede consolidada de compradores privados em Dubai, Israel e Europa construída ao longo de décadas.',
    'Direção técnica 360° inegociável que garante laudos de conformidade internacional e valorização patrimonial.'
  ]
};

export const INVESTMENT_TIERS = [
  {
    tierName: 'Cota Participativa Seed Luxury',
    minInvestment: 400000,
    equityShare: '6.875% Equity',
    benefits: [
      'Pro-rata de dividendos mensais prioritários com lastro em joias e pedras preciosas',
      'Desconto exclusivo de 25% na aquisição de joias prontas e pedras para acervo próprio',
      'Acesso antecipado a novos lotes da mina na Bahia e cangas de coleção antes do mercado aberto',
      'Relatórios trimestrais com auditoria independente de estoques físicos'
    ],
    highlight: false,
    cta: 'Manifestar Interesse'
  },
  {
    tierName: 'Cota Strategic Angel',
    minInvestment: 800000,
    equityShare: '13.75% Equity',
    benefits: [
      'Assento no Conselho Consultivo de Gemologia & Expansão Internacional',
      'Prioridade na recompra de lote com garantia de liquidez',
      'Atendimento Concierge personalizado com a Gemóloga Internacional Valkiria Serra (FEEG)',
      'Direito de preferência nas operações de exportação de cangas e gemas para Dubai, Israel e Europa'
    ],
    highlight: true,
    cta: 'Solicitar Memorando Confidencial'
  },
  {
    tierName: 'Cota Master / Lead Investor (55% Total)',
    minInvestment: 3200000,
    equityShare: '55.0% Equity Majoritário',
    benefits: [
      'Controle de 55% da sociedade com plenos direitos patrimoniais e de deliberação',
      'Integralização completa do capital com garantia de lastro real em joias prontas, gemas da Bahia e minérios nobres',
      'Acesso direto à rede internacional de compradores privados em Dubai, Ramat Gan e Genebra',
      'Contrato estruturado com Payback estimado entre 18 e 30 meses e retorno acelerado'
    ],
    highlight: false,
    cta: 'Agendar Reunião com Sócios Fundadores'
  }
];
