---
name: tailwind-ui
description: Estiliza ou ajusta UI com Tailwind v4 nas convenções visuais do site JVL. Use quando o usuário pedir "estilizar", "ajustar visual", "deixar bonito", "mudar cores/espaçamento/layout" de telas ou componentes.
---

# Tailwind UI — convenções visuais JVL (Tailwind v4)

Este projeto usa Tailwind CSS v4 via `@tailwindcss/postcss`. Em caso de dúvida sobre sintaxe nova da v4, consulte os docs oficiais antes de inventar classes.

Identidade visual do site (NUNCA destoe sem pedido explícito):

- Fundo base: `slate-950`; texto: `slate-100`; secundário: `slate-400`.
- Cor de ação/destaque: `emerald-600` (hover `emerald-500`); seleção de texto `selection:bg-emerald-600`.
- Bordas/divisórias: `slate-700` / `slate-800`.
- Cantos arredondados `rounded-lg`+; sombras `shadow-lg`/`shadow-2xl` em elementos flutuantes.
- Transições suaves: `transition-*` + estados hover ativos (ver `Navbar.tsx`).

Regras:

1. Antes de estilizar, leia o arquivo alvo e componentes vizinhos para manter consistência.
2. Mobile-first: comece pelo layout pequeno, adicione `sm:`/`md:`/`lg:`.
3. Não introduza bibliotecas de UI (shadcn, MUI, etc.) — só Tailwind + lucide-react.
4. Não crie classes customizadas em `globals.css` exceto se impossível via utilitárias.
5. Mantenha contraste AA (texto claro sobre fundo escuro).

Valide com `npm run build` ao terminar.
