import "/src/css/about.css";

import { SlickSliderListProduct } from "../components/SlickSlider/SlickSliderListProduct";
import { ControlCarousel } from "../components/Carousels/ControlCarousel";
import { TextAboutHome } from "../components/Texts/TextAboutHome";
import { SubTextAboutHome } from "../components/Texts/SubTextAboutHome";

export default function Home() {
  return (
    <div>
      <ControlCarousel />
      <div className="section-product">
        <br />
        <h2>Nossos produtos</h2>
        <SlickSliderListProduct />
      </div>
      <br />
      <br />

      <section className="section-about" id="section-about">
        <div>
          <div className="content-card-about" id="content-card-about">
            <TextAboutHome />
            <div className="imagem-in-about" />
          </div>
          <div>
            <SubTextAboutHome />
          </div>
        </div>
      </section>
    </div>
  );
}
