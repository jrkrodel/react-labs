import React from "react";
import "./styles.css";

export default function MapLocation(props) {
  //   const [active, setActive] = useState(false);
  return (
    <circle
      className="location"
      r="12"
      strokeWidth={props.active ? 3 : 0}
      cx={props.position.x}
      cy={props.position.y}
      onClick={props.userSelected}
    ></circle>
  );
}
