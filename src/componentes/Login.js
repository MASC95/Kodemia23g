import React from "react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <body>
      <section
        className="vh-100 gradient-custom "
        style={{ marginBottom: "250px" }}
      >
        <div className="container py-5 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card  text-white"
                style={{ borderRadius: "1rem", backgroundColor: "#498BA6" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5 d-flex justify-content-center ">
                      Please enter your login and password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>

                    <div
                      className="d-flex justify-content-center text-center mt-4 pt-1"
                      style={{ padding: "10px" }}
                    >
                      <button
                        type="button"
                        class="btn btn-outline-light btn-lg "
                        style={{ width: "300px", height: "70px" }}
                      >
                        <h4>
                          Login with Google{" "}
                          <FaGoogle size={24} style={{ marginLeft: 10 }} />
                        </h4>
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a href="#!" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Login;
