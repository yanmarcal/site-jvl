import Image from "next/image";
import { ShieldCheck, Target, HeartHandshake, CheckCircle, Truck, MapPin } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="sobre" className="py-16 sm:py-20 bg-slate-950 border-b border-slate-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-950 border border-emerald-500/30 text-emerald-500 px-3.5 py-1 rounded-full text-xs font-bold uppercase">
              Nossa História
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Especialistas em Mecânica de Carretas <span className="text-emerald-500">Desde 2010</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A <strong className="text-white">JVL Implementos Rodoviários</strong> foi fundada em 2010 com o propósito firme de oferecer soluções mecânicas completas de altíssima qualidade para o transporte pesado de cargas.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Sabemos que cada hora de um caminhão parado no pátio representa prejuízo para transportadoras, motoristas e gestores de frota. Por isso, aliamos conhecimento técnico especializado, peças de procedência garantida e diagnósticos precisos para entregar o melhor tempo de resposta com máxima segurança nas estradas.
            </p>

            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/80 to-slate-900 border border-emerald-500/40">
              <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase text-sm tracking-wider">
                <HeartHandshake className="w-5 h-5" />
                <span>&quot;ATENDER É O NOSSO NEGÓCIO!!&quot;</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm mt-1.5">
                Mais do que consertar carretas, construímos relações de parceria e confiança contínua com nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Atendimento a frotas corporativas",
                "Suporte especializado a agregados",
                "Mão de obra treinada e qualificada",
                "Localização estratégica em Guarulhos - SP"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="relative w-full h-56 sm:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg border border-slate-500">
              <Image
                src="/sobre-nos.jpeg"
                alt="Estrutura e equipe da JVL Implementos Rodoviários em Guarulhos"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-500 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-500 flex items-center justify-center border border-emerald-500/30">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Nossa Missão</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Garantir a máxima disponibilidade e segurança dos veículos pesados, oferecendo manutenção preventiva e reparos com agilidade incomparável.
                </p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-500 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-500 flex items-center justify-center border border-emerald-500/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Compromisso Técnico</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Uso exclusivo de ferramentas apropriadas, peças homologadas e procedimentos rigorosos em suspensão, elétrica e mecânica pesada.
                </p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-500 space-y-3 sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Estrutura & Localização</h3>
                    <p className="text-xs text-emerald-500 font-semibold flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      Rua Jati, 339 - Cidade Jardim Cumbica, Guarulhos - SP - CEP 07180-140
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  Facilidade de acesso em Guarulhos, na zona norte da Grande São Paulo, para carretas, caminhões e cavalos mecânicos com box de atendimento amplo e ágil.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
