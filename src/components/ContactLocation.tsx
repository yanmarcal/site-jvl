"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2, XCircle, Loader2 } from "lucide-react";

const INITIAL_FORM = { nome: "", email: "", telefone: "", mensagem: "" };

export default function ContactLocation() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const waUrl = "https://wa.me/5511988887555?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JVL%20e%20gostaria%20de%20or%C3%A7amento.";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setMessage(data.message || "Não foi possível enviar sua mensagem. Tente novamente.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Mensagem enviada com sucesso!");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
      setMessage("Erro de conexão. Por favor, tente novamente.");
    }
  };

  return (
    <section id="contato" className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Coluna Esquerda: Formulário de Contato */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Fale Conosco
            </h2>
            <p className="text-slate-400 text-sm">
              Preencha o formulário abaixo e entraremos em contato o mais breve possível.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-slate-300 mb-1">
                  Nome
                </label>
                <input 
                  id="nome" 
                  name="nome"
                  type="text" 
                  value={form.nome}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-lime-400 transition-colors"
                  placeholder="Seu nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  E-mail
                </label>
                <input 
                  id="email" 
                  name="email"
                  type="email" 
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-lime-400 transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-slate-300 mb-1">
                  Telefone
                </label>
                <input 
                  id="telefone" 
                  name="telefone"
                  type="tel" 
                  value={form.telefone}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-lime-400 transition-colors"
                  placeholder="(11) 98888-7555"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-slate-300 mb-1">
                  Mensagem
                </label>
                <textarea 
                  id="mensagem" 
                  name="mensagem"
                  rows={4} 
                  value={form.mensagem}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-lime-400 transition-colors"
                  placeholder="Sua mensagem aqui..."
                  required
                ></textarea>
              </div>

              {status === "success" && (
                <div className="flex items-start gap-2 bg-emerald-950/40 border border-lime-400/40 text-lime-400 rounded-lg px-4 py-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>{message}</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-2 bg-red-950/40 border border-red-500/40 text-red-300 rounded-lg px-4 py-3 text-sm">
                  <XCircle className="w-5 h-5 shrink-0" />
                  <span>{message}</span>
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full bg-lime-400 hover:bg-lime-400/90 text-slate-950 font-bold py-3 px-6 rounded-xl shadow-lg transition-all border border-lime-400/40 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar"
                )}
              </button>
            </form>
          </div>
          
          {/* Coluna Direita: Mapa + Grid de Infos */}
          <div className="lg:col-span-6 space-y-6">
            {/* Mapa no topo */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-700">
              <iframe
                title="Localização JVL Implementos Rodoviários"
                src="https://maps.google.com/maps?q=Rua%20Jati%20339%20Cidade%20Jardim%20Cumbica%20Guarulhos%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64"
              />
            </div>
            
            {/* Grid 2x2 de informações de contato */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card: Endereço */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-600 p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-lime-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-slate-950" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-xs">Endereço</h4>
                  <p className="text-slate-300 text-sm mt-1">Rua Jati, 339 - Cidade Jardim Cumbica, Guarulhos - SP - CEP 07180-140</p>
                </div>
              </div>
              
              {/* Card: WhatsApp */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-600 p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-lime-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-slate-950" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-xs">WhatsApp</h4>
                  <p className="text-slate-300 text-sm mt-1">(11) 98888-7555 / (11) 99214-4678</p>
                </div>
              </div>
              
              {/* Card: E-mail */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-600 p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-lime-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-slate-950" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-xs">E-mail</h4>
                  <a href="mailto:jvl@jvlimplementos.com" className="text-slate-300 hover:text-lime-400 transition-colors text-sm mt-1">
                    jvl@jvlimplementos.com
                  </a>
                </div>
              </div>
              
              {/* Card: Horário */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-600 p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-lime-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-slate-950" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-xs">Horário de Atendimento</h4>
                  <p className="text-slate-300 text-sm mt-1">Seg a Sex: 08h às 18h | Sáb: 08h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
