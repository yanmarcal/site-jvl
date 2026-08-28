import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonialsList = [
    {
      name: "Marcos Aurelio",
      role: "Gestor de Frota (Transportadora Rodofrete)",
      text: "A JVL é nossa parceira de longa data. Quando precisamos de revisão urgente na suspensão e elétrica das carretas antes da viagem, eles resolvem com rapidez e preço justo. Recomendo demais!",
      rating: 5,
      car: "Frota de Baús e Siders"
    },
    {
      name: "Roberto Silveira",
      role: "Caminhoneiro Autônomo",
      text: "Atendimento nota 10! Fui fazer o check-list de viagem e revisão de freios. O pessoal é extremamente honesto, explicou tudo direitinho e o caminhão rodou liso para o Nordeste.",
      rating: 5,
      car: "Carreta 3 Eixos"
    },
    {
      name: "Juliana Mendes",
      role: "Diretora de Operações Logísticas",
      text: "Encontrar uma oficina mecânica especializada em veículos pesados em São Paulo com essa competência é difícil. A JVL cumpre prazos e o atendimento é impecável. ATENDER É O NOSSO NEGÓCIO é realidade!",
      rating: 5,
      car: "Frota Corporativa"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-lime-950 border border-lime-400/30 text-lime-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 tracking-tight">
            O Que Dizem Nossos <span className="text-lime-400">Clientes e Parceiros</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            A confiança de transportadoras, gestores e motoristas que rodam com a segurança da JVL.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsList.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between relative shadow-lg"
            >
              <div className="absolute top-6 right-6 text-lime-400/20">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &quot;{item.text}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">{item.name}</h3>
                    <p className="text-[11px] text-lime-400">{item.role}</p>
                  </div>
                  <span className="text-[10px] bg-slate-950 text-slate-400 px-2.5 py-1 rounded-full border border-slate-800">
                    {item.car}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
