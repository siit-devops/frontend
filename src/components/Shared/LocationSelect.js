import { useState } from "react";
import axios from "axios";

export const LocationSelect = ({location, setLocation }) => {
  const [address, setAddress] = useState(location.name ?? "");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    setAddress(e.target.value);
    const apiKey = "f3054a1d87444384a7e9f1465229d975";
    var url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
      e.target.value
    )}&limit=5&apiKey=${apiKey}`;
    axios.get(url).then((result) => {
      console.log(result)
      setSuggestions(result.data.features);
    });
  };

  const handleSelect = (properties) => {
    const newLocation = {
      chain: [
                properties?.name,
                properties?.suburb,
                properties?.district,
                properties?.village,
                properties?.city,
                properties?.county,
                properties?.state,
                properties?.country,
              ],
      locationName: properties.formatted,
      longitude: properties.lon,
      latitude: properties.lat,
    };

    setLocation(newLocation);
    setSuggestions([]);
    setAddress(properties.formatted);
  };

  return (
    <div>
      <div>
        <div className="form-group mb-2">
          <input
            type={"text"}
            className="single-input"
            placeholder="Place"
            onChange={handleChange}
            value={address}
          />
        </div>
        <div>
          {suggestions.slice(0, 3).map((suggestion, id) => {
            return (
              <div key={id}>
                <span
                  className="dropdown-item"
                  onClick={() => handleSelect(suggestion.properties)}
                >
                  {suggestion.properties.formatted}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LocationSelect;
