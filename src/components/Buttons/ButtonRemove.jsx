import { TiDelete } from "react-icons/ti";

export function ButtonRemove() {
  return (
    <div className="action-remove-item">
      <button type="button" className="button-remove">
        <TiDelete />
      </button>
    </div>
  );
}
