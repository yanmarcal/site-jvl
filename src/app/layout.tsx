import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JVL Implementos Rodoviários | Especialistas em Mecânica de Carretas",
  description: "Especialistas em mecânica de carretas, manutenção pesada, revisão elétrica, suspensão, inspeção veicular e autopeças em São Paulo. Desde 2010. ATENDER É O NOSSO NEGÓCIO!!",
  keywords: [
    "JVL Implementos Rodoviários",
    "mecânica de carretas",
    "manutenção de carretas",
    "reparos pesados",
    "revisão de frota",
    "suspensão de carreta",
    "elétrica de carreta",
    "inspeção veicular SP",
    "autopeças pesadas",
    "Rua João Gonçalves Centro SP"
  ],
  authors: [{ name: "JVL Implementos Rodoviários" }],
  openGraph: {
    title: "JVL Implementos Rodoviários - Mecânica de Carretas",
    description: "Manutenção pesada, revisão elétrica, suspensão e inspeção veicular em São Paulo - SP. ATENDER É O NOSSO NEGÓCIO!!",
    url: "https://jvlimplementos.com.br",
    siteName: "JVL Implementos Rodoviários",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-600 selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}

