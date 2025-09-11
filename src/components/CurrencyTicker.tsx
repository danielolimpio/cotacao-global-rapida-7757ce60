import { useEffect, useState } from 'react';
import useRealTimeQuotes from '@/hooks/useRealTimeQuotes';
import { Card, CardContent } from '@/components/ui/card';

const CurrencyTicker = () => {
  const { quotes, loading } = useRealTimeQuotes(['USDBRL', 'EURBRL', 'GBPUSD', 'BTCUSD']);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 100);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8">
            <div className="h-12 w-32 bg-muted animate-pulse rounded"></div>
            <div className="h-12 w-32 bg-muted animate-pulse rounded"></div>
            <div className="h-12 w-32 bg-muted animate-pulse rounded"></div>
            <div className="h-12 w-32 bg-muted animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-center space-x-8 transition-opacity duration-100 ${isVisible ? 'opacity-100' : 'opacity-50'}`}>
          <Card className="bg-background/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-3">
              <div className="text-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">🇺🇸/🇧🇷 USD/BRL</span>
                  <div className={`px-2 py-1 rounded text-xs ${
                    (quotes.USDBRL?.changePercent || 0) >= 0 ? 'bg-success/20 text-success' : 'bg-destructive/20 text-destructive'
                  }`}>
                    {(quotes.USDBRL?.changePercent || 0) >= 0 ? '+' : ''}{quotes.USDBRL?.changePercent?.toFixed(2) || '0.90'}%
                  </div>
                </div>
                <div className="text-lg font-bold">
                  R$ {quotes.USDBRL?.price?.toFixed(4) || '5.56'}
                </div>
                <div className={`text-xs ${
                  (quotes.USDBRL?.change || 0) >= 0 ? 'text-success' : 'text-destructive'
                }`}>
                  {(quotes.USDBRL?.change || 0) >= 0 ? '+' : ''}{quotes.USDBRL?.change?.toFixed(4) || '0.05'}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-3">
              <div className="text-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">🇪🇺/🇧🇷 EUR/BRL</span>
                  <div className={`px-2 py-1 rounded text-xs ${
                    (quotes.EURBRL?.changePercent || 0) >= 0 ? 'bg-success/20 text-success' : 'bg-destructive/20 text-destructive'
                  }`}>
                    {(quotes.EURBRL?.changePercent || 0) >= 0 ? '+' : ''}{quotes.EURBRL?.changePercent?.toFixed(2) || '-0.37'}%
                  </div>
                </div>
                <div className="text-lg font-bold">
                  R$ {quotes.EURBRL?.price?.toFixed(2) || '5.45'}
                </div>
                <div className={`text-xs ${
                  (quotes.EURBRL?.change || 0) >= 0 ? 'text-success' : 'text-destructive'
                }`}>
                  {(quotes.EURBRL?.change || 0) >= 0 ? '+' : ''}{quotes.EURBRL?.change?.toFixed(2) || '-0.02'}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-3">
              <div className="text-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">🇬🇧/🇧🇷 GBP/BRL</span>
                  <div className={`px-2 py-1 rounded text-xs ${
                    ((quotes.GBPUSD?.price || 1.34) * (quotes.USDBRL?.price || 5.56) / 5.56 - 1) * 100 >= 0 ? 'bg-success/20 text-success' : 'bg-destructive/20 text-destructive'
                  }`}>
                    +1.28%
                  </div>
                </div>
                <div className="text-lg font-bold">
                  R$ {((quotes.GBPUSD?.price || 1.34) * (quotes.USDBRL?.price || 5.56)).toFixed(2)}
                </div>
                <div className="text-xs text-success">
                  +0.08
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-3">
              <div className="text-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">₿ BTC/USD</span>
                  <div className={`px-2 py-1 rounded text-xs ${
                    (quotes.BTCUSD?.changePercent || 0) >= 0 ? 'bg-success/20 text-success' : 'bg-destructive/20 text-destructive'
                  }`}>
                    {(quotes.BTCUSD?.changePercent || 0) >= 0 ? '+' : ''}{quotes.BTCUSD?.changePercent?.toFixed(2) || '3.22'}%
                  </div>
                </div>
                <div className="text-lg font-bold">
                  ${quotes.BTCUSD?.price?.toLocaleString(undefined, {maximumFractionDigits: 0}) || '91,251'}
                </div>
                <div className={`text-xs ${
                  (quotes.BTCUSD?.change || 0) >= 0 ? 'text-success' : 'text-destructive'
                }`}>
                  {(quotes.BTCUSD?.change || 0) >= 0 ? '+' : ''}{quotes.BTCUSD?.change?.toFixed(0) || '2,846'}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CurrencyTicker;