import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ValeHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/vale" />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cotação da Vale (VALE3) Hoje | Ações e Dividendos em Tempo Real
          </h1>
          <p className="text-xl text-muted-foreground">
            Acompanhe ao vivo o preço das ações da Vale S.A. na B3
          </p>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">VALE3 — Gráfico em Tempo Real</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="BMFBOVESPA:VALE3" height="384" style="advanced" />
              </div>
            </CardContent>
          </Card>
        </div>

        <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
          <h2>Preço da ação da Vale hoje na B3</h2>
          <p>
            A <strong>Vale (VALE3)</strong> é uma das maiores mineradoras do mundo e uma das ações
            com maior peso no índice Ibovespa. A cotação acima é atualizada em tempo real durante o
            pregão da B3 (das 10h às 17h, horário de Brasília). Por ser uma exportadora global de
            minério de ferro, seu preço é fortemente influenciado pela demanda chinesa, pelo câmbio
            dólar/real e pelos preços internacionais das commodities metálicas.
          </p>

          <h2>Como a Vale paga dividendos aos seus acionistas?</h2>
          <p>
            A Vale é reconhecida como uma das maiores pagadoras de proventos da bolsa brasileira.
            Sua política de remuneração prevê a distribuição de, no mínimo, <strong>30% do EBITDA
            ajustado menos os investimentos correntes</strong>, com pagamentos semestrais em março e
            setembro. Além dos dividendos ordinários, a companhia já realizou pagamentos
            extraordinários em anos de forte geração de caixa, sustentando um Dividend Yield
            historicamente atrativo.
          </p>
          <p>
            Os pagamentos ocorrem como <strong>dividendos</strong> e <strong>juros sobre capital
            próprio (JCP)</strong>, sempre comunicados via fato relevante na área de Relações com
            Investidores. Para receber, basta ter a ação em custódia na data com direito (data-com).
          </p>

          <h2>O preço do minério de ferro afeta a VALE3? Entenda a cotação</h2>
          <p>
            Sim — e de forma direta. O minério de ferro responde pela maior fatia da receita da
            Vale, por isso o gráfico de VALE3 costuma se mover em sintonia com a cotação do minério
            no porto chinês de Qingdao. Os principais drivers são:
          </p>
          <ul>
            <li>
              <strong>Demanda da China:</strong> o país consome cerca de 70% do minério marítimo
              global. Estímulos ao setor imobiliário e à infraestrutura tendem a elevar o preço.
            </li>
            <li>
              <strong>Oferta global:</strong> problemas operacionais em concorrentes (Austrália,
              África) reduzem a oferta e favorecem a Vale.
            </li>
            <li>
              <strong>Câmbio USD/BRL:</strong> como as vendas são em dólar, o real mais fraco
              amplia a receita convertida para reais.
            </li>
            <li>
              <strong>ESG e governança:</strong> eventos relacionados a segurança operacional
              influenciam diretamente o sentimento dos investidores sobre a ação.
            </li>
          </ul>
          <p>
            Combinar o acompanhamento do gráfico em tempo real com a evolução do preço do minério
            de ferro é a forma mais eficiente de entender os movimentos diários de VALE3.
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default ValeHoje;
