import { Routes, Route } from "react-router-dom";

import Login from "../components/Auth/Login/Login";
import Registration from "../components/Auth/Registration/Registration";

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default MyRoutes;
