import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

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
    LINK: 18,
    DAI: 1,
    USDC: 1,
    USDT: 1
  });
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const dollarOptions = [
    { value: 'USD', label: 'Dólar Americano' },
    { value: 'USDT', label: 'Dólar Turismo' },
    { value: 'CAD', label: 'Dólar Canadense' },
    { value: 'AUD', label: 'Dólar Australiano' },
    { value: 'NZD', label: 'Dólar Neozelandês' }
  ];

  // Função melhorada para buscar cotações em tempo real
  const fetchRates = async () => {
    setLoading(true);
    try {
      // Determinar moeda base e moedas alvo baseado no tipo
      let baseCurrency = 'USD';
      let targetCurrencies = ['BRL'];
      
      if (type === 'currency' && mainCurrency !== 'USD') {
        baseCurrency = mainCurrency;
        targetCurrencies = ['USD', 'BRL'];
      } else if (type === 'euro') {
        baseCurrency = 'EUR';
        targetCurrencies = ['USD', 'BRL'];
      } else if (type === 'dollar') {
        baseCurrency = selectedDollar === 'USDT' ? 'USD' : selectedDollar;
        targetCurrencies = ['BRL'];
        if (selectedDollar !== 'USD') {
          targetCurrencies.push('USD');
        }
      }

      const response = await fetch(
        `https://api.frankfurter.app/latest?from=${baseCurrency}&to=${targetCurrencies.join(',')}`
      );
      
      if (response.ok) {
        const data = await response.json();
        const newRates: { [key: string]: number } = {};
        
        // Adicionar taxa base
        newRates[baseCurrency] = 1;
        
        // Adicionar taxas retornadas pela API
        Object.keys(data.rates).forEach(currency => {
          newRates[currency] = data.rates[currency];
        });
        
        // Para dólar turismo, adicionar 2% de spread
        if (selectedDollar === 'USDT' && baseCurrency === 'USD') {
          newRates.USDT = newRates.BRL * 1.02;
        }
        
        // Se precisarmos de USD/BRL mas a base não é USD
        if (baseCurrency !== 'USD' && !newRates.USD) {
          // Fazer segunda requisição para obter USD/BRL
          const usdResponse = await fetch('https://api.frankfurter.app/latest?from=USD&to=BRL');
          if (usdResponse.ok) {
            const usdData = await usdResponse.json();
            newRates.USDBRL = usdData.rates.BRL;
          }
        }
        
        setRates(newRates);
        setLastUpdate(new Date());
      }
    } catch (error) {
      console.error('Erro ao buscar cotações:', error);
      // Fallback com valores mais atualizados
      setRates({
        USD: type === 'currency' && mainCurrency === 'USD' ? 1 : 6.15,
        USDT: 6.27,
        EUR: type === 'euro' ? 1 : 0.154,
        GBP: 7.80,
        JPY: type === 'currency' && mainCurrency === 'JPY' ? 1 : 0.041,
        CHF: 6.85,
        CAD: 4.45,
        AUD: 3.95,
        NZD: 3.70,
        CNY: type === 'currency' && mainCurrency === 'CNY' ? 1 : 0.85,
        INR: type === 'currency' && mainCurrency === 'INR' ? 1 : 0.074,
        KRW: type === 'currency' && mainCurrency === 'KRW' ? 1 : 0.0046,
        MXN: 0.30,
        ARS: 0.0062,
        CLP: 0.0063,
        UYU: 0.16,
        ZAR: 0.34,
        RUB: 0.063,
        BRL: type === 'currency' && mainCurrency === 'BRL' ? 1 : 6.15,
        USDBRL: 6.15
      });
      setLastUpdate(new Date());
    } finally {
      setLoading(false);
    }
  };

  // Fetch inicial e configurar atualizações automáticas
  useEffect(() => {
    fetchRates();
    // Atualizar a cada 2 minutos para ter cotações mais atuais
    const interval = setInterval(fetchRates, 120000);
    return () => clearInterval(interval);
  }, [type, mainCurrency, selectedDollar]);

  const calculateConversion = () => {
    const inputAmount = parseFloat(amount) || 0;
    
    if (loading || Object.keys(rates).length === 0) {
      return { usd: 0, brl: 0 };
    }
    
    switch (type) {
      case 'dollar':
        const selectedRate = rates[selectedDollar] || rates.USD || 6.15;
        const usdToCompare = rates.USD || rates.USDBRL || 6.15;
        return {
          usd: selectedDollar === 'USD' ? inputAmount : (inputAmount * selectedRate) / usdToCompare,
          brl: inputAmount * selectedRate
        };
      
      case 'euro':
        const eurToBrl = rates.BRL || 6.50;
        const eurToUsd = rates.USD || 0.92;
        return {
          usd: inputAmount * eurToUsd,
          brl: inputAmount * eurToBrl
        };
      
      case 'crypto':
        const cryptoPrice = cryptoRates[cryptoSymbol as keyof typeof cryptoRates] || 45000;
        const usdValue = inputAmount * cryptoPrice;
        const usdToBrl = rates.USDBRL || rates.USD || 6.15;
        return {
          usd: usdValue,
          brl: usdValue * usdToBrl
        };
      
      case 'currency':
        const currencyToBrl = rates.BRL || 1;
        const currencyToUsd = rates.USD || (mainCurrency === 'BRL' ? 1/6.15 : 1);
        return {
          usd: mainCurrency === 'USD' ? inputAmount : inputAmount * currencyToUsd,
          brl: mainCurrency === 'BRL' ? inputAmount : inputAmount * currencyToBrl
        };
      
      default:
        const defaultUsdToBrl = rates.USDBRL || rates.USD || 6.15;
        return {
          usd: inputAmount,
          brl: inputAmount * defaultUsdToBrl
        };
    }
  };

  const conversion = calculateConversion();

  const getCurrentRate = () => {
    if (loading) {
      return 'Atualizando cotações em tempo real...';
    }
    
    if (Object.keys(rates).length === 0) {
      return 'Carregando cotações...';
    }
    
    switch (type) {
      case 'dollar':
        const selectedRate = rates[selectedDollar] || rates.USD || 6.15;
        return `1 ${selectedDollar} = R$${selectedRate.toFixed(4)} BRL`;
      
      case 'euro':
        const eurToBrl = rates.BRL || 6.50;
        const eurToUsd = rates.USD || 0.92;
        return `1 EUR = R$${eurToBrl.toFixed(4)} BRL | 1 EUR = $${eurToUsd.toFixed(4)} USD`;
      
      case 'crypto':
        const cryptoPrice = cryptoRates[cryptoSymbol as keyof typeof cryptoRates] || 45000;
        const usdToBrl = rates.USDBRL || rates.USD || 6.15;
        return `1 ${cryptoSymbol} = $${cryptoPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD | 1 ${cryptoSymbol} = R$${(cryptoPrice * usdToBrl).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} BRL`;
      
      case 'currency':
        const currencyToBrl = rates.BRL || 1;
        const currencyToUsd = rates.USD || 1;
        
        if (mainCurrency === 'USD') {
          return `1 USD = R$${currencyToBrl.toFixed(4)} BRL`;
        } else if (mainCurrency === 'BRL') {
          return `1 BRL = $${currencyToUsd.toFixed(4)} USD`;
        } else {
          let rateText = `1 ${mainCurrency} = R$${currencyToBrl.toFixed(4)} BRL`;
          if (currencyToUsd !== 1) {
            rateText += ` | 1 ${mainCurrency} = $${currencyToUsd.toFixed(4)} USD`;
          }
          return rateText;
        }
      
      default:
        const defaultRate = rates.USDBRL || rates.USD || 6.15;
        return `1 USD = R$${defaultRate.toFixed(4)} BRL`;
    }
  };

  const formatCurrency = (value: number, currency: 'USD' | 'BRL') => {
    if (currency === 'USD') {
      return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `R$${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getCurrencyName = () => {
    switch (type) {
      case 'dollar':
        return dollarOptions.find(opt => opt.value === selectedDollar)?.label || 'Dólar';
      case 'euro':
        return 'Euro (EUR)';
      case 'crypto':
        return `${cryptoSymbol}`;
      case 'currency':
        return `${mainCurrency}`;
      default:
        return 'USD';
    }
  };

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
          <p className="text-sm font-medium text-muted-foreground mb-2">
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></span>
                Atualizando cotações em tempo real...
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
          <div className="mt-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={fetchRates}
              disabled={loading}
              className="text-xs"
            >
              <RefreshCw className={`h-3 w-3 mr-1 ${loading ? 'animate-spin' : ''}`} />
              Atualizar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;