import React from 'react';
import { 
  Award, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  ExternalLink, 
  QrCode, 
  Sparkles,
  FileCheck2,
  Lock
} from 'lucide-react';
import { JewelryItem } from '../types';

interface CertificateModalProps {
  item: JewelryItem | null;
  onClose: () => void;
  onOpenConcierge: (interest?: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ 
  item, 
  onClose,
  onOpenConcierge
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0d0d12] border border-[#B76E79]/40 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 border-b border-white/10 bg-gradient-to-r from-black via-[#14141c] to-black flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#B76E79]/20 text-[#B76E79] border border-[#B76E79]/30">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#14A44D] font-semibold block">
                Laudo Gemológico Oficial
              </span>
              <h3 className="text-xl font-serif-luxury text-white font-bold">
                {item.certifyingBody.split('-')[0]} • Certificado Digital
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Certificate Header Banner */}
          <div className="p-5 rounded-2xl bg-black/60 border border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs text-zinc-400 block">Número do Registro Internacional:</span>
              <span className="text-xl font-mono text-[#B76E79] font-bold tracking-wider">
                {item.certificateCode}
              </span>
              <span className="text-[11px] text-zinc-400 block mt-0.5">
                Gravado a laser micrométrico na cintura da gema
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-xl bg-white p-1.5 flex items-center justify-center">
                {/* Simulated QR Code */}
                <div className="w-full h-full bg-black rounded flex flex-col items-center justify-center p-1 text-[8px] font-mono text-white text-center">
                  <QrCode className="w-8 h-8 text-white mb-0.5" />
                  <span>VERIFIED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Item Identification */}
          <div>
            <span className="text-xs text-[#B76E79] font-semibold uppercase tracking-wider block mb-1">
              Objeto de Avaliação
            </span>
            <h4 className="text-lg font-serif-luxury text-white">
              {item.name} ({item.collection})
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              Número de Série: <strong className="text-zinc-200">{item.serialNumber}</strong> | Dimensões: {item.dimensions}
            </p>
          </div>

          {/* Detailed Specifications Table */}
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-black/40 text-xs">
            <div className="grid grid-cols-2 p-3 border-b border-white/5">
              <span className="text-zinc-400">Espécie Mineral:</span>
              <span className="text-white font-medium">Berilo Natural (Esmeralda)</span>
            </div>
            <div className="grid grid-cols-2 p-3 border-b border-white/5">
              <span className="text-zinc-400">Peso em Quilates (Carat):</span>
              <span className="text-[#14A44D] font-bold">{item.emeraldCarats} ct</span>
            </div>
            <div className="grid grid-cols-2 p-3 border-b border-white/5">
              <span className="text-zinc-400">Lapidação / Formato:</span>
              <span className="text-white font-medium">{item.emeraldCut}</span>
            </div>
            <div className="grid grid-cols-2 p-3 border-b border-white/5">
              <span className="text-zinc-400">Graduação de Cor:</span>
              <span className="text-white font-medium">{item.emeraldColorGrade}</span>
            </div>
            <div className="grid grid-cols-2 p-3 border-b border-white/5">
              <span className="text-zinc-400">Grau de Pureza:</span>
              <span className="text-white font-medium">{item.clarity}</span>
            </div>
            <div className="grid grid-cols-2 p-3 border-b border-white/5">
              <span className="text-zinc-400">Origem Geográfica:</span>
              <span className="text-white font-medium">{item.emeraldOrigin}</span>
            </div>
            <div className="grid grid-cols-2 p-3 border-b border-white/5">
              <span className="text-zinc-400">Gemas Adicionais:</span>
              <span className="text-white font-medium">{item.diamondCarats || 0} ct Diamantes ({item.diamondGrade || 'Lapidação Brilhante'})</span>
            </div>
            <div className="grid grid-cols-2 p-3">
              <span className="text-zinc-400">Metal & Titulação:</span>
              <span className="text-white font-medium">{item.goldPurity} ({item.metal})</span>
            </div>
          </div>

          {/* Valkiria Serra Signature Seal */}
          <div className="p-4 rounded-2xl bg-[#B76E79]/10 border border-[#B76E79]/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#14A44D]" />
              <div>
                <h5 className="text-xs font-semibold text-white">Chancela Gemológica Valkiria Serra</h5>
                <p className="text-[11px] text-zinc-400">
                  Laudo assinado e registrado sob protocolo internacional de autenticidade.
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-zinc-500 block">Balneário Camboriú, SC</span>
              <span className="text-xs font-serif-luxury text-[#B76E79] font-bold">Valkiria Serra, FGA</span>
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="p-6 border-t border-white/10 bg-black/70 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-zinc-400">
            Valor Registrado: <strong className="text-white">{item.priceBrl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenConcierge(`Aquisição com Certificado: ${item.name}`);
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#B76E79] hover:bg-[#c58690] text-white transition-colors cursor-pointer"
            >
              Solicitar Aquisição Desta Peça
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
