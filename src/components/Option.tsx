import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "./Option.css";
type Props = {
  text: string;
  selected?: boolean;
};
function Option(props: Props) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="option"
      style={props.selected && { backgroundColor: "#f00" }}
    >
      {props.text}
    </div>
  );
}
export default Option;
