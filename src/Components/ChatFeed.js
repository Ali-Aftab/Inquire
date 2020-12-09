import React from "react";
import OneChatMessage from "./OneChatMessage";

export default function ChatFeed(props) {
  const { chatData } = props;
  return (
    <div className="chat-logs">
      {chatData.map((oneMessage, ind) => (
        <OneChatMessage message={oneMessage} ind={ind} />
      ))}
    </div>
  );
}
