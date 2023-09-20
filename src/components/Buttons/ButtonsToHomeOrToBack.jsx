import "/src/css/buttonToHomeOrToBack.css";
import { Link } from "react-router-dom";

export function ButtonsToHomeOrToBack() {
  return (
    <>
      <div className="links-page-not-found">
        <Link className="link-to-home" to="/">
          Página inicial
        </Link>

        <Link
          className="link-to-back"
          to="#"
          onClick={() => window.history.back()}
        >
          Voltar
        </Link>
      </div>
    </>
  );
}
