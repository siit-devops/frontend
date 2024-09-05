import { useState } from "react";
import "./Notification.css";
import { useEffect } from "react";

export const Notification = ({ notification }) => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    switch (notification.notificationType) {
      case "NEW_RESERVATION":
        setColor("green");
        break;
      case "CANCELED_RESERVATION":
        setColor("red");
        break;
      case "WITHDRAWN_RESERVATION":
        setColor("gray");
        break;
      case "HOST_RATING":
        setColor("yellow");
        break;
      case "ACCOMMODATION_RATING":
        setColor("yellow");
        break;
      default:
        setColor("green");
        return;
    }
  });

  return (
    <div className={"container notification row " + color}>
      <div className="col-lg-3 d-flex align-items-center">
        <h6>{notification.notificationType}</h6>
      </div>
      <div className="col-lg-3 d-flex align-items-center">
        <span>{new Date(
          notification.createdAt[0],
          notification.createdAt[1] - 1,
          notification.createdAt[2],
          notification.createdAt[3],
          notification.createdAt[4]
        ).toLocaleString()}</span>
      </div>
      <div className="col-lg-3 d-flex align-items-center">
        <span>{notification.message}</span>
      </div>
    </div>
  );
};

export default Notification;
