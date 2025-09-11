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
      // Simulating real-time data - In production, use actual API
      const mockData: QuoteResponse = {
        'USDBRL': {
          symbol: 'USDBRL',
          price: 5.3899,
          change: -0.0130,
          changePercent: -0.24,
          high: 5.4200,
          low: 5.3800
        },
        'EURBRL': {
          symbol: 'EURBRL',
          price: 6.5052,
          change: 0.0195,
          changePercent: 0.30,
          high: 6.5280,
          low: 6.4820
        },
        'EURUSD': {
          symbol: 'EURUSD',
          price: 1.1700,
          change: 0.0028,
          changePercent: 0.24,
          high: 1.1750,
          low: 1.1680
        },
        'CHFUSD': {
          symbol: 'CHFUSD',
          price: 1.2600,
          change: 0.0040,
          changePercent: 0.32,
          high: 1.2650,
          low: 1.2550
        },
        'JPYUSD': {
          symbol: 'JPYUSD',
          price: 0.0068,
          change: 0.0001,
          changePercent: 1.52,
          high: 0.0068,
          low: 0.0066
        },
        'GBPUSD': {
          symbol: 'GBPUSD',
          price: 1.3400,
          change: 0.0135,
          changePercent: 1.02,
          high: 1.2742,
          low: 1.2560
        },
        'ARSUSD': {
          symbol: 'ARSUSD',
          price: 0.00079,
          change: -0.00001,
          changePercent: -1.25,
          high: 0.00080,
          low: 0.00078
        },
        'CLPUSD': {
          symbol: 'CLPUSD',
          price: 0.0010,
          change: 0.00002,
          changePercent: 2.04,
          high: 0.00102,
          low: 0.00098
        },
        'MXNUSD': {
          symbol: 'MXNUSD',
          price: 0.054,
          change: 0.001,
          changePercent: 1.89,
          high: 0.055,
          low: 0.053
        },
        'UYUUSD': {
          symbol: 'UYUUSD',
          price: 0.025,
          change: 0.0005,
          changePercent: 2.04,
          high: 0.0252,
          low: 0.0248
        },
        'ZARUSD': {
          symbol: 'ZARUSD',
          price: 0.056,
          change: 0.001,
          changePercent: 1.82,
          high: 0.057,
          low: 0.055
        },
        'RUBUSD': {
          symbol: 'RUBUSD',
          price: 0.013,
          change: -0.0002,
          changePercent: -1.52,
          high: 0.0132,
          low: 0.0128
        },
        'INRUSD': {
          symbol: 'INRUSD',
          price: 0.012,
          change: 0.0001,
          changePercent: 0.85,
          high: 0.0121,
          low: 0.0119
        },
        'CNYUSD': {
          symbol: 'CNYUSD',
          price: 0.14,
          change: 0.0028,
          changePercent: 2.04,
          high: 0.1410,
          low: 0.1360
        },
        'KRWUSD': {
          symbol: 'KRWUSD',
          price: 0.00072,
          change: 0.00001,
          changePercent: 1.41,
          high: 0.00073,
          low: 0.00071
        },
        'BTCUSD': {
          symbol: 'BTCUSD',
          price: 91250.75,
          change: 2845.50,
          changePercent: 3.22,
          high: 92500,
          low: 88800
        },
        'ETHUSD': {
          symbol: 'ETHUSD',
          price: 3751.50,
          change: 185.25,
          changePercent: 5.19,
          high: 3795,
          low: 3680
        }
      };

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
    
    // Update every 5 seconds
    const interval = setInterval(fetchQuotes, 5000);
    
    return () => clearInterval(interval);
  }, [symbols.join(',')]);

  return { quotes, loading, error };
};

export default useRealTimeQuotes;