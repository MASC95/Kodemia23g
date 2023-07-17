import React from "react";
import NavbarCandidate from "../DashboardCandidate/NavbarCandidate/NavbarCandidate";
import Footer from "../../Landing/Footer/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { endpointsGral } from "../../Recruiter/services/vacancy";
import axios from "axios";
import { useState } from "react";


const initData = {
  email: "",
  accessCode: "",
  userCode: "",
  password: "",
  confirmPassword: "",
};

const UpdatePassword = () => {
  const { email } = useParams();
  const [accessCode, setAccessCode] = useState(null);
  const [isConfirmCode, setIsConfirmCode] = useState(false);
  const [dataFormUpdate, setDataFormUpdate] = useState(initData);

  useEffect(() => {
    if (email !== "none") {
      console.log("Email USER:..", email);
      
      enviarCodigo(email);
    }
  }, []);


  useEffect(() => {
    if(accessCode!==''){
        setDataFormUpdate({
            ...dataFormUpdate,
            accessCode: String(accessCode),
          });
    }
    
    
  }, [accessCode]);

  useEffect(()=>{
    if(accessCode&&(dataFormUpdate.accessCode===dataFormUpdate.userCode)){
        setIsConfirmCode(true)
    }

  },[dataFormUpdate.accessCode,dataFormUpdate.userCode])

  useEffect(()=>{
    if (email !== "none") {   
        setDataFormUpdate({
          ...dataFormUpdate,
          email:email
        })
    }
  },[email])


  const enviarCodigo = async (emailUser) => {
    const { confirmEmail } = endpointsGral;
    const dataLogin = {
      email: emailUser,
    };
    try {
      const response = await axios.post(confirmEmail, dataLogin);
      console.log("responseConfirmEmail:..", response);
      const backCode = response?.data?.code;
      if (backCode) {
        setAccessCode(backCode);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setDataFormUpdate({
      ...dataFormUpdate,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Valores del form:..", dataFormUpdate);

    if(dataFormUpdate.password!==''&&dataFormUpdate.confirmPassword===dataFormUpdate.password){
        const {userURL}=endpointsGral;

        try {
            const response = await axios.post(`${userURL}updatePassword`,dataFormUpdate)
            console.log('response UpdatePassword:..',response);
        } catch (error) {
            console.log(error);
        }

    }
    
  };

  return (
    <div >
        <div className="w-75 ms-auto me-auto my-3">
      {/* <NavbarCandidate /> */}
      <h2>Actualizando Contraseña</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={dataFormUpdate.email}
            onChange={handleChange}
          />
        </Form.Group>

        {accessCode &&!isConfirmCode&& (
            <>
          <Form.Group className="mb-3" controlId="formBasicEmail2">
            <Form.Label>
              Captura el código de acceso que fue enviado a tu email:
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Access Code"
              name="userCode"
              value={dataFormUpdate.userCode}
              onChange={handleChange}
            />
          </Form.Group>
          
        </>
        )}

        {isConfirmCode && (
          <>
          <h3>Ahora puedes ingresar tu nueva Contraseña</h3>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password"
              value={dataFormUpdate.password}
              onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="confirmPassword"
              value={dataFormUpdate.confirmPassword}
              onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
          Guardar
        </Button>
          </>
          
        )}

        
      </Form>
      </div>
      <Footer />
    </div>
  );
};

export default UpdatePassword;
