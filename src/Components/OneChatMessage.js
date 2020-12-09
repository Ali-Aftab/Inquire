import React from "react";

export default function OneChatMessage(props) {
  const { firstName, lastName, content } = props.message;
  const { ind } = props;

  return (
    <div className="one-chat-log" key={ind}>
      <p key={`content${ind}`}>{content}</p>
      <p key={`name${ind}`}>{`by ${firstName} ${lastName}`}</p>
    </div>
  );
}
