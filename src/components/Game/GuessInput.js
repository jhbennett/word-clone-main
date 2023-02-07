import React, { useState } from "react";

function GuessInput({ guesses, setGuesses }) {
  const [text, setText] = useState("");
  
  function handleOnChange(val) {
    if (val.length === 0 || val.length > 5) {
      alert("must be between 1 and 5 chars");
      setText("");
      return;
    }
    const newValue = val.toUpperCase();
    setText(newValue);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    setText("");
  }
  
  function handleKeydown(e) {
    if (e.code === "Enter" && e.target.value.length === 5) {
      setGuesses([...guesses, e.target.value.toUpperCase()])
    }
  }
  
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        maxLength={5}
        minLength={5}
        type="text"
        onChange={e => handleOnChange(e.target.value)}
        onKeyDown={e => handleKeydown(e)}
        value={text}
      />
    </form>
  );
}

export default GuessInput;
