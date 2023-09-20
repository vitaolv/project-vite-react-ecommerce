import "/src/css/pageProductDetail.css";
import "/src/css/imageInPageDetail.css";

import { FlavorRadio } from "../components/Radios/FlavorRadio";
import { ButtonToCartOrBuyNow } from "../components/Buttons/ButtonToCartOrBuyNow";
import { ImageDetailProduct } from "../components/Imagens/ImageDetailProduct";
import { ValorDoProduto } from "../components/Texts/ValorDoProduto";
import { Contador } from "../components/Count/Contador";
import { AdvantageInformationIcons } from "../components/Texts/AdvantageInformationIcons";
import { useProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { TextDetailProduct } from "../components/Texts/TextDetailProduct";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../store/actions/ActionsCart";
import { useState } from "react";

export default function ProductDetail() {
  const products = useProductContext();
  const { id, nome } = useParams();
  const dispatch = useDispatch();

  const selectedProductIndex = products.findIndex(
    (product) =>
      product.id === parseInt(id) &&
      product.name.toLowerCase() === nome.toLowerCase()
  );

  const selectedProduct = { ...products[selectedProductIndex] };

  const [selectedFlavor, setSelectedFlavor] = useState(
    selectedProduct.flavorSelected || selectedProduct.availableColors[0] || ""
  );
  const [selectedQuantity, setSelectedQuantity] = useState(
    selectedProduct.quantity || 1
  );

  const handleQuantityChange = (newQuantity) => {
    setSelectedQuantity(newQuantity);
  };

  const handleFlavorChange = (flavor) => {
    setSelectedFlavor(flavor);
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...selectedProduct,
      flavorSelected: selectedFlavor,
      quantity: selectedQuantity,
    };
    dispatch(addToCartAction(productToAdd));
    console.log("Produto adicionado ao carrinho:", productToAdd);
  };

  return (
    <div className="container-page-product">
      <div className="route-Detail">
        <a href="/project-vite-react-ecommerce/">Home</a> ⇒{" "}
        {selectedProduct.name}
      </div>
      <div className="content-detalhe-produto">
        <div className="info-produto-com-foto">
          <ImageDetailProduct product={selectedProduct} />
        </div>
        <aside className="lateral-detalhe-produto">
          <ValorDoProduto name={selectedProduct.name} id={selectedProduct.id} />
          <hr />
          <h6 id="h6-quantidade">Quantidade:</h6>
          <Contador
            onQuantityChange={handleQuantityChange}
            initQuantity={selectedQuantity}
          />
          <hr />
          <FlavorRadio
            availableColors={selectedProduct.availableColors}
            onFlavorChance={handleFlavorChange}
            initFlavor={selectedFlavor}
          />
          <ButtonToCartOrBuyNow onClick={handleAddToCart} />
          <br />
          <AdvantageInformationIcons />
        </aside>
        <TextDetailProduct
          name={selectedProduct.name}
          id={selectedProduct.id}
        />
      </div>
    </div>
  );
}
