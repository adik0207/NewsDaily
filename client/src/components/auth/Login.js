import React from 'react';
import './Login.css';
import BackgroundChanger from './BackgroundChanger';

const Login = () => {
  return (
    <BackgroundChanger>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </BackgroundChanger>
  );
};

export default Login;
