import { Wrench, Zap, ClipboardCheck, Disc, PackageCheck, MessageSquare, ArrowUpRight } from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      icon: Wrench,
      title: "Manutenção & Reparos Pesados",
      desc: "Serviço completo de mecânica e reparos estruturais pesados para carretas, frotas e agregados.",
      features: ["Preventiva e corretiva", "Eixos e chassi", "Baús e siders", "Engate e quinta roda"],
      msg: "Manutenção Pesada"
    },
    {
      icon: Zap,
      title: "Elétrica & Sinalização",
      desc: "Diagnóstico elétrico completo, fiação, lanternagem, faróis e iluminação de sinalização.",
      features: ["Revisão contra curtos", "Faróis e LED", "Chicotes e tomadas", "Sensores e módulos"],
      msg: "Revisão Elétrica"
    },
    {
      icon: ClipboardCheck,
      title: "Inspeção Veicular Completa",
      desc: "Inspeção de segurança rigorosa para viagens curtas e longas com relatório minucioso.",
      features: ["Óleo e filtros", "Freios e cuícas", "Pneus e pressão", "Faróis e baú"],
      msg: "Inspeção Veicular Check-list"
    },
    {
      icon: Disc,
      title: "Suspensão Especializada",
      desc: "Reparo e regulagem em suspensão mecânica e pneumática com estabilidade garantida.",
      features: ["Feixes de molas", "Tirantes e buchas", "Bolsas pneumáticas", "Alinhamento de suspensão"],
      msg: "Reparo de Suspensão"
    },
    {
      icon: PackageCheck,
      title: "Autopeças de Confiança",
      desc: "Fornecimento de peças originais e de reposição de altíssima durabilidade para linha pesada.",
      features: ["Freios e filtros", "Kits de suspensão", "Iluminação completa", "Componentes de tração"],
      msg: "Consulta de Autopeças"
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-emerald-950 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase">
            Nossas Especialidades
          </span>
          <h2 className="text-3xl font-black text-white mt-3">
            Serviços Completos em <span className="text-emerald-400">Mecânica de Carretas</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            Soluções ágeis e confiáveis para manter sua carreta e frota rodando com segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((srv, idx) => {
            const Icon = srv.icon;
            const waUrl = `https://wa.me/5511988887555?text=${encodeURIComponent("Olá! Gostaria de um orçamento para " + srv.msg)}`;
            return (
              <div key={idx} className="bg-slate-950 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between hover:border-emerald-500/50 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-900">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{srv.title}</h3>
                  <p className="text-slate-300 text-xs mb-3">{srv.desc}</p>
                  <ul className="space-y-1 mb-4 text-xs text-slate-300">
                    {srv.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-emerald-600 text-slate-200 font-bold text-xs py-2.5 rounded-xl border border-slate-700 transition-all">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Orçamento WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}

          <div className="bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-950 rounded-2xl border border-emerald-500/40 p-5 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 font-black text-base">
                JVL
              </div>
              <h3 className="text-base font-bold text-white mb-2">Atendimento para Frotas</h3>
              <p className="text-slate-300 text-xs mb-3">Diagnóstico ágil para minimizar tempo de parada no pátio.</p>
              <div className="p-2.5 bg-slate-900/90 rounded-lg text-xs text-emerald-300 font-semibold mb-3 border border-emerald-800/40">
                ⚡ Atendimento prioritário para transportadoras!
              </div>
            </div>
            <a href="https://wa.me/5511988887555?text=Ol%C3%A1!%20Preciso%20de%20atendimento%20para%20minha%20carreta." target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-xl shadow-lg">
              <MessageSquare className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
