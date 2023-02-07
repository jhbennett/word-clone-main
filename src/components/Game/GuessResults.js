import React from "react";
import Guess from "./Guess";

function GuessResults({ answer, guesses, numGuesses }) {
  
  let rows          = [];
  let answerMatches = false;
  
  {
    for (let i = 0; i < numGuesses; i += 1) {
      rows.push(<Guess
        key={Math.random()}
        answer={answer}
        guess={guesses[i]}
      />);
      if (answer === guesses[i]) answerMatches = true;
    }
  }
  
  const gameOver = guesses.length === 6;
  
  console.log("gameOver: ", gameOver);
  
  if (answerMatches) {
    return <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guesses.length === 1
          ? "1 guess"
          : `${guesses.length} guesses`}</strong>.
      </p>
    </div>;
  }
  if (gameOver) {
    return <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>;
  }
  
  return (
    <div className="guess-results">
      {rows}
    </div>
  );
}

export default GuessResults;
