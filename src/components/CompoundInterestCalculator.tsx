import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Copy, Calculator } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CompoundInterestCalculator = () => {
  const [initialCapital, setInitialCapital] = useState<number>(1000);
  const [monthlyRate, setMonthlyRate] = useState<number>(0.41);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(100);
  const [totalMonths, setTotalMonths] = useState<number>(120);
  const { toast } = useToast();

  const calculateCompoundInterest = () => {
    const P = initialCapital;
    const r = monthlyRate / 100;
    const n = totalMonths;
    const Aporte = monthlyContribution;

    // M = P(1 + r)^n + Aporte * [((1 + r)^n - 1) / r]
    const futureValueInitial = P * Math.pow(1 + r, n);
    const futureValueContributions = Aporte * ((Math.pow(1 + r, n) - 1) / r);
    const totalFutureValue = futureValueInitial + futureValueContributions;
    
    // Rendimento do último mês
    const lastMonthReturn = totalFutureValue * r;
    
    return {
      totalValue: totalFutureValue,
      lastMonthReturn: lastMonthReturn,
      totalContributed: P + (Aporte * n),
      totalInterest: totalFutureValue - (P + (Aporte * n))
    };
  };

  const results = calculateCompoundInterest();

  const copyToClipboard = () => {
    const formula = `=${initialCapital}*(1+${monthlyRate/100})^${totalMonths} + ${monthlyContribution} * (((1+${monthlyRate/100})^${totalMonths}-1)/${monthlyRate/100})`;
    navigator.clipboard.writeText(formula);
    toast({
      title: "Fórmula copiada!",
      description: "A fórmula foi copiada para a área de transferência.",
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
          <Calculator className="h-8 w-8 text-primary" />
          Calculadora de Juros Compostos
        </h2>
        <p className="text-muted-foreground">
          Calcule o crescimento do seu investimento com aportes mensais
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inputs */}
        <Card>
          <CardHeader>
            <CardTitle>Dados do Investimento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="initial-capital">Capital Inicial (R$)</Label>
              <Input
                id="initial-capital"
                type="number"
                value={initialCapital}
                onChange={(e) => setInitialCapital(Number(e.target.value))}
                placeholder="Insira o valor a ser investido inicialmente"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="monthly-rate">Rendimento Mensal (%)</Label>
              <Input
                id="monthly-rate"
                type="number"
                step="0.01"
                value={monthlyRate}
                onChange={(e) => setMonthlyRate(Number(e.target.value))}
                placeholder="Rendimento mensal que equivale a uma taxa anual aproximada"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="monthly-contribution">Aporte Mensal (R$)</Label>
              <Input
                id="monthly-contribution"
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                placeholder="Valor extra investido todos os meses"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="total-months">Total de Meses</Label>
              <Input
                id="total-months"
                type="number"
                value={totalMonths}
                onChange={(e) => setTotalMonths(Number(e.target.value))}
                placeholder="Quantidade de meses que o capital será investido"
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card>
          <CardHeader>
            <CardTitle>Resultados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <div className="text-sm text-muted-foreground">Balanço Final</div>
              <div className="text-2xl font-bold text-success">
                {formatCurrency(results.totalValue)}
              </div>
            </div>

            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="text-sm text-muted-foreground">Rendimento do Último Mês</div>
              <div className="text-xl font-bold text-primary">
                {formatCurrency(results.lastMonthReturn)}
              </div>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-sm text-muted-foreground">Tempo Investido</div>
              <div className="text-lg font-bold text-foreground">
                {totalMonths} meses ({Math.floor(totalMonths / 12)} anos e {totalMonths % 12} meses)
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Total Investido</div>
                <div className="text-lg font-semibold text-foreground">
                  {formatCurrency(results.totalContributed)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Juros Ganhos</div>
                <div className="text-lg font-semibold text-success">
                  {formatCurrency(results.totalInterest)}
                </div>
              </div>
            </div>

            <Button onClick={copyToClipboard} className="w-full" variant="outline">
              <Copy className="mr-2 h-4 w-4" />
              Copiar Fórmula para Excel
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Example */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardHeader>
          <CardTitle>Exemplo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div><strong>Capital Inicial:</strong> R$ 1.000</div>
              <div><strong>Rendimento Mensal:</strong> 0,41% (aproximadamente 5% ao ano)</div>
            </div>
            <div>
              <div><strong>Aporte Mensal:</strong> R$ 100</div>
              <div><strong>Tempo:</strong> 120 meses (10 anos)</div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-background rounded-lg border">
            <strong>Resultado:</strong> aproximadamente R$ 18.679,42 acumulados
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompoundInterestCalculator;