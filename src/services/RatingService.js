import axios from "axios";

const RATING_PATH = "http://localhost:8083/api/rating";
// const RATING_PATH = "http://localhost:8090/rating-service/api/rating";

export const getRatingByHostId = (hostId) => {
  return axios.get(RATING_PATH + "/host/" + hostId + "/all");
};

export const getRatingByAccommodationId = (accommodationId) => {
  return axios.get(
    RATING_PATH + "/accommodation/" + accommodationId + "/all"
  );
};

export const getRatingByAccommodationIdForGuest = (accommodationId) => {
  return axios.get(
    RATING_PATH + "/accomodation?accommodationId=" + accommodationId
  )
}

export const getRatingByHostIdForGuest = (hostId) => {
  return axios.get(
    RATING_PATH + "/host?hostId=" + hostId
  )
}

export const addRating = (rating) => {
  return axios.post(RATING_PATH, rating);
};

export const updateRating = (rating) => {
  return axios.put(RATING_PATH + "/" + rating.id, rating);
};
