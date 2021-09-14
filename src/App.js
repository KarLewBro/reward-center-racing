import "./App.css";
import Game from "./components/Game";

const SCREEN_HEIGHT = window.innerHeight;
const SCREEN_WIDTH = window.innerWidth;

console.log(SCREEN_HEIGHT);
console.log(SCREEN_WIDTH);

function App() {
  return <Game />;
}

export default App;
