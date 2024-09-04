import { useParams } from "react-router-dom";
import CustomMap from "./Map/CustomMap";
import { ImagesSection } from "./ImagesSection/ImagesSection";
import "./Accommodation.css";
import IssuerSection from "./IssuerSection/IssuerSection";
import { Ratings } from "../../Ratings/Ratings";
import { getAccommodationById } from "../../../services/AccommodationService";
import Map from "../../Map/Map";
import React, { useState, useEffect } from 'react';


export const Accommodation = () => {
  const { id } = useParams();

  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAccommodationById(id)
    .then((res) => {
      setAccommodation(res.data)
      setLoading(false)
    })
    .catch((err) => {
      alert(err.message)
    })
  }, [id]);
  
  
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="gray-bg">
      <section class="about-banner relative">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
          </div>
        </div>
      </section>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <ImagesSection images={accommodation.images} />
          <section class="about-info-area section-gap">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6 info-left">
                  <Map
                    longitude={accommodation.location.lon}
                    latitude={accommodation.location.lat}
                    zoom={15}
                    markerContent={accommodation.location.name}
                  />
                </div>
                <div class="col-lg-6 info-right">
                  <h6>Accommodation</h6>
                  <h1>{accommodation.name}</h1>
                  <p>{accommodation.description}</p>
                </div>
              </div>
              <div className="container mt-4">
                <div class="tags row align-items-between">
                  {accommodation.tags.map((tag) => {
                    return (
                      <div key={tag} className="destinations-area">
                        <div className="tag single-destinations">{tag}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="container border-top mt-4 pt-3">
                <Ratings id={accommodation.id} type="" />
              </div>
              <div className="container border-top mt-4">
                <IssuerSection
                  user={accommodation.host}
                  accommodationId={accommodation.id}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
export default Accommodation;
