import axios from "axios";

axios.interceptors.request.use(
  (req) => {
    if (req.url.startsWith("https://api.geoapify.com")) return req;
    if (req.url.startsWith("https://api.cloudinary.com")) return req;

    const token = sessionStorage.getItem("token");

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
