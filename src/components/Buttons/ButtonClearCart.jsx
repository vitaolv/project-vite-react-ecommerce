import { useDispatch } from "react-redux";
import { openModalToClearCartAction } from "../../store/actions/ActionsModais";

import { Button } from "@mui/material";

export function ButtonClearCart() {
  const dispatch = useDispatch();

  const handleToClearCart = () => {
    dispatch(openModalToClearCartAction());
  };

  return (
    <div>
      <br />
      <Button
        className="button-clean-cart"
        variant="outlined"
        color="black"
        onClick={handleToClearCart}
      >
        Limpar tudo
      </Button>
      <br />
    </div>
  );
}
