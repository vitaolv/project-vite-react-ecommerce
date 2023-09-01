import "/src/css/buttonClearCart.css";

import { useDispatch } from "react-redux";
import { openModalToClearCartAction } from "../../store/actions/ActionsModais";
import { ClearOutlined } from "@ant-design/icons";

import { Button } from "antd";

export function ButtonClearCart() {
  const dispatch = useDispatch();

  const handleToClearCart = () => {
    dispatch(openModalToClearCartAction());
  };

  return (
    <div>
      <br />
      <Button
        size="large"
        shape="circule"
        icon={<ClearOutlined />}
        className="button-clean-cart"
        onClick={handleToClearCart}
      >
        Limpar tudo
      </Button>
      <br />
    </div>
  );
}
