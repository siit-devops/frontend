import './App.css';
import "./interceptors/AuthInterceptor"
import MyRouter from './router/MyRouter'
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <MyRouter />
    </>
  );
}

export default App;
