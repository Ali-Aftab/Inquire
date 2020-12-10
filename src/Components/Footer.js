import React from "react";

export default function Footer(props) {
  const { submitMessage, setContent, content, isNotLoggedIn } = props;

  return (
    <footer>
      <form
        className="type-form"
        onSubmit={(event) => {
          submitMessage(event);
        }}
      >
        <input
          type="text"
          onChange={(event) => setContent(event.target.value)}
          value={content}
          className="chat-input-text"
          placeholder="Type your question here"
        />
        <button
          className={`chat-button ${
            isNotLoggedIn ? "disable-chat-button" : ""
          }`}
          type="submit"
        >
          ?
        </button>
      </form>
    </footer>
  );
}
