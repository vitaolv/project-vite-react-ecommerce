import { AiFillLock } from "react-icons/ai";
import { GiHandTruck } from "react-icons/gi";
import { BsFillBoxSeamFill } from "react-icons/bs";

export function AdvantageInformationIcons() {
  return (
    <div id="extra-vantagens">
      <div>
        <AiFillLock />
        <span>Compra segura.</span>
      </div>
      <hr />
      <div>
        <GiHandTruck />
        <span>Enviado pela ToSweeten, alta qualidade e rapidez na entrega.</span>
      </div>
      <hr />
      <div>
        <BsFillBoxSeamFill />
        <span>Temos a política de devolução.</span>
      </div>
    </div>
  );
}
