import { useState } from "react";
import LocationSelect from "../../LocationSelect/LocationSelect";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Search = () => {
  const [searchData, setSearchData] = useState({
    from: null,
    to: null,
    location: null,
    guestsNum: 1,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLocationChange = (location) => {
    setSearchData((prevData) => ({
      ...prevData,
      location: location,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchData.from == null || searchData.to == null) {
      toast.error('Start and End dates are required')
    }
    if (searchData.location == null) {
      toast.error('Location is required')
    }
    else {
      navigate("/results", { state: searchData });
    }
  };

  return (
    <>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="flight"
          role="tabpanel"
          aria-labelledby="flight-tab"
        >
          <form className="form-wrap compact-search">
            <label>From</label>
            <input
              type="date"
              className="form-control"
              name="from"
              placeholder="From "
              onChange={handleChange}
            />
            <label>To</label>
            <input
              type="date"
              className="form-control"
              name="to"
              placeholder="To "
              onChange={handleChange}
            />
            <LocationSelect setLocation={handleLocationChange} />
            <input
              type="number"
              min="1"
              className="form-control"
              name="guestsNum"
              placeholder="Number of guests"
              onChange={handleChange}
            />
            <button className="primary-btn text-uppercase" onClick={handleSearch}>
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
