import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, guess }) {
  
  let spans    = [];
  const result = checkGuess(guess, answer);
  
  if (result) {
    spans.push(result.map(g => (
      <span
        key={Math.random()}
        className={g.status ? `cell ${g.status}` : " cell"}>
        {g.letter}
      </span>))
    );
  } else {
    for (let i = 0; i < 5; i += 1) {
      spans.push(<span key={Math.random()} className="cell"> </span>);
    }
  }
  
  return (
    <p key={Math.random()} className="guess">{spans}</p>
  );
}

export default Guess;
