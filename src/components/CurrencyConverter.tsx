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
    USD: 1,
    BRL: 5.52,
    EUR: 0.85,
    CAD: 1.35,
    AUD: 1.55,
    NZD: 1.65
  });
  const [cryptoRates, setCryptoRates] = useState({
    BTC: 45000,
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
      const variation = (Math.random() - 0.5) * 0.1;
      setRates(prev => ({
        ...prev,
        BRL: 5.52 + variation,
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
        const dollarRate = selectedDollar === 'USDT' ? rates.USD * 1.02 : rates.USD; // Turismo +2%
        return {
          usd: selectedDollar === 'USD' ? inputAmount : inputAmount / dollarRate,
          brl: inputAmount * rates.BRL
        };
      
      case 'euro':
        return {
          usd: inputAmount / rates.EUR,
          brl: (inputAmount / rates.EUR) * rates.BRL
        };
      
      case 'crypto':
        const cryptoPrice = cryptoRates[cryptoSymbol as keyof typeof cryptoRates] || 45000;
        const usdValue = inputAmount * cryptoPrice;
        return {
          usd: usdValue,
          brl: usdValue * rates.BRL
        };
      
      default:
        return {
          usd: inputAmount / rates.USD,
          brl: inputAmount * rates.BRL
        };
    }
  };

  const conversion = calculateConversion();
  const currentRate = type === 'dollar' 
    ? `1 ${selectedDollar} = ${rates.BRL.toFixed(2)} BRL`
    : type === 'euro'
    ? `1 EUR = ${rates.BRL.toFixed(2)} BRL | 1 EUR = ${(1/rates.EUR).toFixed(2)} USD`
    : type === 'crypto'
    ? `1 ${cryptoSymbol} = ${conversion.usd.toFixed(2)} USD | 1 ${cryptoSymbol} = ${conversion.brl.toFixed(2)} BRL`
    : `1 ${mainCurrency} = ${rates.BRL.toFixed(2)} BRL`;

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