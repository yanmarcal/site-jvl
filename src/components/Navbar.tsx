"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, MapPin, Menu, X, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/5511988887555?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JVL%20e%20gostaria%20de%20um%20or%C3%A7amento.";

  return (
    <header className="sticky top-0 z-50 w-full shadow-2xl">
      <div className="bg-slate-950 border-b border-slate-500/30 text-xs text-slate-300 py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Rua Jati, 339 - Cidade Jardim Cumbica, Guarulhos - SP, CEP 07180-140</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-emerald-500">Atendimento:</span>
            <a href="https://wa.me/5511988887555" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-emerald-500 font-medium">
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>(11) 98888-7555</span>
            </a>
            <span className="text-slate-600">|</span>
            <a href="https://wa.me/5511992144678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-emerald-500 font-medium">
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>(11) 99214-4678</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-slate-950/95 backdrop-blur-md border-b border-slate-500 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex-shrink-0">
              <Image
                src="/logo-jvl.jpeg"
                alt="Logo JVL Implementos Rodoviários"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover shadow-lg shadow-emerald-900/40 border border-slate-500/30 bg-slate-950"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-white">
                JVL <span className="text-emerald-500">IMPLEMENTOS RODOVIÁRIOS</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400">
                Mecânica de Carretas • Desde 2010
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6 font-medium text-sm text-slate-300">
            <a href="#inicio" className="hover:text-emerald-500">Início</a>
            <a href="#catalogo" className="hover:text-emerald-500">Catálogo</a>
            <a href="#servicos" className="hover:text-emerald-500">Serviços</a>
            <a href="#sobre" className="hover:text-emerald-500">Sobre Nós</a>
            <a href="#diferenciais" className="hover:text-emerald-500">Diferenciais</a>
            <a href="#depoimentos" className="hover:text-emerald-500">Depoimentos</a>
            <a href="#contato" className="hover:text-emerald-500">Contato</a>
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-4 py-2 rounded-lg shadow-md border border-slate-500/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Orçamento WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-950 text-slate-300 border border-slate-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-500 flex flex-col gap-2">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-emerald-300">Início</a>
            <a href="#catalogo" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-emerald-300">Catálogo</a>
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-emerald-300">Serviços</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-emerald-300">Sobre Nós</a>
            <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-emerald-300">Diferenciais</a>
            <a href="#depoimentos" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-emerald-300">Depoimentos</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-emerald-300">Contato</a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-2.5 rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
