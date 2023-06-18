import PropTypes from 'prop-types';

export function NotificationUnselected({ mensagem }) {
  return (
    <div className="alerta-sem-sucesso">
      <p>{mensagem}</p>
    </div>
  );
}

NotificationUnselected.propTypes = {
  mensagem: PropTypes.string.isRequired,
};
