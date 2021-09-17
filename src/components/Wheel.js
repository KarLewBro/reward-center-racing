import logo from "../logo.svg";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

const SCREEN_WIDTH = window.innerWidth;

const Wheel = (props) => {
  const [wheelPos, setWP] = useSpring(() => ({ rotateZ: 0 }));
  // const wheelPos = useSpring({ rotateZ: 0 });
  const turnWheel = useDrag(({ active, down, movement: [mx] }) => {
    setWP({ rotateZ: mx / (SCREEN_WIDTH / 400) });
    // active
    //   ? wheelPos.rotateZ.set(mx / (SCREEN_WIDTH / 400))
    //   : wheelPos.rotateZ.set(0);

    // switch (!down) {
    //   case mx > SCREEN_WIDTH / 6:
    //     changeScene("right");
    //     break;
    //   case mx < -(SCREEN_WIDTH / 6):
    //     changeScene("left");
    //     break;
    //   default:
    //     changeScene("straight");
    // }
  });

  return (
    <animated.div {...turnWheel()} className="wheel" style={wheelPos}>
      <img src={logo} className="applogo" alt="logo" />
    </animated.div>
  );
};

export default Wheel;

const wStyle = {
  position: "absolute",
  // top: "100%",
  // left: "50%",
  width: "30vw",
  aspectRatio: "1/1",
  backgroundColor: "cyan",
  // transform: "translate(-50%; -50%)",
  borderRadius: "50%",
};
