import PropTypes from "prop-types";
import { BsInfoCircle } from "react-icons/bs";
import Alert from "react-bootstrap/Alert";

export function NotificationInfo({ mensagemInfo }) {
  return (
    <Alert variant="secondary">
      <p>
        <BsInfoCircle /> {mensagemInfo}
      </p>
    </Alert>
  );
}

NotificationInfo.propTypes = {
  mensagemInfo: PropTypes.string.isRequired,
};
