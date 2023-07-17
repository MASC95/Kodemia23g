import { Tooltip } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ToastImageUser from "./ToastImageUser";
import {useNavigate} from "react-router-dom"

<<<<<<< HEAD
const ImageProfile = ({ placeholderSrc,handledropdowntoggle, src, ...props }) => {
=======
const ImageProfile = ({ placeholderSrc,handleDropdownToggle,goHome,onSuccessImg,setOnSuccessImg, src, ...props }) => {
>>>>>>> devR
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [onErrorImg, setOnErrorImg] = useState(false);
  
  const navigate=useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setOnErrorImg(false);
      setOnSuccessImg(true);
      goHome();
    };
    img.onerror = () => {
      setImgSrc(placeholderSrc);
      setOnErrorImg(true);
      setOnSuccessImg(false);
    };
  }, [src]);

  



  return (
    <div className="d-flex flex-column">
      <img
        {...{ src: imgSrc, ...props }}
        alt={props.alt || "candidate-profile-pic"}
<<<<<<< HEAD
        onClick={handledropdowntoggle}
=======
        onClick={handleDropdownToggle}
>>>>>>> devR
        className="candidate-profile-pic"
      />
      {onErrorImg&&<ToastImageUser/>}
     
    </div>
  );
};

export default ImageProfile;
