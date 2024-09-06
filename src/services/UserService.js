import axios from "axios";

const USER_PATH = "http://localhost:8080/api/users";

export const getAllUsers = () => {
  return axios.get(USER_PATH);
};

export const getUserById = (id) => {
  return axios.get(USER_PATH + "/" + id);
};

export const updateUser = (updatedProfile) => {
  return axios.put(USER_PATH, updatedProfile);
};

export const deleteMyProfile = () => {
  return axios.delete(USER_PATH);
};
