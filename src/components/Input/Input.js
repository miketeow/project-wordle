import React from "react";

function Input({ guesses, answer, setGuesses, gameStatus, setGameStatus }) {
  const [input, setInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (guesses.length > 5) {
      return;
    }
    const newGuesses = [...guesses];
    newGuesses.push(input);
    setGuesses(newGuesses);

    const newGameStatus = input === answer ? true : false;
    setGameStatus(newGameStatus);

    setInput("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        disabled={gameStatus}
        pattern="^[a-zA-Z]{5}$"
        onChange={(event) => {
          setInput(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default Input;
