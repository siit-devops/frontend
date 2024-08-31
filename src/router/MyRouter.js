import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./MyRoutes";
import { Navbar } from "../components/Navbar/Navbar";


const MyRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MyRoutes />
    </BrowserRouter>
  )
}

export default MyRouter;
