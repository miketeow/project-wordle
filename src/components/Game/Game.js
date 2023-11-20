import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input/Input";
import Guess from "../Guess/Guess";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(false);

  return (
    <>
      {(gameStatus || guesses.length === NUM_OF_GUESSES_ALLOWED) && (
        <Banner gameStatus={gameStatus} guesses={guesses} answer={answer} />
      )}
      <Guess guesses={guesses} answer={answer} />
      <Input
        guesses={guesses}
        answer={answer}
        setGuesses={setGuesses}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />
    </>
  );
}

export default Game;
