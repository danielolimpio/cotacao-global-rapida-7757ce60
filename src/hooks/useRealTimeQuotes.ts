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
      setLoading(true);
      
      // Simulating dynamic real-time data with variations
      const now = Date.now();
      const variation = Math.sin(now / 10000) * 0.1;
      
      const baseData: QuoteResponse = {
        'USDBRL': {
          symbol: 'USDBRL',
          price: 5.56 + variation,
          change: 0.05 + (variation * 2),
          changePercent: 0.90 + (variation * 10),
          high: 5.62 + Math.abs(variation),
          low: 5.48 - Math.abs(variation)
        },
        'EURBRL': {
          symbol: 'EURBRL',
          price: 6.5052 + variation,
          change: 0.0195 + (variation * 0.5),
          changePercent: 0.30 + (variation * 5),
          high: 6.5280 + Math.abs(variation),
          low: 6.4820 - Math.abs(variation)
        },
        'EURUSD': {
          symbol: 'EURUSD',
          price: 1.17 + (variation * 0.1),
          change: 0.0028 + (variation * 0.01),
          changePercent: 0.24 + (variation * 2),
          high: 1.1750 + Math.abs(variation * 0.1),
          low: 1.1680 - Math.abs(variation * 0.1)
        },
        'EURGBP': {
          symbol: 'EURGBP',
          price: 0.8731 + (variation * 0.05),
          change: -0.0012 + (variation * 0.005),
          changePercent: -0.14 + (variation * 1),
          high: 0.8750 + Math.abs(variation * 0.05),
          low: 0.8710 - Math.abs(variation * 0.05)
        },
        'CHFUSD': {
          symbol: 'CHFUSD',
          price: 1.26 + (variation * 0.1),
          change: 0.0040 + (variation * 0.01),
          changePercent: 0.32 + (variation * 2),
          high: 1.2650 + Math.abs(variation * 0.1),
          low: 1.2550 - Math.abs(variation * 0.1)
        },
        'JPYUSD': {
          symbol: 'JPYUSD',
          price: 0.0068 + (variation * 0.0001),
          change: 0.0001 + (variation * 0.00005),
          changePercent: 1.52 + (variation * 0.5),
          high: 0.0068 + Math.abs(variation * 0.0001),
          low: 0.0066 - Math.abs(variation * 0.0001)
        },
        'GBPUSD': {
          symbol: 'GBPUSD',
          price: 1.34 + (variation * 0.1),
          change: 0.0135 + (variation * 0.01),
          changePercent: 1.02 + (variation * 1),
          high: 1.2742 + Math.abs(variation * 0.1),
          low: 1.2560 - Math.abs(variation * 0.1)
        },
        'ARSUSD': {
          symbol: 'ARSUSD',
          price: 0.00079 + (variation * 0.00001),
          change: -0.00001 + (variation * 0.000005),
          changePercent: -1.25 + (variation * 0.5),
          high: 0.00080 + Math.abs(variation * 0.00001),
          low: 0.00078 - Math.abs(variation * 0.00001)
        },
        'CLPUSD': {
          symbol: 'CLPUSD',
          price: 0.0010 + (variation * 0.0001),
          change: 0.00002 + (variation * 0.00001),
          changePercent: 2.04 + (variation * 1),
          high: 0.00102 + Math.abs(variation * 0.0001),
          low: 0.00098 - Math.abs(variation * 0.0001)
        },
        'MXNUSD': {
          symbol: 'MXNUSD',
          price: 0.054 + (variation * 0.005),
          change: 0.001 + (variation * 0.0005),
          changePercent: 1.89 + (variation * 1),
          high: 0.055 + Math.abs(variation * 0.005),
          low: 0.053 - Math.abs(variation * 0.005)
        },
        'UYUUSD': {
          symbol: 'UYUUSD',
          price: 0.025 + (variation * 0.002),
          change: 0.0005 + (variation * 0.0002),
          changePercent: 2.04 + (variation * 1),
          high: 0.0252 + Math.abs(variation * 0.002),
          low: 0.0248 - Math.abs(variation * 0.002)
        },
        'ZARUSD': {
          symbol: 'ZARUSD',
          price: 0.056 + (variation * 0.005),
          change: 0.001 + (variation * 0.0005),
          changePercent: 1.82 + (variation * 1),
          high: 0.057 + Math.abs(variation * 0.005),
          low: 0.055 - Math.abs(variation * 0.005)
        },
        'RUBUSD': {
          symbol: 'RUBUSD',
          price: 0.013 + (variation * 0.001),
          change: -0.0002 + (variation * 0.0001),
          changePercent: -1.52 + (variation * 0.5),
          high: 0.0132 + Math.abs(variation * 0.001),
          low: 0.0128 - Math.abs(variation * 0.001)
        },
        'INRUSD': {
          symbol: 'INRUSD',
          price: 0.012 + (variation * 0.001),
          change: 0.0001 + (variation * 0.00005),
          changePercent: 0.85 + (variation * 0.5),
          high: 0.0121 + Math.abs(variation * 0.001),
          low: 0.0119 - Math.abs(variation * 0.001)
        },
        'CNYUSD': {
          symbol: 'CNYUSD',
          price: 0.14 + (variation * 0.01),
          change: 0.0028 + (variation * 0.001),
          changePercent: 2.04 + (variation * 1),
          high: 0.1410 + Math.abs(variation * 0.01),
          low: 0.1360 - Math.abs(variation * 0.01)
        },
        'KRWUSD': {
          symbol: 'KRWUSD',
          price: 0.00072 + (variation * 0.00005),
          change: 0.00001 + (variation * 0.000005),
          changePercent: 1.41 + (variation * 0.5),
          high: 0.00073 + Math.abs(variation * 0.00005),
          low: 0.00071 - Math.abs(variation * 0.00005)
        },
        'BTCUSD': {
          symbol: 'BTCUSD',
          price: 91250.75 + (variation * 1000),
          change: 2845.50 + (variation * 500),
          changePercent: 3.22 + (variation * 2),
          high: 92500 + Math.abs(variation * 500),
          low: 88800 - Math.abs(variation * 500)
        },
        'ETHUSD': {
          symbol: 'ETHUSD',
          price: 3751.50 + (variation * 200),
          change: 185.25 + (variation * 50),
          changePercent: 5.19 + (variation * 2),
          high: 3795 + Math.abs(variation * 100),
          low: 3680 - Math.abs(variation * 100)
        },
        'ETHBTC': {
          symbol: 'ETHBTC',
          price: 0.0318 + (variation * 0.002),
          change: 0.0012 + (variation * 0.0005),
          changePercent: 3.93 + (variation * 1),
          high: 0.0320 + Math.abs(variation * 0.002),
          low: 0.0315 - Math.abs(variation * 0.002)
        },
        'ETHEUR': {
          symbol: 'ETHEUR',
          price: 3206.84 + (variation * 150),
          change: 158.34 + (variation * 40),
          changePercent: 5.19 + (variation * 2),
          high: 3250 + Math.abs(variation * 75),
          low: 3150 - Math.abs(variation * 75)
        }
      };

      const filteredData: QuoteResponse = {};
      symbols.forEach(symbol => {
        if (baseData[symbol]) {
          filteredData[symbol] = baseData[symbol];
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
    
    // Update every 2 seconds for real-time feel
    const interval = setInterval(fetchQuotes, 2000);
    
    return () => clearInterval(interval);
  }, [symbols.join(',')]);

  return { quotes, loading, error };
};

export default useRealTimeQuotes;