import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, TrendingUp, Shield, Info, HelpCircle, BarChart3 } from "lucide-react";

const DolarEducationalContent = () => {
  return (
    <div className="space-y-8 mt-12">
      {/* Título Principal */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-3 flex items-center justify-center gap-3">
          <BookOpen className="w-8 h-8 text-primary" />
          Entenda o Dólar Americano: Guia Prático e Atualizado
        </h2>
        <p className="text-muted-foreground text-lg">
          Tudo o que você precisa saber sobre a moeda mais importante do mundo
        </p>
      </div>

      {/* O que é o Dólar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" />
            O que é o Dólar Americano?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground leading-relaxed">
            O <strong>dólar americano</strong> é a moeda oficial dos Estados Unidos e a mais utilizada no mundo. 
            Seu código internacional é <strong>USD</strong> (United States Dollar) e seu símbolo é <strong>$</strong>.
          </p>

          <p className="text-foreground leading-relaxed">
            Criado em 1792, o dólar se consolidou como a principal moeda de reserva global após a Segunda Guerra Mundial. 
            Hoje, representa cerca de 60% das reservas cambiais mundiais e é usado como referência para transações 
            internacionais, comércio de commodities e contratos globais.
          </p>
        </CardContent>
      </Card>

      {/* Por que é importante */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Por que o Dólar é Importante para o Brasil?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground leading-relaxed">
            O dólar tem impacto direto na economia brasileira por diversos motivos:
          </p>

          <ul className="space-y-3 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">•</span>
              <span className="text-foreground leading-relaxed">
                <strong>Comércio Exterior:</strong> A maioria das importações e exportações brasileiras 
                é negociada em dólar, afetando o preço de produtos e insumos.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">•</span>
              <span className="text-foreground leading-relaxed">
                <strong>Commodities:</strong> Produtos como petróleo, soja e minério de ferro são 
                precificados em dólar no mercado internacional.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">•</span>
              <span className="text-foreground leading-relaxed">
                <strong>Inflação:</strong> A variação do dólar influencia os preços de combustíveis, 
                alimentos e produtos importados no mercado interno.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">•</span>
              <span className="text-foreground leading-relaxed">
                <strong>Investimentos:</strong> Muitos brasileiros investem em ativos denominados em 
                dólar como proteção contra a desvalorização do real.
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Tipos de Cotação */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Tipos de Cotação do Dólar no Brasil
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-foreground leading-relaxed">
            Existem diferentes cotações do dólar, cada uma com finalidade específica:
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="font-bold text-lg text-foreground mb-2">Dólar Comercial</h3>
              <p className="text-foreground leading-relaxed">
                Utilizado em operações de comércio exterior, investimentos e transações empresariais. 
                É a cotação de referência oficial do mercado e a que você encontra nos noticiários. 
                <strong> Este conversor usa a cotação comercial em tempo real.</strong>
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-4 py-2">
              <h3 className="font-bold text-lg text-foreground mb-2">Dólar Turismo</h3>
              <p className="text-foreground leading-relaxed">
                Aplicado na compra de moeda em espécie (papel-moeda) para viagens internacionais. 
                É sempre mais caro que o comercial, pois inclui custos operacionais de distribuição, 
                logística e margem das instituições financeiras. A diferença pode variar entre 3% e 8%.
              </p>
            </div>

            <div className="border-l-4 border-muted pl-4 py-2">
              <h3 className="font-bold text-lg text-foreground mb-2">Dólar Paralelo (Informal)</h3>
              <p className="text-foreground leading-relaxed">
                Negociado fora do sistema oficial, geralmente com valores diferentes do comercial. 
                <strong className="text-destructive"> Não é recomendado:</strong> envolve riscos legais, 
                não oferece garantias e pode resultar em penalidades.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Como Funciona o Conversor */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Como Funciona Este Conversor de Moedas?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground leading-relaxed">
            Nosso conversor utiliza a <strong>cotação comercial em tempo real</strong>, atualizada 
            automaticamente através de fontes confiáveis do mercado financeiro. Os valores são 
            atualizados a cada poucos minutos durante o horário de funcionamento do mercado.
          </p>

          <div className="bg-background border border-border rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-foreground">⚠️ Importante saber:</h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground leading-relaxed">
                  A cotação turismo (para viagens) é sempre superior à comercial
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground leading-relaxed">
                  Cada banco ou casa de câmbio pratica suas próprias taxas e spreads
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground leading-relaxed">
                  Operações com cartão de crédito no exterior incluem IOF (Imposto sobre Operações Financeiras)
                </span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Dicas Práticas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Dicas Práticas para Lidar com o Dólar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-foreground">Para Viajantes:</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    Compare taxas em diferentes bancos e casas de câmbio
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    Compre dólar com antecedência em momentos de cotação favorável
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    Considere usar cartões pré-pagos internacionais para economia
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    Atenção ao IOF: 1,1% para compras em cartão, 5,38% para espécie
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-lg text-foreground">Para Investidores:</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    Considere diversificar parte do patrimônio em ativos dolarizados
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    ETFs cambiais e fundos cambiais são alternativas práticas
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    Mantenha exposição cambial compatível com seu perfil de risco
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    Acompanhe indicadores econômicos que afetam a taxa de câmbio
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Como Interpretar o Gráfico */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Como Interpretar o Gráfico de Cotação
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground leading-relaxed">
            O gráfico acima mostra a evolução histórica da cotação USD/BRL. Entenda seus elementos:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="font-bold text-foreground mb-2">Eixo Vertical (Preço)</h3>
              <p className="text-foreground leading-relaxed">
                Mostra o valor do dólar em reais. Quanto mais alto o ponto no gráfico, 
                mais reais são necessários para comprar um dólar (real mais fraco).
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-4 py-2">
              <h3 className="font-bold text-foreground mb-2">Eixo Horizontal (Tempo)</h3>
              <p className="text-foreground leading-relaxed">
                Representa o período analisado. Você pode ajustar para visualizar diferentes intervalos: 
                1 dia (1D), 1 semana (1W), 1 mês (1M), 3 meses (3M), 1 ano (1Y) ou período completo (ALL).
              </p>
            </div>

            <div className="border-l-4 border-muted pl-4 py-2">
              <h3 className="font-bold text-foreground mb-2">Linha de Tendência</h3>
              <p className="text-foreground leading-relaxed">
                Linha ascendente indica valorização do dólar (encarecimento). Linha descendente 
                indica desvalorização do dólar (barateamento). Movimentos bruscos podem indicar 
                eventos econômicos ou políticos relevantes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            Perguntas Frequentes sobre o Dólar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                O que é IOF e quando é cobrado?
              </AccordionTrigger>
              <AccordionContent className="text-foreground leading-relaxed space-y-3">
                <p>
                  IOF (Imposto sobre Operações Financeiras) é um tributo federal cobrado em operações de câmbio. 
                  As alíquotas variam conforme o tipo de operação:
                </p>
                <ul className="ml-6 space-y-2">
                  <li>• <strong>1,1%</strong> para compras internacionais com cartão de crédito ou débito</li>
                  <li>• <strong>5,38%</strong> para compra de moeda em espécie (papel-moeda)</li>
                  <li>• <strong>0,38%</strong> para operações de câmbio de investimentos no exterior</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Posso comprar dólar em qualquer banco?
              </AccordionTrigger>
              <AccordionContent className="text-foreground leading-relaxed space-y-3">
                <p>
                  Sim, a maioria dos bancos e cooperativas de crédito oferece serviços de câmbio. 
                  Também é possível comprar em casas de câmbio autorizadas pelo Banco Central. 
                  Para valores mais altos, geralmente é necessário agendamento prévio.
                </p>
                <p>
                  <strong>Dica:</strong> Compare as taxas entre diferentes instituições, pois os spreads 
                  (diferença entre compra e venda) podem variar significativamente.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                O dólar sempre sobe em momentos de crise?
              </AccordionTrigger>
              <AccordionContent className="text-foreground leading-relaxed space-y-3">
                <p>
                  Não necessariamente. O comportamento do dólar depende do tipo e localização da crise. 
                  Em crises globais, o dólar tende a se valorizar como "moeda refúgio", pois investidores 
                  buscam segurança nos títulos do governo americano.
                </p>
                <p>
                  Porém, em crises especificamente americanas (como recessão nos EUA), o dólar pode 
                  se desvalorizar. Já em crises locais brasileiras, o dólar tende a subir em relação 
                  ao real por fuga de capital estrangeiro e aumento da percepção de risco.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Qual a melhor forma de guardar dólar?
              </AccordionTrigger>
              <AccordionContent className="text-foreground leading-relaxed space-y-3">
                <p>
                  Depende do objetivo e prazo. Algumas opções incluem:
                </p>
                <ul className="ml-6 space-y-2">
                  <li>
                    • <strong>Papel-moeda:</strong> Para uso imediato em viagens, mas tem custo de IOF alto (5,38%)
                  </li>
                  <li>
                    • <strong>Conta em dólar:</strong> Alguns bancos oferecem, mas há tarifas de manutenção
                  </li>
                  <li>
                    • <strong>ETFs cambiais:</strong> Fundos negociados em bolsa que acompanham a variação do dólar
                  </li>
                  <li>
                    • <strong>Fundos cambiais:</strong> Investimento em renda fixa que replica a variação cambial
                  </li>
                </ul>
                <p>
                  Para investimento de longo prazo, ETFs e fundos cambiais são mais vantajosos que papel-moeda.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Existe limite para compra de dólar no Brasil?
              </AccordionTrigger>
              <AccordionContent className="text-foreground leading-relaxed space-y-3">
                <p>
                  Não há limite legal para compra de dólar no Brasil. Entretanto, operações acima de 
                  R$ 10.000,00 devem ser declaradas à Receita Federal através do sistema e-DBV 
                  (Declaração de Porte de Valores).
                </p>
                <p>
                  Para viagens internacionais, não é obrigatório declarar valores inferiores a US$ 10.000,00 
                  na alfândega ao sair do país, mas valores acima devem ser declarados na e-DBV antes do embarque.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                Como o dólar afeta o preço da gasolina?
              </AccordionTrigger>
              <AccordionContent className="text-foreground leading-relaxed space-y-3">
                <p>
                  A Petrobras importa uma parte do petróleo e derivados consumidos no Brasil, pagando 
                  em dólar no mercado internacional. Além disso, mesmo o petróleo produzido aqui é 
                  precificado com base nas cotações internacionais em dólar.
                </p>
                <p>
                  Por isso, quando o dólar sobe, aumenta o custo de importação e a referência de preço 
                  no mercado interno, pressionando o valor dos combustíveis nas refinarias e, consequentemente, 
                  nos postos de gasolina.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardContent className="py-6">
          <div className="text-center space-y-3">
            <p className="text-foreground leading-relaxed">
              <strong>Quer se aprofundar ainda mais?</strong>
            </p>
            <p className="text-muted-foreground">
              Explore nossos outros guias sobre câmbio, investimentos e economia para tomar decisões 
              financeiras mais informadas.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DolarEducationalContent;