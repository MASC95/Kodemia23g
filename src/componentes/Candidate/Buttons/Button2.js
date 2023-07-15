import React from "react";
import "./button2.scss";

const Button2 = ({ text, bgcolor, colortext, widthB, fs, paddingB, borde }) => {
  const buttonStyle = {
    backgroundColor: bgcolor,
    color: colortext,
    width: widthB,
    fontSize: fs,
    padding: paddingB,
    border: borde,
  };

  return (
    <button className="button-2" style={buttonStyle}>
      {text}
    </button>
  );
};

export default Button2;
