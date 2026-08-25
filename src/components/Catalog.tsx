import Image from "next/image";
import { MessageSquare, ArrowUpRight, Package, Boxes, Truck, Container, Wrench, Fuel } from "lucide-react";

const catalogItems = [
  {
    icon: Package,
    title: "Carreta Baú",
    desc: "Baús fechados em fibra, alumínio ou misto para cargas secas de alto valor, com piso reforçado e sob medida.",
    specs: ["Fibra ou alumínio", "Piso madeira/plástico", "Fabricação sob medida"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=70",
    msg: "Carreta Baú",
  },
  {
    icon: Boxes,
    title: "Graneleira",
    desc: "Ideal para cargas a granel como grãos e minérios, com chassi reforçado e basculação eficiente.",
    specs: ["Chassi reforçado", "Basculante", "Alta capacidade"],
    image: "https://images.unsplash.com/photo-1592805144716-feeccccef5ac?auto=format&fit=crop&w=1200&q=70",
    msg: "Carreta Graneleira",
  },
  {
    icon: Truck,
    title: "Bitrem & Rodotrem",
    desc: "Máxima capacidade por viagem com conjuntos de 6 eixos ou mais para longas distâncias.",
    specs: ["Conjunto 6+ eixos", "Quinta roda", "+50t de carga"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=70",
    msg: "Bitrem ou Rodotrem",
  },
  {
    icon: Container,
    title: "Sider",
    desc: "Lateral cortina deslizante para carga paletizada, agilizando o carregamento lateral.",
    specs: ["Cortina deslizante", "Carga paletizada", "Operação rápida"],
    image: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=1200&q=70",
    msg: "Carreta Sider",
  },
  {
    icon: Wrench,
    title: "Prancha",
    desc: "Transporte de máquinas, veículos e equipamentos pesados com rampas e piso metálico.",
    specs: ["Rampas", "Piso metálico", "Baixo peso próprio"],
    image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&w=1200&q=70",
    msg: "Carreta Prancha",
  },
  {
    icon: Fuel,
    title: "Tanque & Silo",
    desc: "Soluções para líquidos, combustíveis e pós com compartimentação e válvulas de segurança.",
    specs: ["Inox/alumínio", "Compartimentado", "Válvulas de segurança"],
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=70",
    msg: "Tanque ou Silo",
  },
];

export default function Catalog() {
  return (
    <section id="catalogo" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-emerald-950 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase">
            Catálogo JVL
          </span>
          <h2 className="text-3xl font-black text-white mt-3">
            Veículos & <span className="text-emerald-400">Implementos Rodoviários</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            Trabalhamos com as principais categorias do transporte pesado — venda, reforma e manutenção especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogItems.map((item, idx) => {
            const Icon = item.icon;
            const waUrl = `https://wa.me/5511988887555?text=${encodeURIComponent("Olá! Vim pelo catálogo do site e tenho interesse em: " + item.msg)}`;
            return (
              <article
                key={idx}
                className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-emerald-500/50 transition-all shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-slate-950/80 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 rounded-lg px-2.5 py-1.5">
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">JVL {String(idx + 1).padStart(2, "0")}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>

                  <ul className="flex flex-wrap gap-2">
                    {item.specs.map((spec, i) => (
                      <li
                        key={i}
                        className="text-[10px] font-semibold text-slate-300 bg-slate-950 border border-slate-700 px-2 py-1 rounded-md"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 w-full inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-emerald-600 text-slate-100 font-bold text-xs py-3 rounded-xl border border-slate-700 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Pedir orçamento</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-base font-bold text-white">Não encontrou o implemento ideal?</h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Trabalhamos com projetos personalizados para a necessidade da sua frota.
            </p>
          </div>
          <a
            href={`https://wa.me/5511988887555?text=${encodeURIComponent("Olá! Preciso de um implemento personalizado.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com especialista</span>
          </a>
        </div>

        <p className="mt-4 text-center text-[10px] text-slate-500">
          Imagens meramente ilustrativas. Consulte modelos, disponibilidade e especificações com nossa equipe.
        </p>
      </div>
    </section>
  );
}
