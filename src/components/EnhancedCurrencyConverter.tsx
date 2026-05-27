import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { fetchLiveRates, REALTIME_INTERVAL_MS } from '@/lib/exchangeRates';

interface EnhancedCurrencyConverterProps {
  type: 'currency' | 'crypto';
  mainCurrency?: string;
  cryptoSymbol?: string;
}

const CURRENCY_LIST = [
  { code: 'USD', name: 'Dólar Americano', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'Libras Esterlinas', flag: '🇬🇧' },
  { code: 'JPY', name: 'Iene Japonês', flag: '🇯🇵' },
  { code: 'CHF', name: 'Franco Suíço', flag: '🇨🇭' },
  { code: 'CAD', name: 'Dólar Canadense', flag: '🇨🇦' },
  { code: 'AUD', name: 'Dólar Australiano', flag: '🇦🇺' },
  { code: 'CNY', name: 'Yuan Chinês', flag: '🇨🇳' },
  { code: 'INR', name: 'Rupia Indiana', flag: '🇮🇳' },
  { code: 'KRW', name: 'Won Sul-Coreano', flag: '🇰🇷' },
  { code: 'MXN', name: 'Peso Mexicano', flag: '🇲🇽' },
  { code: 'ARS', name: 'Peso Argentino', flag: '🇦🇷' },
  { code: 'CLP', name: 'Peso Chileno', flag: '🇨🇱' },
  { code: 'UYU', name: 'Peso Uruguaio', flag: '🇺🇾' },
  { code: 'ZAR', name: 'Rand Sul-Africano', flag: '🇿🇦' },
  { code: 'RUB', name: 'Rublo Russo', flag: '🇷🇺' },
  { code: 'BRL', name: 'Real Brasileiro', flag: '🇧🇷' }
];

const CRYPTO_RATES: { [key: string]: number } = {
  BTC: 117942,
  ETH: 3751.50,
  BNB: 320,
  XRP: 0.55,
  ADA: 0.45,
  LTC: 85,
  DASH: 50,
  AAVE: 200,
  AVAX: 45,
  DOT: 8,
  SOL: 95,
  UNI: 12,
  LINK: 18,
  DAI: 1,
  USDC: 1,
  USDT: 1
};

const EnhancedCurrencyConverter: React.FC<EnhancedCurrencyConverterProps> = ({ 
  type, 
  mainCurrency = 'USD',
  cryptoSymbol = 'BTC'
}) => {
  const [amount, setAmount] = useState<string>('100');
  const [selectedCurrency, setSelectedCurrency] = useState<string>(mainCurrency);
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const fetchRates = async () => {
    setLoading(true);
    try {
      // Currencies not supported by Frankfurter API - use fallback rates
      const unsupportedCurrencies = ['ARS', 'CLP', 'UYU', 'RUB'];
      
      if (unsupportedCurrencies.includes(selectedCurrency)) {
        // Use fallback rates for unsupported currencies
        const fallbackRates: { [key: string]: number } = {
          USD: selectedCurrency === 'USD' ? 1 : (selectedCurrency === 'ARS' ? 0.0006 : selectedCurrency === 'CLP' ? 0.001 : selectedCurrency === 'UYU' ? 0.02 : selectedCurrency === 'RUB' ? 0.01 : 0.16),
          BRL: selectedCurrency === 'BRL' ? 1 : (selectedCurrency === 'ARS' ? 0.0032 : selectedCurrency === 'CLP' ? 0.0054 : selectedCurrency === 'UYU' ? 0.11 : selectedCurrency === 'RUB' ? 0.055 : 5.34),
          [selectedCurrency]: 1
        };
        
        setRates(fallbackRates);
        setLastUpdate(new Date());
      } else {
        // Use Frankfurter API for supported currencies
        const targetCurrencies = ['USD', 'BRL'];
        if (selectedCurrency !== 'USD' && selectedCurrency !== 'BRL') {
          targetCurrencies.push(selectedCurrency);
        }

        const apiRates = await fetchLiveRates(selectedCurrency);
        if (apiRates) {
          setRates({ ...apiRates, [selectedCurrency]: 1 });
          setLastUpdate(new Date());
        } else {
          throw new Error('All APIs failed');
        }
      }
    } catch (error) {
      console.error('Erro ao buscar cotações:', error);
      // Fallback com valores padrão para qualquer erro
      const fallbackRates: { [key: string]: number } = {
        USD: selectedCurrency === 'USD' ? 1 : (selectedCurrency === 'ARS' ? 0.0006 : selectedCurrency === 'CLP' ? 0.001 : selectedCurrency === 'UYU' ? 0.02 : selectedCurrency === 'RUB' ? 0.01 : 0.18),
        BRL: selectedCurrency === 'BRL' ? 1 : (selectedCurrency === 'ARS' ? 0.0032 : selectedCurrency === 'CLP' ? 0.0054 : selectedCurrency === 'UYU' ? 0.11 : selectedCurrency === 'RUB' ? 0.055 : 5.34),
        [selectedCurrency]: 1
      };
      
      setRates(fallbackRates);
      setLastUpdate(new Date());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, REALTIME_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [selectedCurrency]);

  const calculateConversion = () => {
    const inputAmount = parseFloat(amount) || 0;
    
    if (loading || Object.keys(rates).length === 0) {
      return { usd: 0, brl: 0 };
    }
    
    if (type === 'crypto') {
      const cryptoPrice = CRYPTO_RATES[cryptoSymbol] || 45000;
      const usdValue = inputAmount * cryptoPrice;
      const brlRate = rates.BRL || 6.15;
      return {
        usd: usdValue,
        brl: usdValue * brlRate
      };
    }
    
    const usdRate = rates.USD || 1;
    const brlRate = rates.BRL || 6.15;
    
    return {
      usd: selectedCurrency === 'USD' ? inputAmount : inputAmount * usdRate,
      brl: selectedCurrency === 'BRL' ? inputAmount : inputAmount * brlRate
    };
  };

  const conversion = calculateConversion();

  const getCurrentRate = () => {
    if (loading || Object.keys(rates).length === 0) {
      return 'Carregando cotações...';
    }
    
    if (type === 'crypto') {
      const cryptoPrice = CRYPTO_RATES[cryptoSymbol] || 45000;
      const brlRate = rates.BRL || 6.15;
      return `1 ${cryptoSymbol} = $${cryptoPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD | 1 ${cryptoSymbol} = R$${(cryptoPrice * brlRate).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} BRL`;
    }
    
    const usdRate = rates.USD || 1;
    const brlRate = rates.BRL || 6.15;
    
    let rateText = `1 ${selectedCurrency} = R$${brlRate.toLocaleString('pt-BR', { minimumFractionDigits: 4 })} BRL`;
    
    if (selectedCurrency !== 'USD') {
      rateText += ` | 1 ${selectedCurrency} = $${usdRate.toLocaleString('en-US', { minimumFractionDigits: 4 })} USD`;
    }
    
    return rateText;
  };

  const formatCurrency = (value: number, currency: string) => {
    if (currency === 'USD') {
      return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `R$${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const currencyInfo = CURRENCY_LIST.find(c => c.code === selectedCurrency);

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-center flex items-center justify-center gap-2">
          Conversor de Moeda
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
        {type === 'currency' && (
          <div className="space-y-2">
            <Label htmlFor="currency-select">Escolha a moeda de origem:</Label>
            <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a moeda" />
              </SelectTrigger>
              <SelectContent>
                {CURRENCY_LIST.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    <div className="flex items-center gap-2">
                      <span>{currency.flag}</span>
                      <span>{currency.name} ({currency.code})</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="amount-input">
            {type === 'crypto' 
              ? `Valor em ${cryptoSymbol}:`
              : `Valor em ${currencyInfo?.name || selectedCurrency} (${selectedCurrency}):`
            }
          </Label>
          <Input
            id="amount-input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ex: 100"
            className="text-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>🇺🇸 Valor em Dólar Americano (USD):</Label>
            <Input
              value={loading ? 'Carregando...' : formatCurrency(conversion.usd, 'USD')}
              readOnly
              className="text-lg font-semibold bg-muted"
            />
          </div>

          <div className="space-y-2">
            <Label>🇧🇷 Valor em Real (BRL):</Label>
            <Input
              value={loading ? 'Carregando...' : formatCurrency(conversion.brl, 'BRL')}
              readOnly
              className="text-lg font-semibold bg-muted"
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
              <>Taxa de câmbio atual: {getCurrentRate()}</>
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

export default EnhancedCurrencyConverter;