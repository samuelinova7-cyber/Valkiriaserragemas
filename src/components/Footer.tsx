import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Lock, 
  Award, 
  Gem, 
  ChevronRight,
  TrendingUp,
  Globe
} from 'lucide-react';
import { ActiveSection } from '../types';

interface FooterProps {
  onNavigate: (section: ActiveSection) => void;
  onOpenConcierge: (interest?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConcierge }) => {
  return (
    <footer className="bg-[#020204] border-t border-white/10 text-zinc-400 text-xs font-sans-luxury">
      {/* Top Banner */}
      <div className="border-b border-white/5 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-black border border-[#B76E79]/50 flex items-center justify-center font-serif-luxury font-bold text-white text-sm">
                VS
              </div>
              <span className="font-serif-luxury text-white text-lg tracking-widest uppercase font-semibold">
                Valkiria Serra Joias
              </span>
            </div>
            <p className="text-zinc-400 text-xs max-w-md leading-relaxed">
              Gemologia de Elite & Ativos Tangíveis de Investimento. Ateliê de fabricação própria e sede executiva em Balneário Camboriú, Santa Catarina.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-white font-semibold text-xs block mb-2 uppercase tracking-wider">
              Atendimento VIP & Concierge
            </span>
            <div className="flex items-center gap-2 text-zinc-300">
              <Phone className="w-3.5 h-3.5 text-[#14A44D]" />
              <span>+55 (47) 3360-8900</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <Mail className="w-3.5 h-3.5 text-[#B76E79]" />
              <span>concierge@valkiriaserra.com.br</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-white font-semibold text-xs block uppercase tracking-wider">
              Chancela & Formação Internacional
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-black border border-[#B76E79]/40 text-[10px] text-zinc-200">
                UB Barcelona
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-black border border-[#14A44D]/40 text-[10px] text-[#14A44D]">
                FEEG European Gemmologist
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-black border border-white/10 text-[10px] text-zinc-300">
                Custódia Blindada BC
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Columns */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
            Joalheria de Luxo
          </h5>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onNavigate('colecoes')} className="hover:text-white transition-colors cursor-pointer">
                Anéis de Alta Gama
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('colecoes')} className="hover:text-white transition-colors cursor-pointer">
                Colares & Pingentes de Gala
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('colecoes')} className="hover:text-white transition-colors cursor-pointer">
                Brincos Calibrados de Esmeralda
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('colecoes')} className="hover:text-white transition-colors cursor-pointer">
                Peças de Museu & Colecionador
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
            Investimentos & Ativos
          </h5>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onNavigate('investimentos')} className="hover:text-white transition-colors cursor-pointer">
                Lotes de Esmeraldas da Bahia
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('investimentos')} className="hover:text-white transition-colors cursor-pointer">
                Cangas & Minérios para Exportação
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('investidores')} className="text-[#B76E79] hover:underline transition-colors cursor-pointer">
                Proposta para Investidores (R$ 3,2M)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('investimentos')} className="hover:text-white transition-colors cursor-pointer">
                Proteção Contra Inflação & Hedges
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
            Experiência & Tecnologia
          </h5>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onNavigate('showroom3d')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14A44D]" /> Showroom 3D Interativo
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('valkiria')} className="hover:text-white transition-colors cursor-pointer">
                Gemóloga Valkiria Serra
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('concierge')} className="hover:text-white transition-colors cursor-pointer">
                Sede Balneário Camboriú
              </button>
            </li>
            <li>
              <button onClick={() => onOpenConcierge('Auditoria Gemológica de Acervo')} className="hover:text-white transition-colors cursor-pointer">
                Auditoria de Acervo Particular
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
            Localização & Privacidade
          </h5>
          <p className="text-[11px] text-zinc-400 mb-3 leading-relaxed">
            Av. Atlântica / Centro Empresarial de Balneário Camboriú - Santa Catarina, Brasil.
          </p>
          <button
            onClick={() => onOpenConcierge('Agendamento de Visita Privada')}
            className="w-full py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5 text-[#B76E79]" />
            <span>Agendamento Privado</span>
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4 text-[11px] text-zinc-500">
        <div>
          © {new Date().getFullYear()} Valkiria Serra Joias - Gemologia & Investimento Ltda. Todos os direitos reservados.
        </div>
        <div className="flex items-center gap-4">
          <span>CNPJ: 49.812.304/0001-92</span>
          <span>•</span>
          <span>Balneário Camboriú, SC</span>
          <span>•</span>
          <span>Padrão Internacional FEEG / UB Barcelona</span>
        </div>
      </div>
    </footer>
  );
};
