import { useEffect, useState } from "react";
import { getRole } from "../../../services/AuthService";


export const AccommodationCard = ({ result, makeReservation }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let checked = [];
    for (let index = 0; index < result.rating; index++) {
      checked.push(<span className="fa fa-star checked"></span>);
    }
    for (let index = result.rating; index < 5; index++) {
      checked.push(<span className="fa fa-star"></span>);
    }
    setStars([...checked]);
  }, []);
  return (
    <div className="single-destinations">
      <div
        className="thumb"
        onClick={() =>
          (window.location.href = "/accommodations/" + result.accommodation.id)
        }
      >
        {result.accommodation.images.length > 0 ? (
          <img src={result.accommodation.images[0]} alt="" />
        ) : (
          <img src="dfs" alt="" />
        )}
      </div>
      <div className="details">
        <h4 className="d-flex justify-content-between">
          <span>{result.accommodation.name}</span>
          <div className="star">{stars}</div>
        </h4>
        <p>Distance: {(result.distance / 1000).toFixed(2)} km</p>
        <ul className="package-list">
          {result.accommodation.tags.map((tag) => {
            return (
              <li
                key={tag}
                className="d-flex justify-content-between align-items-center"
              >
                <span>{tag}</span>
                <span>Yes</span>
              </li>
            );
          })}
          <li className="d-flex justify-content-between align-items-center">
            <span>Total price</span>
            <a href="#" className="price-btn">
              {result.totalPrice} €
            </a>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <span>Price per guest</span>
            <a href="#" className="price-btn">
              {result.pricePerGuest.toFixed(2)} €
            </a>
          </li>
          {getRole() == "ROLE_GUEST" && (
            <li className="d-flex justify-content-between align-items-center">
              <button
                className="primary-btn"
                onClick={() => makeReservation(result)}
              >
                Make reservation
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AccommodationCard;
