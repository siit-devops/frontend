import { Routes, Route } from "react-router-dom";

import Login from "../components/Auth/Login/Login";
import Registration from "../components/Auth/Registration/Registration";
import Home from "../components/Home/Home";
import SearchResults from "../components/SearchResults/SearchResults";
import Accommodations from "../components/Accommodations/Accommodations";
import MyAccommodations from "../components/MyAccommodations/MyAccommodations";
import AccommodationModify from "../components/Accommodations/AccommodationModify/AccommodationModify";

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/registration" element={<Registration />} />
      <Route exact path="" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/results" element={<SearchResults />} />
      <Route exact path="/accommodations" element={<Accommodations hideTop={false} displayNum={6} />} />
      <Route exact path="/my-accommodations" element={<MyAccommodations />} />
      <Route exact path="/accommodations/create" element={<AccommodationModify accommodation={null} />} />
      <Route exact path="/accommodations/update/:id" element={<AccommodationModify accommodation={null} />} />
    </Routes>
  );
};

export default MyRoutes;
