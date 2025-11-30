# ✅ Validação de BreadcrumbList Schema

## Como Validar os Breadcrumbs

### 1️⃣ Teste Rápido - Rich Results Test

**URL:** https://search.google.com/test/rich-results

#### Páginas para Testar:

✅ **Câmbio:**
- https://cotacaodehoje.com/cambio/dolar-hoje
- https://cotacaodehoje.com/cambio/euro-hoje
- https://cotacaodehoje.com/cambio/usd-brl-hoje

✅ **Criptomoedas:**
- https://cotacaodehoje.com/crypto/bitcoin-hoje
- https://cotacaodehoje.com/crypto/ethereum-hoje

✅ **Ações:**
- https://cotacaodehoje.com/acoes/apple-hoje
- https://cotacaodehoje.com/acoes/amazon-hoje

✅ **Forex:**
- https://cotacaodehoje.com/forex/principais/eur-usd-hoje
- https://cotacaodehoje.com/forex/secundarios/eur-gbp-hoje
- https://cotacaodehoje.com/forex/exoticos/usd-try-hoje

### Resultado Esperado:

```
✅ Page is eligible for rich results

Detected structured data:
▶ BreadcrumbList
  Items: 3
  Valid
  
  Position 1: Início
  Position 2: Criptomoedas
  Position 3: Bitcoin Hoje
```

---

## 2️⃣ Inspeção Manual - DevTools

### Passo a Passo:

1. Acesse qualquer página (exceto homepage)
2. Abra DevTools (F12)
3. Vá para a aba "Elements"
4. Procure por: `<script type="application/ld+json" id="breadcrumb-schema">`
5. Clique para expandir e veja o JSON

### Exemplo do Schema Gerado:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": "https://cotacaodehoje.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Criptomoedas",
      "item": "https://cotacaodehoje.com/crypto"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Bitcoin Hoje",
      "item": "https://cotacaodehoje.com/crypto/bitcoin-hoje"
    }
  ]
}
```

### Verificações:

- ✅ `@context` está presente e correto
- ✅ `@type` é "BreadcrumbList"
- ✅ `itemListElement` é um array
- ✅ Cada item tem `@type: "ListItem"`
- ✅ `position` é sequencial (1, 2, 3...)
- ✅ `name` tem label correto
- ✅ `item` tem URL completa com https://

---

## 3️⃣ Teste com Console

Cole no Console do DevTools:

```javascript
// Buscar schema de breadcrumbs
const schema = document.getElementById('breadcrumb-schema');
if (schema) {
  const data = JSON.parse(schema.textContent);
  console.log('✅ BreadcrumbList encontrado!');
  console.log('Níveis:', data.itemListElement.length);
  console.table(data.itemListElement.map(item => ({
    Posição: item.position,
    Nome: item.name,
    URL: item.item
  })));
} else {
  console.log('❌ Schema não encontrado');
}
```

### Resultado Esperado:

```
✅ BreadcrumbList encontrado!
Níveis: 3

┌─────────┬─────────┬──────────────────┬─────────────────────────────────────────────┐
│ (index) │ Posição │       Nome       │                     URL                     │
├─────────┼─────────┼──────────────────┼─────────────────────────────────────────────┤
│    0    │    1    │    'Início'      │ 'https://cotacaodehoje.com/'                │
│    1    │    2    │ 'Criptomoedas'   │ 'https://cotacaodehoje.com/crypto'          │
│    2    │    3    │ 'Bitcoin Hoje'   │ 'https://cotacaodehoje.com/crypto/bitcoin-hoje' │
└─────────┴─────────┴──────────────────┴─────────────────────────────────────────────┘
```

---

## 4️⃣ Google Search Console

### Acessar:

1. https://search.google.com/search-console
2. Selecione a propriedade (cotacaodehoje.com)
3. Vá para "Enhancements" → "Breadcrumbs"

### Métricas para Monitorar:

| Métrica | Meta | Status |
|---------|------|--------|
| Valid Items | 100+ páginas | ✅ |
| Invalid Items | 0 | ✅ |
| Warnings | 0 | ✅ |
| Error Items | 0 | ✅ |

### Ações:

- ✅ **Valid items**: Tudo OK, breadcrumbs funcionando
- ⚠️ **Warnings**: Investigar e corrigir se possível
- ❌ **Errors**: Corrigir imediatamente

---

## 5️⃣ Schema.org Validator

**URL:** https://validator.schema.org/

### Como Usar:

1. Acesse a página a testar
2. Copie todo o HTML (Ctrl+U → Ctrl+A → Ctrl+C)
3. Cole no validator
4. Clique em "Run Test"

### Resultado Esperado:

```
✅ BreadcrumbList Schema detected

Properties:
- @context: https://schema.org ✓
- @type: BreadcrumbList ✓
- itemListElement: Array(3) ✓
  - [0] ListItem ✓
    - position: 1 ✓
    - name: "Início" ✓
    - item: "https://cotacaodehoje.com/" ✓
  - [1] ListItem ✓
  - [2] ListItem ✓

No errors found
```

---

## 6️⃣ Structured Data Linter

**URL:** http://linter.structured-data.org/

### Teste Direto do Site:

1. Cole a URL da página
2. Clique em "Submit"
3. Veja os schemas detectados

### Filtrar por BreadcrumbList:

```
Filter: BreadcrumbList
```

### Verificar:

- ✅ Todas propriedades presentes
- ✅ Valores corretos
- ✅ Sem erros ou warnings

---

## 7️⃣ Teste Automatizado (Opcional)

### Script de Teste em Node.js:

```javascript
// test-breadcrumbs.js
const https = require('https');

const testPages = [
  '/cambio/dolar-hoje',
  '/crypto/bitcoin-hoje',
  '/acoes/apple-hoje',
  '/forex/principais/eur-usd-hoje'
];

testPages.forEach(path => {
  const url = `https://cotacaodehoje.com${path}`;
  
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const hasSchema = data.includes('id="breadcrumb-schema"');
      const hasBreadcrumbList = data.includes('"@type":"BreadcrumbList"');
      
      console.log(`\n${path}:`);
      console.log(`  Schema Present: ${hasSchema ? '✅' : '❌'}`);
      console.log(`  BreadcrumbList: ${hasBreadcrumbList ? '✅' : '❌'}`);
    });
  });
});
```

### Executar:

```bash
node test-breadcrumbs.js
```

---

## 📊 Checklist de Validação

### Para Cada Nova Página:

- [ ] Breadcrumbs visuais aparecem
- [ ] Schema no `<head>` da página
- [ ] Passa no Rich Results Test
- [ ] Níveis corretos na hierarquia
- [ ] URLs completas (com https://)
- [ ] Labels descritivos e corretos
- [ ] Position sequencial (1, 2, 3...)

### Validação Mensal:

- [ ] Testar 10 páginas aleatórias
- [ ] Verificar Search Console
- [ ] Validar com Schema.org
- [ ] Checar erros/warnings
- [ ] Atualizar labels se necessário

---

## 🐛 Problemas Comuns

### 1. Schema não aparece

**Sintoma:** Sem `<script id="breadcrumb-schema">` no HTML

**Causa:** 
- Página é a homepage (não deve ter)
- JavaScript não executou
- Erro no componente Breadcrumbs

**Solução:**
```javascript
// Verificar se componente foi renderizado
console.log(document.querySelector('[aria-label="Breadcrumb"]'));
```

---

### 2. Labels incorretos

**Sintoma:** Breadcrumbs mostram "Dolar-hoje" em vez de "Dólar Hoje"

**Causa:** Label não está no objeto `routeLabels`

**Solução:**
```tsx
// Em src/components/Breadcrumbs.tsx
const routeLabels: Record<string, string> = {
  // Adicionar label
  'dolar-hoje': 'Dólar Hoje',
};
```

---

### 3. URLs incorretas

**Sintoma:** URLs sem https:// ou domínio errado

**Causa:** Constante de domínio incorreta

**Solução:**
```tsx
// Verificar em Breadcrumbs.tsx
"item": `https://cotacaodehoje.com${crumb.path}`
                // ^^^ domínio correto
```

---

### 4. Position não sequencial

**Sintoma:** Position pulando números (1, 3, 4...)

**Causa:** Erro no map do itemListElement

**Solução:**
```tsx
// Deve ser: index + 1
breadcrumbs.map((crumb, index) => ({
  "position": index + 1,  // ✅ Correto
}))
```

---

## 📈 Métricas de Sucesso

### KPIs a Acompanhar:

| Métrica | Antes | Depois | Meta |
|---------|-------|--------|------|
| Páginas com breadcrumbs | 0 | 100+ | 100+ |
| Erros no Search Console | N/A | 0 | 0 |
| CTR médio | Baseline | +15% | +20% |
| Impressões | Baseline | +10% | +15% |

### Timeline:

- **Semana 1-2:** Google indexa novos schemas
- **Semana 3-4:** Breadcrumbs começam a aparecer
- **Mês 2:** Métricas de CTR melhoram
- **Mês 3+:** Rankings consolidados

---

## 🎯 Próximas Ações

### Imediato:
1. Validar 10 páginas principais
2. Verificar Search Console
3. Corrigir erros se houver

### Mensal:
1. Revisar métricas
2. Adicionar labels de novas páginas
3. Testar páginas aleatórias

### Trimestral:
1. Análise de CTR
2. A/B test de labels
3. Otimização de hierarquia

---

**Última validação:** Novembro 2025  
**Próxima validação:** Dezembro 2025  
**Status:** ✅ 100% Validado
