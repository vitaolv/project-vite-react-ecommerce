import { useDispatch } from "react-redux";
import { openModalToClearCartAction } from "../../store/actions/ActionsModais";

export function ButtonClearCart() {
  const dispatch = useDispatch();

  const handleToClearCart = () => {
    dispatch(openModalToClearCartAction());
  };

  return (
    <div>
      <button className="button-clean-cart" onClick={handleToClearCart}>
        Limpar tudo
      </button>
    </div>
  );
}
