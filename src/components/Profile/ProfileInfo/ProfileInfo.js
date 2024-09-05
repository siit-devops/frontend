import { UpdateProfile } from "./UpdateProfile/UpdateProfile";

export const ProfileInfo = () => {
  return (
    <section class="about-info-area section-gap">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 info-left">
            <img class="img-fluid" src="img/blog/feature-img1.jpg" alt="" />
          </div>
          <div class="col-lg-6 info-right">
            <UpdateProfile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
