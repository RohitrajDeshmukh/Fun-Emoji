import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😍": "Smiling Face with Heart-Eyes",
  "🤪": "Zany Face",
  "😴": "Sleeping Face",
  "🥳": "Partying Face",
  "😤": "Face with Steam From Nose",
  "😹": "Cat with Tears of Joy",
  "🤴": "Prince",
  "🤙": "Call Me Hand",
  "👽": "Alien",
  "🎃": "Jack-O-Lantern"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    var input = event.target.value;
    var meaning = emojiDictionary[input];
    setMeaning(meaning);
  }

  function clickEmoji(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav class="navigation">
        <div class="nav-brand">Emoji's</div>
      </nav>

      <section class="section">
        <img
          class="img"
          src="https://cdn.perkuto.com/wp-content/uploads/2020/12/Emojis.jpg"
          alt=""
        />
      </section>
      <section class="section">
        <div class="input">
          <input
            onChange={inputHandler}
            placeholder="enter the emoji here..."
          ></input>

          <h3>
            {emojisWeKnow.map((emoji) => {
              return (
                <span
                  onClick={() => clickEmoji(emoji)}
                  style={{ cursor: "pointer" }}
                >
                  {emoji}
                </span>
              );
            })}
          </h3>

          <h2 class="txt">Click Emoji to know the Meaning</h2>

          <p>{meaning}</p>
        </div>
      </section>
    </div>
  );
}
