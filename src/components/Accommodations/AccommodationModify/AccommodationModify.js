import { useParams } from "react-router-dom";
import { AccommodationModifyForm } from "./AccommodationModifyForm/AccommodationModifyForm";
import axios from "axios";
import { useEffect, useState } from "react";

export const AccommodationModify = ({ accommodation }) => {
  const { id } = useParams();
  const [Accommodation, setAccommodation] = useState(null)
  useEffect(() => {
    if (id)
      axios.get(`http://localhost:8082/api/accommodation/${id}`).then(res => {
        setAccommodation(res.data)
      }).catch(err => {
        return
      })
  }, [])

  return (
    <>
      <section class="about-banner relative">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
          </div>
        </div>
      </section>
      <section class="destinations-area section-gap">
        {id ?
          Accommodation ?
            <div class="container">
              <AccommodationModifyForm accommodation={Accommodation} />
            </div>
            :
            <></>
          :
          <div class="container">
            <AccommodationModifyForm accommodation={Accommodation} />
          </div>
        }
      </section>
    </>
  );
};

export default AccommodationModify;
