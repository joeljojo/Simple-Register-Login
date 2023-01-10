import React from 'react';
const Login = () => {
  return (
    <div>
      <form className="form">
        <div className="heading">
          <h1>Log in</h1>
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="example@gmail.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="at least 8 characters" required />
        </div>

        <div className="form-group">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
        </div>
        <div className="form-group">
          <button>Log in</button>
        </div>
        <div className="links">
          <a href="#">Forgot Password</a>
          <p>Don&apos;t have an account?</p>
          <a href="#">Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
