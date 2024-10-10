import React, { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import ChallengeScreen from "./ChallengeScreen";
import JokeScreen from "./JokeScreen";
import FinalMessage from "./FinalMessage";
import "./styles.css";

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="App">
      {step === 1 && <WelcomeScreen onNext={nextStep} />}
      {step === 2 && <ChallengeScreen onNext={nextStep} />}
      {step === 3 && <JokeScreen onNext={nextStep} />}
      {step === 4 && <FinalMessage />}
    </div>
  );
}

export default App;
