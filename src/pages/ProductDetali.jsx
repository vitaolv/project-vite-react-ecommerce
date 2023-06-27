import { useEffect, useState } from "react";

import { CheckboxColor } from "../components/pageProductDetali/CheckboxColor";
import { ButtonDetalheProduto } from "../components/pageProductDetali/ButtonDetalheProduto";
import { SectionInfoProduct } from "../components/pageProductDetali/SectionInfoProduct";
import { ValorDoProduto } from "../components/pageProductDetali/ValorDoProduto";
import { Contador } from "../components/pageProductDetali/Contador";
import { AdvantageInformationIcons } from "../components/pageProductDetali/AdvantageInformationIcons";
import { useProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { NotificationSuccess } from "../components/AlertsNotifications";
import { TextDetaliProduct } from "../components/pageProductDetali/TextDetaliProduct";

export function ProductDetali() {
  const [corSelecionada, setCorSelecionada] = useState("");
  const [showSuccess, setShowSucess] = useState(false);
  const products = useProductContext();
  const { id, nome } = useParams();

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSucess(false);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const selectedProduct = products.find(
    (product) =>
      product.id === parseInt(id) &&
      product.name.toLowerCase() === nome.toLowerCase()
  );

  if (!selectedProduct) {
    history.push("/404"); // ou qualquer outra rota de página de erro
    return null;
  }

  const handleClickInCart = () => {
    setShowSucess(true);
  };

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
          <SectionInfoProduct
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
          <ButtonDetalheProduto
            corSelecionada={corSelecionada}
            onAddToCart={handleClickInCart}
          />
          <br />
          <AdvantageInformationIcons />
        </aside>
        <TextDetaliProduct
          name={selectedProduct.name}
          id={selectedProduct.id}
        />
      </div>
      <div className={`notification-container ${showSuccess ? "show" : ""}`}>
        {showSuccess && (
          <NotificationSuccess mensagemSuccess="Este produto foi adicionado no carrinho com sucesso!" />
        )}
      </div>
    </div>
  );
}
