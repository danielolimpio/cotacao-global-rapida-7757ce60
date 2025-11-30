# Exemplos de Schema.org para Rich Snippets

Este guia mostra como adicionar diferentes tipos de schema JSON-LD para melhorar SEO e gerar rich snippets no Google.

## 📊 Tipos de Schema Disponíveis

### 1. Product + Offer (Cotações com Preço)

```typescript
schema: {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Dólar Americano",
  "description": "Cotação do dólar em tempo real",
  "image": "https://cotacaodehoje.com/images/usd.png",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "BRL",
    "price": "5.45", // Preço dinâmico
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2025-12-31",
    "seller": {
      "@type": "Organization",
      "name": "Cotação de Hoje"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "2547"
  }
}
```

**Resultado:** Exibe preço, disponibilidade e avaliações nos resultados do Google.

---

### 2. FAQPage (Perguntas Frequentes)

```typescript
schema: {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qual a cotação do dólar hoje?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A cotação do dólar hoje está atualizada em tempo real. Consulte o conversor acima para ver o valor exato."
      }
    },
    {
      "@type": "Question",
      "name": "Como converter dólar para real?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use nosso conversor: digite o valor em dólares e veja instantaneamente em reais."
      }
    }
  ]
}
```

**Resultado:** Aparece na seção "Pessoas também perguntam" do Google.

---

### 3. BreadcrumbList (Migalhas de Pão)

```typescript
schema: {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": "https://cotacaodehoje.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Câmbio",
      "item": "https://cotacaodehoje.com/cambio"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Dólar Hoje",
      "item": "https://cotacaodehoje.com/cambio/dolar-hoje"
    }
  ]
}
```

**Resultado:** Breadcrumbs aparecem nos resultados de busca.

---

### 4. HowTo (Guias e Tutoriais)

```typescript
schema: {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter Dólar para Real",
  "description": "Aprenda a converter dólares para reais usando nossa ferramenta",
  "image": "https://cotacaodehoje.com/images/tutorial.jpg",
  "totalTime": "PT2M", // 2 minutos
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Acesse o Conversor",
      "text": "Encontre o conversor de moedas no topo da página"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Digite o Valor",
      "text": "Insira o valor em dólares que deseja converter"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Veja o Resultado",
      "text": "O valor em reais aparece automaticamente com a cotação atual"
    }
  ]
}
```

**Resultado:** Aparece como guia passo a passo nos resultados.

---

### 5. Article (Artigos e Blog Posts)

```typescript
schema: {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Como o Dólar Afeta a Economia Brasileira",
  "description": "Entenda a relação entre a cotação do dólar e a economia do Brasil",
  "image": "https://cotacaodehoje.com/images/article.jpg",
  "author": {
    "@type": "Organization",
    "name": "Cotação de Hoje"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Cotação de Hoje",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cotacaodehoje.com/logo.png"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-20"
}
```

**Resultado:** Aparece como notícia/artigo com data de publicação.

---

### 6. Review + AggregateRating (Avaliações)

```typescript
schema: {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Conversor de Moedas - Cotação de Hoje",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "2547"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "João Silva"
      },
      "datePublished": "2024-01-10",
      "reviewBody": "Excelente ferramenta para acompanhar cotações em tempo real!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ]
}
```

**Resultado:** Estrelas de avaliação aparecem nos resultados de busca.

---

### 7. VideoObject (Vídeos)

```typescript
schema: {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Como Usar o Conversor de Moedas",
  "description": "Tutorial em vídeo mostrando como converter moedas",
  "thumbnailUrl": "https://cotacaodehoje.com/video-thumbnail.jpg",
  "uploadDate": "2024-01-15",
  "duration": "PT3M45S", // 3 minutos e 45 segundos
  "contentUrl": "https://cotacaodehoje.com/videos/tutorial.mp4",
  "embedUrl": "https://cotacaodehoje.com/embed/tutorial"
}
```

**Resultado:** Vídeo aparece com thumbnail nos resultados.

---

### 8. Organization (Empresa)

```typescript
schema: {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cotação de Hoje",
  "url": "https://cotacaodehoje.com",
  "logo": "https://cotacaodehoje.com/logo.png",
  "description": "Plataforma líder em cotações financeiras em tempo real",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-1234-5678",
    "contactType": "customer service",
    "areaServed": "BR",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://facebook.com/cotacaodehoje",
    "https://twitter.com/cotacaodehoje",
    "https://instagram.com/cotacaodehoje"
  ]
}
```

**Resultado:** Painel de conhecimento do Google com informações da empresa.

---

### 9. Event (Eventos de Mercado)

```typescript
schema: {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Anúncio da Taxa SELIC",
  "startDate": "2024-02-20T14:00-03:00",
  "endDate": "2024-02-20T16:00-03:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://cotacaodehoje.com/eventos/selic"
  },
  "description": "Acompanhe ao vivo a divulgação da nova taxa SELIC",
  "organizer": {
    "@type": "Organization",
    "name": "Banco Central do Brasil"
  }
}
```

**Resultado:** Aparece como evento no Google com data e hora.

---

### 10. @graph (Múltiplos Schemas)

Use `@graph` para combinar vários schemas numa mesma página:

```typescript
schema: {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://cotacaodehoje.com/dolar#webpage",
      "name": "Dólar Hoje"
    },
    {
      "@type": "FinancialProduct",
      "@id": "https://cotacaodehoje.com/dolar#product",
      "name": "Dólar Americano (USD)"
    },
    {
      "@type": "FAQPage",
      "@id": "https://cotacaodehoje.com/dolar#faq",
      "mainEntity": [...]
    }
  ]
}
```

**Resultado:** Combina vários rich snippets em uma única página.

---

## 🎯 Melhores Práticas

### 1. Sempre Incluir:
- ✅ `@context: "https://schema.org"`
- ✅ `@type` apropriado
- ✅ `name` e `description`
- ✅ IDs únicos com `@id` quando usar @graph

### 2. Para Produtos/Serviços:
- ✅ Adicionar `aggregateRating`
- ✅ Incluir `offers` com preço
- ✅ Usar imagens de alta qualidade

### 3. Para Conteúdo:
- ✅ Adicionar `author` e `publisher`
- ✅ Incluir datas (`datePublished`, `dateModified`)
- ✅ Usar FAQPage para perguntas comuns

### 4. Validação:
- 🔍 Testar com [Rich Results Test](https://search.google.com/test/rich-results)
- 📊 Monitorar no Google Search Console
- ✅ Validar com [Schema Validator](https://validator.schema.org/)

---

## 📚 Recursos

- [Schema.org Documentation](https://schema.org/)
- [Google Search Gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [JSON-LD Specification](https://json-ld.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## 💡 Dicas Avançadas

### Preços Dinâmicos
Para cotações em tempo real, considere gerar o schema server-side ou usar dados estruturados dinâmicos.

### Imagens
Sempre use imagens de alta qualidade (mínimo 1200x630px) para Open Graph e Schema.

### Combinação
Combine múltiplos schemas com `@graph` para rich snippets mais completos.

### Atualização
Atualize `dateModified` sempre que modificar conteúdo importante.
