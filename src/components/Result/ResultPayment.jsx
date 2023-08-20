import { useState, useEffect } from "react";
import { Result, Space, Button } from "antd";
import { Spinner } from "react-bootstrap";

import PropTypes from "prop-types";

export function ResultPayment({ handleClose }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 2500;
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, []);

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
      <Button className="center btnClose" onClick={handleClose}>
        Fechar
      </Button>
    </div>
  );
}

ResultPayment.typesProp = {
  handleClose: PropTypes.func.isRequired,
};
