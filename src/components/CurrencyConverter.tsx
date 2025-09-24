import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CurrencyConverterProps {
  type: 'dollar' | 'euro' | 'crypto' | 'currency';
  mainCurrency?: string;
  cryptoSymbol?: string;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ 
  type, 
  mainCurrency = 'USD',
  cryptoSymbol = 'BTC'
}) => {
  const [amount, setAmount] = useState<string>('100');
  const [selectedDollar, setSelectedDollar] = useState<string>('USD');
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const [cryptoRates, setCryptoRates] = useState({
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
    LINK: 18
  });
  const [loading, setLoading] = useState(false);

  const dollarOptions = [
    { value: 'USD', label: 'Dólar Americano' },
    { value: 'USDT', label: 'Dólar Turismo' },
    { value: 'CAD', label: 'Dólar Canadense' },
    { value: 'AUD', label: 'Dólar Australiano' },
    { value: 'NZD', label: 'Dólar Neozelandês' }
  ];

  // Fetch cotações em tempo real usando API real
  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      try {
        // Buscar cotações reais da API Frankfurter
        const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CHF', 'CAD', 'AUD', 'NZD', 'CNY', 'INR', 'KRW', 'MXN', 'ARS', 'CLP', 'UYU', 'ZAR', 'RUB'];
        const response = await fetch(`https://api.frankfurter.app/latest?from=BRL&to=${currencies.join(',')}`);
        
        if (response.ok) {
          const data = await response.json();
          
          // Converter as taxas (API retorna de BRL para outras moedas, precisamos inverter)
          const newRates: { [key: string]: number } = { BRL: 1 };
          
          Object.keys(data.rates).forEach(currency => {
            // Inverter a taxa para ter quanto vale 1 unidade da moeda estrangeira em BRL
            newRates[currency] = 1 / data.rates[currency];
          });
          
          // Adicionar dólar turismo como USD + 2%
          if (newRates.USD) {
            newRates.USDT = newRates.USD * 1.02;
          }
          
          setRates(newRates);
        }
      } catch (error) {
        console.error('Erro ao buscar cotações:', error);
        // Fallback com valores padrão em caso de erro
        setRates({
          USD: 6.15,
          USDT: 6.27,
          EUR: 6.50,
          GBP: 7.80,
          JPY: 0.041,
          CHF: 6.85,
          CAD: 4.45,
          AUD: 3.95,
          NZD: 3.70,
          CNY: 0.85,
          INR: 0.074,
          KRW: 0.0046,
          MXN: 0.30,
          ARS: 0.0062,
          CLP: 0.0063,
          UYU: 0.16,
          ZAR: 0.34,
          RUB: 0.063,
          BRL: 1
        });
      } finally {
        setLoading(false);
      }
    };

    // Buscar imediatamente
    fetchRates();
    
    // Atualizar a cada 5 minutos
    const interval = setInterval(fetchRates, 300000);
    return () => clearInterval(interval);
  }, []);

  const calculateConversion = () => {
    const inputAmount = parseFloat(amount) || 0;
    
    if (loading || Object.keys(rates).length === 0) {
      return { usd: 0, brl: 0 };
    }
    
    switch (type) {
      case 'dollar':
        const selectedRate = rates[selectedDollar] || rates.USD || 6.15;
        return {
          usd: selectedDollar === 'USD' ? inputAmount : (inputAmount * selectedRate) / (rates.USD || 6.15),
          brl: inputAmount * selectedRate
        };
      
      case 'euro':
        const eurRate = rates.EUR || 6.50;
        const usdRate = rates.USD || 6.15;
        return {
          usd: (inputAmount * eurRate) / usdRate,
          brl: inputAmount * eurRate
        };
      
      case 'crypto':
        const cryptoPrice = cryptoRates[cryptoSymbol as keyof typeof cryptoRates] || 45000;
        const usdValue = inputAmount * cryptoPrice;
        return {
          usd: usdValue,
          brl: usdValue * (rates.USD || 6.15)
        };
      
      case 'currency':
        const currencyRate = rates[mainCurrency] || 1;
        const usdRateForCurrency = rates.USD || 6.15;
        return {
          usd: (inputAmount * currencyRate) / usdRateForCurrency,
          brl: inputAmount * currencyRate
        };
      
      default:
        const defaultRate = rates.USD || 6.15;
        return {
          usd: inputAmount / defaultRate,
          brl: inputAmount * defaultRate
        };
    }
  };

  const conversion = calculateConversion();
  
  const getCurrentRate = () => {
    if (loading || Object.keys(rates).length === 0) {
      return 'Carregando cotações...';
    }
    
    switch (type) {
      case 'dollar':
        const selectedRate = rates[selectedDollar] || rates.USD || 6.15;
        return `1 ${selectedDollar} = ${selectedRate.toFixed(4)} BRL`;
      
      case 'euro':
        const eurRate = rates.EUR || 6.50;
        const usdRate = rates.USD || 6.15;
        return `1 EUR = ${eurRate.toFixed(4)} BRL | 1 EUR = ${(eurRate / usdRate).toFixed(4)} USD`;
      
      case 'crypto':
        const cryptoPrice = cryptoRates[cryptoSymbol as keyof typeof cryptoRates] || 45000;
        return `1 ${cryptoSymbol} = ${cryptoPrice.toFixed(2)} USD | 1 ${cryptoSymbol} = ${(cryptoPrice * (rates.USD || 6.15)).toFixed(2)} BRL`;
      
      case 'currency':
        const currencyRate = rates[mainCurrency] || 1;
        return `1 ${mainCurrency} = ${currencyRate.toFixed(4)} BRL`;
      
      default:
        const defaultRate = rates.USD || 6.15;
        return `1 USD = ${defaultRate.toFixed(4)} BRL`;
    }
  };
  
  const currentRate = getCurrentRate();

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-center">Conversor de Moeda</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {type === 'dollar' && (
          <div className="space-y-2">
            <Label htmlFor="currency-select">Escolha a moeda de origem:</Label>
            <Select value={selectedDollar} onValueChange={setSelectedDollar}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo de dólar" />
              </SelectTrigger>
              <SelectContent>
                {dollarOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="amount-input">
            {type === 'dollar' 
              ? `Valor em Moeda Selecionada:`
              : type === 'euro'
              ? `Valor em Euro (EUR):`
              : type === 'crypto'
              ? `Valor em ${cryptoSymbol}:`
              : `Valor em ${mainCurrency}:`
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
            <Label>Valor em Dólar Americano (USD):</Label>
            <Input
              value={loading ? 'Carregando...' : `$ ${conversion.usd.toFixed(2)}`}
              readOnly
              className="text-lg font-semibold bg-muted"
            />
          </div>

          <div className="space-y-2">
            <Label>Valor em Real (BRL):</Label>
            <Input
              value={loading ? 'Carregando...' : `R$ ${conversion.brl.toFixed(2)}`}
              readOnly
              className="text-lg font-semibold bg-muted"
            />
          </div>
        </div>

        <div className="text-center p-4 bg-muted rounded-lg">
          <p className="text-sm font-medium text-muted-foreground">
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></span>
                Atualizando cotações...
              </span>
            ) : (
              <>Taxa de câmbio atual: {currentRate}</>
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;