import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ItauHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/itau" />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cotação do Itaú (ITUB4) e Banco do Brasil (BBAS3) Hoje
          </h1>
          <p className="text-xl text-muted-foreground">
            Acompanhe ao vivo os preços das principais ações bancárias da B3
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">ITUB4 — Itaú Unibanco</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="BMFBOVESPA:ITUB4" height="384" style="advanced" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">BBAS3 — Banco do Brasil</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="BMFBOVESPA:BBAS3" height="384" style="advanced" />
              </div>
            </CardContent>
          </Card>
        </div>

        <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
          <h2>Valor das ações do Itaú Unibanco em tempo real</h2>
          <p>
            O <strong>Itaú Unibanco (ITUB4)</strong> é o maior banco privado da América Latina e
            uma das ações de maior peso no Ibovespa. A cotação acima é atualizada em tempo real
            durante o pregão da B3 (das 10h às 17h, horário de Brasília). O ticker
            <strong> ITUB4</strong> corresponde às ações preferenciais, que oferecem maior
            liquidez e prioridade no pagamento de dividendos. O desempenho da ação é fortemente
            influenciado pela taxa Selic, pelo nível de inadimplência da carteira de crédito e
            pelos resultados trimestrais, divulgados normalmente em fevereiro, maio, agosto e
            novembro.
          </p>

          <h2>Cotação BBAS3: o Banco do Brasil paga bons dividendos?</h2>
          <p>
            O <strong>Banco do Brasil (BBAS3)</strong>, ações ordinárias, é tradicionalmente uma
            das maiores pagadoras de proventos do setor financeiro. O banco mantém política de
            distribuir entre <strong>40% e 45% do lucro líquido</strong> em forma de dividendos e
            juros sobre capital próprio, com pagamentos trimestrais. Esse perfil torna BBAS3
            popular entre investidores focados em <strong>renda passiva</strong> e estratégias de
            longo prazo. Como o controlador é a União, o banco também sofre influência do cenário
            político, o que pode gerar volatilidade pontual mesmo com fundamentos sólidos.
          </p>

          <h2>Histórico de lucros e pagamentos das ações bancárias</h2>
          <p>
            O setor bancário brasileiro é historicamente um dos mais lucrativos do mundo, com ROE
            (Retorno sobre Patrimônio) frequentemente acima de 15% para os grandes bancos. Tanto
            Itaú quanto Banco do Brasil apresentam:
          </p>
          <ul>
            <li>
              <strong>Lucros recorrentes elevados:</strong> sustentados por margem financeira,
              tarifas e serviços.
            </li>
            <li>
              <strong>Distribuição constante de proventos:</strong> dividendos e JCP pagos com
              frequência trimestral.
            </li>
            <li>
              <strong>Dividend Yield atrativo:</strong> historicamente entre 6% e 10% ao ano,
              dependendo do ciclo de juros.
            </li>
            <li>
              <strong>Sensibilidade à Selic:</strong> juros mais altos tendem a ampliar a margem
              financeira líquida, beneficiando o lucro.
            </li>
          </ul>
          <p>
            Para o investidor que busca exposição ao setor financeiro, combinar ITUB4 e BBAS3 em
            uma carteira diversificada é uma forma comum de equilibrar a exposição entre banco
            privado e banco público, capturando o melhor dos dois modelos de negócio.
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default ItauHoje;
