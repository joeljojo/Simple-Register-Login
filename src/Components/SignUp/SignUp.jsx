import React, { useState } from 'react';
import swal from 'sweetalert';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
  //Declare state
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    isAgreeing: false,
  });

  // Handle inputs change
  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setState((prev) => ({
      ...prev,
      [target.name]: value,
    }));
  };

  //USing fetch to interact with API
  const { email, name, password } = state;
  //Initialize user
  const user = {
    name: name,
    email: email,
    password: password,
  };

  async function registerUser() {
    const url = 'https://simple-login-server.onrender.com/register';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    };
    try {
      let response = await fetch(url, options);
      let result = await response.json();
      if (result.status == true) {
        swal({
          title: result.message,
          icon: 'success',
          button: 'OK',
        });
      } else {
        swal({
          title: result.message,
          icon: 'error',
          button: 'OK',
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };
  return (
    <div className="form-center">
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="heading">
          <h2>Sign Up</h2>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
            placeholder="Joel Pamphyl"
            required
          />
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
            name="isAgreeing"
            checked={state.isAgreeing}
            onChange={handleInputChange}
          />
          <label htmlFor="checkbox">
            I agree with <span>Terms</span> and <span>Privacy</span>
          </label>
        </div>
        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
        <div className="links">
          <p>Already have an account?</p>
          <Link to={'/'}>Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
