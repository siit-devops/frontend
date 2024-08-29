import axios from "axios";

const AUTH_PATH = "http://localhost:8080/api/auth";

export const login = (credentials) => {
  return axios.post(AUTH_PATH + "/login", credentials);
};

export const registration = (registrationData) => {
  return axios.post(AUTH_PATH + "/registration", registrationData);
};
