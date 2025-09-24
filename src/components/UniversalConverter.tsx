import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface UniversalConverterProps {
  assetType: 'fiat' | 'crypto';
  assetSymbol: string;
  assetName: string;
}

// Mapeamento de moedas fiduciárias
const FIAT_CURRENCIES = {
  USD: 'Dólar Americano',
  EUR: 'Euro',
  JPY: 'Iene Japonês',
  GBP: 'Libras Esterlinas',
  CHF: 'Franco Suíço',
  ARS: 'Peso Argentino',
  CLP: 'Peso Chileno',
  MXN: 'Peso Mexicano',
  UYU: 'Peso Uruguaio',
  ZAR: 'Rand Sul-Africano',
  RUB: 'Rublo Russo',
  INR: 'Rupia Indiana',
  CNY: 'Yuan Chinês',
  KRW: 'Won Sul-Coreano',
  CAD: 'Dólar Canadense',
  AUD: 'Dólar Australiano',
  BRL: 'Real Brasileiro'
};

// Mapeamento de criptomoedas para CoinGecko IDs
const CRYPTO_IDS = {
  BTC: 'bitcoin',
  ETH: 'ethereum',
  BNB: 'binancecoin',
  XRP: 'ripple',
  SOL: 'solana',
  ADA: 'cardano',
  DOGE: 'dogecoin',
  SHIB: 'shiba-inu',
  DOT: 'polkadot',
  UNI: 'uniswap',
  LINK: 'chainlink',
  AVAX: 'avalanche-2',
  LTC: 'litecoin',
  DASH: 'dash',
  AAVE: 'aave',
  DAI: 'dai',
  USDC: 'usd-coin',
  USDT: 'tether'
};

const UniversalConverter: React.FC<UniversalConverterProps> = ({
  assetType,
  assetSymbol,
  assetName
}) => {
  const [amount, setAmount] = useState<string>('100');
  const [usdValue, setUsdValue] = useState<number>(0);
  const [brlValue, setBrlValue] = useState<number>(0);
  const [exchangeRates, setExchangeRates] = useState<{ usd: number; brl: number }>({ usd: 0, brl: 0 });
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchExchangeRates = async () => {
    setLoading(true);
    setError(null);
    
    try {
      if (assetType === 'fiat') {
        await fetchFiatRates();
      } else {
        await fetchCryptoRates();
      }
      setLastUpdate(new Date());
    } catch (err) {
      console.error('Erro ao buscar cotações:', err);
      setError('Erro ao carregar cotação');
      
      // Fallback rates
      if (assetType === 'fiat') {
        setFallbackFiatRates();
      } else {
        setFallbackCryptoRates();
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchFiatRates = async () => {
    // Moedas não suportadas pelo Frankfurter
    const unsupportedCurrencies = ['ARS', 'CLP', 'UYU', 'RUB'];
    
    if (unsupportedCurrencies.includes(assetSymbol)) {
      setFallbackFiatRates();
      return;
    }

    const response = await fetch(
      `https://api.frankfurter.app/latest?from=${assetSymbol}&to=USD,BRL`
    );
    
    if (!response.ok) throw new Error('Frankfurter API Error');
    
    const data = await response.json();
    
    setExchangeRates({
      usd: assetSymbol === 'USD' ? 1 : data.rates.USD || 1,
      brl: assetSymbol === 'BRL' ? 1 : data.rates.BRL || 5.5
    });
  };

  const fetchCryptoRates = async () => {
    const cryptoId = CRYPTO_IDS[assetSymbol as keyof typeof CRYPTO_IDS];
    if (!cryptoId) throw new Error('Crypto ID not found');

    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd,brl`
    );
    
    if (!response.ok) throw new Error('CoinGecko API Error');
    
    const data = await response.json();
    const priceData = data[cryptoId];
    
    setExchangeRates({
      usd: priceData.usd || 0,
      brl: priceData.brl || 0
    });
  };

  const setFallbackFiatRates = () => {
    const fallbackRates: { [key: string]: { usd: number; brl: number } } = {
      USD: { usd: 1, brl: 5.34 },
      EUR: { usd: 1.08, brl: 5.77 },
      GBP: { usd: 1.27, brl: 6.78 },
      JPY: { usd: 0.0067, brl: 0.036 },
      CHF: { usd: 1.09, brl: 5.82 },
      CAD: { usd: 0.74, brl: 3.95 },
      AUD: { usd: 0.67, brl: 3.58 },
      CNY: { usd: 0.14, brl: 0.75 },
      INR: { usd: 0.012, brl: 0.064 },
      KRW: { usd: 0.00075, brl: 0.004 },
      MXN: { usd: 0.050, brl: 0.27 },
      ARS: { usd: 0.00097, brl: 0.0052 },
      CLP: { usd: 0.00103, brl: 0.0055 },
      UYU: { usd: 0.025, brl: 0.13 },
      ZAR: { usd: 0.055, brl: 0.29 },
      RUB: { usd: 0.0107, brl: 0.057 },
      BRL: { usd: 0.187, brl: 1 }
    };

    setExchangeRates(fallbackRates[assetSymbol] || { usd: 1, brl: 5.34 });
  };

  const setFallbackCryptoRates = () => {
    const fallbackRates: { [key: string]: { usd: number; brl: number } } = {
      BTC: { usd: 97500, brl: 520875 },
      ETH: { usd: 3650, brl: 19491 },
      BNB: { usd: 690, brl: 3686 },
      XRP: { usd: 2.35, brl: 12.55 },
      SOL: { usd: 240, brl: 1282 },
      ADA: { usd: 1.15, brl: 6.14 },
      DOGE: { usd: 0.39, brl: 2.08 },
      SHIB: { usd: 0.000025, brl: 0.00013 },
      DOT: { usd: 8.20, brl: 43.79 },
      UNI: { usd: 15.40, brl: 82.24 },
      LINK: { usd: 22.80, brl: 121.75 },
      AVAX: { usd: 42.50, brl: 227.05 },
      LTC: { usd: 102, brl: 544.68 },
      DASH: { usd: 48.20, brl: 257.39 },
      AAVE: { usd: 320, brl: 1708.8 },
      DAI: { usd: 1, brl: 5.34 },
      USDC: { usd: 1, brl: 5.34 },
      USDT: { usd: 1, brl: 5.34 }
    };

    setExchangeRates(fallbackRates[assetSymbol] || { usd: 1, brl: 5.34 });
  };

  // Calcular conversões sempre que amount ou exchangeRates mudarem
  useEffect(() => {
    const inputAmount = parseFloat(amount) || 0;
    setUsdValue(inputAmount * exchangeRates.usd);
    setBrlValue(inputAmount * exchangeRates.brl);
  }, [amount, exchangeRates]);

  // Buscar cotações na inicialização e configurar atualizações
  useEffect(() => {
    fetchExchangeRates();
    
    // Atualizar a cada 2 minutos
    const interval = setInterval(fetchExchangeRates, 120000);
    return () => clearInterval(interval);
  }, [assetSymbol, assetType]);

  const formatCurrency = (value: number, currency: 'USD' | 'BRL') => {
    if (currency === 'USD') {
      return `$ ${value.toLocaleString('en-US', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
      })}`;
    } else {
      return `R$ ${value.toLocaleString('pt-BR', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
      })}`;
    }
  };

  const getExchangeRateText = () => {
    if (loading) return 'Atualizando cotações...';
    if (error) return error;
    
    const { usd, brl } = exchangeRates;
    
    if (assetSymbol === 'USD') {
      return `1 USD = R$ ${brl.toLocaleString('pt-BR', { 
        minimumFractionDigits: 4, 
        maximumFractionDigits: 4 
      })} BRL`;
    }
    
    if (assetSymbol === 'BRL') {
      return `1 BRL = $ ${usd.toLocaleString('en-US', { 
        minimumFractionDigits: 4, 
        maximumFractionDigits: 4 
      })} USD`;
    }
    
    return `1 ${assetSymbol} = $ ${usd.toLocaleString('en-US', { 
      minimumFractionDigits: assetType === 'crypto' ? 2 : 4, 
      maximumFractionDigits: assetType === 'crypto' ? 2 : 4 
    })} USD | 1 ${assetSymbol} = R$ ${brl.toLocaleString('pt-BR', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })} BRL`;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-center flex items-center justify-center gap-2">
          Conversor de Moeda
          <Button 
            variant="outline" 
            size="sm" 
            onClick={fetchExchangeRates}
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
            Valor em {assetName} ({assetSymbol}):
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
            <Label>🇺🇸 Valor em Dólar Americano (USD):</Label>
            <Input
              value={loading ? 'Carregando...' : formatCurrency(usdValue, 'USD')}
              readOnly
              className="text-lg font-semibold bg-muted text-center"
            />
          </div>

          <div className="space-y-2">
            <Label>🇧🇷 Valor em Real (BRL):</Label>
            <Input
              value={loading ? 'Carregando...' : formatCurrency(brlValue, 'BRL')}
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
              <>Taxa de câmbio atual: {getExchangeRateText()}</>
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

export default UniversalConverter;