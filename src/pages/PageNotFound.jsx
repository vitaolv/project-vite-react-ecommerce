import { ButtonsToHomeOrToBack } from "../components/Buttons/ButtonsToHomeOrToBack";

export default function PageNotFound() {
  const currentLink = window.location.href;

  return (
    <div className="content-page-404">
      <img src="/assets/404.png" alt="Page Not Found" />

      <h2>Opsss, a página não foi encontrada.</h2>

      <p className="page-not-found-text-2">O endereço abaixo não existe</p>
      <p className="link-not-found">{currentLink}</p>

      <ButtonsToHomeOrToBack />
    </div>
  );
}
