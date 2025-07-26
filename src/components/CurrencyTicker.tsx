import { useEffect, useState } from 'react';

const CurrencyTicker = () => {
  const [rates, setRates] = useState([
    { pair: 'EUR/USD', price: '1.0892', change: '+0.0023', positive: true },
    { pair: 'USD/BRL', price: '5.5200', change: '+0.0150', positive: true },
    { pair: 'GBP/USD', price: '1.2675', change: '-0.0045', positive: false },
    { pair: 'USD/JPY', price: '149.85', change: '+0.75', positive: true },
    { pair: 'AUD/USD', price: '0.6521', change: '+0.0012', positive: true },
    { pair: 'USD/CAD', price: '1.3485', change: '-0.0025', positive: false },
    { pair: 'CHF/USD', price: '0.8895', change: '+0.0018', positive: true },
    { pair: 'CNY/USD', price: '7.2450', change: '+0.0120', positive: true },
    { pair: 'BTC/USD', price: '67,450', change: '+1,250', positive: true },
    { pair: 'ETH/USD', price: '3,685', change: '+89', positive: true }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRates(prevRates => 
        prevRates.map(rate => {
          const variation = (Math.random() - 0.5) * 0.002;
          const currentPrice = parseFloat(rate.price.replace(',', ''));
          const newPrice = Math.max(0, currentPrice + (currentPrice * variation));
          const changeValue = newPrice - currentPrice;
          
          return {
            ...rate,
            price: rate.pair.includes('BTC') || rate.pair.includes('ETH') 
              ? newPrice.toLocaleString('en-US', { maximumFractionDigits: 0 })
              : newPrice.toFixed(4),
            change: changeValue >= 0 ? `+${Math.abs(changeValue).toFixed(4)}` : `-${Math.abs(changeValue).toFixed(4)}`,
            positive: changeValue >= 0
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-muted/30 border-b border-border">
      <div className="relative overflow-hidden h-10">
        <div className="absolute inset-0 flex items-center">
          <div className="animate-scroll flex items-center space-x-8 whitespace-nowrap">
            {[...rates, ...rates].map((rate, index) => (
              <div key={`${rate.pair}-${index}`} className="flex items-center space-x-2 text-sm">
                <span className="font-semibold text-foreground">{rate.pair}</span>
                <span className="font-mono text-foreground">{rate.price}</span>
                <span className={`font-mono ${rate.positive ? 'text-success' : 'text-destructive'}`}>
                  {rate.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyTicker;