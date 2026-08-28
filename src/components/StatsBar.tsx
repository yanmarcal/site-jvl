import { Calendar, ShieldAlert, Award, Clock } from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      icon: Calendar,
      value: "Desde 2010",
      label: "Mais de 14 anos de tradição em mecânica pesada",
    },
    {
      icon: Clock,
      value: "Agilidade",
      label: "Diagnóstico rápido para menor tempo de parada",
    },
    {
      icon: Award,
      value: "100% Foco",
      label: "Soluções completas para frotas e transportadoras",
    },
    {
      icon: ShieldAlert,
      value: "Qualidade",
      label: "Peças de marcas líderes e mão de obra qualificada",
    },
  ];

  return (
    <section className="bg-lime-950/40 border-b border-lime-900/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-900/70 border border-lime-900/40"
              >
                <div className="w-10 h-10 rounded-lg bg-lime-900/50 flex items-center justify-center text-lime-400 mb-2 border border-lime-400/20">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xl sm:text-2xl font-black text-white">{stat.value}</span>
                <span className="text-xs text-slate-400 mt-1 max-w-[200px]">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
