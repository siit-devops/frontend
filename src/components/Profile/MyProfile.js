import ProfileInfo from "./ProfileInfo/ProfileInfo";
import "./MyProfile.css";
import { getRole } from "../../services/AuthService";
import { useEffect, useState } from "react";
import { Reservations } from "../Reservations/Reservations";

export const MyProfile = () => {
  const [role, setRole] = useState("");
  useEffect(() => {
    setRole(getRole());
  }, []);
  return (
    <>
      <section class="about-banner relative">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">My profile</h1>
            </div>
          </div>
        </div>
      </section>
      <ProfileInfo />
      {/* <Reservations /> */}
    </>
  );
};

export default MyProfile;
