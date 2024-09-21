import React from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

 
const Login = () => {
    const passRef = useRef();
    const emailRef=useRef();
    const auth = JSON.parse(localStorage.getItem("users"));
    const navigate = useNavigate();
    const loginSubmit = (e) => {
        e.preventDefault();

        if (!passRef.current.value || !emailRef.current.value) {
            swal("Please, fill input!", "", "warning");
        } else {
            if (passRef.current.value === auth[0].pass && emailRef.current.value === auth[0].email) {
                swal("Login is successfully", "After 2 seconds, the page will automatically redirect you.", "success");
                setTimeout(() => {
                    window.location.assign('/');
                    localStorage.setItem("token", crypto.randomUUID());

                }, 2000)
            } else {
                swal("Password or email is not correct !", "Please, try again!", "error");


            }
        }
    }

    return (
        <div className='container '>
            <div className="d-flex align-items-center justfiy-content-center flex-column login-main">
                <h1 className='my-3 text-dark login-login'>Login</h1>
                <div className="col-6">
                    <form onSubmit={loginSubmit}>
                        <div className=" mb-3">
                            <label className="form-label ">Email address</label>
                            <input ref={emailRef} type="email" className="form-control " />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input ref={passRef}  type="password" className='form-control' />
                        </div>

                        <button type="submit" className="btn btn-dark ">Login</button>
                    </form>
                    <div className="d-flex flex-column justfiy-content align-items-center">

                        <Link to="/forgotpassword" className='btn btn-outline-dark mt-4 login-login'>Forgot Password?</Link>
                        <Link to="/register" className='btn btn-outline-dark mt-4 login-login'>Create new account</Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Login