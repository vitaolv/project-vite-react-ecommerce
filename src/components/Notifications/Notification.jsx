import { useEffect } from "react";
import { hideNotification } from "../../store/actions/ActionsNotification";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "antd";

export default function Notification() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  useEffect(() => {
    if (notification.isVisible) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 5000);

      return () => {
        clearTimeout(timer);
        dispatch(hideNotification());
      };
    }
  }, [notification.isVisible, dispatch]);

  const handleclose = () => {
    dispatch(hideNotification());
  };

  return (
    <div
      className={`notification-container ${
        notification.isVisible ? "show" : ""
      }`}
    >
      {notification.isVisible && (
        <Alert
          message={notification.message}
          type={notification.variant}
          onClose={() => handleclose()}
          showIcon
          closeIcon
          dismissible
        />
      )}
    </div>
  );
}
