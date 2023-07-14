import { Tooltip } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ToastImageUser from "./ToastImageUser";

const ImageProfile = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [onErrorImg, setOnErrorImg] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setOnErrorImg(false);
    };
    img.onerror = () => {
      setImgSrc(placeholderSrc);
      setOnErrorImg(true);
      
    };
  }, [src]);

  return (
    <div className="d-flex flex-column">
      <img
        {...{ src: imgSrc, ...props }}
        alt={props.alt || "candidate-profile-pic"}
        onClick={props.handleDropdownToggle}
        className="candidate-profile-pic"
      />
      {onErrorImg&&<ToastImageUser/>}
     
    </div>
  );
};

export default ImageProfile;
