---
name: lint-fix
description: Roda ESLint do projeto e corrige tudo iterativamente. Use quando o usuário pedir "rodar lint", "corrigir lint", "limpar avisos", ou após criar/editar vários arquivos.
---

# Lint Fix — ESLint até zero avisos

Loop (máximo 3 iterações):

1. Rode `npm run lint` no diretório do projeto.
2. Corrija cada erro/aviso editando o código-fonte.
3. Prefira a correção idiomática da regra (ex: trocar `<img>` por `<Image>` do next, remover imports não usados, fechar escapes de JSX).
4. Repita até saída limpa.

Regras:
- NUNCA adicione `// eslint-disable-next-line` sem pedido explícito do usuário.
- NUNCA edite `eslint.config.mjs` para enfraquecer regras sem aprovação.
- Avisos de arquivos gerados (`.next/`) devem ser ignorados via config de scope, não apagando arquivos.
- Resumo final: lista curta das categorias corrigidas.
