import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
  //Declare state
  const [state, setState] = useState({
    email: '',
    password: '',
    isChecked: false,
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setState((prev) => ({
      ...prev,
      [target.name]: value,
    }));
  };
  return (
    <div className="form-center">
      <form className="form">
        <div className="heading">
          <h2>Log in</h2>
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
            placeholder="at least 8 characters"
            required
          />
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="checkbox"
            name="isChecked"
            checked={state.isChecked}
            onChange={handleInputChange}
          />
          <label htmlFor="checkbox">Remember me</label>
        </div>
        <div className="form-group">
          <button>Log in</button>
        </div>
        <div className="links">
          <Link to={'/#'} id="forgot-password">
            Forgot Password?
          </Link>
          <p>Don&apos;t have an account?</p>
          <Link to={'/signup'}>Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
