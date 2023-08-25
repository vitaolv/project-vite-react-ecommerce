import { Table } from "antd";
import PropTypes from "prop-types";
import { getFormattedPriceValue } from "../../utils/prices/priceUtils";
import { useSelector } from "react-redux";

export function RecipientDataReviewToPaymentModal({ formData }) {
  const totalPrice = useSelector((state) => state.cart.priceTotal);
  const items = useSelector((state) => state.cart.productInCart);
  const columns = [
    {
      title: "Produto",
      dataIndex: "Produto",
    },
    {
      title: "Qtd",
      dataIndex: "Qtd",
    },
    {
      title: "Sabor",
      dataIndex: "Sabor",
    },
    {
      title: "Preço",
      dataIndex: "Preco",
    },
    {
      title: "Subtotal",
      dataIndex: "PrecoSubtotal",
    },
  ];

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const dataSource = items.map((item) => ({
    key: item.objID,
    Produto: item.name,
    Qtd: item.quantity,
    Sabor: item.flavorSelected,
    Preco: getFormattedPriceValue(item.price),
    PrecoSubtotal: getFormattedPriceValue(
      calculateSubtotal(item.price, item.quantity)
    ),
  }));

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h5 className="center">Resumo da compra</h5>
      <div className="data-review-modal">
        <div className="data-row">
          <p>
            <strong>Nome: </strong>
            {formData.nome}
          </p>
          <p>
            <strong>CPF: </strong>
            {formData.cpf}
          </p>
          <p>
            <strong>Forma de pagamento: </strong>
            {formData.formasDePagamento}
          </p>
        </div>
        <div className="data-row">
          <p>
            <strong>E-mail: </strong>
            {formData.email}
          </p>
          <p>
            <strong>Endereço: </strong>
            {formData.endereco} - {formData.numero}
          </p>
          <p>
            <strong>Complemento: </strong>
            {formData.complemento}
          </p>
        </div>
      </div>
      <br />
      <Table
        size="small"
        columns={columns}
        onChange={onChange}
        dataSource={dataSource}
        pagination={{
          pageSize: 3,
        }}
      />

      {!formData.opcoesDeParcelamento ? (
        <p>
          <strong>
            Valor a pagar: {getFormattedPriceValue(totalPrice)} à vista via
            boleto
          </strong>
        </p>
      ) : (
        <p>
          <strong>Valor a pagar: {formData.opcoesDeParcelamento}</strong>
        </p>
      )}
      <p>
        <strong>Preço final: {getFormattedPriceValue(totalPrice)}</strong>
      </p>
    </div>
  );
}

RecipientDataReviewToPaymentModal.propTypes = {
  formData: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    dataNascimento: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telefone: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    numero: PropTypes.string.isRequired,
    complemento: PropTypes.string.isRequired,
    formasDePagamento: PropTypes.string.isRequired,
    opcoesDeParcelamento: PropTypes.string.isRequired,
  }).isRequired,
};
