import Layout from "@/components/Layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PetrobrasHoje = () => {
  return (
    <Layout>
      <SEO path="/acoes/petrobras" />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cotação da Petrobras (PETR4 e PETR3) Hoje | Preço em Tempo Real
          </h1>
          <p className="text-xl text-muted-foreground">
            Acompanhe ao vivo o preço das ações da Petrobras na B3
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">PETR4 — Preferenciais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="BMFBOVESPA:PETR4" height="384" style="advanced" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">PETR3 — Ordinárias</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <TradingViewWidget symbol="BMFBOVESPA:PETR3" height="384" style="advanced" />
              </div>
            </CardContent>
          </Card>
        </div>

        <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
          <h2>Qual o valor da ação da Petrobras hoje?</h2>
          <p>
            A cotação da Petrobras é atualizada em tempo real durante o pregão da B3, que funciona de
            segunda a sexta-feira, das 10h às 17h (horário de Brasília). Acima você acompanha os
            gráficos ao vivo de <strong>PETR4</strong> (ações preferenciais) e <strong>PETR3</strong>
            {" "}(ações ordinárias), os dois tickers mais negociados da Petróleo Brasileiro S.A. na
            Bolsa de Valores brasileira. Fora do horário de pregão, o valor exibido corresponde ao
            preço de fechamento do último dia útil. A Petrobras é, historicamente, uma das ações
            mais líquidas e pesquisadas do Ibovespa, o que faz com que pequenas oscilações no preço
            do petróleo Brent ou no câmbio dólar/real impactem diretamente sua cotação.
          </p>

          <h2>Diferença entre PETR3 e PETR4: qual a melhor para investir?</h2>
          <p>
            A Petrobras tem dois tipos de ações negociadas na B3 e entender a diferença é essencial
            antes de investir:
          </p>
          <ul>
            <li>
              <strong>PETR3 (Ordinárias — ON):</strong> dão direito a voto nas assembleias de
              acionistas. São indicadas para quem quer participar das decisões da companhia.
            </li>
            <li>
              <strong>PETR4 (Preferenciais — PN):</strong> não dão direito a voto, mas têm
              preferência no recebimento de dividendos e no reembolso de capital em caso de
              liquidação. Costumam ter maior liquidez no mercado.
            </li>
          </ul>
          <p>
            Para o investidor focado em renda passiva, a <strong>PETR4</strong> tende a ser a
            escolha mais popular justamente pela prioridade no pagamento de proventos e pelo volume
            de negociação. Já a PETR3 pode apresentar pequenas distorções de preço em relação à PN,
            criando oportunidades específicas para investidores mais experientes.
          </p>

          <h2>Histórico de Dividendos da Petrobras: quanto a empresa paga por ação?</h2>
          <p>
            A Petrobras é reconhecida como uma das maiores pagadoras de dividendos da bolsa
            brasileira. Sua política de remuneração aos acionistas está atrelada à geração de caixa
            livre e ao nível de endividamento da companhia. Em ciclos de petróleo em alta e câmbio
            favorável, a estatal já distribuiu valores expressivos por ação, posicionando-se entre
            as principais pagadoras de proventos do mundo. Os pagamentos ocorrem normalmente em
            forma de <strong>dividendos</strong> e <strong>juros sobre capital próprio (JCP)</strong>,
            divulgados a cada trimestre junto com o balanço.
          </p>
          <p>
            Vale lembrar que a política de dividendos pode ser revisada conforme a estratégia da
            companhia e o cenário econômico, por isso é importante acompanhar os fatos relevantes
            publicados no site de Relações com Investidores da Petrobras.
          </p>

          <h2>A Petrobras vai subir ou cair? (Análise do setor de petróleo)</h2>
          <p>
            O comportamento das ações da Petrobras está diretamente ligado a três grandes vetores:
          </p>
          <ul>
            <li>
              <strong>Preço do petróleo Brent:</strong> alta do barril favorece a receita e a
              margem da empresa, impulsionando a cotação.
            </li>
            <li>
              <strong>Câmbio (USD/BRL):</strong> a Petrobras vende em dólar e parte dos custos é em
              real, então a desvalorização do real costuma beneficiar o resultado.
            </li>
            <li>
              <strong>Política interna e governança:</strong> mudanças na política de preços de
              combustíveis ou na gestão tendem a gerar volatilidade.
            </li>
          </ul>
          <p>
            Para projetar tendências, investidores combinam análise técnica do gráfico acima com
            análise fundamentalista (P/L, Dividend Yield, dívida líquida/EBITDA) e acompanhamento
            macroeconômico do setor de energia global.
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default PetrobrasHoje;
