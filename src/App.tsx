import React, { useState } from 'react';
import { ActiveSection, JewelryItem } from './types';
import { JEWELRY_COLLECTION } from './data/jewelryData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CuradoriaValkiriaSection } from './components/CuradoriaValkiriaSection';
import { InvestimentosSection } from './components/InvestimentosSection';
import { Showroom3D } from './components/Showroom3D';
import { InvestorPitchSection } from './components/InvestorPitchSection';
import { ColecoesSection } from './components/ColecoesSection';
import { ConciergeBCSection } from './components/ConciergeBCSection';
import { CertificateModal } from './components/CertificateModal';
import { ConciergeModal } from './components/ConciergeModal';
import { Footer } from './components/Footer';
import { 
  Eye, 
  TrendingUp, 
  Gem, 
  Briefcase, 
  Sparkles, 
  Award,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [selected3dItem, setSelected3dItem] = useState<JewelryItem>(JEWELRY_COLLECTION[0]);
  const [certificateModalItem, setCertificateModalItem] = useState<JewelryItem | null>(null);
  const [isConciergeOpen, setIsConciergeOpen] = useState<boolean>(false);
  const [conciergePrefill, setConciergePrefill] = useState<string>('');

  const handleOpenConcierge = (interest?: string) => {
    setConciergePrefill(interest || '');
    setIsConciergeOpen(true);
  };

  const handleSelectItemFor3D = (item: JewelryItem) => {
    setSelected3dItem(item);
    setActiveSection('showroom3d');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCertificate = (item: JewelryItem) => {
    setCertificateModalItem(item);
  };

  return (
    <div className="min-h-screen bg-[#050508] text-[#E5E4E2] flex flex-col selection:bg-[#B76E79]/30 selection:text-white">
      {/* Top Navigation */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onOpenConcierge={handleOpenConcierge}
      />

      {/* Main Dynamic Viewport */}
      <main className="flex-grow">
        {activeSection === 'home' && (
          <div>
            {/* 1. Cinematic Hero Section */}
            <HeroSection 
              onNavigate={(section) => {
                setActiveSection(section);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              onOpenConcierge={handleOpenConcierge}
            />

            {/* 2. Interactive 3D Showroom Teaser */}
            <section className="py-20 bg-[#07070a] border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                  <div>
                    <span className="text-xs font-semibold text-[#14A44D] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <Eye className="w-4 h-4" /> Tecnologia Óptica 3D
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-serif-luxury text-white">
                      Showroom Virtual Interativo & Seguro
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setActiveSection('showroom3d');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-[#B76E79] hover:text-[#c58690] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Expandir Showroom Completo</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <Showroom3D 
                  initialItem={selected3dItem}
                  onOpenCertificateModal={handleOpenCertificate}
                  onBookConcierge={handleOpenConcierge}
                />
              </div>
            </section>

            {/* 3. Curadoria Valkiria Serra */}
            <CuradoriaValkiriaSection onOpenConcierge={handleOpenConcierge} />

            {/* 4. Investimentos & Ativos Tangíveis */}
            <InvestimentosSection 
              onOpenConcierge={handleOpenConcierge}
              onNavigateToInvestorPitch={() => {
                setActiveSection('investidores');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 5. Coleções de Alta Joalheria */}
            <ColecoesSection 
              onSelectItemFor3D={handleSelectItemFor3D}
              onOpenCertificateModal={handleOpenCertificate}
              onOpenConcierge={handleOpenConcierge}
            />

            {/* 6. Pitch Deck & Proposta para Investidores */}
            <InvestorPitchSection onOpenConcierge={handleOpenConcierge} />

            {/* 7. Sede Balneário Camboriú & Concierge */}
            <ConciergeBCSection onOpenConcierge={handleOpenConcierge} />
          </div>
        )}

        {activeSection === 'colecoes' && (
          <div className="pt-8">
            <ColecoesSection 
              onSelectItemFor3D={handleSelectItemFor3D}
              onOpenCertificateModal={handleOpenCertificate}
              onOpenConcierge={handleOpenConcierge}
            />
          </div>
        )}

        {activeSection === 'investimentos' && (
          <div className="pt-8">
            <InvestimentosSection 
              onOpenConcierge={handleOpenConcierge}
              onNavigateToInvestorPitch={() => {
                setActiveSection('investidores');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeSection === 'showroom3d' && (
          <div className="py-12 bg-black min-h-[85vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <span className="text-xs font-semibold text-[#14A44D] uppercase tracking-wider">
                  Inspeção Óptica 360° & Refração em Tempo Real
                </span>
                <h1 className="text-3xl sm:text-4xl font-serif-luxury text-white mt-1">
                  Showroom Virtual de Alta Joalheria
                </h1>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                  Interaja diretamente com as gemas e armações: gire, aproxime para análise macro, altere ligas de ouro (Rosê, Branco, Amarelo) e inspecione o laudo gemológico 4Cs.
                </p>
              </div>

              <Showroom3D 
                initialItem={selected3dItem}
                onOpenCertificateModal={handleOpenCertificate}
                onBookConcierge={handleOpenConcierge}
              />
            </div>
          </div>
        )}

        {activeSection === 'investidores' && (
          <div className="pt-8">
            <InvestorPitchSection onOpenConcierge={handleOpenConcierge} />
          </div>
        )}

        {activeSection === 'valkiria' && (
          <div className="pt-8">
            <CuradoriaValkiriaSection onOpenConcierge={handleOpenConcierge} />
          </div>
        )}

        {activeSection === 'concierge' && (
          <div className="pt-8">
            <ConciergeBCSection onOpenConcierge={handleOpenConcierge} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={(section) => {
          setActiveSection(section);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
        onOpenConcierge={handleOpenConcierge}
      />

      {/* Modals */}
      <CertificateModal 
        item={certificateModalItem} 
        onClose={() => setCertificateModalItem(null)} 
        onOpenConcierge={handleOpenConcierge}
      />

      <ConciergeModal 
        isOpen={isConciergeOpen} 
        onClose={() => setIsConciergeOpen(false)} 
        prefilledInterest={conciergePrefill}
      />
    </div>
  );
}
