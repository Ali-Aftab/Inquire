import logo from "./logo.svg";
import "./App.css";
import ChatHeader from "./Components/ChatHeader";
import ChatFeed from "./Components/ChatFeed";
import ChatForm from "./Components/ChatForm";

function App() {
  return (
    <div>
      <ChatHeader />
      <ChatFeed />
      <ChatForm />
    </div>
  );
}

export default App;
