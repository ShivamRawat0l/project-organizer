import React, { useState } from "react";
import "./Option.css";
type Props = {
  text: string;
  selected?: boolean;
};
function Option(props: Props) {
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
