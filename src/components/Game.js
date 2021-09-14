import { useState } from "react";
import Wheel from "./Wheel";
import View from "./View";

const Game = () => {
  const [step, setStep] = useState(0);
  const [scene, setScene] = useState("start"); // start, left, right, center, end
  const [gameState, setGameState] = useState(0); // 0 = reset 1 = play 2 = goal

  return (
    <div className="game">
      <View scene={scene} />
      <Wheel setStep={setStep} />
    </div>
  );
};

export default Game;
