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
          <p>Nome: {formData.nome}</p>
          <p>CPF: {formData.cpf}</p>
          <p>Formas de pagamento: {formData.telefone}</p>
        </div>
        <div className="data-row">
          <p>E-mail: {formData.email}</p>
          <p>
            Endereço: {formData.endereco}, {formData.numero}
          </p>
          <p>Complemento: {formData.complemento} </p>
        </div>
      </div>
      <hr />
      <Table
        size="small"
        columns={columns}
        onChange={onChange}
        dataSource={dataSource}
        pagination={{
          pageSize: 3,
        }}
      />
      <p>
        <strong>
          Preço total a pagar: {getFormattedPriceValue(totalPrice)}
        </strong>
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
  }).isRequired,
};
