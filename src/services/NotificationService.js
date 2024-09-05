import axios from "axios";

const NOTIFICATION_PATH = "http://localhost:8084/api/notification";
// const NOTIFICATION_PATH =
//   "http://localhost:8090/notification-service/api/notification";

export const getMyNotifications = () => {
  return axios.get(NOTIFICATION_PATH);
};
