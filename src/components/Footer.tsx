import Image from "next/image";
import { MessageSquare, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waUrl = "https://wa.me/5511988887555?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JVL.";

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-jvl.jpeg"
                alt="Logo JVL Implementos Rodoviários"
                width={48}
                height={48}
                className="w-11 h-11 rounded-full object-cover shadow-lg border border-emerald-500/30 bg-slate-900"
              />
              <span className="font-black text-white text-base tracking-wider uppercase">
                JVL <span className="text-emerald-400">Implementos</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Especialistas em mecânica de carretas, suspensão, elétrica e manutenção pesada em São Paulo desde 2010.
            </p>
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 font-bold uppercase text-[11px]">
              &quot;ATENDER É O NOSSO NEGÓCIO!&quot;
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Links Rápidos</h3>
            <ul className="space-y-2">
              {["Início", "Serviços", "Sobre", "Diferenciais", "Depoimentos", "Contato"].map((item, idx) => {
                const hrefs = ["#inicio", "#servicos", "#sobre", "#diferenciais", "#depoimentos", "#contato"];
                return (
                  <li key={idx}>
                    <a href={hrefs[idx]} className="hover:text-emerald-400 transition-colors">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Serviços</h3>
            <ul className="space-y-2">
              <li className="hover:text-emerald-400">Manutenção de Carretas</li>
              <li className="hover:text-emerald-400">Elétrica & Lanternagem</li>
              <li className="hover:text-emerald-400">Inspeção Veicular</li>
              <li className="hover:text-emerald-400">Suspensão Pesada</li>
              <li className="hover:text-emerald-400">Autopeças para Frotas</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Contato Direto</h3>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Rua Jati, 339 - Cidade Jardim Cumbica, Guarulhos - SP, CEP 07180-140</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>(11) 98888-7555 / 99214-4678</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Seg a Sex: 08h às 18h | Sáb: 08h às 12h</span>
              </p>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp JVL</span>
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {currentYear} JVL Implementos Rodoviários Ltda. Todos os direitos reservados.</p>
          <p>Mecânica de Carretas em São Paulo - SP desde 2010</p>
        </div>
      </div>
    </footer>
  );
}
