import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
const Contato = () => {
  return <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contato</h1>
          <p className="text-xl text-muted-foreground">
            Entre em contato conosco para dúvidas, sugestões ou parcerias
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Seu nome" />
                <Input type="email" placeholder="Seu e-mail" />
              </div>
              <Input placeholder="Assunto" />
              <Textarea placeholder="Sua mensagem" rows={6} />
              <Button className="w-full">Enviar Mensagem</Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>E-mail</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">contato@cotacaodehoje.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Telefone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+55 (12) 98251-9116</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Endereço</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  São Paulo, SP<br />
                  Brasil
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Contato;