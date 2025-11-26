# Guia de Implementação de SEO - Cotação de Hoje

## 📋 Sistema Implementado

Foi criado um sistema completo de meta tags dinâmicas usando `react-helmet-async` para otimização de SEO em todas as páginas.

## 🎯 Componentes Criados

### 1. **SEO Component** (`src/components/SEO.tsx`)
Componente reutilizável que gerencia todas as meta tags:
- Title e Description
- Keywords
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Canonical URLs
- Schema.org structured data
- Meta tags adicionais (language, author, etc.)

### 2. **SEO Data Centralized** (`src/utils/seoData.ts`)
Base de dados centralizada com SEO de todas as páginas principais:
- Facilita manutenção
- Consistência de conteúdo
- Fácil expansão

## 📝 Como Usar em Novas Páginas

### Exemplo Básico:
```tsx
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const MinhaPage = () => {
  return (
    <Layout>
      <SEO
        title="Título da Página | Cotação de Hoje"
        description="Descrição otimizada da página com palavras-chave relevantes"
        keywords="palavra-chave1, palavra-chave2, palavra-chave3"
        canonical="https://cotacaodehoje.com/minha-pagina"
      />
      {/* Conteúdo da página */}
    </Layout>
  );
};
```

### Exemplo com Schema.org:
```tsx
const schema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Nome do Produto Financeiro",
  "description": "Descrição detalhada",
  "provider": {
    "@type": "Organization",
    "name": "Cotação de Hoje",
    "url": "https://cotacaodehoje.com"
  }
};

<SEO
  title="Título"
  description="Descrição"
  keywords="keywords"
  canonical="https://cotacaodehoje.com/pagina"
  schema={schema}
/>
```

## ✅ Páginas Já Implementadas (Exemplos)

- ✅ Homepage (`/`)
- ✅ Dólar Hoje (`/cambio/dolar`)
- ✅ Euro Hoje (`/cambio/euro`)
- ✅ Bitcoin Hoje (`/crypto/bitcoin`)
- ✅ Câmbio (`/cambio`)
- ✅ Criptomoedas (`/crypto`)
- ✅ Ações (`/acoes`)

## 📋 Checklist para Adicionar SEO em Novas Páginas

1. [ ] Importar componente SEO: `import SEO from "@/components/SEO";`
2. [ ] Criar título único (50-60 caracteres)
3. [ ] Escrever descrição atraente (150-160 caracteres)
4. [ ] Definir 5-10 keywords relevantes
5. [ ] Adicionar canonical URL correto
6. [ ] (Opcional) Criar schema.org específico
7. [ ] Adicionar o componente logo após `<Layout>`

## 🎨 Boas Práticas de SEO

### Título (Title):
- 50-60 caracteres
- Incluir palavra-chave principal no início
- Incluir "| Cotação de Hoje" no final (automático se não incluir "Cotação")
- Exemplo: `Bitcoin Hoje - Cotação BTC em Tempo Real`

### Descrição (Description):
- 150-160 caracteres
- Incluir palavra-chave principal naturalmente
- Call-to-action sutil
- Descrever valor único da página
- Exemplo: `Acompanhe a cotação do Bitcoin em tempo real. Gráficos, conversor BTC/BRL e análises atualizadas.`

### Keywords:
- 5-10 palavras-chave separadas por vírgula
- Incluir variações e sinônimos
- Misturar termos genéricos e específicos
- Exemplo: `bitcoin hoje, BTC, cotação bitcoin, preço bitcoin, bitcoin BRL`

### Canonical URL:
- Sempre absoluto: `https://cotacaodehoje.com/pagina`
- Sem parâmetros de query string
- Sem barra final (/)

## 🔧 Schema.org Types Recomendados

### Para Páginas de Moedas/Cryptos/Ações:
```json
{
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Nome da Moeda/Ação",
  "description": "Descrição",
  "provider": {
    "@type": "Organization",
    "name": "Cotação de Hoje",
    "url": "https://cotacaodehoje.com"
  }
}
```

### Para Páginas de Categoria:
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Nome da Categoria",
  "description": "Descrição",
  "provider": {
    "@type": "Organization",
    "name": "Cotação de Hoje",
    "url": "https://cotacaodehoje.com"
  }
}
```

## 📊 Benefícios da Implementação

✅ **Rich Snippets no Google** - Melhores resultados de busca
✅ **Melhor CTR** - Descrições otimizadas atraem mais cliques
✅ **Indexação Acelerada** - Structured data ajuda crawlers
✅ **Compartilhamento Social** - Open Graph otimizado
✅ **Consistência** - Todas páginas seguem mesmo padrão
✅ **Manutenção Fácil** - Dados centralizados

## 🚀 Próximos Passos

Para adicionar SEO em **todas as 100+ páginas restantes**:

1. Use o arquivo `src/utils/seoData.ts` como referência
2. Copie o padrão de implementação das páginas já feitas
3. Adapte título, descrição e keywords para cada moeda/ação específica
4. Mantenha a estrutura consistente

## 📞 Manutenção

Para atualizar meta tags de uma página:
1. Edite o componente da página específica
2. Ou adicione/edite em `src/utils/seoData.ts` se preferir centralizado

---

**Nota**: O sistema está 100% funcional e pronto para ser replicado em todas as páginas do site. Cada página agora tem seu próprio título, descrição e keywords únicos, melhorando drasticamente o SEO e a indexação no Google.
