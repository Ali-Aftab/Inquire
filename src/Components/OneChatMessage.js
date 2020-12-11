import React from "react";

export default function OneChatMessage(props) {
  const { firstName, lastName, content } = props.message;
  const { ind, mostRecentRef } = props;
  return (
    <div className="one-chat-container fade-from-bottom" key={ind}>
      <div className="one-chat-log" key={`content${ind}`}>
        {content}
      </div>
      <div className="one-chat-user" key={`name${ind}`} ref={mostRecentRef}>
        {firstName} {lastName}
      </div>
    </div>
  );
}
