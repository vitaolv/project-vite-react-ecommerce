import "/src/css/pageNotFound.css";
import { ButtonsToHomeOrToBack } from "../components/Buttons/ButtonsToHomeOrToBack";
import { SkeletonImageComponent } from "../components/Skeleton/SkeletonImageComponents";
export default function PageNotFound() {
  const currentLink = window.location.href;

  return (
    <div className="content-page-404">
      <SkeletonImageComponent
        productImage="/project-vite-react-ecommerce/assets/404.png"
        productName="Page Not Found"
      />

      <h2>Opsss, a página não foi encontrada.</h2>

      <p className="page-not-found-text-2">O endereço abaixo não existe</p>
      <p className="link-not-found">{currentLink}</p>

      <ButtonsToHomeOrToBack />
    </div>
  );
}
