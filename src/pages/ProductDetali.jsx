import { useState } from "react";

import { CheckboxColor } from "../components/pageProductDetali/CheckboxColor";
import { ButtonToCartOrBuyNow } from "../components/Buttons/ButtonToCartOrBuyNow";
import { ImageDetaliProduct } from "../components/pageProductDetali/ImageDetaliProduct";
import { ValorDoProduto } from "../components/pageProductDetali/ValorDoProduto";
import { Contador } from "../components/pageProductDetali/Contador";
import { AdvantageInformationIcons } from "../components/pageProductDetali/AdvantageInformationIcons";
import { useProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { TextDetaliProduct } from "../components/pageProductDetali/TextDetaliProduct";

export default function ProductDetali() {
  const [corSelecionada, setCorSelecionada] = useState("");
  const products = useProductContext();
  const { id, nome } = useParams();

  const selectedProduct = products.find(
    (product) =>
      product.id === parseInt(id) &&
      product.name.toLowerCase() === nome.toLowerCase()
  );

  const handleColorSelected = (cor) => {
    setCorSelecionada(cor);
  };

  return (
    <div>
      <p className="route-detali">
        <a href="/">Home</a> ⇒ {selectedProduct.name}
      </p>
      <div className="content-detalhe-produto">
        <div className="info-produto-com-foto">
          <ImageDetaliProduct
            name={selectedProduct.name}
            id={selectedProduct.id}
          />
        </div>
        <aside className="lateral-detalhe-produto">
          <ValorDoProduto name={selectedProduct.name} id={selectedProduct.id} />
          <hr />
          <Contador />
          <hr />
          <CheckboxColor
            onColorSelected={handleColorSelected}
            availableColors={selectedProduct.availableColors}
          />
          <ButtonToCartOrBuyNow product={selectedProduct} />
          <br />
          <AdvantageInformationIcons />
        </aside>
        <TextDetaliProduct
          name={selectedProduct.name}
          id={selectedProduct.id}
        />
      </div>
    </div>
  );
}
