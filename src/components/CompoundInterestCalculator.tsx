import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CompoundInterestCalculator = () => {
  const { toast } = useToast();
  const [initialCapital, setInitialCapital] = useState<number>(1000);
  const [rate, setRate] = useState<number>(0.41);
  const [contribution, setContribution] = useState<number>(100);
  const [totalPeriods, setTotalPeriods] = useState<number>(120);
  const [periodType, setPeriodType] = useState<string>("monthly");

  const getPeriodLabel = () => {
    const labels = {
      daily: "Diário",
      weekly: "Semanal", 
      biweekly: "Quinzenal",
      monthly: "Mensal"
    };
    return labels[periodType as keyof typeof labels] || "Mensal";
  };

  const calculateCompoundInterest = () => {
    if (initialCapital <= 0 || rate < 0 || contribution < 0 || totalPeriods <= 0) {
      return {
        futureValue: 0,
        lastPeriodReturn: 0,
        totalContributed: 0,
        totalInterest: 0,
        timeInvested: "0 períodos",
        periodicResults: []
      };
    }

    const r = rate / 100; // Convert percentage to decimal
    const n = totalPeriods;
    const P = initialCapital;
    const A = contribution;

    // Compound interest with periodic contributions formula
    const futureValue = P * Math.pow(1 + r, n) + A * ((Math.pow(1 + r, n) - 1) / r);
    
    // Calculate previous period value to get last period's return
    const previousPeriodValue = n > 1 ? 
      P * Math.pow(1 + r, n - 1) + A * ((Math.pow(1 + r, n - 1) - 1) / r) : 
      P;
    
    const lastPeriodReturn = futureValue - previousPeriodValue;
    const totalContributed = P + (A * n);
    const totalInterest = futureValue - totalContributed;
    
    // Calculate time invested based on period type
    let timeInvested = "";
    if (periodType === "daily") {
      const days = n;
      const months = Math.floor(days / 30);
      const remainingDays = days % 30;
      timeInvested = months > 0 ? 
        `${days} dias (${months} ${months === 1 ? 'mês' : 'meses'}${remainingDays > 0 ? ` e ${remainingDays} dias` : ''})` :
        `${days} ${days === 1 ? 'dia' : 'dias'}`;
    } else if (periodType === "weekly") {
      const weeks = n;
      const months = Math.floor(weeks / 4);
      const remainingWeeks = weeks % 4;
      timeInvested = months > 0 ? 
        `${weeks} semanas (${months} ${months === 1 ? 'mês' : 'meses'}${remainingWeeks > 0 ? ` e ${remainingWeeks} semanas` : ''})` :
        `${weeks} ${weeks === 1 ? 'semana' : 'semanas'}`;
    } else if (periodType === "biweekly") {
      const biweeks = n;
      const months = Math.floor(biweeks / 2);
      const remainingBiweeks = biweeks % 2;
      timeInvested = months > 0 ? 
        `${biweeks} quinzenas (${months} ${months === 1 ? 'mês' : 'meses'}${remainingBiweeks > 0 ? ` e ${remainingBiweeks} quinzenas` : ''})` :
        `${biweeks} ${biweeks === 1 ? 'quinzena' : 'quinzenas'}`;
    } else {
      const months = n;
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      timeInvested = years > 0 ? 
        `${months} meses (${years} ${years === 1 ? 'ano' : 'anos'}${remainingMonths > 0 ? ` e ${remainingMonths} ${remainingMonths === 1 ? 'mês' : 'meses'}` : ''})` :
        `${months} ${months === 1 ? 'mês' : 'meses'}`;
    }

    // Generate periodic results for table
    const periodicResults = [];
    for (let i = 1; i <= Math.min(n, 50); i++) { // Limit to 50 periods for performance
      const periodValue = P * Math.pow(1 + r, i) + A * ((Math.pow(1 + r, i) - 1) / r);
      const periodReturn = i > 1 ? 
        periodValue - (P * Math.pow(1 + r, i - 1) + A * ((Math.pow(1 + r, i - 1) - 1) / r)) : 
        periodValue - P;
      
      let timeLabel = "";
      if (periodType === "daily") {
        timeLabel = `${i} ${i === 1 ? 'dia' : 'dias'}`;
      } else if (periodType === "weekly") {
        timeLabel = `${i} ${i === 1 ? 'semana' : 'semanas'}`;
      } else if (periodType === "biweekly") {
        timeLabel = `${i} ${i === 1 ? 'quinzena' : 'quinzenas'}`;
      } else {
        const years = Math.floor(i / 12);
        const months = i % 12;
        timeLabel = years > 0 ? 
          `${years} ${years === 1 ? 'ano' : 'anos'}${months > 0 ? ` e ${months} ${months === 1 ? 'mês' : 'meses'}` : ''}` :
          `${i} ${i === 1 ? 'mês' : 'meses'}`;
      }

      periodicResults.push({
        period: i,
        periodReturn: periodReturn,
        balance: periodValue,
        timeLabel: timeLabel
      });
    }

    return {
      futureValue,
      lastPeriodReturn,
      totalContributed,
      totalInterest,
      timeInvested,
      periodicResults
    };
  };

  const result = calculateCompoundInterest();

  const copyToClipboard = () => {
    const r = rate / 100;
    const formula = `=${initialCapital}*(1+${r})^${totalPeriods} + ${contribution} * (((1+${r})^${totalPeriods}-1)/${r})`;
    
    navigator.clipboard.writeText(formula).then(() => {
      toast({
        title: "Fórmula copiada!",
        description: "A fórmula foi copiada para a área de transferência.",
      });
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Calculadora de Juros Compostos</h1>
          <p className="text-xl text-muted-foreground">Calcule o crescimento do seu investimento com aportes periódicos</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Dados do Investimento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="capital">Capital Inicial (R$)</Label>
                <Input
                  id="capital"
                  type="number"
                  value={initialCapital}
                  onChange={(e) => setInitialCapital(Number(e.target.value))}
                  placeholder="Insira o valor a ser investido inicialmente"
                  className="bg-input"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="period-type">Tipo de Período</Label>
                <Select value={periodType} onValueChange={setPeriodType}>
                  <SelectTrigger className="bg-input">
                    <SelectValue placeholder="Selecione o período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Diário</SelectItem>
                    <SelectItem value="weekly">Semanal</SelectItem>
                    <SelectItem value="biweekly">Quinzenal</SelectItem>
                    <SelectItem value="monthly">Mensal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rate">Rendimento {getPeriodLabel()} (%)</Label>
                <Input
                  id="rate"
                  type="number"
                  step="0.01"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  placeholder={`Rendimento ${getPeriodLabel().toLowerCase()} do investimento`}
                  className="bg-input"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contribution">Aporte {getPeriodLabel()} (R$)</Label>
                <Input
                  id="contribution"
                  type="number"
                  value={contribution}
                  onChange={(e) => setContribution(Number(e.target.value))}
                  placeholder={`Valor extra investido a cada período`}
                  className="bg-input"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="periods">Total de Períodos</Label>
                <Input
                  id="periods"
                  type="number"
                  value={totalPeriods}
                  onChange={(e) => setTotalPeriods(Number(e.target.value))}
                  placeholder={`Quantidade de períodos que o capital será investido`}
                  className="bg-input"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Resultados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-accent/10 rounded-lg">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">Rendimento do Último Período</h3>
                  <p className="text-2xl font-bold text-success">{formatCurrency(result.lastPeriodReturn)}</p>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">Balanço Final</h3>
                  <p className="text-2xl font-bold text-primary">{formatCurrency(result.futureValue)}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">Total Aportado</h3>
                  <p className="text-xl font-bold text-foreground">{formatCurrency(result.totalContributed)}</p>
                </div>

                <div className="p-4 bg-accent/10 rounded-lg">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">Total de Juros</h3>
                  <p className="text-xl font-bold text-success">{formatCurrency(result.totalInterest)}</p>
                </div>
              </div>

              <div className="p-4 bg-muted/20 rounded-lg">
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">Tempo Investido</h3>
                <p className="text-xl font-bold text-foreground">{result.timeInvested}</p>
              </div>

              <Button onClick={copyToClipboard} className="w-full" size="lg">
                <Copy className="mr-2 h-4 w-4" />
                Copiar Fórmula para Excel
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Tabela de Resultados Periódicos */}
        <Card className="bg-card mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Evolução {getPeriodLabel()}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rendimento do Período</TableHead>
                    <TableHead>Balanço Final</TableHead>
                    <TableHead>Tempo Investido</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {result.periodicResults.map((period) => (
                    <TableRow key={period.period}>
                      <TableCell className="text-success font-medium">
                        {formatCurrency(period.periodReturn)}
                      </TableCell>
                      <TableCell className="font-medium">
                        {formatCurrency(period.balance)}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {period.timeLabel}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Exemplo */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 mt-8">
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
    </div>
  );
};

export default CompoundInterestCalculator;