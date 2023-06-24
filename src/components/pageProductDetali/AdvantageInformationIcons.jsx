import { AiFillLock } from "react-icons/ai";
import { GiHandTruck } from "react-icons/gi";
import { BsFillBoxSeamFill } from "react-icons/bs";

export function AdvantageInformationIcons() {
  return (
    <div id="extra-vantagens">
      <div id="compra-segura">
        <AiFillLock />
        <span>Compra segura.</span>
      </div>
      <div id="entrega-rapidez">
        <GiHandTruck />
        <span>
          Enviado pela ToSweeten, alta qualidade e rapidez na entrega.
        </span>
      </div>
      <div className="termos=de-devolução">
        <BsFillBoxSeamFill />
        <span>Temos a política de devolução.</span>
      </div>
    </div>
  );
}
