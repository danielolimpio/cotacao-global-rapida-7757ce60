import React, { useState, useEffect } from 'react';

const CurrencyTicker = () => {
  const [rates, setRates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch cotações reais da API
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://api.frankfurter.app/latest?from=USD&to=BRL,EUR,GBP,JPY,CAD,AUD,CHF');
        
        if (response.ok) {
          const data = await response.json();
          
          const fetchedRates = [
            { pair: 'USD/BRL', price: data.rates.BRL?.toFixed(4) || '6.15', change: '+0.0000', positive: true },
            { pair: 'EUR/USD', price: (1 / data.rates.EUR || 1.08).toFixed(4), change: '+0.0000', positive: true },
            { pair: 'GBP/USD', price: (1 / data.rates.GBP || 1.27).toFixed(4), change: '+0.0000', positive: true },
            { pair: 'USD/JPY', price: data.rates.JPY?.toFixed(2) || '149.85', change: '+0.00', positive: true },
            { pair: 'AUD/USD', price: (1 / data.rates.AUD || 0.65).toFixed(4), change: '+0.0000', positive: true },
            { pair: 'USD/CAD', price: data.rates.CAD?.toFixed(4) || '1.35', change: '+0.0000', positive: true },
          ];
          
          setRates(fetchedRates);
        }
      } catch (error) {
        // Fallback para caso de erro na API
        setRates([
          { pair: 'EUR/USD', price: '1.0892', change: '+0.0000', positive: true },
          { pair: 'USD/BRL', price: '6.1500', change: '+0.0000', positive: true },
          { pair: 'GBP/USD', price: '1.2675', change: '+0.0000', positive: true },
          { pair: 'USD/JPY', price: '149.85', change: '+0.00', positive: true },
          { pair: 'AUD/USD', price: '0.6521', change: '+0.0000', positive: true },
          { pair: 'USD/CAD', price: '1.3485', change: '+0.0000', positive: true },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
    
    // Atualizar a cada 5 minutos
    const interval = setInterval(fetchRates, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-muted/30 border-b border-border">
      <div className="relative overflow-hidden h-10">
        <div className="absolute inset-0 flex items-center">
          <div className="animate-scroll flex items-center space-x-8 whitespace-nowrap">
            {loading ? (
              <div className="flex items-center px-8">
                <span className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full mr-2"></span>
                Carregando cotações...
              </div>
            ) : (
              [...rates, ...rates].map((rate, index) => (
                <div key={`${rate.pair}-${index}`} className="flex items-center space-x-2 text-sm">
                  <span className="font-semibold text-foreground">{rate.pair}</span>
                  <span className="font-mono text-foreground">{rate.price}</span>
                  <span className={`font-mono ${rate.positive ? 'text-success' : 'text-destructive'}`}>
                    {rate.change}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyTicker;