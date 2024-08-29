import { useState } from "react";
import { login, registration } from "../../../services/AuthService";
import { toast } from "react-toastify";

const hostNotificationTypes = [
  {value: "NEW_RESERVATION", str: "New Reservation"},
  {value: "CANCELED_RESERVATION", str: "Canceled Reservation"},
  {value: "WITHDRAW_RESERVATION", str: "Withdrawed Reservation"},
  {value: "HOST_RATING", str: "Host Rating"},
  {value: "ACCOMMODATION_RATING", str: "Accommodation Rating"},
];

export const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    address: "",
    role: "ROLE_HOST",
    notificationTypes: [],
  });

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      let nts = registrationData.notificationTypes;
      if (e.target.checked) nts.push(e.target.name);
      else {
        let index = nts.indexOf(e.target.name);
        if (index > -1) {
          nts.splice(index, 1);
        }
      }

      setRegistrationData({
        ...registrationData,
        notificationTypes: [...nts],
      });
    } else {
      setRegistrationData({
        ...registrationData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submit = (e) => {
    e.preventDefault();
    registration(registrationData)
      .then((res) => {
        login({
          username: registrationData.username,
          password: registrationData.password,
        }).then((res) => {
          sessionStorage.setItem("token", res.data.access_token);
          window.location.href = "/";
        });
      })
      .catch((err) => {
        toast.error(err.message);
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
        <form className="form-wrap">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="form-control"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
          />
          <div className="single-element-widget">
            <div className="default-select" id="default-select">
              <select
                className="nice-select"
                name="role"
                onChange={handleChange}
              >
                <option value="ROLE_HOST">Host</option>
                <option value="ROLE_GUEST">Guest</option>
              </select>
            </div>
          </div>
          <label>Types of notifications that you want</label>
          {registrationData.role === "ROLE_HOST" &&
            hostNotificationTypes.map((nt) => {
              return (
                <div
                  key={nt.value}
                  className="switch-wrap d-flex justify-content-between"
                >
                  <p>{nt.str}</p>
                  <div className="primary-checkbox">
                    <input
                      name={nt.value}
                      type="checkbox"
                      id={nt.value}
                      onChange={handleChange}
                    />
                    <label for={nt.value}></label>
                  </div>
                </div>
              );
            })}
          {registrationData.role === "ROLE_GUEST" && (
            <div className="switch-wrap d-flex justify-content-between">
              <p>Processed Reservation Request</p>
              <div className="primary-checkbox">
                <input
                  name="PROCESSED_REQUEST"
                  type="checkbox"
                  id="default-checkbox"
                  onChange={handleChange}
                />
                <label for="default-checkbox"></label>
              </div>
            </div>
          )}
          <button className="mt-3 primary-btn text-uppercase rounded" onClick={submit}>
            Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
