import Search from "../SearchTab/Search";

export const StartBanner = () => {
  return (
    <section className="banner-area relative">
      <div className="overlay overlay-bg"></div>
      <div className="container">
        <div className="row fullscreen align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6 banner-left">
            <h6 className="text-white text-uppercase mb-3">Discover Your Next Adventure</h6>
            <h1 className="text-white display-4 font-weight-bold">Booking</h1>
            <p className="text-white lead">
              "Explore the World with Confidence: Your Perfect Stay Awaits!"
            </p>
          </div>
          <div className="col-lg-4 col-md-6 banner-right mt-4">
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartBanner;
