import React from 'react'

const Login = () => {
  return (
   <div className='container-forms sign-up'>
        <div className='welcome-back'>
            <div className='message'>
                <h2>Bienvenido a JOBINDER</h2>
                <p>Si ya tienes una cuenta por favor inicia sesión aquí</p>
                <button type="button" classNameName="btn btn-primary">Iniciar sesión con JOBINDER</button>
            </div>
        </div>
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" classNameName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" classNameName="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
   </div>
  )
}

export default Login