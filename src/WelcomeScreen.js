import React from "react";

function WelcomeScreen({ onNext }) {
  return (
    <div className="welcome-screen">
      <h1>Bem-vinda ao joguinho amor!</h1>
      <p>
        Se prepara para essa surpresa! (Aperte o botão quando estiver pronta)
      </p>
      <button onClick={onNext}>Estou pronta! 😍</button>
    </div>
  );
}

export default WelcomeScreen;
