import Layout from "@/components/Layout";
import CompoundInterestCalculator from "@/components/CompoundInterestCalculator";

const CalculadoraJuros = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <CompoundInterestCalculator />
      </div>
    </Layout>
  );
};

export default CalculadoraJuros;