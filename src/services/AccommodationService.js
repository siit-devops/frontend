import axios from "axios";

const ACCOMMODATION_PATH = "http://localhost:8082/api/accommodation";

// const ACCOMMODATION_PATH =
//   "http://localhost:8090/accommodation-service/api/accommodation";

export const search = (search) => {
  return axios.get(
    ACCOMMODATION_PATH +
      "/search?" +
      "locationName=" +
      search.location.locationName +
      "&lon=" +
      search.location.longitude +
      "&lat=" +
      search.location.latitude +
      "&guestsNum=" +
      search.guestsNum +
      "&startDate=" +
      search.from +
      "&endDate=" +
      search.to
  );
};

export const deleteAccommodationById = (id) => {
  return axios.delete(ACCOMMODATION_PATH + `/${id}`);
};

export const getAllForHost = () => {
  return axios.get(ACCOMMODATION_PATH + "/host/all");
}

export const getAccommodationById = (id) => {
  return axios.get(ACCOMMODATION_PATH + `/${id}`)
}

export const getAllAccommodations = () => {
  return axios.get(ACCOMMODATION_PATH)
}