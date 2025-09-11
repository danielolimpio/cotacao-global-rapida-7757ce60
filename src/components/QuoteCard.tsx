import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface QuoteCardProps {
  pair: string;
  price: string | number;
  change: string | number;
  changePercent: string | number;
  flag1?: string;
  flag2?: string;
  isPositive?: boolean;
  isLoading?: boolean;
}

const QuoteCard = ({ 
  pair, 
  price, 
  change, 
  changePercent, 
  flag1, 
  flag2, 
  isPositive = true,
  isLoading = false 
}: QuoteCardProps) => {
  const formatPrice = (value: string | number) => {
    if (typeof value === 'number') {
      return value.toLocaleString('pt-BR', { 
        minimumFractionDigits: 4, 
        maximumFractionDigits: 6 
      });
    }
    return value;
  };

  const formatChange = (value: string | number) => {
    if (typeof value === 'number') {
      return value >= 0 ? `+${value.toFixed(4)}` : value.toFixed(4);
    }
    return value;
  };

  const formatPercent = (value: string | number) => {
    if (typeof value === 'number') {
      return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
    }
    return value;
  };

  const actualIsPositive = typeof change === 'number' ? change >= 0 : !change.toString().startsWith('-');
  
  if (isLoading) {
    return (
      <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-background border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {flag1 && flag2 && (
                <div className="flex items-center space-x-1">
                  <span className="text-2xl">{flag1}</span>
                  <span className="text-sm text-muted-foreground">/</span>
                  <span className="text-2xl">{flag2}</span>
                </div>
              )}
              <span className="font-bold text-lg">{pair}</span>
            </div>
            <div className="h-6 w-16 bg-muted animate-pulse rounded"></div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="h-8 w-24 bg-muted animate-pulse rounded"></div>
            <div className="h-4 w-20 bg-muted animate-pulse rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-background border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {flag1 && flag2 && (
              <div className="flex items-center space-x-1">
                <span className="text-2xl">{flag1}</span>
                <span className="text-sm text-muted-foreground">/</span>
                <span className="text-2xl">{flag2}</span>
              </div>
            )}
            {flag1 && !flag2 && <span className="text-2xl">{flag1}</span>}
            <span className="font-bold text-lg">{pair}</span>
          </div>
          <Badge variant={actualIsPositive ? "default" : "destructive"} className="flex items-center space-x-1">
            {actualIsPositive ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            <span>{formatPercent(changePercent)}</span>
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-foreground">
            {formatPrice(price)}
          </div>
          <div className={`text-sm flex items-center space-x-1 ${
            actualIsPositive ? 'text-success' : 'text-destructive'
          }`}>
            {actualIsPositive ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span>{formatChange(change)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;