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
  Sparkles
} from 'lucide-react';
import { ASSET_IMAGES } from '../data/jewelryData';

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
            Curadoria & Autoridade Gemológica
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury text-white tracking-wide font-bold">
            Valkiria Serra
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-sans-luxury">
            Gemóloga Especialista em Esmeraldas e Diamantes | Consultora Independente para Colecionadores e Investidores
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Executive Studio Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black group">
              <img
                src={ASSET_IMAGES.valkiria}
                alt="Gemóloga Valkiria Serra em seu escritório executivo em Balneário Camboriú"
                className="w-full h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Floating Verified Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#14A44D] text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Registro Gemológico Ativo</span>
                  </div>
                  <div className="text-white font-serif-luxury text-sm mt-0.5">
                    Certificação Europa & Brasil • Laudos GIA/IGI
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#B76E79]/20 border border-[#B76E79]/50 flex items-center justify-center text-[#B76E79] font-serif-luxury font-bold">
                  VS
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 360 Guarantee */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                "A sua garantia de procedência e valor patrimonial perpétuo."
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans-luxury font-light">
                Com anos de atuação direta nas principais bacias minerárias da América do Sul e nos centros de lapidação e comércio da Europa (Antuérpia e Genebra), Valkiria Serra estabeleceu em Balneário Camboriú um novo padrão de joalheria de investimento.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans-luxury">
                Cada gema é avaliada individualmente em nosso laboratório próprio, verificando índices de pureza ótica, ausência de tratamentos invasivos e saturação de cor espectral antes de receber a lapidação em nosso ateliê.
              </p>
            </div>

            {/* 4 Steps Methodology Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#14A44D] mb-1">
                  <Globe className="w-4 h-4" />
                  <span>1. Origem na Mina</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Aquisição de lotes brutos diretamente em Muzo (Colômbia) e Goiás, sem custos de intermediários.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#B76E79] mb-1">
                  <Microscope className="w-4 h-4" />
                  <span>2. Análise Gemológica</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Inspeção microscópica de inclusões naturais ('jardin') e espectrometria de pureza mineral.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>3. Ateliê 360° em BC</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Lapidação matemática de alta reflexão e cravação manual em ligas nobres de ouro 18k e platina.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                  <Award className="w-4 h-4" />
                  <span>4. Certificado & Custódia</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Emissão de laudo com número de série gravado a laser e custódia segura em cofre blindado.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConcierge('Consultoria Gemológica Privada com Valkiria Serra')}
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
