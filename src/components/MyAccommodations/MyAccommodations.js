import { useEffect, useState } from "react";
import "./MyAccommodations.css";
import axios from "axios";
import { getAllForHost, deleteAccommodationById } from "../../services/AccommodationService";


export const MyAccommodations = () => {

  const [accommodations, setAccommodations] = useState([])

  useEffect(() => {
    getAllForHost()
      .then((res) => {
        setAccommodations(res.data)
      })
      .catch((err) => {
        alert(err.message)
      })
  }, [])


  const deleteAccommodation = (id, name) => {
    if(window.confirm(`Are you sure you want to delete Accommodation: "${name}"`)) {
      deleteAccommodationById(id)
      .then((res) => {
        window.location.href = "/my-accommodations"
      })
      .catch((err) => {
        alert(err.message)
      })
    }
  }

  return (
    <>
      <div className="container-fluid table-width">
        <div class="section-top-border">
          <a href="/accommodations/create" className="primary-btn text-uppercase">
            Create accommodation
          </a>
          <div class="progress-table-wrap">
          &nbsp;
            <div class="progress-table">
              <div class="table-head">
                {/* <div class="user">User</div> */}
                <div class="name w-50">Name</div>
                <div class="description w-50">Description</div>
                <div class="location w-50">Location</div>
                <div class="btn1 w-25"></div>
                <div class="btn2"></div>
                <div class="btn3"></div>
              </div>
              {accommodations && accommodations.map((r) => (
                <div class="table-row" key={r.id}>
                  {/* <div class="user">{r.userId}</div> */}
                  <div class="name w-50">{r.name}</div>
                  <div class="description w-50">{r.description}</div>
                  <div class="location w-50">{r?.location?.name ?? "Not Specified"}</div>
                  {/* <div class="btn1">
                    <a href={"/accommodation/" + r.id} class="genric-btn primary">View</a>
                  </div> */}
                  &nbsp;
                  <div class="btn1">
                    <a href={"/accommodations/update/" + r.id} class="genric-btn primary">View/Update</a>
                  </div>
                  &nbsp;
                  <div class="btn1">
                    <button class="genric-btn danger" onClick={e => deleteAccommodation(r.id, r.name)}>Delete</button>
                  </div>
                </div>
              )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccommodations;
