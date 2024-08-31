import { useState } from "react";
import { login } from "../../../services/AuthService";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    login(loginData)
      .then((res) => {
        sessionStorage.setItem("token", res.data.access_token);
        window.location.href = "/";
      })
      .catch((err) => {
        if (err.status == 401) {
          toast.error('Username and password are not correct!')
        }
        else {
          toast.error(err.message);
        }
      });
  };

  return (
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="flight"
        role="tabpanel"
        aria-labelledby="flight-tab"
      >
        <form className="form-wrap rounded">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button className="primary-btn text-uppercase rounded" onClick={submit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
