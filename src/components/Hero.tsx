import { MessageSquare, ShieldCheck, Truck, CheckCircle2, Award, ArrowRight, Wrench } from "lucide-react";

export default function Hero() {
  const whatsappUrl1 = "https://wa.me/5511988887555?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JVL%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";
  const whatsappUrl2 = "https://wa.me/5511992144678?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JVL%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-5 text-left">
            <div className="inline-flex items-center gap-2 self-start bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Especialistas em Carretas Desde 2010 • +14 Anos</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              MECÂNICA PESADA E REVISÃO DE <span className="text-emerald-400">CARRETAS</span> EM SÃO PAULO
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Manutenção preventiva e corretiva, elétrica, suspensão, inspeção completa e fornecimento de autopeças de alta qualidade para transportadoras, frotas próprias e agregados.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border-l-4 border-emerald-500">
              <p className="text-emerald-400 font-bold text-sm sm:text-base uppercase tracking-wider flex items-center gap-2">
                <Truck className="w-5 h-5 text-emerald-400" />
                "ATENDER É O NOSSO NEGÓCIO!!"
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Agilidade no atendimento e diagnóstico preciso para minimizar o tempo de parada da sua frota.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={whatsappUrl1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base px-6 py-3.5 rounded-xl shadow-lg transition-all border border-emerald-400/40"
              >
                <MessageSquare className="w-5 h-5" />
                <span>ORÇAMENTO NO WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-base px-6 py-3.5 rounded-xl border border-slate-700"
              >
                <Wrench className="w-5 h-5 text-emerald-400" />
                <span>Ver Serviços</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 pt-1">
              <span>Fale direto no WhatsApp:</span>
              <a href={whatsappUrl1} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">(11) 98888-7555</a>
              <span>|</span>
              <a href={whatsappUrl2} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">(11) 99214-4678</a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-900 p-6 rounded-2xl border border-emerald-900/50 shadow-2xl space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 bg-emerald-950 rounded-lg flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">JVL Implementos Rodoviários</h3>
                  <p className="text-xs text-emerald-400 font-medium">Desde 2010 em São Paulo</p>
                </div>
              </div>

              {[
                { title: "Manutenção Pesada", desc: "Mecânica especializada para carretas e frotas." },
                { title: "Elétrica & Sinalização", desc: "Revisão preventiva e fiação completa." },
                { title: "Suspensão Especializada", desc: "Molas, eixos, buchas e amortecedores." },
                { title: "Inspeção Veicular Check-list", desc: "Revisão rigorosa para curtas e longas viagens." },
                { title: "Autopeças de Confiança", desc: "Fornecimento de peças de marcas renomadas." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">{item.title}</h4>
                    <p className="text-[11px] text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="pt-2 text-center text-xs text-slate-400">
                📍 Rua João Gonçalves, 113 - Centro, São Paulo - SP
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
