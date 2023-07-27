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
      <Button variant="outlined" onClick={handleToClearCart}>
        Limpar tudo
      </Button>
    </div>
  );
}
