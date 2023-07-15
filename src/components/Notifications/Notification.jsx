import { useEffect } from "react";
import { hideNotification } from "../../store/actions/ActionsNotification";
import { useDispatch, useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";

export default function Notification() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  useEffect(() => {
    if (notification.isVisible) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 10000);

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
          variant={notification.variant}
          onClose={() => handleclose()}
          dismissible
        >
          {notification.message}
        </Alert>
      )}
    </div>
  );
}
