import { MapPin, Phone, Clock, MessageSquare } from "lucide-react";

export default function ContactLocation() {
  const waUrl = "https://wa.me/5511988887555?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JVL%20e%20gostaria%20de%20or%C3%A7amento.";

  return (
    <section id="contato" className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-emerald-950 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase">
            Fale Conosco
          </span>
          <h2 className="text-3xl font-black text-white mt-3">
            Contato e <span className="text-emerald-400">Localização em São Paulo</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            Visite nossa oficina ou fale diretamente com nossa equipe técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-lg font-black text-white">JVL Implementos Rodoviários</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase">Endereço</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">Rua João Gonçalves, 113 - Centro, São Paulo - SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase">WhatsApp</h4>
                    <div className="mt-1 space-y-1">
                      <a href="https://wa.me/5511988887555" target="_blank" rel="noopener noreferrer" className="block text-sm font-bold text-emerald-400 hover:underline">
                        (11) 98888-7555
                      </a>
                      <a href="https://wa.me/5511992144678" target="_blank" rel="noopener noreferrer" className="block text-sm font-bold text-emerald-400 hover:underline">
                        (11) 99214-4678
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase">Horário</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">Seg a Sex: 08h às 18h | Sáb: 08h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg">
                <MessageSquare className="w-4 h-4" />
                <span>Falar no WhatsApp Agora</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col">
            <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                Rua João Gonçalves, 113 - Centro, São Paulo - SP
              </span>
              <a href="https://maps.google.com/?q=Rua+Joao+Goncalves+113+Centro+Sao+Paulo+SP" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 font-semibold hover:underline">
                Google Maps ↗
              </a>
            </div>
            
            <div className="w-full flex-1 min-h-[320px]">
              <iframe
                title="Localização JVL Implementos Rodoviários"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197779777478!2d-46.6355!3d-23.5455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzQzLjgiUyA0NsKwMzgnMDcuOCJX!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
