import { useEffect, useState } from "react";
import "./IssuerSection.css";
import { Ratings } from "../../../Ratings/Ratings";
import { getUserId } from "../../../../services/AuthService";
import { deleteAccommodationById } from "../../../../services/AccommodationService";
import { toast } from "react-toastify";

export const IssuerSection = ({ user, accommodationId }) => {
  const [stars, setStars] = useState([]);
  const [userId, setUserId] = useState("");
  console.log('user');
  console.log(user);
  
  useEffect(() => {
    let checked = [];
    for (let index = 0; index < user.rating; index++) {
      checked.push(<span class="fa fa-star checked"></span>);
    }
    for (let index = checked.length; index < 5; index++) {
      checked.push(<span class="fa fa-star"></span>);
    }
    setStars([...checked]);
    setUserId(getUserId());
  }, []);

  const update = () => {
    window.location.href = `/accommodations/update/${accommodationId}`;
  };

  const deleteAccommodation = () => {
    deleteAccommodationById(accommodationId)
      .then(() => {
        toast.success("Accommodation successfully deleted!");
        window.location.href = "/home";
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  return (
    <div className="row mt-3">
      <div className="d-flex justify-content-center col-lg-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          height={100}
          width={100}
        />
      </div>
      <div className="col-lg-3">
        <h3>{user.username}</h3>
        <p>
          {user.firstname} {user.lastname}
        </p>
        <h4 class="d-flex justify-content-between">
          <div class="star">{stars}</div>
        </h4>
        {userId == user.id && (
          <div className="row mt-2">
            <button
              className="primary-btn text-uppercase"
              onClick={deleteAccommodation}
            >
              Delete Accommodation
            </button>
            <button className="mt-2 primary-btn text-uppercase" onClick={update}>
              Update Accommodation
            </button>
          </div>
        )}
      </div>
      <div className="col-lg-7">
        <Ratings id={user.id} type="HOST_RATINGS" />
      </div>
    </div>
  );
};

export default IssuerSection;
