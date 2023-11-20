import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guesses, answer }) {
  return (
    <>
      <div className="guess-results">
        {range(0, guesses.length).map((rowIndex) => (
          <p key={rowIndex} className="guess">
            {checkGuess(guesses[rowIndex], answer).map((solution, index) => (
              <span key={index} className={`cell ${solution.status}`}>
                {solution.letter}
              </span>
            ))}
          </p>
        ))}

        {range(0, NUM_OF_GUESSES_ALLOWED - guesses.length).map((rowIndex) => (
          <p key={rowIndex} className="guess">
            {range(5).map((colIndex) => (
              <span key={colIndex} className="cell"></span>
            ))}
          </p>
        ))}
      </div>
    </>
  );
}

export default Guess;
