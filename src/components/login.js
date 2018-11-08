import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <form className="login-form">
      <h3 className="bd-title">Log In</h3>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">Username</div>
        </div>
        <input type="text" label="username" />
      </div>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">Password</div>
        </div>
        <input type="text" label="password" />
      </div>
      <Link className="btn btn-primary btn-lg" to="/home">
        Submit
      </Link>
    </form>
  );
};

export default Login;
