---
name: typecheck-fix
description: Corrige erros de TypeScript iterativamente. Use quando aparecerem erros de tipo, "erro de TS", "typescript", "types", ou quando o build falhar por tipagem.
---

# Typecheck Fix — TypeScript até zerar erros

Loop de correção (máximo 5 iterações):

1. Rode `npx tsc --noEmit` no diretório do projeto.
2. Para cada erro, leia o arquivo e o contexto ao redor ANTES de editar.
3. Corrija preferindo, nesta ordem:
   - Tipagem correta do valor real (importar tipos certos, ex: `Metadata` de `next`);
   - Narrowing/guards quando o tipo é union;
   - `unknown` + validação em dados externos (nunca `any` novo).
4. Repita até `tsc --noEmit` sair limpo.

Regras:
- PROIBIDO usar `any`, `@ts-ignore` ou `@ts-expect-error` como saída fácil.
- Não mude assinaturas públicas de componentes existentes sem necessidade.
- Erros em `node_modules` ou `.next/` indicam problema de config — investigue `tsconfig.json`, não edite os arquivos gerados.
- Reporte no fim: quantos erros havia, o que causava cada categoria, status final.
