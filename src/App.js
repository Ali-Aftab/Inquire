import axios from "axios";
import { useEffect, useState, useRef } from "react";

import "./App.css";

import Header from "./Components/Header";
import ChatFeed from "./Components/ChatFeed";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

function App() {
  const [chatData, setChatData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [content, setContent] = useState("");
  const [isNotLoggedIn, setIsNotLoggedIn] = useState(true);
  const mostRecentRef = useRef(null);

  const url = "https://question-toy-server.herokuapp.com/api/questions";
  const fetchQuestions = async () => {
    try {
      const initialFetch = await axios.get(url);
      setChatData(initialFetch.data.questions);
    } catch (error) {
      window.alert("Connection to API Failed");
    }
  };

  useEffect(() => {
    fetchQuestions();
    setInterval(() => fetchQuestions(), 1000 * 30);
    if (firstName && lastName) {
      setIsNotLoggedIn(false);
    }
  }, []);

  const login = (event) => {
    event.preventDefault();
    if (!firstName || !lastName) {
      window.alert("Please type your first and last name!");
    } else {
      setIsNotLoggedIn(false);
    }
  };

  const submitMessage = async (event) => {
    event.preventDefault();
    if (content.length < 1) {
      window.alert("Please ask a question");
    } else {
      try {
        const submittedResponse = await axios.post(url, {
          firstName,
          lastName,
          content,
        });
        const nextQuestion = submittedResponse.data.question;
        const updatedList = [...chatData, nextQuestion];
        setChatData(updatedList);
        setContent("");
        mostRecentRef.current.scrollIntoView({ behavior: "smooth" });
      } catch (error) {
        window.alert("Your message did not get posted!");
      }
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
        <ChatFeed chatData={chatData} mostRecentRef={mostRecentRef} />
      )}

      <Footer
        submitMessage={submitMessage}
        setContent={setContent}
        content={content}
        isNotLoggedIn={isNotLoggedIn}
      />
    </div>
  );
}

export default App;
