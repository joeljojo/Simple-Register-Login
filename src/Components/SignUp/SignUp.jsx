import React from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div className="form-center">
      <form className="form">
        <div className="heading">
          <h2>Sign Up</h2>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Joel Pamphyl" required />
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
          <label htmlFor="checkbox">
            I agree with <span>Terms</span> and <span>Privacy</span>
          </label>
        </div>
        <div className="form-group">
          <button>Log in</button>
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
