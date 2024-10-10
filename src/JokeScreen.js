import React, { useState } from "react";

function JokeScreen({ onNext }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="joke-screen">
      <h2>Por que o tomate namorava o pepino? 🤔</h2>
      {!showAnswer ? (
        <button onClick={handleShowAnswer}>Não sabe? Descubra 🙂</button>
      ) : (
        <>
          <p>Porque eles eram feitos um para o outro! 🥒🍅</p>
          <button onClick={onNext}>Haha, boa! Vamos continuar!</button>
        </>
      )}
    </div>
  );
}

export default JokeScreen;
