# ✅ Checklist de SEO - Cotação de Hoje

Use este checklist ao adicionar novas páginas ou revisar SEO existente.

## 📄 Para Cada Nova Página

### Meta Tags Básicas
- [ ] Título único (50-60 caracteres)
- [ ] Meta description única (150-160 caracteres)
- [ ] Keywords relevantes
- [ ] Canonical URL configurada
- [ ] Open Graph tags (título, descrição, imagem)
- [ ] Twitter Card tags

### Dados Estruturados (Schema.org)
- [ ] Tipo de schema apropriado escolhido
- [ ] @context e @type definidos
- [ ] Name e description incluídos
- [ ] Provider/Organization adicionado
- [ ] @id únicos se usar @graph
- [ ] FAQPage se aplicável
- [ ] Testado no Rich Results Test

### Conteúdo
- [ ] H1 único e descritivo
- [ ] H2-H6 hierárquicos e com keywords
- [ ] Breadcrumbs implementados
- [ ] Alt text em todas imagens
- [ ] Links internos relevantes
- [ ] Call-to-action claro
- [ ] Conteúdo original (min. 300 palavras)

### Performance
- [ ] Imagens otimizadas (WebP quando possível)
- [ ] Lazy loading de imagens
- [ ] CSS/JS minificados
- [ ] Cache configurado
- [ ] GZIP habilitado

### URLs e Redirecionamentos
- [ ] URL limpa e descritiva
- [ ] Sem caracteres especiais na URL
- [ ] Redirecionamento 301 se mudar URL
- [ ] Atualizar sitemap.xml

---

## 🔍 Auditoria de SEO Mensal

### Technical SEO
- [ ] Verificar erros no Google Search Console
- [ ] Checar páginas com problemas de indexação
- [ ] Revisar Core Web Vitals
- [ ] Verificar links quebrados
- [ ] Testar velocidade de carregamento
- [ ] Validar sitemap.xml
- [ ] Checar robots.txt

### On-Page SEO
- [ ] Revisar títulos duplicados
- [ ] Verificar meta descriptions duplicadas
- [ ] Checar canonical URLs
- [ ] Validar estrutura de headings
- [ ] Verificar densidade de keywords
- [ ] Revisar alt texts de imagens

### Dados Estruturados
- [ ] Testar schemas no Rich Results Test
- [ ] Verificar erros no Search Console
- [ ] Atualizar FAQs baseado em busca real
- [ ] Adicionar novos schemas quando aplicável
- [ ] Validar Organization schema

### Conteúdo
- [ ] Atualizar cotações e dados
- [ ] Revisar artigos antigos
- [ ] Adicionar novas FAQs
- [ ] Atualizar breadcrumbs se necessário
- [ ] Verificar links internos

### Links
- [ ] Verificar backlinks novos
- [ ] Checar links quebrados (404s)
- [ ] Atualizar links internos
- [ ] Revisar anchor texts
- [ ] Verificar redirecionamentos 301

---

## 🎯 KPIs para Monitorar

### Search Console
- [ ] Impressões (meta: crescimento mensal)
- [ ] Cliques (meta: crescimento mensal)
- [ ] CTR médio (meta: > 3%)
- [ ] Posição média (meta: top 10)
- [ ] Páginas indexadas (meta: 100%)

### Analytics
- [ ] Tráfego orgânico (meta: crescimento)
- [ ] Taxa de rejeição (meta: < 60%)
- [ ] Tempo na página (meta: > 2min)
- [ ] Páginas por sessão (meta: > 2)
- [ ] Taxa de conversão

### Performance
- [ ] PageSpeed Score (meta: > 90)
- [ ] LCP - Largest Contentful Paint (meta: < 2.5s)
- [ ] FID - First Input Delay (meta: < 100ms)
- [ ] CLS - Cumulative Layout Shift (meta: < 0.1)
- [ ] TTFB - Time to First Byte (meta: < 600ms)

---

## 🚀 Otimizações Prioritárias

### Alta Prioridade (Fazer Agora)
- [ ] Corrigir erros 404 e adicionar redirecionamentos
- [ ] Adicionar FAQs em páginas principais
- [ ] Implementar BreadcrumbList schema
- [ ] Otimizar imagens (converter para WebP)
- [ ] Melhorar Core Web Vitals

### Média Prioridade (Próximos 30 dias)
- [ ] Adicionar mais avaliações (Review schema)
- [ ] Criar conteúdo educacional (HowTo schema)
- [ ] Implementar preços dinâmicos (Offer schema)
- [ ] Adicionar mais links internos
- [ ] Criar páginas de categorias extras

### Baixa Prioridade (Próximos 90 dias)
- [ ] Criar blog/artigos educacionais
- [ ] Adicionar vídeos tutoriais (VideoObject schema)
- [ ] Implementar eventos de mercado (Event schema)
- [ ] Expandir redes sociais
- [ ] Criar newsletter

---

## 📊 Ferramentas Recomendadas

### Análise e Monitoramento
- [ ] Google Search Console (configurado)
- [ ] Google Analytics (configurado)
- [ ] Bing Webmaster Tools
- [ ] Screaming Frog (auditoria mensal)

### Validação
- [ ] Rich Results Test (toda mudança)
- [ ] Schema Markup Validator
- [ ] PageSpeed Insights
- [ ] GTmetrix
- [ ] Mobile-Friendly Test

### Keywords e Conteúdo
- [ ] Google Keyword Planner
- [ ] Answer The Public
- [ ] Google Trends
- [ ] Ubersuggest
- [ ] SEMrush/Ahrefs

---

## 🔧 Manutenção Semanal

### Segunda-feira
- [ ] Revisar erros do Search Console
- [ ] Verificar novas páginas indexadas
- [ ] Checar posições de keywords principais

### Quarta-feira
- [ ] Atualizar cotações se necessário
- [ ] Adicionar novas FAQs baseadas em dúvidas
- [ ] Verificar velocidade do site

### Sexta-feira
- [ ] Revisar analytics da semana
- [ ] Publicar novo conteúdo se houver
- [ ] Backup de dados importantes

---

## 📝 Template: Adicionando Nova Página

```typescript
// 1. Adicionar em src/utils/seoData.ts
'/nova-pagina': {
  title: 'Título Otimizado para SEO (50-60 chars)',
  description: 'Descrição clara e atrativa (150-160 chars)',
  keywords: 'keyword1, keyword2, keyword3',
  canonical: 'https://cotacaodehoje.com/nova-pagina',
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://cotacaodehoje.com/nova-pagina#webpage",
        "name": "Nome da Página"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [...]
      }
    ]
  }
}

// 2. Na página React
<Layout>
  <SEO path="/nova-pagina" />
  <Breadcrumbs />
  
  <h1>Título Principal (H1)</h1>
  
  {/* Conteúdo */}
</Layout>

// 3. Adicionar redirecionamento se necessário
// Em public/.htaccess
RewriteRule ^url-antiga/?$ /nova-pagina [R=301,L]

// 4. Atualizar sitemap.xml
<url>
  <loc>https://cotacaodehoje.com/nova-pagina</loc>
  <changefreq>daily</changefreq>
  <priority>0.8</priority>
</url>

// 5. Testar
// - Rich Results Test
// - PageSpeed Insights
// - Mobile-Friendly Test
```

---

## ⚠️ Erros Comuns a Evitar

### ❌ Não Fazer
- Duplicar títulos/descriptions
- Usar keywords stuffing
- Criar conteúdo duplicado
- Esquecer canonical URLs
- Ignorar mobile optimization
- Ter links quebrados
- Usar texto em imagens (sem alt)
- Esqucer de testar schemas

### ✅ Sempre Fazer
- Títulos únicos e descritivos
- Keywords naturais no conteúdo
- Conteúdo original e útil
- Canonical em todas páginas
- Design mobile-first
- Verificar links regularmente
- Alt text descritivo em imagens
- Validar schemas antes de publicar

---

## 📞 Contatos Úteis

- **Google Search Console**: search.google.com/search-console
- **Rich Results Test**: search.google.com/test/rich-results
- **PageSpeed Insights**: pagespeed.web.dev
- **Schema.org**: schema.org
- **Search Central**: developers.google.com/search

---

**Última atualização:** Novembro 2025
**Próxima revisão:** Dezembro 2025
