import React from 'react'
import './login.css'
function Login() {
    return (
        <div className="auth-page-wrapper pt-5">
            {/* page bg */}
            <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
                
                <div className="bg-overlay" />
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                        <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
                    </svg>
                </div>
                <canvas className="particles-js-canvas-el" width={1349} height={380} style={{ width: '100%', height: '100%' }} />
            </div>
            {/* page content */}
            <div className="auth-page-content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="card mt-5 login-bg">
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <div className="d-inline-block auth-logo">
                                            <img src="https://seeklogo.com/images/G/government-of-jharkhand-logo-D9985104A5-seeklogo.com.png" alt="JSLPS image" height={80} />
                                        </div>
                                        <h3 className="text-dark mt-3">Login to Your Portal</h3>
                                    </div>
                                    <div className="p-2 mt-3">
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <input name="txtusername" type="text" id="txtusername" className="form-control" placeholder="Enter username" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="password-input">Password</label>
                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                <input name="txtpassword" type="password" id="txtpassword" className="form-control pe-5 password-input" placeholder="Enter password" />
                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle" /></button>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            
                                            <a href="#" className="text-muted float-end">Forgot password?</a>
                                        </div>
                                        <div className="mt-4">
                                            <input type="submit" name="btnlogin" defaultValue="Login" id="btnlogin" className="btn btn-primary w-100" />
                                        </div>
                                    </div>
                                </div>
                                {/* card body */}
                            </div>
                            {/* card */}
                        </div>
                    </div>
                    {/* row */}
                </div>
                {/* container */}
            </div>
            {/* end page content */}
        </div>


    )
}

export default Login
