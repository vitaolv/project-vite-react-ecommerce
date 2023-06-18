import { useState } from "react";

import { CheckboxColor } from "../components/pageProductDetali/CheckboxColor";
import { ButtonDetalheProduto } from "../components/pageProductDetali/ButtonDetalheProduto";
import { SectionInfoProduct } from "../components/pageProductDetali/SectionInfoProduct";
import { ValorDoProduto } from "../components/pageProductDetali/ValorDoProduto";
import { Contador } from "../components/pageProductDetali/Contador";
import { AdvantageInformationIcons } from "../components/pageProductDetali/AdvantageInformationIcons";
import { useProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

export function ProductDetali() {
  const [corSelecionada, setCorSelecionada] = useState("");
  const products = useProductContext();
  const { id, nome } = useParams();
  const selectedProduct = products.find(
    (product) =>
      product.id === parseInt(id) &&
      product.name.toLowerCase() === nome.toLowerCase()
  );

  if (!selectedProduct) {
    history.push("/404"); // ou qualquer outra rota de página de erro
    return null;
  }

  const handleColorSelected = (cor) => {
    setCorSelecionada(cor);
  };

  return (
    <div>
      <div className="content-detalhe-produto">
        <div className="info-produto-com-foto">
          <SectionInfoProduct />
        </div>
        <hr />
        <aside className="lateral-detalhe-produto">
          <ValorDoProduto />
          <hr />
          <Contador />
          <hr />
          <CheckboxColor onColorSelected={handleColorSelected} />
          <ButtonDetalheProduto corSelecionada={corSelecionada} />
          <br />
          <AdvantageInformationIcons />
        </aside>
      </div>
    </div>
  );
}
