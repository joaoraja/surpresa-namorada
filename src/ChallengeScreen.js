import React, { useState } from "react";
import "./ChallengeScreen.css";

function ChallengeScreen({ onNext }) {
  const [found, setFound] = useState(false);
  const [clicks, setClicks] = useState(0);
  const maxClicks = Math.floor(Math.random() * 6) + 5; // Número aleatório de 5 a 10 cliques

  const handleFindHeart = () => {
    if (clicks >= maxClicks) {
      setFound(true);
    } else {
      setClicks(clicks + 1);
      moveHeart();
    }
  };

  const moveHeart = () => {
    const heart = document.querySelector(".hidden-heart");
    const x = Math.floor(Math.random() * 80); // Gera uma posição aleatória horizontal
    const y = Math.floor(Math.random() * 80); // Gera uma posição aleatória vertical
    heart.style.top = `${y}%`;
    heart.style.left = `${x}%`;
  };

  return (
    <div className="challenge-screen">
      {!found ? (
        <>
          <h2>Encontre o coração!</h2>
          <div onClick={handleFindHeart} className="hidden-heart">
            ❤️
          </div>
        </>
      ) : (
        <>
          <h2>Você encontrou! Você é incrível!</h2>
          <button onClick={onNext}>Próxima surpresa!</button>
        </>
      )}
    </div>
  );
}

export default ChallengeScreen;
