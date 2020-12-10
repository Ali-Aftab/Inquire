import axios from "axios";
import http from "http";
import https from "https";
import { useEffect, useState } from "react";
import "./App.css";

import Header from "./Components/Header";
import ChatFeed from "./Components/ChatFeed";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

function App() {
  const [chatData, setChatData] = useState([]);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [content, setContent] = useState("");
  const [isNotLoggedIn, setIsNotLoggedIn] = useState(true);

  const httpAgent = new http.Agent({ keepAlive: true });
  const httpsAgent = new https.Agent({ keepAlive: true });
  const instance = axios.create({
    httpAgent,
    httpsAgent,
  });

  const url = "https://question-toy-server.herokuapp.com/api/questions";
  const fetchQuestions = async () => {
    try {
      const initialFetch = await axios.get(url, { httpAgent });
      setChatData(initialFetch.data.questions);
    } catch (error) {
      window.alert("Connection to API Failed");
    }
  };

  useEffect(() => {
    fetchQuestions();
    testThis();
    if (firstName && lastName) {
      setIsNotLoggedIn(false);
    }
  }, []);
  console.log("LAST", lastName);

  const login = (event) => {
    event.preventDefault();
    if (!firstName || !lastName) {
      window.alert("Please type your first and last name!");
    } else {
      console.log("here");
      setIsNotLoggedIn(false);
    }
  };

  const submitMessage = async (event) => {
    event.preventDefault();
    if (content.length < 1) {
      window.alert("Please ask a question");
    } else {
      await axios
        .post(url, { firstName, lastName, content })
        .then(() => fetchQuestions())
        .catch(() => window.alert("Your message did not get posted!"));
    }
  };

  return (
    <div id="container">
      <Header />
      {isNotLoggedIn ? (
        <Login
          login={login}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
        />
      ) : (
        <ChatFeed chatData={chatData} />
      )}

      <Footer
        submitMessage={submitMessage}
        setContent={setContent}
        content={content}
      />
    </div>
  );
}

export default App;
const testThis = () => {
  // const socket = new WebSocket(
  //   "ws://question-toy-server.herokuapp.com/api/questions"
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
};
