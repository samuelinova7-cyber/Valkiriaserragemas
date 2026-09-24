import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Microscope, 
  CheckCircle2, 
  Compass, 
  Calendar, 
  Lock,
  Globe,
  Sparkles,
  Gem,
  Coins,
  Building2,
  GraduationCap
} from 'lucide-react';
import { ASSET_IMAGES } from '../data/jewelryData';
import { INTELLECTUAL_CAPITAL_DETAILS } from '../data/financialData';

interface CuradoriaProps {
  onOpenConcierge: (interest?: string) => void;
}

export const CuradoriaValkiriaSection: React.FC<CuradoriaProps> = ({ onOpenConcierge }) => {
  return (
    <section className="py-24 bg-[#07070a] border-b border-white/10 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#14A44D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B76E79]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B76E79]/15 border border-[#B76E79]/30 text-[#B76E79] text-xs font-semibold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            Curadoria, Autoridade & Capital Intelectual
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury text-white tracking-wide font-bold">
            Valkiria Serra
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 font-sans-luxury">
            Gemóloga Internacional diplomada pela <strong className="text-white font-medium">UB Barcelona</strong> e titulada pela <strong className="text-[#B76E79] font-medium">FEEG (Federation for European Education in Gemmology)</strong>
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Executive Studio Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black group">
              <img
                src={ASSET_IMAGES.valkiria}
                alt="Gemóloga Internacional Valkiria Serra em seu escritório executivo em Balneário Camboriú"
                className="w-full h-[540px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Floating Verified Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/90 backdrop-blur-md border border-white/15 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#14A44D] text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>European Gemmologist • UB Barcelona & FEEG</span>
                  </div>
                  <div className="text-white font-serif-luxury text-sm mt-0.5">
                    Dubai • Israel (Ramat Gan) • Europa (Barcelona & Antuérpia) • Brasil
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#B76E79]/20 border border-[#B76E79]/50 flex items-center justify-center text-[#B76E79] font-serif-luxury font-bold">
                  VS
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & European Scientific Rigor */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Titulação Internacional: UB Barcelona & FEEG (Europa)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                "O conhecimento gemológico europeu que protege seu patrimônio e chancela a procedência de cada gema."
              </h3>
              
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans-luxury font-light">
                Com formação gemológica de excelência pela prestigiada <strong>Universitat de Barcelona (UB)</strong> e titulação oficial pela <strong>FEEG (Federation for European Education in Gemmology)</strong>, Valkiria Serra atua como gemóloga internacional de padrão europeu.
              </p>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans-luxury font-light">
                Ao avaliar esmeraldas e diamantes brasileiros nos centros de luxo de <strong>Dubai, Israel e Europa</strong>, seu propósito sempre foi a <strong>máxima valorização internacional das pedras preciosas do Brasil</strong>. Nossas esmeraldas são <strong>90% provenientes das tradicionais lavras da Bahia (Carnaíba e Pindobaçu)</strong>, com ateliê próprio de joias prontas, seleção de cangas raras para exportação e atendimento exclusivo a encomendas de <strong>esmeraldas colombianas (Muzo) de altíssimo valor</strong>.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed font-sans-luxury">
                Esse capital intelectual insubstituível é a espinha dorsal de todo o empreendimento: garante compra na fonte direta sem intermediários, laudos de conformidade internacional e uma carteira de compradores globais consolidada.
              </p>
            </div>

            {/* 4 Steps Methodology Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#14A44D] mb-1">
                  <Globe className="w-4 h-4" />
                  <span>1. 90% Origem Bahia (Carnaíba)</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  90% das esmeraldas extraídas nas tradicionais lavras da Bahia, sem intermediários.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#B76E79] mb-1">
                  <Microscope className="w-4 h-4" />
                  <span>2. Ciência Gemológica FEEG</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Laudos microscópicos de pureza, espectrometria Raman e ausência de resinas invasivas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>3. Ateliê Próprio 360° em BC</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Lapidação micrométrica de alto rendimento ótico e confecção de peças exclusivas assinadas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                  <Award className="w-4 h-4" />
                  <span>4. Rede de Private Sales Global</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Canais abertos de exportação e liquidez em Dubai, Israel, Miami e capitais europeias.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConcierge('Consultoria Gemológica Privada com Valkiria Serra (FEEG / UB Barcelona)')}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#B76E79] to-[#8a424e] hover:from-[#c58690] hover:to-[#B76E79] text-white shadow-xl flex items-center gap-2 cursor-pointer transition-all"
              >
                <Lock className="w-4 h-4" />
                <span>Agendar Consultoria Privada com a Gemóloga</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
