// App.jsx

import React, { useState } from "react";
import "./App.css";
import EmojiEntry from "./EmojiEntry";
import emojipedia from "./emojipedia";

const App = () => {
  const [clickedEmoji, setClickedEmoji] = useState(null);

  const handleEmojiClick = (emojiName) => {
    let message;

    switch (emojiName) {
      case "Face with Heart Eyes":
        message = "You liked the face with Heart Eyes, huh?";
        break;
      case "Smiling Face with Sunglasses":
        message = "You liked the Glasses, huh?";
        break;
      case "Folded Hands":
        message = "You're probably blessed.";
        break;
      default:
        message = "You clicked something!";
    }

    setClickedEmoji(message);
  };

  return (
    <div>
      <h1>Emojipedia</h1>
      <div className="emoji-list">
        {emojipedia.map((emoji) => (
          <EmojiEntry
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
            onClick={() => handleEmojiClick(emoji.name)}
          />
        ))}
      </div>
      {clickedEmoji && <p className="click-message">{clickedEmoji}</p>}
    </div>
  );
};

export default App;
