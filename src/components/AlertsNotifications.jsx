import PropTypes from "prop-types";
import { BsInfoCircle, BsFillCheckCircleFill } from "react-icons/bs";
import Alert from "react-bootstrap/Alert";

export function NotificationDanger({ mensagemErro }) {
  return (
    <Alert variant="danger" className="alerts-container">
      <p>{mensagemErro}</p>
    </Alert>
  );
}

export function NotificationInfo({ mensagemInfo }) {
  return (
    <Alert variant="secondary">
      <p>
        <BsInfoCircle /> {mensagemInfo}
      </p>
    </Alert>
  );
}

export function NotificationSuccess({ mensagemSuccess }) {
  return (
    <Alert variant="success" className="alerts-container">
      <p>
        <BsFillCheckCircleFill /> {mensagemSuccess}
      </p>
    </Alert>
  );
}

NotificationDanger.propTypes = {
  mensagemErro: PropTypes.string.isRequired,
};

NotificationInfo.propTypes = {
  mensagemInfo: PropTypes.string.isRequired,
};

NotificationSuccess.propTypes = {
  mensagemSuccess: PropTypes.string.isRequired,
};
