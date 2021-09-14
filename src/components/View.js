import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

const View = (props) => {
  const [back, setBack] = useState("magenta");
  useEffect(() => {
    switch (props.scene) {
      case "start":
        setBack("#aa5");
        break;
      case "left":
        setBack("blue");
        break;
      case "right":
        setBack("red");
        break;
      case "center":
        setBack("green");
        break;
      case "end":
        setBack("purple");
        break;
      default:
        return;
    }
  }, [props.scene]);

  return (
    <animated.div className="view" style={{ background: back }}></animated.div>
  );
};

export default View;
