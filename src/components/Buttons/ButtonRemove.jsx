import "/src/css/button-remove.css";

import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { openModalToRemoveAction } from "../../store/actions/ActionsModais";
import PropTypes from "prop-types";

export function ButtonRemove({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(openModalToRemoveAction(item));
  };

  return (
    <div className="action-remove-item">
      <button type="button" className="button-remove" onClick={handleRemove}>
        <TiDelete />
      </button>
    </div>
  );
}

ButtonRemove.propTypes = {
  item: PropTypes.object.isRequired,
};
