import { useDispatch } from "react-redux";
import { clearCartAction } from "../../store/actions/ActionsCart";

export function ButtonClearCart() {
  const dispatch = useDispatch();

  const handleToClearCart = () => {
    dispatch(clearCartAction());
    alert("Carrinho limpo!");
  };

  return (
    <div>
      <button className="button-clean-cart" onClick={handleToClearCart}>
        Limpar tudo
      </button>
    </div>
  );
}
