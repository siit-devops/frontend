import './App.css';
import "./interceptors/AuthInterceptor"
import MyRouter from './router/MyRouter'
import { ToastContainer, toast } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { getUserId } from "./services/AuthService";


function App() {
  let isLoaded = false;
  let stompClient = null;
  let cnt = 0;

  useEffect(() => {
    initializeWebSocketConnection();
  }, []);

  const initializeWebSocketConnection = () => {
    let ws = new SockJS(`http://localhost:8084/socket`);
    stompClient = Stomp.over(ws);
    connect();
  };

  const connect = () => {
    stompClient.connect({}, function () {
      isLoaded = true;
      setTimeout(() => openGlobalSocket(), 500);
    });
  };

  const openGlobalSocket = () => {
    if (isLoaded && getUserId() != "") {
      stompClient.subscribe("/socket-publisher/" + getUserId(), (alarm) => {
        if (cnt % 2 === 0) {
          console.log(alarm);
          
          toast(alarm.body);
        }
        cnt++;
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <MyRouter />
    </>
  );
}

export default App;
