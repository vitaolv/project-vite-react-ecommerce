import { useState, useEffect } from "react";
import { Result, Space, Button, Alert } from "antd";
import { Spinner } from "react-bootstrap";

import "/src/css/DialogPayment/ButtonCloseModal.css";

import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

export function ResultPayment({ handlePurchaseMadeAndClose, email }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 2500;
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, [dispatch, isLoading, setIsLoading]);

  if (isLoading) {
    return (
      <div className="center">
        <br />
        <br />
        <Space size="middle">
          <Spinner animation="border" />
        </Space>
        <h4>Processando a compra...</h4>
        <br />
        <br />
      </div>
    );
  }

  return (
    <div className="center">
      <Result
        status="success"
        title="Compra realizada com sucesso!"
        subTitle="Código da compra: 2017182818828182881"
      />
      <Alert
        type="success"
        message={`Agradecemos por comprar com a gente! Em breve, você receberá um email no endereço ${email} com todos os detalhes do pedido.`}
      />

      <Button className="center btnClose" onClick={handlePurchaseMadeAndClose}>
        Fechar
      </Button>
    </div>
  );
}

ResultPayment.propTypes = {
  handlePurchaseMadeAndClose: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
