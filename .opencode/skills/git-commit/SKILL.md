---
name: git-commit
description: Cria commits convencionais seguros neste repositório. Use quando o usuário pedir "commit", "commitar", "salvar no git", "subir as mudanças".
---

# Git Commit — fluxo padrão

1. Rode `git status`, `git diff` e `git log --oneline -10` para entender o estado e o estilo histórico das mensagens.
2. Stage APENAS dos arquivos relacionados à tarefa (nunca `git add .` cegamente; nunca commite `.next/`, `node_modules/`, segredos ou `.env`).
3. Mensagem no padrão Conventional Commits em pt-BR/en curto, ex:
   - `feat: adiciona página de serviços`
   - `fix: corrige link do WhatsApp no rodapé`
   - `style: ajusta espaçamento do hero`
   - Tipos: feat | fix | style | refactor | docs | chore.
4. Antes de commitar com hooks/lint: rode `npm run lint` rapidamente se houver mudanças de código.
5. NUNCA faça push, amend ou force-push sem pedido explícito.
6. Se o commit for rejeitado por hook, corrija o problema e crie um NOVO commit (não amende o anterior).
7. Confirme ao usuário: hash curto + mensagem criada.
