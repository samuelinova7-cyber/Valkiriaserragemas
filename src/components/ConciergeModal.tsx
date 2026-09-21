import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  ShieldCheck, 
  Calendar, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  Briefcase, 
  Sparkles,
  Car
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ConciergeBooking } from '../types';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledInterest?: string;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({ 
  isOpen, 
  onClose, 
  prefilledInterest 
}) => {
  const [formData, setFormData] = useState<Partial<ConciergeBooking>>({
    clientName: '',
    email: '',
    phone: '',
    city: 'Balneário Camboriú, SC',
    interest: 'Rodada de Aporte / Investidor',
    budgetTier: 'R$ 500.000 - R$ 1.500.000',
    locationPreference: 'Boutique Privada Balneário Camboriú',
    ndaRequested: true,
    notes: prefilledInterest || '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B76E79', '#14A44D', '#d4af37', '#ffffff']
      });
    } catch (err) {
      // Ignore if confetti fails
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#0c0c10] border border-[#B76E79]/40 rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 bg-gradient-to-r from-black via-[#14141c] to-black flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#14A44D]/20 text-[#14A44D] border border-[#14A44D]/30">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B76E79] font-semibold block">
                Atendimento Confidencial VIP
              </span>
              <h3 className="text-lg sm:text-xl font-serif-luxury text-white font-bold">
                Concierge & Agendamento Privado
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#14A44D]/20 border border-[#14A44D]/50 text-[#14A44D] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif-luxury text-white font-bold">
                Solicitação Recebida com Sucesso
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Nosso Concierge Executivo entrará em contato via WhatsApp ou telefone confidencial em até 2 horas úteis para confirmar a agenda e os protocolos de segurança.
              </p>
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-xs text-zinc-400 max-w-sm mx-auto text-left space-y-1 mt-6">
                <div><strong>Cliente:</strong> {formData.clientName}</div>
                <div><strong>Interesse:</strong> {formData.interest}</div>
                <div><strong>Local:</strong> {formData.locationPreference}</div>
                <div><strong>Status NDA:</strong> {formData.ndaRequested ? 'Termo de Confidencialidade Solicitado' : 'Padrão'}</div>
              </div>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#B76E79] text-white hover:bg-[#c58690] cursor-pointer"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 text-xs text-zinc-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#14A44D] shrink-0" />
                <span>Atendimento discreto com Valkiria Serra. Sede em Balneário Camboriú, SC.</span>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Nome Completo / Representante *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Dr. Marcelo Silveira"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-[#B76E79] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 mb-1">WhatsApp / Telefone Privado *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+55 (47) 99999-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-[#B76E79] outline-none"
                  />
                </div>
              </div>

              {/* Email & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">E-mail Corporativo ou Pessoal *</label>
                  <input
                    type="email"
                    required
                    placeholder="investidor@familyoffice.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-[#B76E79] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Cidade / Estado</label>
                  <input
                    type="text"
                    placeholder="Balneário Camboriú, SC"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-[#B76E79] outline-none"
                  />
                </div>
              </div>

              {/* Interest Type */}
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Principal Área de Interesse</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-[#B76E79] outline-none"
                >
                  <option value="Rodada de Aporte / Investidor">Rodada de Aporte / Investidor (R$ 3,2M)</option>
                  <option value="Lotes de Gemas de Investimento">Lotes de Gemas de Investimento & Ouro 24k</option>
                  <option value="Joalheria de Alta Gama">Alta Joalheria / Peças Sob Medida</option>
                  <option value="Consultoria Gemológica Privada">Consultoria Gemológica com Valkiria Serra</option>
                </select>
              </div>

              {/* Location Preference */}
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Local Desejado para o Atendimento</label>
                <select
                  value={formData.locationPreference}
                  onChange={(e) => setFormData({ ...formData, locationPreference: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-[#B76E79] outline-none"
                >
                  <option value="Boutique Privada Balneário Camboriú">Boutique Privada Balneário Camboriú (Sede)</option>
                  <option value="Concierge VIP Hotel / Heliponto">Recepção Concierge VIP em Hotel / Heliponto BC</option>
                  <option value="Reunião Virtual Criptografada">Videoconferência Criptografada (Zoom/Meet)</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Observações ou Peça Específica</label>
                <textarea
                  rows={2}
                  placeholder="Detalhes adicionais sobre a aquisição ou cota..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-[#B76E79] outline-none resize-none"
                />
              </div>

              {/* NDA Checkbox */}
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="ndaCheckbox"
                  checked={formData.ndaRequested}
                  onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                  className="mt-1 accent-[#B76E79] cursor-pointer"
                />
                <label htmlFor="ndaCheckbox" className="text-[11px] text-zinc-300 leading-snug cursor-pointer">
                  Desejo assinar previamente o <strong>Termo de Confidencialidade e Não Divulgação (NDA)</strong> antes do envio de informações financeiras detalhadas da rodada de R$ 3,2M.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#B76E79] to-[#8f4752] hover:from-[#c58690] hover:to-[#B76E79] text-white shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Lock className="w-4 h-4" />
                  <span>Enviar Solicitação Confidencial</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
