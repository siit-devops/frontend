import { getRole, logout } from "../../services/AuthService";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(getRole());
  }, []);

  return (
    <>
      <header id="header">
        <div className="header-top">
          <div className="container"></div>
        </div>
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <Link to="/home">
              <h2 className="text-white">Booking</h2>
              </Link>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                {(!role || role === "ROLE_GUEST") && (
                <li>
                  <Link to="/accommodations">Accommodations</Link>
                </li>
                )}
                {role === "" && (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
                {role === "ROLE_HOST" && (
                  <li>
                    <Link to="/my-accommodations">My Accommodations</Link>
                  </li>
                )}
                {role !== "" && (
                  <>
                    <li>
                      <Link to="/my-reservations">Reservations</Link>
                    </li>
                    <li>
                      <Link to="/my-notifications">Notifications</Link>
                    </li>
                    <li>
                      <Link to="/my-profile">My Profile</Link>
                    </li>
                    <li>
                      <a href="/home" onClick={logout}>
                        Logout
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
