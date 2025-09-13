import { useState, useEffect } from 'react';

interface QuoteData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
}

interface QuoteResponse {
  [key: string]: QuoteData;
}

const useRealTimeQuotes = (symbols: string[]) => {
  const [quotes, setQuotes] = useState<QuoteResponse>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

const fetchQuotes = async () => {
    try {
      const currentTime = Date.now();
      const variation = (Math.sin(currentTime / 10000) * 0.001) + (Math.random() - 0.5) * 0.002;
      
      // Base values that will fluctuate - aligned with TradingView real prices
      const baseData = {
        'USDBRL': { base: 5.56, change: 0.05, changePercent: 0.90 },
        'EURBRL': { base: 6.32, change: 0.08, changePercent: 1.28 },
        'GBPBRL': { base: 7.02, change: 0.12, changePercent: 1.75 },
        'JPYBRL': { base: 0.0378, change: 0.0006, changePercent: 1.61 },
        'CHFBRL': { base: 7.0056, change: 0.0950, changePercent: 1.38 },
        'CADBRL': { base: 3.78, change: 0.03, changePercent: 0.80 },
        'AUDBRL': { base: 3.45, change: 0.02, changePercent: 0.65 },
        'EURUSD': { base: 1.1730, change: 0.0126, changePercent: 1.06 },
        'GBPUSD': { base: 1.2675, change: -0.0045, changePercent: -0.35 },
        'JPYUSD': { base: 0.006751, change: 0.0001, changePercent: 1.49 },
        'CHFUSD': { base: 0.8850, change: 0.0040, changePercent: 0.32 },
        'AUDUSD': { base: 0.6521, change: 0.0012, changePercent: 0.18 },
        'CADUSD': { base: 0.7412, change: 0.0008, changePercent: 0.11 },
        'CNYUSD': { base: 0.1385, change: 0.0028, changePercent: 2.06 },
        'KRWUSD': { base: 0.00072, change: 0.00001, changePercent: 1.41 },
        'ARSUSD': { base: 0.00079, change: -0.00001, changePercent: -1.25 },
        'CLPUSD': { base: 0.0010, change: 0.00002, changePercent: 2.04 },
        'MXNUSD': { base: 0.054, change: 0.001, changePercent: 1.89 },
        'UYUUSD': { base: 0.025, change: 0.0005, changePercent: 2.04 },
        'ZARUSD': { base: 0.056, change: 0.001, changePercent: 1.82 },
        'RUBUSD': { base: 0.013, change: -0.0002, changePercent: -1.52 },
        'INRUSD': { base: 0.012, change: 0.0001, changePercent: 0.85 },
        'BTCUSD': { base: 91250.75, change: 2845.50, changePercent: 3.22 },
        'ETHUSD': { base: 3751.50, change: 185.25, changePercent: 5.19 },
        'ADAUSD': { base: 0.8950, change: 0.0425, changePercent: 4.98 },
        'BNBUSD': { base: 685.20, change: 32.80, changePercent: 5.02 },
        'SOLUSD': { base: 195.75, change: 12.40, changePercent: 6.77 },
        'XRPUSD': { base: 2.3240, change: 0.1850, changePercent: 8.65 },
        'DOTUSD': { base: 8.42, change: 0.68, changePercent: 8.80 },
        'LINKUSD': { base: 22.95, change: 1.45, changePercent: 6.75 },
        'LTCUSD': { base: 105.80, change: 6.20, changePercent: 6.23 },
        'UNIUSD': { base: 14.25, change: 0.85, changePercent: 6.34 },
        'AAVEUSD': { base: 285.40, change: 18.60, changePercent: 6.97 },
        'DASHUSD': { base: 42.80, change: 2.90, changePercent: 7.27 },
        'DAIUSD': { base: 1.0008, change: 0.0002, changePercent: 0.02 },
        'USDCUSD': { base: 1.0001, change: 0.0001, changePercent: 0.01 },
        'USDTUSD': { base: 0.9999, change: -0.0001, changePercent: -0.01 },
        'AVAXUSD': { base: 42.85, change: 2.95, changePercent: 7.40 },
        'AAPL': { base: 228.87, change: 4.25, changePercent: 1.89 },
        'MSFT': { base: 415.26, change: 8.50, changePercent: 2.09 },
        'GOOGL': { base: 175.32, change: 3.25, changePercent: 1.89 },
        'AMZN': { base: 186.45, change: 4.85, changePercent: 2.67 },
        'TSLA': { base: 352.56, change: -8.25, changePercent: -2.29 },
        'NVDA': { base: 128.45, change: 6.85, changePercent: 5.63 },
        'META': { base: 542.81, change: 12.40, changePercent: 2.34 },
        'NFLX': { base: 825.63, change: 18.95, changePercent: 2.35 },
        'NZDUSD': { base: 0.6128, change: 0.0045, changePercent: 0.74 }
      };

      const mockData: QuoteResponse = {};
      
      Object.keys(baseData).forEach(symbol => {
        const base = baseData[symbol as keyof typeof baseData];
        const price = base.base + (base.base * variation);
        const dynamicVariation = (Math.random() - 0.5) * 0.01;
        const change = base.change + (base.change * dynamicVariation);
        const changePercent = base.changePercent + (base.changePercent * dynamicVariation);
        
        mockData[symbol] = {
          symbol,
          price: Math.max(0, price),
          change,
          changePercent,
          high: price * 1.015,
          low: price * 0.985
        };
      });

      const filteredData: QuoteResponse = {};
      symbols.forEach(symbol => {
        if (mockData[symbol]) {
          filteredData[symbol] = mockData[symbol];
        }
      });

      setQuotes(filteredData);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError('Failed to fetch quotes');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
    
    // Update every 3 seconds for real-time feel
    const interval = setInterval(fetchQuotes, 3000);
    
    return () => clearInterval(interval);
  }, [symbols.join(',')]);

  return { quotes, loading, error };
};

export default useRealTimeQuotes;