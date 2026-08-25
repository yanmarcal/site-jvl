---
name: new-page
description: Cria novas páginas/rotas no App Router do site JVL com metadata SEO. Use quando o usuário pedir "nova página", "nova rota", "criar página", "adicionar página de...".
---

# New Page — páginas App Router (Next.js)

Este projeto usa uma versão de Next.js possivelmente diferente dos seus dados de treino. ANTES de escrever código, consulte os guias em `node_modules/next/dist/docs/` sobre rotas, layouts e metadata, e siga as convenções dali.

Passos:

1. Confira com o usuário a rota desejada (ex: `/servicos` → `src/app/servicos/page.tsx`).
2. Leia `src/app/layout.tsx` e `src/app/page.tsx` para copiar o padrão existente (fontes Geist, tema slate-950/emerald, pt-BR).
3. Estruture a página como Server Component por padrão. Só use `"use client"` se houver estado/eventos, isolando a parte interativa em componente próprio em `src/components/`.
4. Sempre exporte `metadata: Metadata` com title, description e openGraph em pt-BR, seguindo o padrão do layout (marca "JVL Implementos Rodoviários", CTA WhatsApp).
5. Reaproveite componentes existentes de `src/components/` (Navbar, Footer já vêm do layout — não duplique).
6. Ícones: apenas `lucide-react`.
7. Ao terminar, rode `npm run build` e confirme que a rota aparece na lista de rotas estáticas.
