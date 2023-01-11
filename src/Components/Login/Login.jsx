import React from 'react';
import './Login.css';
const Login = () => {
  return (
    <div className="form-center">
      <form className="form">
        <div className="heading">
          <h2>Log in</h2>
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="example@gmail.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="at least 8 characters" required />
        </div>

        <div className="form-group checkbox">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
        </div>
        <div className="form-group">
          <button>Log in</button>
        </div>
        <div className="links">
          <a href="#" id="forgot-password">
            Forgot Password?
          </a>
          <p>Don&apos;t have an account?</p>
          <a href="#">Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
