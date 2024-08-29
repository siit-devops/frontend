import RegistrationForm from "./RegistrationForm";

export const Registration = () => {
  return (
    <section className="banner-area relative">
      <div className="overlay overlay-bg"></div>
      <div className="container">
        <div className="row fullscreen align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6 banner-left">
            <h1 className="text-white">BOOKING</h1>
            <p className="text-white">
              Sign in or sign up to publish your accommodation right now!{" "}
              <br />
              <br />
              Already have an account?
              <a href="/login" className="ml-3 primary-btn text-uppercase rounded">
                Login
              </a>
            </p>
            
          </div>
          <div className="col-lg-4 col-md-6 banner-right">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
