import { clearCartAction } from "../../store/actions/ActionsCart";

import { useDispatch } from "react-redux";

export function ButtonClearCart() {
  const dispatch = useDispatch();
  const handleToClearCart = () => {
    dispatch(clearCartAction());
  };

  return (
    <div>
      <button className="button-clean-cart" onClick={handleToClearCart}>
        Limpar tudo
      </button>
    </div>
  );
}
