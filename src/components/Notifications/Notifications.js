import { Notification } from "./Notification/Notification";
// import { notifications } from "../../helpers/entities";
import { useEffect, useState } from "react";
import { getMyNotifications } from "../../services/NotificationService";

export const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getMyNotifications()
      .then((res) => {
        setNotifications(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <>
      <section class="about-banner relative">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">My notifications</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="col">
        {notifications.map((notification) => {
          return (
            <Notification key={notification.id} notification={notification} />
          );
        })}
      </div>
    </>
  );
};

export default Notifications;
