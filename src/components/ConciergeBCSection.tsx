import React from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Car, 
  Phone, 
  Mail, 
  Lock, 
  Calendar, 
  CheckCircle2, 
  Building2,
  Sparkles
} from 'lucide-react';
import { ASSET_IMAGES } from '../data/jewelryData';

interface ConciergeBCProps {
  onOpenConcierge: (interest?: string) => void;
}

export const ConciergeBCSection: React.FC<ConciergeBCProps> = ({ onOpenConcierge }) => {
  return (
    <section className="py-24 bg-black border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14A44D]/15 border border-[#14A44D]/30 text-[#14A44D] text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Sede Executiva & Luxury Concierge
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white tracking-wide font-bold">
            Balneário Camboriú: A Dubai Brasileira
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-sans-luxury">
            Um ambiente privado, seguro e ultra-exclusivo para visualização, consultoria e aquisição de gemas e alta joalheria.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column: Headquarters Image */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0a0a0f] group relative">
              <img
                src={ASSET_IMAGES.concierge}
                alt="Sede Executiva de Gemologia Valkiria Serra em Balneário Camboriú"
                className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Discreet Plaque Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#B76E79] uppercase tracking-wider">
                      Atendimento Sob Agendamento
                    </span>
                    <h4 className="text-sm font-serif-luxury text-white font-bold mt-0.5">
                      Valkiria Serra Joias - Sede de Gemologia & Custódia
                    </h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      Centro Empresarial • Balneário Camboriú, Santa Catarina
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#14A44D]/20 text-[#14A44D] border border-[#14A44D]/40">
                    <Lock className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Concierge Services & Security Protocol */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                Discrição Absoluta e Segurança de Padrão Internacional
              </h3>
              <p className="text-sm text-zinc-300 font-sans-luxury leading-relaxed font-light">
                Para preservar a privacidade de nossos colecionadores e investidores, nosso ateliê opera exclusivamente com horário marcado, sem exposição de vitrine externa em vias públicas.
              </p>
            </div>

            {/* Service Pillars */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#0b0b10] border border-white/10 flex items-start gap-4">
                <div className="p-2 rounded-xl bg-[#B76E79]/20 text-[#B76E79] shrink-0 mt-1">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Transfer VIP & Recepção de Heliponto</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                    Serviço de concierge dedicado com recepção em helipontos de Balneário Camboriú ou aeroportos executivos da região (Navegantes / Florianópolis).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0b0b10] border border-white/10 flex items-start gap-4">
                <div className="p-2 rounded-xl bg-[#14A44D]/20 text-[#14A44D] shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Sala de Custódia & Análise Microscópica</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                    Espaço privativo equipado com microscópios gemológicos, refractômetro e espectrômetro para conferência minuciosa dos lotes na presença do comprador.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0b0b10] border border-white/10 flex items-start gap-4">
                <div className="p-2 rounded-xl bg-amber-400/20 text-amber-400 shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Consultoria Particular com Valkiria Serra</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                    Orientação estratégica individualizada para estruturação de carteiras de ativos tangíveis, aquisição de lotes de leilão e montagem de peças sob medida.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenConcierge('Solicitação de Agendamento Presencial em Balneário Camboriú')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#B76E79] to-[#8f4752] hover:from-[#c58690] hover:to-[#B76E79] text-white shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Sessão Presencial em BC</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
