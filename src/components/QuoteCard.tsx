import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface QuoteCardProps {
  pair: string;
  price: string;
  change: string;
  changePercent: string;
  flag1?: string;
  flag2?: string;
  isPositive?: boolean;
}

const QuoteCard = ({ 
  pair, 
  price, 
  change, 
  changePercent, 
  flag1, 
  flag2, 
  isPositive = true 
}: QuoteCardProps) => {
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
            <span className="font-bold text-lg">{pair}</span>
          </div>
          <Badge variant={isPositive ? "default" : "destructive"} className="flex items-center space-x-1">
            {isPositive ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            <span>{changePercent}</span>
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-foreground">
            {price}
          </div>
          <div className={`text-sm flex items-center space-x-1 ${
            isPositive ? 'text-success' : 'text-destructive'
          }`}>
            {isPositive ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span>{change}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;