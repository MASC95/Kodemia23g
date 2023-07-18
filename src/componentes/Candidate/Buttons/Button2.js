import React from "react";
import "./button2.scss";

const Button2 = ({
  text,
  bgcolor,
  colortext,
  widthB,
  fs,
  paddingB,
  borde,
  altura,
  ...rest // Aquí estamos usando el operador de propagación (spread operator) para recoger cualquier otra propiedad que se pase al componente
}) => {
  const buttonStyle = {
    backgroundColor: bgcolor,
    color: colortext,
    width: widthB,
    fontSize: fs,
    padding: paddingB,
    border: borde,
    height: altura,
  };

  // Utilizamos el operador de propagación nuevamente para añadir cualquier propiedad adicional al estilo del botón
  const mergedStyle = { ...buttonStyle, ...rest };

  return (
    <button className="button-2" style={mergedStyle}>
      {text}
    </button>
  );
};

export default Button2;
