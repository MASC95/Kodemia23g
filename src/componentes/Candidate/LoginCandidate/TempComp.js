import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { adminUser,adminPassword } from "../../assets/constants";
import { useNavigate } from "react-router-dom";


/*

La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.

^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$

password: Yup.string().required('Requerido').min(8, 'La contraseña debe tener al menos 8 caracteres')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
  ),
*/

const profileSchema = Yup.object().shape({
  user: Yup.string()
    .required("Favor de ingresar el Usuario")
    .min(4, "El usuario debe tener al menos 4 caracteres")
    .max(16, "El usuario debe tener como máximo 16 caracteres"),
  password: Yup.string()
    .required("Ingresar el password")
    .min(8, "El password debe tener al menos 8 caracteres")
    .max(16, "El apellido debe tener como máximo 16 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
      "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico."
    ),
});

const initialDataForm = {
  user: "",
  password: "",
};



const AdminLogin = () => {
  const [dataForm, setDataForm] = useState(initialDataForm);
  const navigate=useNavigate();

  const handleSubmit=(values)=>{
    console.log("values:..", values);
    const {user,password}=values;
    if(user===adminUser&&password===adminPassword){
      navigate('/createArticle');
    }else{
      navigate('/error')
    }
    //console.log(adminUser,adminPassword)
  }

  return (
    <Formik
      initialValues={dataForm}
      enableReinitialize={true}
      validationSchema={profileSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form
          className="w-75 ms-auto me-auto my-3"
          onSubmit={props.handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>User:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter user"
              
              name="user"
              className={`form-control ${
                props.touched.user && props.errors.user
                  ? "border border-danger"
                  : "border border-secondary"
              }`}
              value={props.values.user}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <ErrorMessage name='user'/>
            {/* <div>{props.errors.user}</div> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              
              name="password"
              className={`form-control ${
                props.touched.password && props.errors.password
                  ? "border border-danger"
                  : "border border-secondary"
              }`}
              value={props.values.password}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <ErrorMessage name='password'/>
            {/* <div>{props.errors.password}</div> */}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AdminLogin;
