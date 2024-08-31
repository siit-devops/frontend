import axios from "axios";
import {jwtDecode} from "jwt-decode";

const AUTH_PATH = "http://localhost:8080/api/auth";

export const login = (credentials) => {
  return axios.post(AUTH_PATH + "/login", credentials);
};

export const registration = (registrationData) => {
  return axios.post(AUTH_PATH + "/registration", registrationData);
};


export const isAuthenticated = () => !!sessionStorage.getItem("token");

export const getRole = () => {
  const token = sessionStorage.getItem("token");
  if (!token) return "";

  const decoded = jwtDecode(token);

  return decoded.realm_access.roles;
};

export const getUerId = () => {
  const token = sessionStorage.getItem("token");
  if (!token) return "";

  const decoded = jwtDecode(token);

  return decoded.userId;
};

export const logout = () => {
  sessionStorage.removeItem("token");
  window.location.href = "/";
};

export const getDecodedUsername = () => {
  const token = sessionStorage.getItem("token");
  if (!token) return "";

  return jwtDecode(token).sub;
};
