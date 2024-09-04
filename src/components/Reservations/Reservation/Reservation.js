import { getRole } from "../../../services/AuthService";
import RatingForm from "../../Shared/RatingForm/RatingForm";

export const Reservation = ({ reservation, cancelRes, acceptRes, denyRes }) => {
  const checkCanceling = (reservation) => {
    if (
      reservation.reservationStatus != "PENDING" &&
      reservation.reservationStatus != "ACCEPTED"
    )
      return false;
    let difference =
      new Date().getTime() - new Date(reservation.startDate).getTime();
    return Math.ceil(difference / (1000 * 3600 * 24)) < 1;
  };

  return (
    <div className="container">
      <div class="section-top-border reservation">
        <div class="progress-table-wrap">
          <div class="row">
            <div className="col-lg-3">
              <div className="res-thumb res-pointer" onClick={() =>(window.location.href = "/accommodations/" + reservation.accommodationId)}>
                {reservation.images.length > 0 ? (
                  <img src={reservation.images[0]} alt="" />
                ) : (
                  <img src="dfs" alt="" />
                )}
              </div>
            </div>
            <div className="col-lg-2">
              <h3 className="res-pointer" onClick={() =>(window.location.href = "/accommodations/" + reservation.accommodationId)}>{reservation.accommodationName}</h3>
              <label className="mt-3">Guest:</label>
              <h6>{reservation.guestName}</h6>
              <label className="mt-3">Host:</label>
              <h6>{reservation.hostName}</h6>
              <label className="mt-3">Guests:</label>
              <h6>{reservation.guestNumber}</h6>
            </div>
            <div className="col-lg-2">
              <label>From:</label>
              <h6>{new Date(reservation.startDate).toDateString()}</h6>
              <label className="mt-3">To:</label>
              <h6>{new Date(reservation.endDate).toDateString()}</h6>
              <label className="mt-3">Status:</label>
              <h6>{reservation.reservationStatus}</h6>
            </div>
            <div className="col-lg-2">
              <label>Total price:</label>
              <h6>{reservation.totalPrice} €</h6>
              <label className="mt-3">Price by guest:</label>
              <h6>{reservation.priceByGuest} €</h6>
              {getRole() == "ROLE_GUEST" && checkCanceling(reservation) && (
                <button
                  className="primary-btn mt-3"
                  onClick={() => cancelRes(reservation.id)}
                >
                  Cancel
                </button>
              )}
              {getRole() == "ROLE_HOST" &&
                reservation.reservationStatus == "PENDING" && (
                  <>
                    <button
                      className="primary-btn mt-3"
                      onClick={() => acceptRes(reservation.id)}
                    >
                      Accept
                    </button>
                    <button
                      className="primary-btn mt-1"
                      onClick={() => denyRes(reservation.id)}
                    >
                      Deny
                    </button>
                  </>
                )}
            </div>
            {getRole() == "ROLE_GUEST" && (
              <div className="col-lg-3">
                <RatingForm
                  subjectId={reservation.accommodationId}
                  type={"ACCOMMODATION-RATING"}
                />
                <RatingForm
                  subjectId={reservation.hostId}
                  type={"HOST-RATING"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
