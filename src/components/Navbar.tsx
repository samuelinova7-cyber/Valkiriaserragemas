import React, { useState } from 'react';
import { 
  ActiveSection 
} from '../types';
import { 
  Gem, 
  TrendingUp, 
  Eye, 
  MapPin, 
  UserCheck, 
  Lock, 
  Menu, 
  X, 
  Sparkles,
  PhoneCall,
  Briefcase
} from 'lucide-react';

interface NavbarProps {
  activeSection: ActiveSection;
  setActiveSection: (section: ActiveSection) => void;
  onOpenConcierge: (interest?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  setActiveSection,
  onOpenConcierge
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveSection; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Início', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'colecoes', label: 'Coleções', icon: <Gem className="w-4 h-4" /> },
    { id: 'investimentos', label: 'Gemas de Investimento', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'showroom3d', label: 'Showroom 3D', icon: <Eye className="w-4 h-4" /> },
    { id: 'investidores', label: 'Portal Investidores', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'valkiria', label: 'Gemóloga', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'concierge', label: 'Balneário Camboriú', icon: <MapPin className="w-4 h-4" /> },
  ];

  const handleNavClick = (section: ActiveSection) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#050508]/90 backdrop-blur-xl border-b border-white/10 transition-all">
      {/* Top Discreet Luxury Bar */}
      <div className="bg-[#020203] border-b border-white/5 py-1.5 px-4 sm:px-8 text-[11px] text-zinc-400 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#14A44D]" />
            Sede Executiva: Balneário Camboriú, SC (Dubai Brasileira)
          </span>
          <span className="hidden md:inline text-zinc-400">|</span>
          <span className="hidden md:inline text-zinc-400">
            Certificação Internacional GIA & IGI
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleNavClick('investidores')}
            className="text-[#B76E79] hover:text-[#e4a0aa] font-medium transition-colors flex items-center gap-1"
          >
            <Briefcase className="w-3 h-3" />
            <span>Rodada de Investimento (R$ 3,2M)</span>
          </button>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <button 
            onClick={() => onOpenConcierge('Concierge Privado Direct')}
            className="text-zinc-300 hover:text-white transition-colors hidden sm:flex items-center gap-1"
          >
            <PhoneCall className="w-3 h-3 text-[#14A44D]" />
            Concierge VIP
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 group text-left cursor-pointer"
        >
          {/* Monogram Crest */}
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-black via-[#141418] to-[#0a0a0d] border border-[#B76E79]/50 flex items-center justify-center shadow-lg group-hover:border-[#B76E79] transition-all relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#14A44D]/10 to-[#B76E79]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="font-serif-luxury font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#e8b5bc] via-[#B76E79] to-[#d4af37] tracking-tighter">
              VS
            </span>
          </div>

          <div>
            <div className="font-serif-luxury tracking-[0.2em] text-white text-base sm:text-lg font-semibold uppercase leading-tight group-hover:text-[#B76E79] transition-colors">
              Valkiria Serra
            </div>
            <div className="text-[10px] tracking-[0.28em] text-[#B76E79] font-sans-luxury uppercase font-medium">
              Joias & Investimento
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-xl text-xs font-medium tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#B76E79]/15 text-white border border-[#B76E79]/40 shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={isActive ? 'text-[#B76E79]' : 'text-zinc-400'}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenConcierge('Atendimento Confidencial VIP')}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#B76E79] via-[#ab5b67] to-[#8f4752] hover:from-[#c58690] hover:to-[#B76E79] text-white border border-[#B76E79]/40 shadow-lg shadow-[#B76E79]/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Atendimento VIP</span>
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0e] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-[#B76E79]/20 text-white border border-[#B76E79]/40'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isActive ? 'text-[#B76E79]' : 'text-zinc-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#14A44D]" />}
              </button>
            );
          })}

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConcierge('Atendimento Confidencial Mobile');
              }}
              className="w-full py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#B76E79] to-[#8f4752] text-white flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              Agendar Consultoria VIP Confidencial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
