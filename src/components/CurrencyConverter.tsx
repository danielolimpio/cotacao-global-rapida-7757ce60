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
  const [rates, setRates] = useState({
    USD: 5.56,
    USDT: 5.67, // Turismo +2%
    CAD: 4.12, // Dólar Canadense
    AUD: 3.58, // Dólar Australiano
    NZD: 3.37, // Dólar Neozelandês
    EUR: 6.05, // Euro
    BRL: 1
  });
  const [cryptoRates, setCryptoRates] = useState({
    BTC: 117942,
    ETH: 2800,
    BNB: 320,
    XRP: 0.55,
    ADA: 0.45,
    LTC: 85
  });

  const dollarOptions = [
    { value: 'USD', label: 'Dólar Americano' },
    { value: 'USDT', label: 'Dólar Turismo' },
    { value: 'CAD', label: 'Dólar Canadense' },
    { value: 'AUD', label: 'Dólar Australiano' },
    { value: 'NZD', label: 'Dólar Neozelandês' }
  ];

  // Simular fetch de cotações em tempo real
  useEffect(() => {
    const fetchRates = async () => {
      // Em produção, usar API real como ExchangeRate API ou CoinGecko
      // Por enquanto, simular variação das cotações
      const variation = (Math.random() - 0.5) * 0.05;
      setRates(prev => ({
        ...prev,
        USD: 5.56 + variation,
        USDT: (5.56 + variation) * 1.02, // Turismo +2%
        CAD: 4.09 + (variation * 0.8),
        AUD: 3.56 + (variation * 0.7),
        NZD: 3.35 + (variation * 0.6),
        EUR: 0.85 + (variation * 0.1)
      }));
    };

    const interval = setInterval(fetchRates, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const calculateConversion = () => {
    const inputAmount = parseFloat(amount) || 0;
    
    switch (type) {
      case 'dollar':
        const selectedRate = rates[selectedDollar as keyof typeof rates] || rates.USD;
        return {
          usd: selectedDollar === 'USD' ? inputAmount : (inputAmount * selectedRate) / rates.USD,
          brl: inputAmount * selectedRate
        };
      
      case 'euro':
        return {
          usd: inputAmount / rates.EUR,
          brl: (inputAmount / rates.EUR) * rates.USD
        };
      
      case 'crypto':
        const cryptoPrice = cryptoRates[cryptoSymbol as keyof typeof cryptoRates] || 45000;
        const usdValue = inputAmount * cryptoPrice;
        return {
          usd: usdValue,
          brl: usdValue * rates.USD
        };
      
      default:
        return {
          usd: inputAmount / rates.USD,
          brl: inputAmount * rates.USD
        };
    }
  };

  const conversion = calculateConversion();
  const currentRate = type === 'dollar' 
    ? `1 ${selectedDollar} = ${(rates[selectedDollar as keyof typeof rates] || rates.USD).toFixed(4)} BRL`
    : type === 'euro'
    ? `1 EUR = ${rates.USD.toFixed(4)} BRL | 1 EUR = ${(1/rates.EUR).toFixed(4)} USD`
    : type === 'crypto'
    ? `1 ${cryptoSymbol} = ${conversion.usd.toFixed(2)} USD | 1 ${cryptoSymbol} = ${conversion.brl.toFixed(2)} BRL`
    : `1 ${mainCurrency} = ${rates.USD.toFixed(4)} BRL`;

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
              value={`$ ${conversion.usd.toFixed(2)}`}
              readOnly
              className="text-lg font-semibold bg-muted"
            />
          </div>

          <div className="space-y-2">
            <Label>Valor em Real (BRL):</Label>
            <Input
              value={`R$ ${conversion.brl.toFixed(2)}`}
              readOnly
              className="text-lg font-semibold bg-muted"
            />
          </div>
        </div>

        <div className="text-center p-4 bg-muted rounded-lg">
          <p className="text-sm font-medium text-muted-foreground">
            Taxa de câmbio atual: {currentRate}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;