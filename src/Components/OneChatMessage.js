import React from "react";

export default function OneChatMessage(props) {
  const { firstName, lastName, content } = props.message;
  const { ind } = props;

  return (
    <div className="one-chat-log" key={ind}>
      <span key={`content${ind}`}>{content}</span>
      <span key={`name${ind}`}>{`by ${firstName} ${lastName}`}</span>
    </div>
  );
}
