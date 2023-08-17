import { SlickSliderListProduct } from "../components/pageHome/SlickSliderListProduct";
import { ControlCarousel } from "../components/pageHome/controlCarousel";

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
        <div className="image-overlay">
          <div className="content-card-about" id="content-card-about">
            <div className="text-about">
              <h2 className="text-overlay">Sobre nós</h2>
              <div className="text-p-about">
                <hr />
                <p>
                  Somos uma empresa alimentícia. É uma marca de chocolate
                  nacional, iniciada em 2023 por confeiteiros. A confeitaria é
                  uma arte nobre que faz com que nossa vida fique muito mais
                  saborosa. Afinal de contas, um doce nunca é demais, não
                  importa a hora ou a ocasião. Se você é apaixonado pela doçura
                  da vida, vai se encantar com nossos produtos bem saborosos.
                </p>
                <p>
                  Nós, da ToSweeten, estamos fazendo a nossa parte na defesa do
                  meio ambiente! Além disso, valorizamos a diversidade cultural
                  e humana como princípios fundamentais em nossa atuação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
