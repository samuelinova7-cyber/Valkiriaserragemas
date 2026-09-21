export type ActiveSection = 
  | 'home' 
  | 'colecoes' 
  | 'investimentos' 
  | 'showroom3d' 
  | 'investidores' 
  | 'valkiria' 
  | 'concierge';

export type MetalType = 'rose_gold' | 'white_gold' | 'yellow_gold' | 'platinum';

export interface JewelryItem {
  id: string;
  name: string;
  collection: string;
  category: 'aneis' | 'colares' | 'brincos' | 'pecas_unicas';
  priceBrl: number;
  emeraldCarats: number;
  emeraldOrigin: 'Muzo, Colômbia' | 'Santa Terezinha, Brasil' | 'Campos Verdes, Brasil' | 'Zâmbia (Kagem)';
  emeraldCut: 'Octagonal Esmeralda' | 'Gota (Pear)' | 'Oval Brilhante' | 'Cushion Antigo' | 'Brilhante Redondo';
  emeraldColorGrade: 'Verde Intenso Imperial' | 'Verde Floresta Puro' | 'Verde Esmeralda Médio Vivo';
  clarity: 'Eye-Clean (VS1)' | 'Excelente com Jardim Natural' | 'VVS Gemológica';
  diamondCarats?: number;
  diamondGrade?: string;
  metal: string;
  goldPurity: 'Ouro 18k (750)' | 'Platina 950';
  certificateCode: string;
  certifyingBody: 'GIA - Gemological Institute of America' | 'IGI - International Gemological Institute' | 'VSGL - Valkiria Serra Gemological Lab';
  description: string;
  story: string;
  dimensions: string;
  serialNumber: string;
  inStock: boolean;
  image: string;
  secondaryImages: string[];
  featured?: boolean;
  isInvestmentGrade?: boolean;
  model3dType: 'ring' | 'pendant' | 'teardrop' | 'gold_bar' | 'rough_emerald';
}

export interface InvestmentLot {
  id: string;
  title: string;
  type: 'gemas_soltas' | 'lote_lapidado' | 'combo_ouro_esmeralda' | 'gema_rara_museu';
  priceBrl: number;
  weightGrams?: number;
  totalCarats: number;
  numberOfStones?: number;
  origin: string;
  currentWholesaleEst: number;
  projectedAnnualAppreciation: string;
  description: string;
  highlights: string[];
  certificate: string;
  image: string;
  model3dType: 'ring' | 'pendant' | 'teardrop' | 'gold_bar' | 'rough_emerald';
  badgeText: string;
}

export interface FinancialMetricPhase {
  phaseName: string;
  timeframe: string;
  ticketMedio: number;
  salesPerMonth: number;
  monthlyRevenue: number;
  annualizedRevenue: number;
  growthDriver: string;
}

export interface FinancialSimulation {
  initialPhase: FinancialMetricPhase;
  mediumPhase: FinancialMetricPhase;
  exportPhase: {
    minMonthlyRevenue: number;
    maxMonthlyRevenue: number;
    annualizedRevenueMax: number;
    description: string;
  };
  fixedCostsMonthly: number;
  expensesMonthly: number;
  inventoryStockCost: number;
  totalCapExOpExTarget: number;
  avgMonthlyNetProfit: number;
  paybackMonthsMin: number;
  paybackMonthsMax: number;
  equityOfferedPercent: number;
}

export interface ConciergeBooking {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  city: string;
  interest: 'Joalheria de Alta Gama' | 'Lotes de Gemas de Investimento' | 'Rodada de Aporte / Investidor' | 'Consultoria Gemológica Privada';
  budgetTier: 'R$ 50.000 - R$ 200.000' | 'R$ 200.000 - R$ 500.000' | 'R$ 500.000 - R$ 1.500.000' | 'Acima de R$ 1.500.000 (Private Investor)';
  preferredDate?: string;
  locationPreference: 'Boutique Privada Balneário Camboriú' | 'Concierge VIP Hotel / Heliponto' | 'Reunião Virtual Criptografada';
  ndaRequested: boolean;
  notes?: string;
}
