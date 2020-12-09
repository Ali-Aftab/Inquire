import React from "react";

export default function Footer(props) {
  const { submitMessage, setContent, content } = props;
  console.log(content);
  return (
    <footer>
      <form
        onSubmit={(event) => {
          submitMessage(event);
        }}
      >
        <input
          type="text"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <button type="submit">Enter</button>
      </form>
    </footer>
  );
}
