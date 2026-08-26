import Image from "next/image";
import { LifeBuoy, MessageSquare, Clock, ShieldCheck, MapPin } from "lucide-react";

const SOCORRO_IMAGE =
  "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=70";

export default function RoadsideBanner() {
  const waUrl = `https://wa.me/5511988887555?text=${encodeURIComponent("Olá! Preciso de SOCORRO na estrada agora!")}`;

  return (
    <section id="socorro" className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="relative min-h-[260px] rounded-2xl overflow-hidden border border-slate-700 order-2 lg:order-1">
            <Image
              src={SOCORRO_IMAGE}
              alt="Rodovia com caminhão em atendimento emergencial"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-red-950/80 backdrop-blur-sm border border-red-500/40 text-red-300 rounded-lg px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">Atendimento Emergencial</span>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 self-start bg-emerald-950 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase">
              <LifeBuoy className="w-4 h-4" />
              Socorro Rápido na Estrada
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Deu pane no meio da rota? A <span className="text-emerald-400">JVL</span> coloca você de volta à estrada.
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Atendimento ágil e profissional onde você precisar, minimizando o tempo de parada. Nossa equipe está pronta para atender com segurança e agilidade em casos de pane, emergência ou necessidade de suporte imediato.
            </p>

            <ul className="flex flex-col gap-2 text-sm text-slate-200">
              {[
                { icon: Clock, text: "Resposta rápida para reduzir o tempo de parada" },
                { icon: ShieldCheck, text: "Equipe qualificada e suporte completo" },
                { icon: MapPin, text: "Atendimento em São Paulo e região metropolitana" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="w-8 h-8 shrink-0 rounded-lg bg-emerald-950 border border-emerald-500/30 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </span>
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base px-6 py-3.5 rounded-xl shadow-xl mt-2 transition-all border border-emerald-400/40"
            >
              <MessageSquare className="w-5 h-5" />
              <span>PRECISO DE SOCORRO AGORA</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
