import "/src/css/SlickSliderListProduct.css";
import { SliderComponent } from "./SliderComponent";
import { useProductContext } from "../../context/ProductContext";

export function SlickSliderListProduct() {
  const produtosFormatados = useProductContext();

  const lista = produtosFormatados;
  const tamanho = lista.length;
  const meio = Math.floor(tamanho / 2);
  const filteredProducts1 = lista.slice(0, meio);
  const filteredProducts2 = lista.slice(meio);

  return (
    <div className="slider-container" id="slider-container">
      <br />
      <h4>Para grandes grupos e ocasiões especiais:</h4>
      <SliderComponent products={filteredProducts1} />
      <br />
      <br />
      <h4>
        Porções individuais, porções únicas e dividir um pedaço com quem você
        ama:
      </h4>
      <SliderComponent products={filteredProducts2} />
    </div>
  );
}
