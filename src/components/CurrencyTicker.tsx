import { useEffect, useState } from "react";

type Rate = { pair: string; price: string; change: string; positive: boolean };

const FALLBACK: Rate[] = [
  { pair: "USD/BRL", price: "6.1500", change: "+0.00%", positive: true },
  { pair: "EUR/USD", price: "1.0892", change: "+0.05%", positive: true },
  { pair: "GBP/USD", price: "1.2675", change: "+0.02%", positive: true },
  { pair: "USD/JPY", price: "149.85", change: "-0.34%", positive: false },
  { pair: "AUD/USD", price: "0.6521", change: "+0.12%", positive: true },
  { pair: "USD/CAD", price: "1.3485", change: "-0.08%", positive: false },
  { pair: "BTC/USD", price: "64,231", change: "-1.20%", positive: false },
  { pair: "XAU/USD", price: "2,342", change: "+0.12%", positive: true },
];

const CurrencyTicker = () => {
  const [rates, setRates] = useState<Rate[]>(FALLBACK);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const r = await fetch(
          "https://api.frankfurter.app/latest?from=USD&to=BRL,EUR,GBP,JPY,CAD,AUD,CHF"
        );
        if (!r.ok) return;
        const data = await r.json();
        const next: Rate[] = [
          { pair: "USD/BRL", price: data.rates.BRL?.toFixed(4) ?? "6.1500", change: "+0.00%", positive: true },
          { pair: "EUR/USD", price: (1 / (data.rates.EUR ?? 0.92)).toFixed(4), change: "+0.05%", positive: true },
          { pair: "GBP/USD", price: (1 / (data.rates.GBP ?? 0.79)).toFixed(4), change: "+0.02%", positive: true },
          { pair: "USD/JPY", price: data.rates.JPY?.toFixed(2) ?? "149.85", change: "-0.34%", positive: false },
          { pair: "AUD/USD", price: (1 / (data.rates.AUD ?? 1.53)).toFixed(4), change: "+0.12%", positive: true },
          { pair: "USD/CAD", price: data.rates.CAD?.toFixed(4) ?? "1.3485", change: "-0.08%", positive: false },
          { pair: "USD/CHF", price: data.rates.CHF?.toFixed(4) ?? "0.8900", change: "+0.04%", positive: true },
          { pair: "BTC/USD", price: "64,231", change: "-1.20%", positive: false },
          { pair: "XAU/USD", price: "2,342", change: "+0.12%", positive: true },
        ];
        setRates(next);
      } catch {}
    };
    fetchRates();
    const id = setInterval(fetchRates, 300000);
    return () => clearInterval(id);
  }, []);

  const loop = [...rates, ...rates];

  return (
    <div className="w-full bg-emerald text-cream border-b border-gold/20 overflow-hidden">
      <div className="relative h-9 flex items-center">
        <div className="animate-marquee gap-10 px-6 text-xs font-medium font-mono-num">
          {loop.map((r, i) => (
            <span key={`${r.pair}-${i}`} className="mr-10 inline-flex items-center gap-2">
              <span className="text-gold uppercase tracking-wider">{r.pair}</span>
              <span>{r.price}</span>
              <span className={r.positive ? "text-emerald-300" : "text-red-300"}>{r.change}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrencyTicker;
