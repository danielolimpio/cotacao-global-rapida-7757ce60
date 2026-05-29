import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { fetchLiveRates, REALTIME_INTERVAL_MS } from '@/lib/exchangeRates';

interface ForexPairConverterProps {
  baseCurrency: string;
  quoteCurrency: string;
  baseCurrencyName: string;
  quoteCurrencyName: string;
  pairSymbol: string;
}

const ForexPairConverter: React.FC<ForexPairConverterProps> = ({
  baseCurrency,
  quoteCurrency,
  baseCurrencyName,
  quoteCurrencyName,
  pairSymbol
}) => {
  const [amount, setAmount] = useState<string>('100');
  const [quoteValue, setQuoteValue] = useState<number>(0);
  const [thirdValue, setThirdValue] = useState<number>(0);
  const [rates, setRates] = useState<{ base: number; quote: number; third: number }>({ 
    base: 1, 
    quote: 0, 
    third: 0 
  });
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Determinar a terceira moeda (USD ou BRL)
  const hasUSD = baseCurrency === 'USD' || quoteCurrency === 'USD';
  const thirdCurrency = hasUSD ? 'BRL' : 'USD';
  const thirdCurrencyName = hasUSD ? 'Real Brasileiro' : 'Dólar Americano';

  const fetchRates = async () => {
    setLoading(true);
    setError(null);

    try {
      const baseRates = await fetchLiveRates(baseCurrency);
      if (!baseRates || baseRates[quoteCurrency] == null) {
        // Try via USD pivot if direct pair unavailable
        const usdRates = await fetchLiveRates('USD');
        if (!usdRates || !usdRates[baseCurrency] || !usdRates[quoteCurrency]) {
          throw new Error('Rate not available');
        }
        const baseToQuote = usdRates[quoteCurrency] / usdRates[baseCurrency];
        const baseToThird =
          baseCurrency === thirdCurrency
            ? 1
            : (usdRates[thirdCurrency] ?? 1) / usdRates[baseCurrency];
        setRates({ base: 1, quote: baseToQuote, third: baseToThird });
      } else {
        const baseToQuote = baseRates[quoteCurrency];
        const baseToThird =
          baseCurrency === thirdCurrency ? 1 : (baseRates[thirdCurrency] ?? 1);
        setRates({ base: 1, quote: baseToQuote, third: baseToThird });
      }

      setLastUpdate(new Date());
    } catch (err) {
      console.error('Erro ao buscar cotações:', err);
      setError('Usando cotações estimadas');
      setFallbackRates();
      setLastUpdate(new Date());
    } finally {
      setLoading(false);
    }
  };

  const setFallbackRates = () => {
    // Taxas de fallback aproximadas
    const fallbackPairs: { [key: string]: number } = {
      // Principais
      'EURUSD': 1.16,
      'USDJPY': 152.5,
      'GBPUSD': 1.33,
      'USDCHF': 0.80,
      'AUDUSD': 0.72,
      'USDCAD': 1.40,
      'NZDUSD': 0.57,
      
      // Secundários
      'EURGBP': 0.87,
      'EURAUD': 1.78,
      'EURCAD': 1.62,
      'EURNZD': 2.03,
      'GBPJPY': 203.0,
      'GBPAUD': 2.05,
      'GBPCAD': 1.86,
      'AUDJPY': 99.0,
      'CADJPY': 109.0,
      'NZDJPY': 87.0,
      'AUDCAD': 0.91,
      'AUDNZD': 1.14,
      'CADCHF': 0.57,
      'NZDCAD': 0.80,
      
      // Exóticos
      'USDTRY': 34.5,
      'USDZAR': 18.2,
      'USDMXN': 17.0,
      'USDSEK': 10.6,
      'USDNOK': 11.0,
      'USDPLN': 3.9,
      'EURTRY': 40.0,
      'GBPTRY': 46.0,
      'AUDSGD': 0.88,
      'EURZAR': 21.1,
      'USDHKD': 7.8,
      'USDTHB': 35.5,
      'USDINR': 83.5,
      'USDRUB': 93.0
    };

    const pairRate = fallbackPairs[pairSymbol] || 1;
    
    // Taxa para USD/BRL (terceira moeda)
    const usdToBrl = 5.35;
    
    let thirdRate = 1;
    if (thirdCurrency === 'BRL') {
      if (baseCurrency === 'USD') {
        thirdRate = usdToBrl;
      } else {
        // Converter base para BRL via USD
        const baseToUsd = baseCurrency === 'EUR' ? 1.16 : 
                          baseCurrency === 'GBP' ? 1.33 : 
                          baseCurrency === 'AUD' ? 0.72 : 1;
        thirdRate = baseToUsd * usdToBrl;
      }
    } else {
      // thirdCurrency é USD
      if (baseCurrency === 'EUR') thirdRate = 1.16;
      else if (baseCurrency === 'GBP') thirdRate = 1.33;
      else if (baseCurrency === 'AUD') thirdRate = 0.72;
      else thirdRate = 1;
    }

    setRates({
      base: 1,
      quote: pairRate,
      third: thirdRate
    });
  };

  useEffect(() => {
    const inputAmount = parseFloat(amount) || 0;
    setQuoteValue(inputAmount * rates.quote);
    setThirdValue(inputAmount * rates.third);
  }, [amount, rates]);

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, REALTIME_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [baseCurrency, quoteCurrency, pairSymbol]);

  const formatCurrency = (value: number, currency: string) => {
    if (currency === 'JPY') {
      return `¥ ${value.toLocaleString('ja-JP', { 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0 
      })}`;
    }
    
    const symbol = currency === 'USD' ? '$' : 
                   currency === 'EUR' ? '€' : 
                   currency === 'GBP' ? '£' : 
                   currency === 'BRL' ? 'R$' : 
                   currency === 'CHF' ? 'CHF' : 
                   currency;
    
    return `${symbol} ${value.toLocaleString('pt-BR', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })}`;
  };

  const getRateText = () => {
    if (loading) return 'Atualizando...';
    if (error) return error;
    
    return `1 ${baseCurrency} = ${rates.quote.toFixed(4)} ${quoteCurrency}`;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-center flex items-center justify-center gap-2">
          Conversor {pairSymbol}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={fetchRates}
            disabled={loading}
            className="ml-2"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="amount-input">
            Valor em {baseCurrencyName} ({baseCurrency}):
          </Label>
          <Input
            id="amount-input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ex: 100"
            className="text-lg"
            min="0"
            step="0.01"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Valor em {quoteCurrencyName} ({quoteCurrency}):</Label>
            <Input
              value={loading ? 'Carregando...' : formatCurrency(quoteValue, quoteCurrency)}
              readOnly
              className="text-lg font-semibold bg-muted text-center"
            />
          </div>

          <div className="space-y-2">
            <Label>Valor em {thirdCurrencyName} ({thirdCurrency}):</Label>
            <Input
              value={loading ? 'Carregando...' : formatCurrency(thirdValue, thirdCurrency)}
              readOnly
              className="text-lg font-semibold bg-muted text-center"
            />
          </div>
        </div>

        <div className="text-center p-4 bg-muted rounded-lg">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></span>
                Atualizando cotações...
              </span>
            ) : (
              <>Taxa atual: {getRateText()}</>
            )}
          </p>
          {lastUpdate && !loading && (
            <p className="text-xs text-muted-foreground">
              Última atualização: {lastUpdate.toLocaleTimeString('pt-BR')}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ForexPairConverter;