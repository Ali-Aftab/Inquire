import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

import Header from "./Components/Header";
import ChatFeed from "./Components/ChatFeed";
import Footer from "./Components/Footer";

function App() {
  const [chatData, setChatData] = useState([]);

  const url = "https://question-toy-server.herokuapp.com/api/questions";
  useEffect(() => {
    const firstFetch = async () => {
      try {
        const initialFetch = await axios.get(url);
        setChatData(initialFetch.data.questions);
      } catch (error) {
        window.alert("Connection to API Failed");
      }
    };
    firstFetch();
  }, []);

  return (
    <div id="container">
      <Header />
      <ChatFeed chatData={chatData} />
      <Footer />
    </div>
  );
}

export default App;

// const socket = new WebSocket(
//   "wss://question-toy-server.herokuapp.com/api/questions"
// );
// socket.onopen = () => {
//   console.log("Connected to server!");
// };
// socket.onmessage = (event) => {
//   const message = event.data;
//   console.log(message);
// };
// socket.onclose = () => {
//   console.log("Disconnected from server!");
// };
