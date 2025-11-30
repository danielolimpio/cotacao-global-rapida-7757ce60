# Cotação de Hoje - Plataforma de Cotações Financeiras em Tempo Real

> Acompanhe cotações de moedas, criptomoedas e ações em tempo real com conversores, gráficos interativos e análises completas.

## 🌟 Recursos Principais

### 📊 Cotações em Tempo Real
- **Câmbio**: Dólar, Euro, Libra, Iene e 15+ moedas
- **Criptomoedas**: Bitcoin, Ethereum, BNB e 10+ cryptos
- **Ações**: B3, NYSE, NASDAQ e 20+ empresas
- **Forex**: 35+ pares principais, secundários e exóticos

### 🔄 Conversores de Moedas
- Conversores universais para todas moedas
- Conversão instantânea USD/BRL e EUR/BRL
- Suporte para criptomoedas
- Taxas atualizadas em tempo real

### 📈 Gráficos Interativos
- TradingView widgets integrados
- Timeframe padrão de 3 meses
- Análise técnica avançada
- Dados históricos completos

---

## 🚀 SEO e Otimizações

### ✅ Implementações de SEO

#### Meta Tags Dinâmicas
- ✅ Títulos únicos para cada página (50-60 caracteres)
- ✅ Meta descriptions otimizadas (150-160 caracteres)
- ✅ Keywords relevantes e naturais
- ✅ Canonical URLs em todas páginas
- ✅ Open Graph para redes sociais
- ✅ Twitter Cards configuradas

#### Dados Estruturados (Schema.org)
- ✅ **WebSite Schema** com SearchAction
- ✅ **Organization Schema** com avaliações (4.8/5)
- ✅ **FinancialProduct Schema** em cotações
- ✅ **FAQPage Schema** em páginas principais
- ✅ **CollectionPage Schema** em categorias
- ✅ **BreadcrumbList Schema** em todas páginas (120+ labels)
- ✅ **@graph** para múltiplos schemas

#### Redirecionamentos 301
- ✅ URLs antigas → URLs novas (SEO-friendly)
- ✅ Remoção de trailing slashes
- ✅ Remoção de .html de URLs antigas
- ✅ Forçar HTTPS para segurança
- ✅ 20+ redirecionamentos configurados

#### Página 404 Personalizada
- ✅ Design atraente e profissional
- ✅ Breadcrumbs para navegação
- ✅ Links para páginas populares
- ✅ Sugestões de conteúdo relevante
- ✅ Meta tag noindex configurada

#### Performance
- ✅ Cache headers otimizados
- ✅ GZIP compression habilitado
- ✅ Imagens com lazy loading
- ✅ CSS/JS minificados
- ✅ Core Web Vitals otimizados

### 📚 Documentação SEO
- [`SEO-IMPROVEMENTS.md`](./SEO-IMPROVEMENTS.md) - Melhorias implementadas
- [`BREADCRUMB-SCHEMA-GUIDE.md`](./BREADCRUMB-SCHEMA-GUIDE.md) - Guia completo de breadcrumbs
- [`SCHEMA-EXAMPLES.md`](./SCHEMA-EXAMPLES.md) - Exemplos de schemas JSON-LD
- [`SEO-CHECKLIST.md`](./SEO-CHECKLIST.md) - Checklist de manutenção
- [`SEO-IMPLEMENTATION-GUIDE.md`](./SEO-IMPLEMENTATION-GUIDE.md) - Guia de implementação

---

## 🛠️ Tecnologias

- **Framework**: React 18 + Vite
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS + shadcn/ui
- **Roteamento**: React Router v6
- **SEO**: react-helmet-async
- **APIs**: Frankfurter (Forex) + CoinGecko (Crypto)
- **Gráficos**: TradingView Widgets
- **Formulários**: React Hook Form + Zod

---

## 📦 Estrutura do Projeto

```
cotacao-de-hoje/
├── public/
│   ├── .htaccess              # Redirecionamentos 301 e cache
│   ├── sitemap.xml            # Sitemap para SEO
│   ├── robots.txt             # Instruções para crawlers
│   └── og-image.webp          # Imagem Open Graph
├── src/
│   ├── components/
│   │   ├── SEO.tsx           # Componente de meta tags
│   │   ├── Breadcrumbs.tsx   # Navegação breadcrumb
│   │   ├── Layout.tsx        # Layout principal
│   │   └── ui/               # Componentes shadcn/ui
│   ├── pages/
│   │   ├── Index.tsx         # Página inicial
│   │   ├── NotFound.tsx      # Página 404 personalizada
│   │   ├── cambio/           # Páginas de câmbio
│   │   ├── crypto/           # Páginas de crypto
│   │   ├── acoes/            # Páginas de ações
│   │   └── forex/            # Páginas de forex
│   ├── utils/
│   │   └── seoData.ts        # Dados centralizados de SEO
│   └── hooks/
│       └── useRealTimeQuotes.ts # Hook para cotações
├── SEO-IMPROVEMENTS.md        # Documentação de SEO
├── SCHEMA-EXAMPLES.md         # Exemplos de schemas
└── SEO-CHECKLIST.md          # Checklist de SEO
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ e npm instalados
- [Instalar com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Instalação

```bash
# Clone o repositório
git clone <YOUR_GIT_URL>

# Entre na pasta
cd <YOUR_PROJECT_NAME>

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Preview do build
npm run preview
```

---

## 📝 Como Adicionar Nova Página

### 1. Adicionar SEO Data

```typescript
// Em src/utils/seoData.ts
'/nova-pagina': {
  title: 'Título SEO Otimizado (50-60 chars)',
  description: 'Descrição clara e atrativa (150-160 chars)',
  keywords: 'keyword1, keyword2, keyword3',
  canonical: 'https://cotacaodehoje.com/nova-pagina',
  schema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Nome da Página"
  }
}
```

### 2. Criar Componente da Página

```tsx
// Em src/pages/NovaPagina.tsx
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const NovaPagina = () => {
  return (
    <Layout>
      <SEO path="/nova-pagina" />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        <h1>Título da Nova Página</h1>
        {/* Conteúdo */}
      </div>
    </Layout>
  );
};

export default NovaPagina;
```

### 3. Adicionar Rota

```tsx
// Em src/App.tsx
import NovaPagina from "./pages/NovaPagina";

// Dentro de <Routes>
<Route path="/nova-pagina" element={<NovaPagina />} />
```

### 4. Atualizar Sitemap

```xml
<!-- Em public/sitemap.xml -->
<url>
  <loc>https://cotacaodehoje.com/nova-pagina</loc>
  <changefreq>daily</changefreq>
  <priority>0.8</priority>
</url>
```

---

## 🔧 Ferramentas de Validação

### SEO e Schema
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)

### Performance
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Mobile
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## 📊 APIs Utilizadas

### Frankfurter API (Câmbio)
- **Endpoint**: `https://api.frankfurter.app`
- **Taxas**: Gratuito, sem API key
- **Update**: Diário (dias úteis)
- **Moedas**: 30+ pares de moedas

### CoinGecko API (Criptomoedas)
- **Endpoint**: `https://api.coingecko.com/api/v3`
- **Taxas**: Gratuito, limite de 50 req/min
- **Update**: Tempo real
- **Cryptos**: 10.000+ criptomoedas

### TradingView Widgets (Gráficos)
- **Tipo**: Widget embed gratuito
- **Customização**: Cores, timeframe, indicadores
- **Update**: Tempo real

---

## 🎯 Roadmap

### Em Desenvolvimento
- [ ] Sistema de notificações de preços
- [ ] Alertas personalizados por email
- [ ] Comparador de corretoras
- [ ] API pública de cotações

### Próximas Funcionalidades
- [ ] Histórico de cotações
- [ ] Calculadora de impostos
- [ ] Blog educacional
- [ ] Modo escuro/claro

---

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 📞 Contato e Suporte

- **Website**: [cotacaodehoje.com.br](https://cotacaodehoje.com.br)
- **Lovable Project**: [Ver no Lovable](https://lovable.dev/projects/30d92094-541a-4e10-a5b6-f82d8d868432)
- **Documentação**: Arquivos `.md` neste repositório

---

## 📚 Recursos Adicionais

- [Documentação do React](https://react.dev/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)

---

**Desenvolvido com ❤️ usando [Lovable](https://lovable.dev)**
