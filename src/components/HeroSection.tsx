import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Eye, 
  MapPin, 
  Award, 
  ChevronRight,
  Briefcase,
  Lock
} from 'lucide-react';
import { ActiveSection } from '../types';
import { ASSET_IMAGES } from '../data/jewelryData';

interface HeroSectionProps {
  onNavigate: (section: ActiveSection) => void;
  onOpenConcierge: (interest?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onNavigate, 
  onOpenConcierge 
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-white/10 bg-black">
      {/* Background Hero Image with Cinematic Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.hero}
          alt="Balneário Camboriú Skyline e Esmeraldas Valkiria Serra"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[10000ms] opacity-60"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered Luxury Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-[#050508]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050508]/50 to-[#050508]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/70 border border-[#B76E79]/40 backdrop-blur-md mb-8 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#14A44D] animate-ping" />
          <span className="text-xs sm:text-sm font-sans-luxury text-zinc-200 tracking-wide font-medium">
            Alta Joalheria & Gemas de Investimento • <span className="text-[#B76E79]">Balneário Camboriú</span>
          </span>
        </div>

        {/* Grand Typography Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-luxury text-white tracking-[0.12em] uppercase font-bold max-w-5xl leading-none drop-shadow-2xl">
          Valkiria Serra
        </h1>

        {/* Elegant Subtitle */}
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg lg:text-xl font-sans-luxury text-[#E5E4E2] max-w-3xl tracking-widest uppercase font-light">
          <span className="text-[#14A44D] font-medium">Gemologia de Elite</span>
          <span className="text-zinc-600">•</span>
          <span className="text-white font-normal">Investimentos Tangíveis</span>
          <span className="text-zinc-600">•</span>
          <span className="text-[#B76E79] font-medium">Balneário Camboriú</span>
        </div>

        {/* Narrative Paragraph */}
        <p className="mt-6 text-sm sm:text-base text-zinc-300 max-w-2xl font-sans-luxury leading-relaxed font-light">
          A fusão impecável entre a alta ciência gemológica internacional e a valorização patrimonial segura. 
          Adquira esmeraldas colombianas e brasileiras de grau museu e ouro 24k direto da origem, com ateliê exclusivo e showroom 3D na <span className="text-white font-medium">"Dubai Brasileira"</span>.
        </p>

        {/* CTAs Group */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('investimentos')}
            className="px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-[#B76E79] via-[#bf7883] to-[#99505b] hover:from-[#c98993] hover:to-[#B76E79] text-white shadow-2xl shadow-[#B76E79]/40 border border-[#B76E79]/50 transition-all flex items-center gap-2 group cursor-pointer"
          >
            <TrendingUp className="w-4 h-4 text-emerald-300" />
            <span>Explorar Portfólio de Investimentos</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('showroom3d')}
            className="px-7 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-widest uppercase bg-black/80 hover:bg-zinc-900 text-zinc-200 border border-white/20 backdrop-blur-md shadow-xl transition-all flex items-center gap-2 cursor-pointer group"
          >
            <Eye className="w-4 h-4 text-[#14A44D]" />
            <span>Showroom 3D Interativo</span>
          </button>

          <button
            onClick={() => onNavigate('investidores')}
            className="px-6 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-widest uppercase bg-zinc-950/90 hover:bg-zinc-900 text-[#B76E79] border border-[#B76E79]/40 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <Briefcase className="w-4 h-4" />
            <span>Proposta para Investidores (R$ 3,2M)</span>
          </button>
        </div>

        {/* Key Trust Stats Grid Bar */}
        <div className="mt-16 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="p-4 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs text-[#14A44D] font-medium mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Origem Direta de Mina</span>
            </div>
            <div className="text-xl font-serif-luxury text-white">0% Intermediários</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">Boyacá & Goiás para o investidor</div>
          </div>

          <div className="p-4 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs text-[#B76E79] font-medium mb-1">
              <Award className="w-4 h-4" />
              <span>Chancela Internacional</span>
            </div>
            <div className="text-xl font-serif-luxury text-white">GIA & IGI Cert.</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">Laudos ópticos e espectroscópicos</div>
          </div>

          <div className="p-4 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Ateliê 360° Próprio</span>
            </div>
            <div className="text-xl font-serif-luxury text-white">Peças Numeradas</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">Lapidação & cravação em BC</div>
          </div>

          <div className="p-4 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium mb-1">
              <MapPin className="w-4 h-4" />
              <span>Balneário Camboriú</span>
            </div>
            <div className="text-xl font-serif-luxury text-white">Luxury Concierge</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">Atendimento privado com hora marcada</div>
          </div>
        </div>

      </div>
    </section>
  );
};
