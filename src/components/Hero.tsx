import Image from "next/image";
import { MessageSquare, ArrowRight, Award, LayoutGrid } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920&q=70";

const whatsappUrl = "https://wa.me/5511988887555?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JVL%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-slate-800">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Carreta rodando em rodovia ao entardecer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-900/90 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 self-start bg-emerald-950/80 backdrop-blur-sm border border-emerald-500/40 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500">Especialistas em Carretas desde 2010 · +14 Anos</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-lg">
            MECÂNICA PESADA E REVISÃO DE{" "}
            <span className="text-emerald-500">CARRETAS</span> EM SÃO PAULO
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow-md">
            Manutenção preventiva e corretiva, elétrica, suspensão, inspeção completa e fornecimento de autopeças para transportadoras, frotas próprias e agregados.
          </p>

          <p className="text-emerald-500 font-bold uppercase tracking-wider text-sm">
            &quot;Atender é o nosso negócio!&quot;
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base px-6 py-3.5 rounded-xl shadow-xl transition-all border border-emerald-500/40"
            >
              <MessageSquare className="w-5 h-5" />
              <span>ORÇAMENTO NO WHATSAPP</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 bg-slate-950/70 backdrop-blur-sm hover:bg-blue-900 text-slate-100 font-semibold text-base px-6 py-3.5 rounded-xl border border-slate-600 transition-all"
            >
              <LayoutGrid className="w-5 h-5 text-emerald-500" />
              <span>Conheça o Catálogo</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 pt-1">
            <span>Fale direto no WhatsApp:</span>
            <a href="https://wa.me/5511988887555" target="_blank" rel="noopener noreferrer" className="text-emerald-500 font-bold hover:underline">(11) 98888-7555</a>
            <span className="text-slate-600">|</span>
            <a href="https://wa.me/5511992144678" target="_blank" rel="noopener noreferrer" className="text-emerald-500 font-bold hover:underline">(11) 99214-4678</a>
          </div>
        </div>
      </div>
    </section>
  );
}