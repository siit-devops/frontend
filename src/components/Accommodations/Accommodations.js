import { useEffect, useState } from "react";
import SingleAccommodation from "../Shared/SingleAccommodation";
import axios from "axios";
import { accommodations } from "../../helpers/entities";
import { getAllAccommodations } from "../../services/AccommodationService"
export const Accommodations = ({ hideTop, displayNum }) => {
  
  if (!displayNum)
    displayNum = 6

  const [Accommodations, setAccommodations] = useState([])

  useEffect(() => {
    getAllAccommodations()
    .then(res => {
      if (res.data)
        setAccommodations(res.data)
    })
    // setAccommodations(accommodations)
  }, [])

  return (
    <>
      {!hideTop &&
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
      }
      <section class="destinations-area section-gap">
        <div class="container">
          <div class="row">
            {Accommodations && Accommodations.map((accommodation, idx) => (
              idx < displayNum ?
                <div class="col-lg-4">
                  <SingleAccommodation accommodation={accommodation}></SingleAccommodation>
                </div>
                :
                <></>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accommodations;
