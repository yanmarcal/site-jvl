import { Zap, ShieldCheck, Wrench, Clock, ThumbsUp, Layers } from "lucide-react";

export default function WhyUs() {
  const differentials = [
    {
      icon: Clock,
      title: "Agilidade no Tempo de Parada",
      desc: "Sabemos que tempo no setor rodoviário é dinheiro. Nosso foco é realizar diagnósticos rápidos e execução ágil."
    },
    {
      icon: ShieldCheck,
      title: "Peças de Primeira Linha",
      desc: "Trabalhamos exclusivamente com fornecedores reconhecidos e peças com garantia para a linha pesada."
    },
    {
      icon: Wrench,
      title: "Mão de Obra Especializada",
      desc: "Mecânicos experientes em carretas, suspensão pesada, sistemas elétricos e inspeções veiculares completas."
    },
    {
      icon: ThumbsUp,
      title: "Transparência Total",
      desc: "Orçamentos detalhados e sem surpresas. Explicamos cada reparo necessário antes de iniciar os serviços."
    },
    {
      icon: Layers,
      title: "Soluções para Frotas & Agregados",
      desc: "Atendimento personalizado adaptado ao tamanho da sua operação transportadora ou veículo autônomo."
    },
    {
      icon: Zap,
      title: "Localização Estratégica",
      desc: "Situada na Rua João Gonçalves, 113 - Centro, São Paulo SP, facilitando a chegada para reparos na capital."
    }
  ];

  return (
    <section id="diferenciais" className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-emerald-950 border border-emerald-500/30 text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Por Que Escolher a JVL?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 tracking-tight">
            Nossos Diferenciais de <span className="text-emerald-400">Atendimento</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Qualidade, rapidez e compromisso com o sucesso do seu transporte de carga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
