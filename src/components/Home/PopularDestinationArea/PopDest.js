import Accommodations from "../../Accommodations/Accommodations";

export const PopDest = () => {
  return (
    // <section className="popular-destination-area section-gap">
    //   <div className="container">
    //     <div className="row d-flex justify-content-center">
    //       <div className="menu-content pb-70 col-lg-8">
    //         <div className="title text-center">
    //           <h1 className="mb-10">Explore Trending Destinations</h1>
    //           <p>
    //             Search deals on hotels, homes, and much more...
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-lg-4">
    //         <div className="single-destination relative">
    //           <div className="thumb relative">
    //             <div className="overlay overlay-bg"></div>
    //             <img className="img-fluid" src={d1} alt="" />
    //           </div>
    //           <div className="desc">
    //             <a href="#" className="price-btn">
    //               $150
    //             </a>
    //             <h4>Mountain River</h4>
    //             <p>Paraguay</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4">
    //         <div className="single-destination relative">
    //           <div className="thumb relative">
    //             <div className="overlay overlay-bg"></div>
    //             <img className="img-fluid" src={d2} alt="" />
    //           </div>
    //           <div className="desc">
    //             <a href="#" className="price-btn">
    //               $250
    //             </a>
    //             <h4>Dream City</h4>
    //             <p>Paris</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4">
    //         <div className="single-destination relative">
    //           <div className="thumb relative">
    //             <div className="overlay overlay-bg"></div>
    //             <img className="img-fluid" src={d3} alt="" />
    //           </div>
    //           <div className="desc">
    //             <a href="#" className="price-btn">
    //               $350
    //             </a>
    //             <h4>Cloud Mountain</h4>
    //             <p>Sri Lanka</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <Accommodations displayNum={3} hideTop={true}></Accommodations>
  );
};

export default PopDest;
