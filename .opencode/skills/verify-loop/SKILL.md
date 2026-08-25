---
name: verify-loop
description: Verificação completa do projeto com correção iterativa. Use quando o usuário pedir "verificar", "validar", "testar se tá funcionando", antes de commit/deploy, ou após qualquer edição de código relevante.
---

# Verify Loop — lint + build até passar

Fluxo obrigatório em loop até zerar erros (máximo 5 iterações; se não convergir, pare e reporte):

1. Rode `npm run lint` no diretório do projeto.
2. Corrija TODOS os erros e avisos encontrados (edite o código; nunca silencie regras com `eslint-disable` sem justificativa explícita do usuário).
3. Rode `npm run build`.
4. Se o build falhar, leia a mensagem de erro completa, corrija a causa raiz e repita.
5. Só reporte sucesso quando lint E build terminarem sem erro.

Regras:
- Corrija a causa raiz, não o sintoma (não remova código para fazer o erro sumir).
- Se um erro exigir decisão de produto (ex: deletar funcionalidade), pergunte ao usuário.
- No final, resuma em 1-3 linhas: o que estava quebrado, o que foi corrigido, status final.
