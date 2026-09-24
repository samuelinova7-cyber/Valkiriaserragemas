import React, { useState } from 'react';
import { 
  Gem, 
  Eye, 
  ShieldCheck, 
  Award, 
  Lock, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { JewelryItem } from '../types';
import { JEWELRY_COLLECTION } from '../data/jewelryData';

interface ColecoesProps {
  onSelectItemFor3D: (item: JewelryItem) => void;
  onOpenCertificateModal: (item: JewelryItem) => void;
  onOpenConcierge: (interest?: string) => void;
}

export const ColecoesSection: React.FC<ColecoesProps> = ({
  onSelectItemFor3D,
  onOpenCertificateModal,
  onOpenConcierge
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredItems = activeCategory === 'todos'
    ? JEWELRY_COLLECTION
    : JEWELRY_COLLECTION.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-[#07070a] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B76E79]/15 border border-[#B76E79]/30 text-[#B76E79] text-xs font-semibold uppercase tracking-wider mb-3">
            <Gem className="w-3.5 h-3.5" />
            Alta Joalheria & Ateliê em Balneário Camboriú
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white tracking-wide font-bold">
            Criações Exclusivas: Onde a Arte Encontra a Ciência
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-sans-luxury">
            Nossa fabricação própria em Balneário Camboriú nos permite um controle de qualidade 360º. Cada design é único, desenvolvido para destacar a beleza natural da gema. Peças de alta joalheria, numeradas e assinadas.
          </p>

          {/* Filter Categories Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'todos', label: 'Todas as Criações' },
              { id: 'aneis', label: 'Anéis de Gala' },
              { id: 'colares', label: 'Colares & Pendentes' },
              { id: 'brincos', label: 'Brincos Calibrados' },
              { id: 'pecas_unicas', label: 'Peças Únicas & Encomendas Muzo' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#B76E79] text-white shadow-lg shadow-[#B76E79]/20'
                    : 'bg-black/60 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Bespoke Colombian Muzo Notice */}
          <div className="mt-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-zinc-950/80 border border-[#B76E79]/30 text-xs text-zinc-300">
            <Sparkles className="w-4 h-4 text-[#B76E79]" />
            <span>
              <strong>Catálogo de Alta Cotação:</strong> Pedras brasileiras (90% Bahia) compõem o portfólio imediato. <strong>Esmeraldas Colombianas (Muzo)</strong> estão disponíveis sob encomenda especial para joias de altíssimo valor.
            </span>
          </div>
        </div>

        {/* Jewelry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-[#0c0c10] overflow-hidden hover:border-[#B76E79]/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              {/* Image Preview Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-black/40" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-black/80 backdrop-blur-md text-[#14A44D] border border-[#14A44D]/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14A44D]" />
                    {item.emeraldColorGrade}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono text-zinc-300 bg-black/80 backdrop-blur-md border border-white/10">
                    {item.serialNumber}
                  </span>
                </div>

                {/* Floating 3D Shortcut Button on Image */}
                <button
                  onClick={() => onSelectItemFor3D(item)}
                  className="absolute bottom-4 right-4 px-3.5 py-2 rounded-xl bg-black/85 backdrop-blur-md text-white border border-[#B76E79]/50 hover:bg-[#B76E79] text-xs font-semibold flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inspecionar em 3D</span>
                </button>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-xs text-[#B76E79] font-medium tracking-wider uppercase">
                      {item.collection}
                    </span>
                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#14A44D]" /> {item.emeraldOrigin}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif-luxury text-white mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 font-sans-luxury leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Gemological Specs Pills */}
                  <div className="grid grid-cols-3 gap-2 text-xs py-3 border-y border-white/5">
                    <div className="p-2 rounded-lg bg-black/40">
                      <span className="text-zinc-500 block text-[10px]">Esmeralda</span>
                      <strong className="text-white">{item.emeraldCarats} ct</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-black/40">
                      <span className="text-zinc-500 block text-[10px]">Diamantes</span>
                      <strong className="text-white">{item.diamondCarats || 0} ct</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-black/40">
                      <span className="text-zinc-500 block text-[10px]">Metal Nobre</span>
                      <strong className="text-zinc-200">{item.goldPurity}</strong>
                    </div>
                  </div>
                </div>

                {/* Price & Action Footer */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-zinc-400">Valor da Peça:</span>
                    <span className="text-2xl font-serif-luxury text-white font-bold">
                      {item.priceBrl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenCertificateModal(item)}
                      className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/10 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5 text-[#B76E79]" />
                      <span>Certificado FEEG / UB</span>
                    </button>

                    <button
                      onClick={() => onOpenConcierge(`Aquisição: ${item.name} (${item.serialNumber})`)}
                      className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#B76E79] hover:bg-[#c58690] text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Adquirir Peça</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Destino Balneário Camboriú Footnote */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-black via-[#0d0d12] to-black border border-white/10 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#14A44D] uppercase tracking-wider mb-1">
              <MapPin className="w-4 h-4" /> Destino Balneário Camboriú
            </div>
            <h4 className="text-xl font-serif-luxury text-white">
              Sede Física & Ambiente Privado para Entrega
            </h4>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              A sede física em Balneário Camboriú oferece um ambiente seguro e confidencial para a visualização das joias sob microscópio gemológico e a entrega privativa das suas aquisições.
            </p>
          </div>

          <button
            onClick={() => onOpenConcierge('Agendamento de Visita no Ateliê de Balneário Camboriú')}
            className="px-6 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-white text-black hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer"
          >
            Agendar Visita no Ateliê em BC
          </button>
        </div>

      </div>
    </section>
  );
};
