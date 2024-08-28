import LoginForm from "./LoginForm";

export const Login = () => {
  return (
    <section className="banner-area relative">
      <div className="overlay overlay-bg"></div>
      <div className="container rounded">
        <div className="row fullscreen align-items-center justify-content-between">
          <div className="col-lg-5 col-md-6 banner-right">
            <h1 className="text-white">BOOKING</h1>
            <LoginForm />
            <p className="text-white">
              <br />
              <br />
              Don't have an account? Join us!
              <a href="/registration" className="ml-3 primary-btn text-uppercase rounded">
                Registration
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
