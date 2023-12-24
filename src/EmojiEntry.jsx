// EmojiEntry.jsx

import React from "react";

const EmojiEntry = (props) => {
  return (
    <div className="emoji-entry" onClick={props.onClick}>
      <span className="emoji">{props.emoji}</span>
      <div>
        <h2>{props.name}</h2>
        <p>{props.meaning}</p>
      </div>
    </div>
  );
};

export default EmojiEntry;
