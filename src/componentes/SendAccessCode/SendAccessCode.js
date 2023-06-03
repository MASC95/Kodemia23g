import React, { useState } from 'react'
import { Container,Form, Button } from 'react-bootstrap'
import axios from 'axios';


const initDataLogin = {
    email: '',
    password: '',
    confirmPassword: "",
    code: '',
    confirmCode:''
}
const backUrl = 'http://localhost:4000/api/v1/signup/sendAccessCode';

const SendAccessCode = () => {
    const [dataLogin, setDataLogin] = useState(initDataLogin);

    const handleChange = (e)=>{
        console.log(e.target.name,e.target.value);
        setDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log('dataLogin:...',dataLogin);
        try {
            const response = await axios.post(backUrl,dataLogin);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Form className="row pt-3 pb-3" onSubmit={handleSubmit}>
          <Container className="getUserEmail col-sm-12 col-md-8 col-lg-6 ">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Ingresar Email</Form.Label>
              <Form.Control
                value={dataLogin.email}
                onChange={handleChange}
                name='email'
                type="email"
                placeholder="email"
              />
              <Form.Text className="text-muted">
                Aqui te enviaremos tu código de confirmación.
              </Form.Text>
            </Form.Group>
            <Button type='submit'>
            Submit
          </Button>
          </Container>
          
        </Form>
  )
}

export default SendAccessCode