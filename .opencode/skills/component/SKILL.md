---
name: component
description: Cria componentes React no padrão do site JVL. Use quando o usuário pedir "criar componente", "novo component", "seção de...", "bloco de...".
---

# Component — padrão do site JVL

Antes de criar, leia 1-2 componentes similares em `src/components/` (ex: `Hero.tsx`, `WhyUs.tsx`) e imite o estilo.

Convenções obrigatórias deste projeto:

- Arquivo: `src/components/PascalCase.tsx`, mesmo nome do componente.
- Export: `export default function NomeDoComponente() {}`.
- Server Component por padrão; `"use client"` só se precisar de estado/eventos/hook — e nesse caso mantenha o menor escopo possível.
- Estilo: apenas Tailwind classes inline (tema: fundo `slate-950`, destaque `emerald`, bordas `slate-700/800`). Nada de CSS-in-JS nem styled-components.
- Ícones: somente `lucide-react`, tamanho via classes (`w-6 h-6`), nunca atributos SVG manuais.
- Textos em pt-BR, acessibilidade com `aria-label` em links/botões só-ícone (ver `FloatingWhatsapp.tsx` como referência).
- Responsividade mobile-first: use prefixos `sm:`/`md:`/`lg:` conforme os componentes existentes.

Ao finalizar, rode `npm run build` e corrija qualquer erro antes de reportar.
