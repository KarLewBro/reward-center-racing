import logo from "../logo.svg";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

const SCREEN_WIDTH = window.innerWidth;

const Wheel = (props) => {
  const [wheelPos, setWP] = useSpring(() => ({ rotateZ: 0 }));
  const turnWheel = useDrag(({ active, down, swipe: [sx] }) => {
    console.log(sx);
    setWP({ rotateZ: sx * 135 });
    // active
    //   ? wheelPos.rotateZ.set(mx / (SCREEN_WIDTH / 400))
    //   : wheelPos.rotateZ.set(0);

    // switch (!down) {
    //   case mx > SCREEN_WIDTH / 6:
    //     props.scene("right");
    //     break;
    //   case mx < -(SCREEN_WIDTH / 6):
    //     props.scene("left");
    //     break;
    //   default:
    //     props.scene("straight");
    // }
  });

  return (
    <animated.div {...turnWheel()} className="wheel" style={wheelPos}>
      <img src={logo} className="applogo" alt="logo" />
    </animated.div>
  );
};

export default Wheel;
