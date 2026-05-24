// SEO Data for all pages - Easy to maintain and update

// SEO Data for all pages

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: object;
}

export const seoData: Record<string, PageSEO> = {
  // Main Pages
  '/': {
    title: 'Cotações Hoje - Dólar, Euro, Bitcoin e Ações em Tempo Real',
    description: 'Acompanhe cotações do dólar, euro, bitcoin, ações e criptomoedas em tempo real. Conversor de moedas, gráficos atualizados e análises do mercado financeiro.',
    keywords: 'cotação hoje, dólar hoje, euro hoje, bitcoin hoje, cotação tempo real, conversão moedas, câmbio, criptomoedas, ações, forex, mercado financeiro',
    canonical: 'https://cotacaodehoje.com',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://cotacaodehoje.com/#website",
          "name": "Cotação de Hoje",
          "description": "Plataforma de cotações financeiras em tempo real",
          "url": "https://cotacaodehoje.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://cotacaodehoje.com/busca?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "Organization",
          "@id": "https://cotacaodehoje.com/#organization",
          "name": "Cotação de Hoje",
          "url": "https://cotacaodehoje.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://cotacaodehoje.com/og-image.webp"
          },
          "sameAs": [
            "https://cotacaodehoje.com"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "2547",
            "bestRating": "5",
            "worstRating": "1"
          }
        }
      ]
    }
  },
  
  // 404 Page
  '/404': {
    title: '404 - Página Não Encontrada | Cotação de Hoje',
    description: 'Página não encontrada. Volte para o início e acesse cotações em tempo real de dólar, euro, bitcoin e ações.',
    keywords: '404, página não encontrada, erro 404',
    canonical: 'https://cotacaodehoje.com/404',
    noindex: true
  },
  
  // Câmbio
  '/cambio': {
    title: 'Câmbio - Cotações de Moedas em Tempo Real',
    description: 'Cotações de câmbio em tempo real: dólar, euro, libra, iene e todas principais moedas. Conversores, gráficos atualizados e taxas de câmbio do dia.',
    keywords: 'câmbio, cotação moedas, câmbio hoje, taxa de câmbio, conversão moedas, dólar real, euro real, moeda estrangeira, forex, exchange rate',
    canonical: 'https://cotacaodehoje.com/cambio',
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Câmbio - Cotações de Moedas",
      "description": "Cotações das principais moedas mundiais em tempo real",
      "provider": {
        "@type": "Organization",
        "name": "Cotação de Hoje",
        "url": "https://cotacaodehoje.com"
      }
    }
  },
  '/cambio/dolar': {
    title: 'Dólar Hoje - Cotação USD/BRL em Tempo Real',
    description: 'Acompanhe a cotação do dólar americano (USD) hoje em tempo real. Conversor de dólar para real, gráficos atualizados e análise completa da moeda americana.',
    keywords: 'dólar hoje, cotação dólar, USD BRL, dólar americano, conversão dólar real, preço dólar, dólar tempo real, câmbio dólar',
    canonical: 'https://cotacaodehoje.com/cambio/dolar',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FinancialProduct",
          "@id": "https://cotacaodehoje.com/cambio/dolar#product",
          "name": "Dólar Americano (USD)",
          "description": "Cotação do Dólar Americano em tempo real com conversor e gráficos atualizados",
          "provider": {
            "@type": "Organization",
            "name": "Cotação de Hoje",
            "url": "https://cotacaodehoje.com"
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://cotacaodehoje.com/cambio/dolar#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Qual a cotação do dólar hoje?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A cotação do dólar hoje é atualizada em tempo real. Consulte o conversor acima para ver o valor exato neste momento."
              }
            },
            {
              "@type": "Question",
              "name": "Como converter dólar para real?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use nosso conversor de moedas acima. Digite o valor em dólares e veja instantaneamente o valor em reais com base na cotação comercial atual."
              }
            }
          ]
        }
      ]
    }
  },
  '/cambio/usd-brl': {
    title: 'Dólar x Real Hoje - Cotação USD/BRL em Tempo Real',
    description: 'Cotação USD/BRL atualizada em tempo real com gráficos interativos e conversor de moedas.',
    keywords: 'USD/BRL, dólar real, cotação dólar, câmbio hoje, dólar americano real',
    canonical: 'https://cotacaodehoje.com/cambio/usd-brl'
  },
  '/cambio/euro': {
    title: 'Euro Hoje - Cotação EUR/BRL em Tempo Real',
    description: 'Cotação do euro (EUR) hoje em tempo real. Conversor euro para real, gráficos ao vivo e análise da moeda europeia.',
    keywords: 'euro hoje, cotação euro, EUR BRL, euro real, conversão euro, preço euro, euro tempo real, câmbio euro',
    canonical: 'https://cotacaodehoje.com/cambio/euro',
    schema: {
      "@context": "https://schema.org",
      "@type": "FinancialProduct",
      "name": "Euro (EUR)",
      "description": "Cotação do Euro em tempo real com conversor e gráficos atualizados",
      "provider": {
        "@type": "Organization",
        "name": "Cotação de Hoje",
        "url": "https://cotacaodehoje.com"
      }
    }
  },
  '/cambio/eur-brl': {
    title: 'Euro x Real Hoje - Cotação EUR/BRL em Tempo Real',
    description: 'Cotação EUR/BRL atualizada em tempo real com gráficos detalhados e conversor de moedas.',
    keywords: 'EUR/BRL, euro real, cotação euro, câmbio europa, euro brasileiro',
    canonical: 'https://cotacaodehoje.com/cambio/eur-brl'
  },
  '/cambio/libras': {
    title: 'Libra Esterlina Hoje - Cotação GBP em Tempo Real',
    description: 'Cotação da libra esterlina (GBP) hoje. Conversor de libra para real, gráficos atualizados e análise da moeda britânica.',
    keywords: 'libra hoje, cotação libra, GBP BRL, libra esterlina, conversão libra real, preço libra, libra tempo real',
    canonical: 'https://cotacaodehoje.com/cambio/libras'
  },
  '/cambio/gbp-brl': {
    title: 'Libra x Real Hoje - Cotação GBP/BRL em Tempo Real',
    description: 'Cotação GBP/BRL atualizada em tempo real com gráficos interativos.',
    keywords: 'GBP/BRL, libra real, cotação libra, câmbio reino unido, libra esterlina real',
    canonical: 'https://cotacaodehoje.com/cambio/gbp-brl'
  },
  '/cambio/iene': {
    title: 'Iene Hoje - Cotação JPY em Tempo Real',
    description: 'Cotação do Iene Japonês (JPY) em tempo real com gráficos e análises.',
    keywords: 'iene, JPY, cotação iene, câmbio japão, iene japonês',
    canonical: 'https://cotacaodehoje.com/cambio/iene'
  },
  '/cambio/franco-suico': {
    title: 'Franco Suíço Hoje - Cotação CHF em Tempo Real',
    description: 'Cotação do Franco Suíço (CHF) em tempo real com gráficos atualizados.',
    keywords: 'franco suíço, CHF, cotação franco, câmbio suíça, franco suico',
    canonical: 'https://cotacaodehoje.com/cambio/franco-suico'
  },
  '/cambio/cad-brl': {
    title: 'Dólar Canadense x Real - Cotação CAD/BRL em Tempo Real',
    description: 'Cotação CAD/BRL atualizada em tempo real com conversor de moedas.',
    keywords: 'CAD/BRL, dólar canadense, cotação CAD, câmbio canadá, dólar canadense real',
    canonical: 'https://cotacaodehoje.com/cambio/cad-brl'
  },
  '/cambio/peso-argentino': {
    title: 'Peso Argentino Hoje - Cotação ARS em Tempo Real',
    description: 'Cotação do Peso Argentino (ARS) em tempo real com gráficos.',
    keywords: 'peso argentino, ARS, cotação peso, câmbio argentina',
    canonical: 'https://cotacaodehoje.com/cambio/peso-argentino'
  },
  '/cambio/peso-chileno': {
    title: 'Peso Chileno Hoje - Cotação CLP em Tempo Real',
    description: 'Cotação do Peso Chileno (CLP) em tempo real com gráficos atualizados.',
    keywords: 'peso chileno, CLP, cotação peso, câmbio chile',
    canonical: 'https://cotacaodehoje.com/cambio/peso-chileno'
  },
  '/cambio/peso-mexicano': {
    title: 'Peso Mexicano Hoje - Cotação MXN em Tempo Real',
    description: 'Cotação do Peso Mexicano (MXN) em tempo real com conversor.',
    keywords: 'peso mexicano, MXN, cotação peso, câmbio méxico',
    canonical: 'https://cotacaodehoje.com/cambio/peso-mexicano'
  },
  '/cambio/peso-uruguaio': {
    title: 'Peso Uruguaio Hoje - Cotação UYU em Tempo Real',
    description: 'Cotação do Peso Uruguaio (UYU) em tempo real com gráficos.',
    keywords: 'peso uruguaio, UYU, cotação peso, câmbio uruguai',
    canonical: 'https://cotacaodehoje.com/cambio/peso-uruguaio'
  },
  '/cambio/rand-sul-africano': {
    title: 'Rand Sul-Africano Hoje - Cotação ZAR em Tempo Real',
    description: 'Cotação do Rand Sul-Africano (ZAR) em tempo real.',
    keywords: 'rand, ZAR, cotação rand, câmbio áfrica do sul',
    canonical: 'https://cotacaodehoje.com/cambio/rand-sul-africano'
  },
  '/cambio/rublo-russo': {
    title: 'Rublo Russo Hoje - Cotação RUB em Tempo Real',
    description: 'Cotação do Rublo Russo (RUB) em tempo real com gráficos atualizados.',
    keywords: 'rublo russo, RUB, cotação rublo, câmbio rússia',
    canonical: 'https://cotacaodehoje.com/cambio/rublo-russo'
  },
  '/cambio/yuan-chines': {
    title: 'Yuan Chinês Hoje - Cotação CNY em Tempo Real',
    description: 'Cotação do Yuan Chinês (CNY) em tempo real com análises.',
    keywords: 'yuan, CNY, cotação yuan, câmbio china, yuan chinês',
    canonical: 'https://cotacaodehoje.com/cambio/yuan-chines'
  },
  '/cambio/rupia-indiana': {
    title: 'Rupia Indiana Hoje - Cotação INR em Tempo Real',
    description: 'Cotação da Rupia Indiana (INR) em tempo real com gráficos.',
    keywords: 'rupia indiana, INR, cotação rupia, câmbio índia',
    canonical: 'https://cotacaodehoje.com/cambio/rupia-indiana'
  },
  '/cambio/won-sul-coreano': {
    title: 'Won Sul-Coreano Hoje - Cotação KRW em Tempo Real',
    description: 'Cotação do Won Sul-Coreano (KRW) em tempo real.',
    keywords: 'won, KRW, cotação won, câmbio coreia do sul, won sul coreano',
    canonical: 'https://cotacaodehoje.com/cambio/won-sul-coreano'
  },
  
  // Criptomoedas
  '/crypto': {
    title: 'Criptomoedas Hoje - Cotações em Tempo Real',
    description: 'Cotações das principais criptomoedas em tempo real: Bitcoin, Ethereum, Binance Coin e mais. Gráficos, conversores e análises do mercado crypto.',
    keywords: 'criptomoedas, bitcoin, ethereum, crypto hoje, cotação crypto, preço bitcoin, mercado cripto, criptoativos',
    canonical: 'https://cotacaodehoje.com/crypto',
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Criptomoedas - Cotações em Tempo Real",
      "description": "Cotações das principais criptomoedas em tempo real",
      "provider": {
        "@type": "Organization",
        "name": "Cotação de Hoje",
        "url": "https://cotacaodehoje.com"
      }
    }
  },
  '/crypto/bitcoin': {
    title: 'Bitcoin Hoje - Cotação BTC em Tempo Real',
    description: 'Acompanhe a cotação do Bitcoin (BTC) em tempo real. Preço atualizado, gráficos ao vivo, conversor BTC/BRL e análise completa da principal criptomoeda.',
    keywords: 'bitcoin hoje, BTC, cotação bitcoin, preço bitcoin, bitcoin tempo real, bitcoin BRL, bitcoin USD, comprar bitcoin, valor bitcoin',
    canonical: 'https://cotacaodehoje.com/crypto/bitcoin',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FinancialProduct",
          "@id": "https://cotacaodehoje.com/crypto/bitcoin#product",
          "name": "Bitcoin (BTC)",
          "description": "Cotação do Bitcoin em tempo real com conversor e gráficos atualizados",
          "provider": {
            "@type": "Organization",
            "name": "Cotação de Hoje",
            "url": "https://cotacaodehoje.com"
          },
          "category": "Criptomoeda"
        },
        {
          "@type": "FAQPage",
          "@id": "https://cotacaodehoje.com/crypto/bitcoin#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Qual o preço do Bitcoin hoje?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O preço do Bitcoin é atualizado em tempo real. Consulte o gráfico e conversor acima para ver o valor exato em USD e BRL."
              }
            },
            {
              "@type": "Question",
              "name": "Como converter Bitcoin para Real?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use nosso conversor de criptomoedas. Digite a quantidade de BTC e veja instantaneamente o valor em reais (BRL) com base na cotação atual."
              }
            }
          ]
        }
      ]
    }
  },
  '/crypto/ethereum': {
    title: 'Ethereum Hoje - Cotação ETH em Tempo Real',
    description: 'Cotação do Ethereum (ETH) em tempo real. Preço atualizado, gráficos, conversor ETH/BRL e análise da segunda maior criptomoeda.',
    keywords: 'ethereum hoje, ETH, cotação ethereum, preço ethereum, ethereum tempo real, ethereum BRL, valor ethereum',
    canonical: 'https://cotacaodehoje.com/crypto/ethereum'
  },
  '/crypto/binance-coin': {
    title: 'Binance Coin Hoje - Cotação BNB em Tempo Real',
    description: 'Preço do Binance Coin (BNB) em tempo real com gráficos atualizados.',
    keywords: 'binance coin, BNB, preço bnb, cotação binance, binance hoje',
    canonical: 'https://cotacaodehoje.com/crypto/binance-coin'
  },
  '/crypto/cardano': {
    title: 'Cardano Hoje - Cotação ADA em Tempo Real',
    description: 'Preço do Cardano (ADA) em tempo real com análises e gráficos.',
    keywords: 'cardano, ADA, preço cardano, cotação ada, cardano hoje',
    canonical: 'https://cotacaodehoje.com/crypto/cardano'
  },
  '/crypto/solana': {
    title: 'Solana Hoje - Cotação SOL em Tempo Real',
    description: 'Preço do Solana (SOL) atualizado em tempo real.',
    keywords: 'solana, SOL, preço solana, cotação sol, solana hoje',
    canonical: 'https://cotacaodehoje.com/crypto/solana'
  },
  '/crypto/ripple': {
    title: 'Ripple Hoje - Cotação XRP em Tempo Real',
    description: 'Preço do Ripple (XRP) em tempo real com gráficos.',
    keywords: 'ripple, XRP, preço ripple, cotação xrp, ripple hoje',
    canonical: 'https://cotacaodehoje.com/crypto/ripple'
  },
  '/crypto/polkadot': {
    title: 'Polkadot Hoje - Cotação DOT em Tempo Real',
    description: 'Preço do Polkadot (DOT) atualizado em tempo real.',
    keywords: 'polkadot, DOT, preço polkadot, cotação dot, polkadot hoje',
    canonical: 'https://cotacaodehoje.com/crypto/polkadot'
  },
  '/crypto/avalanche': {
    title: 'Avalanche Hoje - Cotação AVAX em Tempo Real',
    description: 'Preço do Avalanche (AVAX) em tempo real com gráficos.',
    keywords: 'avalanche, AVAX, preço avalanche, cotação avax, avalanche hoje',
    canonical: 'https://cotacaodehoje.com/crypto/avalanche'
  },
  '/crypto/chainlink': {
    title: 'Chainlink Hoje - Cotação LINK em Tempo Real',
    description: 'Preço do Chainlink (LINK) atualizado em tempo real.',
    keywords: 'chainlink, LINK, preço chainlink, cotação link, chainlink hoje',
    canonical: 'https://cotacaodehoje.com/crypto/chainlink'
  },
  '/crypto/litecoin': {
    title: 'Litecoin Hoje - Cotação LTC em Tempo Real',
    description: 'Preço do Litecoin (LTC) em tempo real com gráficos.',
    keywords: 'litecoin, LTC, preço litecoin, cotação ltc, litecoin hoje',
    canonical: 'https://cotacaodehoje.com/crypto/litecoin'
  },
  '/crypto/uniswap': {
    title: 'Uniswap Hoje - Cotação UNI em Tempo Real',
    description: 'Preço do Uniswap (UNI) atualizado em tempo real.',
    keywords: 'uniswap, UNI, preço uniswap, cotação uni, uniswap hoje',
    canonical: 'https://cotacaodehoje.com/crypto/uniswap'
  },
  '/crypto/aave': {
    title: 'Aave Hoje - Cotação AAVE em Tempo Real',
    description: 'Preço do Aave (AAVE) em tempo real com gráficos.',
    keywords: 'aave, AAVE, preço aave, cotação aave, aave hoje',
    canonical: 'https://cotacaodehoje.com/crypto/aave'
  },
  '/crypto/dash': {
    title: 'Dash Hoje - Cotação DASH em Tempo Real',
    description: 'Preço do Dash (DASH) atualizado em tempo real.',
    keywords: 'dash, DASH, preço dash, cotação dash, dash hoje',
    canonical: 'https://cotacaodehoje.com/crypto/dash'
  },
  '/crypto/usdt': {
    title: 'USDT Hoje - Cotação Tether em Tempo Real',
    description: 'Preço do Tether (USDT) em tempo real com gráficos.',
    keywords: 'tether, USDT, preço usdt, stablecoin, usdt hoje',
    canonical: 'https://cotacaodehoje.com/crypto/usdt'
  },
  '/crypto/usdc': {
    title: 'USDC Hoje - Cotação USD Coin em Tempo Real',
    description: 'Preço do USD Coin (USDC) atualizado em tempo real.',
    keywords: 'usd coin, USDC, preço usdc, stablecoin, usdc hoje',
    canonical: 'https://cotacaodehoje.com/crypto/usdc'
  },
  '/crypto/dai': {
    title: 'DAI Hoje - Cotação DAI Stablecoin em Tempo Real',
    description: 'Preço do DAI em tempo real com gráficos.',
    keywords: 'dai, DAI, preço dai, stablecoin, dai hoje',
    canonical: 'https://cotacaodehoje.com/crypto/dai'
  },
  
  // Ações
  '/acoes': {
    title: 'Ações Hoje - Bolsa de Valores em Tempo Real',
    description: 'Cotações das principais ações da bolsa: B3, NYSE, NASDAQ. Acompanhe Apple, Microsoft, Petrobras e mais em tempo real.',
    keywords: 'ações hoje, bolsa valores, B3, NYSE, NASDAQ, cotação ações, preço ações, mercado ações, investimentos',
    canonical: 'https://cotacaodehoje.com/acoes',
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Ações - Bolsa de Valores em Tempo Real",
      "description": "Cotações das principais ações da B3, NYSE e NASDAQ em tempo real",
      "provider": {
        "@type": "Organization",
        "name": "Cotação de Hoje",
        "url": "https://cotacaodehoje.com"
      }
    }
  },
  '/acoes/apple': {
    title: 'Apple Hoje - Cotação AAPL em Tempo Real',
    description: 'Cotação da ação da Apple (AAPL) em tempo real. Gráficos, análises e informações sobre a gigante da tecnologia.',
    keywords: 'apple hoje, AAPL, cotação apple, ação apple, preço apple, apple nasdaq, investir apple',
    canonical: 'https://cotacaodehoje.com/acoes/apple'
  },
  '/acoes/amazon': {
    title: 'Amazon Hoje - Cotação AMZN em Tempo Real',
    description: 'Cotação da Amazon (AMZN) em tempo real com gráficos e análises.',
    keywords: 'amazon, AMZN, ações amazon, cotação amzn, amazon hoje',
    canonical: 'https://cotacaodehoje.com/acoes/amazon'
  },
  '/acoes/microsoft': {
    title: 'Microsoft Hoje - Cotação MSFT em Tempo Real',
    description: 'Cotação da Microsoft (MSFT) atualizada em tempo real.',
    keywords: 'microsoft, MSFT, ações microsoft, cotação msft, microsoft hoje',
    canonical: 'https://cotacaodehoje.com/acoes/microsoft'
  },
  '/acoes/meta': {
    title: 'Meta Hoje - Cotação META em Tempo Real',
    description: 'Cotação da Meta (META) em tempo real com gráficos.',
    keywords: 'meta, META, facebook, ações meta, cotação meta, meta hoje',
    canonical: 'https://cotacaodehoje.com/acoes/meta'
  },
  '/acoes/nvidia': {
    title: 'Nvidia Hoje - Cotação NVDA em Tempo Real',
    description: 'Cotação da Nvidia (NVDA) atualizada em tempo real.',
    keywords: 'nvidia, NVDA, ações nvidia, cotação nvda, nvidia hoje',
    canonical: 'https://cotacaodehoje.com/acoes/nvidia'
  },
  '/acoes/magazine-luiz': {
    title: 'Magazine Luiza Hoje - Cotação MGLU3 em Tempo Real',
    description: 'Cotação do Magazine Luiza (MGLU3) na Bovespa em tempo real.',
    keywords: 'magazine luiza, MGLU3, ações magalu, bovespa, magalu hoje',
    canonical: 'https://cotacaodehoje.com/acoes/magazine-luiz'
  },
  '/acoes/sp500': {
    title: 'S&P 500 Hoje - Cotação SPX em Tempo Real',
    description: 'Índice S&P 500 (SPX) atualizado em tempo real com análises.',
    keywords: 's&p 500, SPX, índice sp500, bolsa americana, sp500 hoje',
    canonical: 'https://cotacaodehoje.com/acoes/sp500'
  },
  '/acoes/vertex': {
    title: 'Vertex Pharmaceuticals Hoje - Cotação VRTX em Tempo Real',
    description: 'Cotação da Vertex Pharmaceuticals (VRTX) em tempo real.',
    keywords: 'vertex, VRTX, ações vertex, farmacêutica, vertex hoje',
    canonical: 'https://cotacaodehoje.com/acoes/vertex'
  },
  '/acoes/monster': {
    title: 'Monster Beverage Hoje - Cotação MNST em Tempo Real',
    description: 'Cotação da Monster Beverage (MNST) atualizada em tempo real.',
    keywords: 'monster beverage, MNST, ações monster, monster hoje',
    canonical: 'https://cotacaodehoje.com/acoes/monster'
  },
  '/acoes/pimco': {
    title: 'PIMCO Hoje - Cotação em Tempo Real',
    description: 'Cotação da PIMCO em tempo real com gráficos atualizados.',
    keywords: 'pimco, gestão ativos, fundos investimento, pimco hoje',
    canonical: 'https://cotacaodehoje.com/acoes/pimco'
  },
  '/acoes/nuveen': {
    title: 'Nuveen Hoje - Cotação em Tempo Real',
    description: 'Cotação da Nuveen em tempo real com análises.',
    keywords: 'nuveen, gestão ativos, investimentos, nuveen hoje',
    canonical: 'https://cotacaodehoje.com/acoes/nuveen'
  },
  '/acoes/blackrock': {
    title: 'BlackRock Hoje - Cotação BLK em Tempo Real',
    description: 'Cotação da BlackRock (BLK) atualizada em tempo real.',
    keywords: 'blackrock, BLK, ações blackrock, gestão ativos, blackrock hoje',
    canonical: 'https://cotacaodehoje.com/acoes/blackrock'
  },
  '/acoes/cisco': {
    title: 'Cisco Hoje - Cotação CSCO em Tempo Real',
    description: 'Cotação da Cisco (CSCO) em tempo real com gráficos.',
    keywords: 'cisco, CSCO, ações cisco, tecnologia, cisco hoje',
    canonical: 'https://cotacaodehoje.com/acoes/cisco'
  },
  '/acoes/intel': {
    title: 'Intel Hoje - Cotação INTC em Tempo Real',
    description: 'Cotação da Intel (INTC) atualizada em tempo real.',
    keywords: 'intel, INTC, ações intel, semicondutores, intel hoje',
    canonical: 'https://cotacaodehoje.com/acoes/intel'
  },
  '/acoes/invesco': {
    title: 'Invesco Hoje - Cotação IVZ em Tempo Real',
    description: 'Cotação da Invesco (IVZ) em tempo real.',
    keywords: 'invesco, IVZ, ações invesco, gestão, invesco hoje',
    canonical: 'https://cotacaodehoje.com/acoes/invesco'
  },
  '/acoes/hapvida': {
    title: 'Hapvida Hoje - Cotação HAPV3 em Tempo Real',
    description: 'Cotação da Hapvida (HAPV3) na Bovespa em tempo real.',
    keywords: 'hapvida, HAPV3, ações hapvida, saúde, hapvida hoje',
    canonical: 'https://cotacaodehoje.com/acoes/hapvida'
  },
  '/acoes/bradesco': {
    title: 'Bradesco Hoje - Cotação BBDC4 em Tempo Real',
    description: 'Cotação do Bradesco (BBDC4) na Bovespa atualizada em tempo real.',
    keywords: 'bradesco, BBDC4, ações bradesco, banco, bradesco hoje',
    canonical: 'https://cotacaodehoje.com/acoes/bradesco'
  },
  '/acoes/ambev': {
    title: 'Ambev Hoje - Cotação ABEV3 em Tempo Real',
    description: 'Cotação da Ambev (ABEV3) na Bovespa em tempo real.',
    keywords: 'ambev, ABEV3, ações ambev, bebidas, ambev hoje',
    canonical: 'https://cotacaodehoje.com/acoes/ambev'
  },
  '/acoes/etf50': {
    title: '50 ETF Hoje - Cotação SSE 50 ETF em Tempo Real',
    description: 'Cotação do SSE 50 ETF (510050.SS) em tempo real.',
    keywords: '50 etf, SSE, etf china, bolsa xangai',
    canonical: 'https://cotacaodehoje.com/acoes/etf50'
  },
  '/acoes/eagle-point': {
    title: 'Eagle Point Hoje - Cotação ECC em Tempo Real',
    description: 'Cotação da Eagle Point (ECC) atualizada em tempo real.',
    keywords: 'eagle point, ECC, ações ecc, eagle point hoje',
    canonical: 'https://cotacaodehoje.com/acoes/eagle-point'
  },
  '/acoes/kraft-heinz': {
    title: 'Kraft Heinz Hoje - Cotação KHC em Tempo Real',
    description: 'Cotação da Kraft Heinz (KHC) em tempo real.',
    keywords: 'kraft heinz, KHC, ações kraft, alimentos, kraft heinz hoje',
    canonical: 'https://cotacaodehoje.com/acoes/kraft-heinz'
  },
  '/acoes/etf300': {
    title: '300 ETF Hoje - Cotação CSI 300 ETF em Tempo Real',
    description: 'Cotação do CSI 300 ETF (510300.SS) em tempo real.',
    keywords: '300 etf, CSI 300, etf china',
    canonical: 'https://cotacaodehoje.com/acoes/etf300'
  },
  '/acoes/assai': {
    title: 'Assaí Hoje - Cotação ASAI3 em Tempo Real',
    description: 'Cotação do Assaí Atacadista (ASAI3) na Bovespa em tempo real.',
    keywords: 'assaí, ASAI3, ações assaí, varejo, assai hoje',
    canonical: 'https://cotacaodehoje.com/acoes/assai'
  },
  '/acoes/allspring': {
    title: 'Allspring Hoje - Cotação ALSN em Tempo Real',
    description: 'Cotação da Allspring (ALSN) atualizada em tempo real.',
    keywords: 'allspring, ALSN, ações allspring, allspring hoje',
    canonical: 'https://cotacaodehoje.com/acoes/allspring'
  },
  '/acoes/carrefour': {
    title: 'Carrefour Hoje - Cotação CRFB3 em Tempo Real',
    description: 'Cotação do Carrefour Brasil (CRFB3) na Bovespa em tempo real.',
    keywords: 'carrefour, CRFB3, ações carrefour, varejo, carrefour hoje',
    canonical: 'https://cotacaodehoje.com/acoes/carrefour'
  },
  '/acoes/harvest-fund': {
    title: 'Harvest Fund Hoje - Cotação em Tempo Real',
    description: 'Cotação do Harvest Fund Management em tempo real.',
    keywords: 'harvest fund, gestão ativos, fundos, harvest fund hoje',
    canonical: 'https://cotacaodehoje.com/acoes/harvest-fund'
  },
  '/acoes/bank-of-china': {
    title: 'Bank of China Hoje - Cotação 601988 em Tempo Real',
    description: 'Cotação do Bank of China (601988) em tempo real.',
    keywords: 'bank of china, banco china, ações china, bank of china hoje',
    canonical: 'https://cotacaodehoje.com/acoes/bank-of-china'
  },
  '/acoes/china-shenhua-energy': {
    title: 'China Shenhua Energy Hoje - Cotação 601088 em Tempo Real',
    description: 'Cotação da China Shenhua Energy (601088) em tempo real.',
    keywords: 'china shenhua, energia china, ações china, shenhua hoje',
    canonical: 'https://cotacaodehoje.com/acoes/china-shenhua-energy'
  },
  
  // Forex - Principais
  '/forex': {
    title: 'Forex - Pares de Moedas em Tempo Real',
    description: 'Mercado Forex: cotações dos principais pares de moedas em tempo real. EUR/USD, GBP/USD, USD/JPY e mais pares principais, secundários e exóticos.',
    keywords: 'forex, pares moedas, EUR USD, GBP USD, mercado forex, trading forex, cotações forex, cambio forex',
    canonical: 'https://cotacaodehoje.com/forex'
  },
  '/forex/principais/eur-usd': {
    title: 'EUR/USD Hoje - Par Euro Dólar em Tempo Real',
    description: 'Cotação EUR/USD em tempo real. Acompanhe o par de moedas mais negociado do mundo com gráficos e análises atualizadas.',
    keywords: 'EUR USD, euro dólar, cotação EUR USD, par EUR USD, forex EUR USD, euro dollar',
    canonical: 'https://cotacaodehoje.com/forex/principais/eur-usd'
  },
  '/forex/principais/gbp-usd': {
    title: 'GBP/USD Hoje - Cotação Libra Dólar em Tempo Real',
    description: 'Cotação do par GBP/USD no mercado Forex em tempo real.',
    keywords: 'GBP/USD, libra dólar, forex, par de moedas, gbp usd hoje',
    canonical: 'https://cotacaodehoje.com/forex/principais/gbp-usd'
  },
  '/forex/principais/usd-jpy': {
    title: 'USD/JPY Hoje - Cotação Dólar Iene em Tempo Real',
    description: 'Cotação do par USD/JPY no mercado Forex em tempo real.',
    keywords: 'USD/JPY, dólar iene, forex, usd jpy hoje',
    canonical: 'https://cotacaodehoje.com/forex/principais/usd-jpy'
  },
  '/forex/principais/usd-chf': {
    title: 'USD/CHF Hoje - Cotação Dólar Franco em Tempo Real',
    description: 'Cotação do par USD/CHF no mercado Forex em tempo real.',
    keywords: 'USD/CHF, dólar franco, forex, usd chf hoje',
    canonical: 'https://cotacaodehoje.com/forex/principais/usd-chf'
  },
  '/forex/principais/aud-usd': {
    title: 'AUD/USD Hoje - Cotação Dólar Australiano em Tempo Real',
    description: 'Cotação do par AUD/USD no mercado Forex em tempo real.',
    keywords: 'AUD/USD, dólar australiano, forex, aud usd hoje',
    canonical: 'https://cotacaodehoje.com/forex/principais/aud-usd'
  },
  '/forex/principais/usd-cad': {
    title: 'USD/CAD Hoje - Cotação Dólar Canadense em Tempo Real',
    description: 'Cotação do par USD/CAD no mercado Forex em tempo real.',
    keywords: 'USD/CAD, dólar canadense, forex, usd cad hoje',
    canonical: 'https://cotacaodehoje.com/forex/principais/usd-cad'
  },
  '/forex/principais/nzd-usd': {
    title: 'NZD/USD Hoje - Cotação Dólar Neozelandês em Tempo Real',
    description: 'Cotação do par NZD/USD no mercado Forex em tempo real.',
    keywords: 'NZD/USD, dólar neozelandês, forex, nzd usd hoje',
    canonical: 'https://cotacaodehoje.com/forex/principais/nzd-usd'
  },
  
  // Forex - Secundários
  '/forex/secundarios/eur-gbp': {
    title: 'EUR/GBP Hoje - Cotação Euro Libra em Tempo Real',
    description: 'Cotação do par EUR/GBP no mercado Forex em tempo real.',
    keywords: 'EUR/GBP, euro libra, forex secundário, eur gbp hoje',
    canonical: 'https://cotacaodehoje.com/forex/secundarios/eur-gbp'
  },
  '/forex/secundarios/eur-aud': {
    title: 'EUR/AUD Hoje - Cotação Euro Dólar Australiano em Tempo Real',
    description: 'Cotação do par EUR/AUD no mercado Forex em tempo real.',
    keywords: 'EUR/AUD, euro australiano, forex, eur aud hoje',
    canonical: 'https://cotacaodehoje.com/forex/secundarios/eur-aud'
  },
  '/forex/secundarios/eur-cad': {
    title: 'EUR/CAD Hoje - Cotação Euro Dólar Canadense em Tempo Real',
    description: 'Cotação do par EUR/CAD no mercado Forex em tempo real.',
    keywords: 'EUR/CAD, euro canadense, forex, eur cad hoje',
    canonical: 'https://cotacaodehoje.com/forex/secundarios/eur-cad'
  },
  '/forex/secundarios/eur-nzd': {
    title: 'EUR/NZD Hoje - Cotação Euro Dólar Neozelandês em Tempo Real',
    description: 'Cotação do par EUR/NZD no mercado Forex em tempo real.',
    keywords: 'EUR/NZD, euro neozelandês, forex, eur nzd hoje',
    canonical: 'https://cotacaodehoje.com/forex/secundarios/eur-nzd'
  },
  '/forex/secundarios/gbp-aud': {
    title: 'GBP/AUD Hoje - Cotação Libra Dólar Australiano em Tempo Real',
    description: 'Cotação do par GBP/AUD no mercado Forex em tempo real.',
    keywords: 'GBP/AUD, libra australiano, forex, gbp aud hoje',
    canonical: 'https://cotacaodehoje.com/forex/secundarios/gbp-aud'
  },
  '/forex/secundarios/gbp-cad': {
    title: 'GBP/CAD Hoje - Cotação Libra Dólar Canadense em Tempo Real',
    description: 'Cotação do par GBP/CAD no mercado Forex em tempo real.',
    keywords: 'GBP/CAD, libra canadense, forex, gbp cad hoje',
    canonical: 'https://cotacaodehoje.com/forex/secundarios/gbp-cad'
  },
  '/forex/secundarios/gbp-jpy': {
    title: 'GBP/JPY Hoje - Cotação Libra Iene em Tempo Real',
    description: 'Cotação do par GBP/JPY no mercado Forex em tempo real.',
    keywords: 'GBP/JPY, libra iene, forex, gbp jpy hoje',
    canonical: 'https://cotacaodehoje.com/forex/secundarios/gbp-jpy'
  },
  '/forex/secundarios/aud-cad': {
    title: 'AUD/CAD Hoje - Cotação Dólares Australiano Canadense em Tempo Real',
    description: 'Cotação do par AUD/CAD no mercado Forex em tempo real.',
    keywords: 'AUD/CAD, australiano canadense, forex, aud cad hoje',
    canonical: 'https://cotacaodehoje.com/forex/secundarios/aud-cad'
  },
  '/forex/secundarios/aud-jpy': {
    title: 'AUD/JPY Hoje - Cotação Dólar Australiano Iene em Tempo Real',
    description: 'Cotação do par AUD/JPY no mercado Forex em tempo real.',
    keywords: 'AUD/JPY, australiano iene, forex, aud jpy hoje',
    canonical: 'https://cotacaodehoje.com/forex/secundarios/aud-jpy'
  },
  '/forex/secundarios/aud-nzd': {
    title: 'AUD/NZD Hoje - Cotação Dólares Australiano Neozelandês em Tempo Real',
    description: 'Cotação do par AUD/NZD no mercado Forex em tempo real.',
    keywords: 'AUD/NZD, australiano neozelandês, forex, aud nzd hoje',
    canonical: 'https://cotacaodehoje.com/forex/secundarios/aud-nzd'
  },
  '/forex/secundarios/cad-jpy': {
    title: 'CAD/JPY Hoje - Cotação Dólar Canadense Iene em Tempo Real',
    description: 'Cotação do par CAD/JPY no mercado Forex em tempo real.',
    keywords: 'CAD/JPY, canadense iene, forex, cad jpy hoje',
    canonical: 'https://cotacaodehoje.com/forex/secundarios/cad-jpy'
  },
  '/forex/secundarios/cad-chf': {
    title: 'CAD/CHF Hoje - Cotação Dólar Canadense Franco em Tempo Real',
    description: 'Cotação do par CAD/CHF no mercado Forex em tempo real.',
    keywords: 'CAD/CHF, canadense franco, forex, cad chf hoje',
    canonical: 'https://cotacaodehoje.com/forex/secundarios/cad-chf'
  },
  '/forex/secundarios/nzd-cad': {
    title: 'NZD/CAD Hoje - Cotação Dólares Neozelandês Canadense em Tempo Real',
    description: 'Cotação do par NZD/CAD no mercado Forex em tempo real.',
    keywords: 'NZD/CAD, neozelandês canadense, forex, nzd cad hoje',
    canonical: 'https://cotacaodehoje.com/forex/secundarios/nzd-cad'
  },
  '/forex/secundarios/nzd-jpy': {
    title: 'NZD/JPY Hoje - Cotação Dólar Neozelandês Iene em Tempo Real',
    description: 'Cotação do par NZD/JPY no mercado Forex em tempo real.',
    keywords: 'NZD/JPY, neozelandês iene, forex, nzd jpy hoje',
    canonical: 'https://cotacaodehoje.com/forex/secundarios/nzd-jpy'
  },
  
  // Forex - Exóticos
  '/forex/exoticos/usd-mxn': {
    title: 'USD/MXN Hoje - Cotação Dólar Peso Mexicano em Tempo Real',
    description: 'Cotação do par USD/MXN no mercado Forex em tempo real.',
    keywords: 'USD/MXN, dólar peso mexicano, forex exótico, usd mxn hoje',
    canonical: 'https://cotacaodehoje.com/forex/exoticos/usd-mxn'
  },
  '/forex/exoticos/usd-zar': {
    title: 'USD/ZAR Hoje - Cotação Dólar Rand Sul-Africano em Tempo Real',
    description: 'Cotação do par USD/ZAR no mercado Forex em tempo real.',
    keywords: 'USD/ZAR, dólar rand, forex exótico, usd zar hoje',
    canonical: 'https://cotacaodehoje.com/forex/exoticos/usd-zar'
  },
  '/forex/exoticos/usd-try': {
    title: 'USD/TRY Hoje - Cotação Dólar Lira Turca em Tempo Real',
    description: 'Cotação do par USD/TRY no mercado Forex em tempo real.',
    keywords: 'USD/TRY, dólar lira turca, forex exótico, usd try hoje',
    canonical: 'https://cotacaodehoje.com/forex/exoticos/usd-try'
  },
  '/forex/exoticos/usd-rub': {
    title: 'USD/RUB Hoje - Cotação Dólar Rublo Russo em Tempo Real',
    description: 'Cotação do par USD/RUB no mercado Forex em tempo real.',
    keywords: 'USD/RUB, dólar rublo, forex exótico, usd rub hoje',
    canonical: 'https://cotacaodehoje.com/forex/exoticos/usd-rub'
  },
  '/forex/exoticos/usd-inr': {
    title: 'USD/INR Hoje - Cotação Dólar Rupia Indiana em Tempo Real',
    description: 'Cotação do par USD/INR no mercado Forex em tempo real.',
    keywords: 'USD/INR, dólar rupia, forex exótico, usd inr hoje',
    canonical: 'https://cotacaodehoje.com/forex/exoticos/usd-inr'
  },
  '/forex/exoticos/usd-hkd': {
    title: 'USD/HKD Hoje - Cotação Dólar de Hong Kong em Tempo Real',
    description: 'Cotação do par USD/HKD no mercado Forex em tempo real.',
    keywords: 'USD/HKD, dólar hong kong, forex exótico, usd hkd hoje',
    canonical: 'https://cotacaodehoje.com/forex/exoticos/usd-hkd'
  },
  '/forex/exoticos/usd-sek': {
    title: 'USD/SEK Hoje - Cotação Dólar Coroa Sueca em Tempo Real',
    description: 'Cotação do par USD/SEK no mercado Forex em tempo real.',
    keywords: 'USD/SEK, dólar coroa sueca, forex exótico, usd sek hoje',
    canonical: 'https://cotacaodehoje.com/forex/exoticos/usd-sek'
  },
  '/forex/exoticos/usd-nok': {
    title: 'USD/NOK Hoje - Cotação Dólar Coroa Norueguesa em Tempo Real',
    description: 'Cotação do par USD/NOK no mercado Forex em tempo real.',
    keywords: 'USD/NOK, dólar coroa norueguesa, forex exótico, usd nok hoje',
    canonical: 'https://cotacaodehoje.com/forex/exoticos/usd-nok'
  },
  '/forex/exoticos/usd-pln': {
    title: 'USD/PLN Hoje - Cotação Dólar Zloty Polonês em Tempo Real',
    description: 'Cotação do par USD/PLN no mercado Forex em tempo real.',
    keywords: 'USD/PLN, dólar zloty, forex exótico, usd pln hoje',
    canonical: 'https://cotacaodehoje.com/forex/exoticos/usd-pln'
  },
  '/forex/exoticos/usd-thb': {
    title: 'USD/THB Hoje - Cotação Dólar Baht Tailandês em Tempo Real',
    description: 'Cotação do par USD/THB no mercado Forex em tempo real.',
    keywords: 'USD/THB, dólar baht, forex exótico, usd thb hoje',
    canonical: 'https://cotacaodehoje.com/forex/exoticos/usd-thb'
  },
  '/forex/exoticos/eur-try': {
    title: 'EUR/TRY Hoje - Cotação Euro Lira Turca em Tempo Real',
    description: 'Cotação do par EUR/TRY no mercado Forex em tempo real.',
    keywords: 'EUR/TRY, euro lira turca, forex exótico, eur try hoje',
    canonical: 'https://cotacaodehoje.com/forex/exoticos/eur-try'
  },
  '/forex/exoticos/eur-zar': {
    title: 'EUR/ZAR Hoje - Cotação Euro Rand Sul-Africano em Tempo Real',
    description: 'Cotação do par EUR/ZAR no mercado Forex em tempo real.',
    keywords: 'EUR/ZAR, euro rand, forex exótico, eur zar hoje',
    canonical: 'https://cotacaodehoje.com/forex/exoticos/eur-zar'
  },
  '/forex/exoticos/gbp-try': {
    title: 'GBP/TRY Hoje - Cotação Libra Lira Turca em Tempo Real',
    description: 'Cotação do par GBP/TRY no mercado Forex em tempo real.',
    keywords: 'GBP/TRY, libra lira turca, forex exótico, gbp try hoje',
    canonical: 'https://cotacaodehoje.com/forex/exoticos/gbp-try'
  },
  '/forex/exoticos/aud-sgd': {
    title: 'AUD/SGD Hoje - Cotação Dólar Australiano Cingapura em Tempo Real',
    description: 'Cotação do par AUD/SGD no mercado Forex em tempo real.',
    keywords: 'AUD/SGD, australiano cingapura, forex exótico, aud sgd hoje',
    canonical: 'https://cotacaodehoje.com/forex/exoticos/aud-sgd'
  },
  
  // Blog
  '/blog': {
    title: 'Blog de Finanças - Artigos sobre Investimentos, Economia e Educação Financeira',
    description: 'Artigos exclusivos sobre investimentos, criptomoedas, economia e educação financeira. Aprenda a investir e tomar decisões inteligentes.',
    keywords: 'blog finanças, artigos investimentos, educação financeira, dicas investir, economia, criptomoedas, mercado financeiro, poupança, renda fixa, renda variável',
    canonical: 'https://cotacaodehoje.com/blog',
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": "https://cotacaodehoje.com/blog#blog",
      "name": "Blog Cotação de Hoje",
      "description": "Artigos exclusivos sobre investimentos, economia e educação financeira",
      "url": "https://cotacaodehoje.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Cotação de Hoje",
        "url": "https://cotacaodehoje.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cotacaodehoje.com/og-image.webp"
        }
      }
    }
  },
  
  // Sitemap
  '/sitemap': {
    title: 'Sitemap - Mapa do Site Completo | Cotação de Hoje',
    description: 'Navegue por todas as páginas do Cotação de Hoje. Encontre cotações de moedas, criptomoedas, ações, forex e muito mais.',
    keywords: 'sitemap, mapa do site, cotação de hoje, navegação, páginas, índice',
    canonical: 'https://cotacaodehoje.com/sitemap'
  }
};

// Helper function to get SEO data for a path
export const getSEOData = (path: string): PageSEO | null => {
  return seoData[path] || null;
};
