import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { search } from "../../services/AccommodationService";
import { createReservation } from "../../services/ReservationService";
import AccommodationCard from "../Accommodations/AccommodationCard/AccommodationCard";
import { accommodationResults } from "../../helpers/entities";
import { toast } from "react-toastify"    ;

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
      accommodationId: result.accommodation.id,
      hostId: result.accommodation.userId,
      guestNumber: location.state.guestsNum,
      totalPrice: result.totalPrice,
      priceByGuest: result.pricePerGuest,
      reservationStart: location.state.from,
      reservationEnd: location.state.to,
    };
    createReservation(newReservation)
      .then((res) => {
        window.location.href = "/my-reservations";
      })
      .catch((err) => {
        if (err.status == 400) {
          toast.error(err.response.data)
        }
        else {
          toast.error('Unexpected error')
        }
      });
  };

  return (
    <>
      <section className="about-banner relative">
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">Accommodations</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="destinations-area section-gap relative">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-40 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Search Results</h1>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-between">
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
