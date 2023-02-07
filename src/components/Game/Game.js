import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  const [guesses, setGuesses] = useState([]);
  
  return (
    <>
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
      />
      <GuessResults
        answer={answer}
        guesses={guesses}
        numGuesses={NUM_OF_GUESSES_ALLOWED}
      />
    </>
  );
}

export default Game;
