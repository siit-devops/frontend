import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { search } from "../../services/AccommodationService";
// import { createReservation } from "../../services/ReservationService";
import AccommodationCard from "../Accommodations/AccommodationCard/AccommodationCard";
import { accommodationResults } from "../../helpers/entities";

export const SearchResults = () => {
  const location = useLocation();
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    // TODO
    // search(location.state)
    //   .then((res) => {
    //     setAccommodations(res.data);
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
    setAccommodations(accommodationResults);
  }, []);

  const makeReservation = (result) => {
    const newReservation = {
      id: null,
      userId: null,
      accommodationId: result.accommodation.id,
      hostId: null,
      guestsNum: location.state.guestsNum,
      totalPrice: result.totalPrice,
      priceByGuest: result.pricePerGuest,
      reservationStart: location.state.from,
      reservationEnd: location.state.to,
      reservationStatus:null
    };
    // TODO
    // createReservation(newReservation)
    //   .then((res) => {
    //     window.location.href = "/my-reservations";
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
  };

  return (
    <>
      <section class="about-banner relative">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">Accommodations</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="destinations-area section-gap relative">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="menu-content pb-40 col-lg-8">
              <div class="title text-center">
                <h1 class="mb-10">Search Results</h1>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-between">
            {accommodations.map((result) => {
              return (
                <AccommodationCard
                  key={result.accommodation.id}
                  result={result}
                  makeReservation={makeReservation}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchResults;
