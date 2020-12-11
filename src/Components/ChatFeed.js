import React from "react";
import OneChatMessage from "./OneChatMessage";

export default function ChatFeed(props) {
  const { chatData, mostRecentRef } = props;
  return (
    <div className="chat-logs">
      {chatData.map((oneMessage, ind) => (
        <OneChatMessage
          message={oneMessage}
          ind={ind}
          key={ind}
          mostRecentRef={ind === chatData.length - 1 ? mostRecentRef : null}
        />
      ))}
    </div>
  );
}
