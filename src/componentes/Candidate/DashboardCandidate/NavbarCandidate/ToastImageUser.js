import Toast from "react-bootstrap/Toast";
import Modal from 'react-bootstrap/Modal';

import logoSmall from "../../img/logoSmall-removebg-preview.png";
import { useState } from "react";
import { useEffect } from "react";

const ToastImageUser = () => {
  const [showToast, setShowToast] = useState(true);

useEffect(()=>{
 if(showToast===false){
    window.location.reload();
 }
},[showToast])

  const handleClose = ()=>{
    setShowToast(false)
  }
  return (
    <Modal show={showToast} onHide={handleClose} className="">
      <Modal.Header closeButton>
        <img width={"50px"} src={logoSmall} className="rounded me-2" alt="" />
        <strong className="me-auto">Jobinder</strong>
      </Modal.Header>
      <Modal.Body>Estamos publicando tu nueva foto de perfil</Modal.Body>
    </Modal>
  );
};

export default ToastImageUser;
