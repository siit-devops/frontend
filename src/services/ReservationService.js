import axios from "axios";

const RESERVATION_PATH = "http://localhost:8081/api/reservations";
// const RESERVATION_PATH =
  // "http://localhost:8090/reservation-service/api/reservations";

export const getMyReservations = (id) => {
  return axios.get(RESERVATION_PATH + `?userId=${id}`);
};

export const getMyReservationsForHost = () => {
  return axios.get(RESERVATION_PATH + "/hosts");
};

export const cancelReservation = (id) => {
  return axios.delete(RESERVATION_PATH + "/guests/cancel/" + id);
};

export const acptReservation = (id) => {
  return axios.put(RESERVATION_PATH + "/hosts/respond/" + id + "?accepted=true");
};

export const dnyReservation = (id) => {
  return axios.put(RESERVATION_PATH + "/hosts/respond/" + id + "?accepted=false");
};

export const userHasPreviousReservations = (userId, hostId) => {
  
  return axios.get(
    RESERVATION_PATH + "?userId=" + userId +
      "&hostId=" + hostId +
      "&statuses=DONE,ACCEPTED"
  );
};

export const userStayedIn = (userId, accommodationId) => {
  return axios.get(
    RESERVATION_PATH + "?userId=" + userId +
      "&accommodationId=" + accommodationId +
      "&statuses=DONE,ACCEPTED"
  );
};

export const createReservation = (reservation) => {
  return axios.post(RESERVATION_PATH, reservation);
};
