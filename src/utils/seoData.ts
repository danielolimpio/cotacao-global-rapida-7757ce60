// SEO Data for all pages - Easy to maintain and update

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}

export const seoData: Record<string, PageSEO> = {
  // Main Pages
  '/': {
    title: 'Cotações Hoje - Dólar, Euro, Bitcoin e Ações em Tempo Real',
    description: 'Acompanhe cotações do dólar, euro, bitcoin, ações e criptomoedas em tempo real. Conversor de moedas, gráficos atualizados e análises do mercado financeiro.',
    keywords: 'cotação hoje, dólar hoje, euro hoje, bitcoin hoje, cotação tempo real, conversão moedas, câmbio, criptomoedas, ações, forex, mercado financeiro',
    canonical: 'https://cotacaodehoje.com'
  },
  
  // Câmbio
  '/cambio': {
    title: 'Câmbio - Cotações de Moedas em Tempo Real',
    description: 'Cotações de câmbio em tempo real: dólar, euro, libra, iene e todas principais moedas. Conversores, gráficos atualizados e taxas de câmbio do dia.',
    keywords: 'câmbio, cotação moedas, câmbio hoje, taxa de câmbio, conversão moedas, dólar real, euro real, moeda estrangeira, forex, exchange rate',
    canonical: 'https://cotacaodehoje.com/cambio'
  },
  '/cambio/dolar': {
    title: 'Dólar Hoje - Cotação USD/BRL em Tempo Real',
    description: 'Acompanhe a cotação do dólar americano (USD) hoje em tempo real. Conversor de dólar para real, gráficos atualizados e análise completa da moeda americana.',
    keywords: 'dólar hoje, cotação dólar, USD BRL, dólar americano, conversão dólar real, preço dólar, dólar tempo real, câmbio dólar',
    canonical: 'https://cotacaodehoje.com/cambio/dolar'
  },
  '/cambio/euro': {
    title: 'Euro Hoje - Cotação EUR/BRL em Tempo Real',
    description: 'Cotação do euro (EUR) hoje em tempo real. Conversor euro para real, gráficos ao vivo e análise da moeda europeia.',
    keywords: 'euro hoje, cotação euro, EUR BRL, euro real, conversão euro, preço euro, euro tempo real, câmbio euro',
    canonical: 'https://cotacaodehoje.com/cambio/euro'
  },
  '/cambio/libras': {
    title: 'Libra Esterlina Hoje - Cotação GBP/BRL em Tempo Real',
    description: 'Cotação da libra esterlina (GBP) hoje. Conversor de libra para real, gráficos atualizados e análise da moeda britânica.',
    keywords: 'libra hoje, cotação libra, GBP BRL, libra esterlina, conversão libra real, preço libra, libra tempo real',
    canonical: 'https://cotacaodehoje.com/cambio/libras'
  },
  
  // Crypto
  '/crypto': {
    title: 'Criptomoedas Hoje - Cotações em Tempo Real',
    description: 'Cotações das principais criptomoedas em tempo real: Bitcoin, Ethereum, Binance Coin e mais. Gráficos, conversores e análises do mercado crypto.',
    keywords: 'criptomoedas, bitcoin, ethereum, crypto hoje, cotação crypto, preço bitcoin, mercado cripto, criptoativos',
    canonical: 'https://cotacaodehoje.com/crypto'
  },
  '/crypto/bitcoin': {
    title: 'Bitcoin Hoje - Cotação BTC em Tempo Real',
    description: 'Acompanhe a cotação do Bitcoin (BTC) em tempo real. Preço atualizado, gráficos ao vivo, conversor BTC/BRL e análise completa da principal criptomoeda.',
    keywords: 'bitcoin hoje, BTC, cotação bitcoin, preço bitcoin, bitcoin tempo real, bitcoin BRL, bitcoin USD, comprar bitcoin, valor bitcoin',
    canonical: 'https://cotacaodehoje.com/crypto/bitcoin'
  },
  '/crypto/ethereum': {
    title: 'Ethereum Hoje - Cotação ETH em Tempo Real',
    description: 'Cotação do Ethereum (ETH) em tempo real. Preço atualizado, gráficos, conversor ETH/BRL e análise da segunda maior criptomoeda.',
    keywords: 'ethereum hoje, ETH, cotação ethereum, preço ethereum, ethereum tempo real, ethereum BRL, valor ethereum',
    canonical: 'https://cotacaodehoje.com/crypto/ethereum'
  },
  
  // Ações
  '/acoes': {
    title: 'Ações Hoje - Bolsa de Valores em Tempo Real',
    description: 'Cotações das principais ações da bolsa: B3, NYSE, NASDAQ. Acompanhe Apple, Microsoft, Petrobras e mais em tempo real.',
    keywords: 'ações hoje, bolsa valores, B3, NYSE, NASDAQ, cotação ações, preço ações, mercado ações, investimentos',
    canonical: 'https://cotacaodehoje.com/acoes'
  },
  '/acoes/apple': {
    title: 'Apple Hoje - Cotação AAPL em Tempo Real',
    description: 'Cotação da ação da Apple (AAPL) em tempo real. Gráficos, análises e informações sobre a gigante da tecnologia.',
    keywords: 'apple hoje, AAPL, cotação apple, ação apple, preço apple, apple nasdaq, investir apple',
    canonical: 'https://cotacaodehoje.com/acoes/apple'
  },
  
  // Forex
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
  }
};

// Helper function to get SEO data for a path
export const getSEOData = (path: string): PageSEO | null => {
  return seoData[path] || null;
};
