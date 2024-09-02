import "./Reservations.css";
import { Reservation } from "./Reservation/Reservation";
import {
  cancelReservation,
  getMyReservations,
  getMyReservationsForHost,
  acptReservation,
  dnyReservation,
} from "../../services/ReservationService";
import { useEffect, useState } from "react";
import { getRole, getUserId } from "../../services/AuthService";
import { toast } from "react-toastify";

export const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    if (getRole() == "ROLE_GUEST") {
      getMyReservations(getUserId())
        .then((res) => {
          setReservations(res.data);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      getMyReservationsForHost()
        .then((res) => {
          setReservations(res.data);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  }, []);

  const cancelRes = (id) => {
    cancelReservation(id)
      .then(() => {
        let res = reservations.filter((r) => r.id == id)[0];
        if (res.reservationStatus == "ACCEPTED"){
          res.reservationStatus = "CANCELED";
        }
        else {
          res.reservationStatus = "WITHDRAWN"
        }

        setReservations([...reservations]);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const acceptRes = (id) => {
    acptReservation(id)
      .then((res) => {
        toast.success("Successfully accepted!");
        window.location.href = '/my-reservations'
      })
      .catch((err) => toast.error(err.message));
  };

  const denyRes = (id) => {
    dnyReservation(id)
      .then((res) => {
        toast.success("Successfully denied!");
        window.location.href = '/my-reservations'
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <section class="about-banner relative">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">My reservations</h1>
            </div>
          </div>
        </div>
      </section>
      {reservations.length == 0 ? (
        <div className="container-fliud w-25 m-auto">
          <h1>No Reservations Yet!</h1>
        </div>
      ) : (
        reservations.map((reservation) => {
          return (
            <Reservation
              key={reservation.id}
              reservation={reservation}
              cancelRes={cancelRes}
              acceptRes={acceptRes}
              denyRes={denyRes}
            />
          );
        })
      )}
    </>
  );
};

export default Reservations;
