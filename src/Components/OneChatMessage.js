import React from "react";

export default function OneChatMessage(props) {
  const { firstName, lastName, content } = props.message;
  const { ind } = props;

  return (
    <div className="one-chat-log" key={ind}>
      <div key={`content${ind}`}>{content}</div>
      <div key={`name${ind}`}>{`by ${firstName} ${lastName}`}</div>
    </div>
  );
}
