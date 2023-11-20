import React from "react";

function Banner({ gameStatus, guesses, answer }) {
  const result = gameStatus ? "happy" : guesses.length > 5 ? "sad" : undefined;
  return (
    <div className={`banner ${result}`}>
      {result === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {`${guesses.length}`} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
