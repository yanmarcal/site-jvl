import { MessageSquare } from "lucide-react";

export default function FloatingWhatsapp() {
  const waUrl = "https://wa.me/5511988887555?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JVL%20e%20gostaria%20de%20atendimento.";

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 group animate-bounce"
    >
      <MessageSquare className="w-7 h-7" />
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Orçamento via WhatsApp ⚡
      </span>
    </a>
  );
}
