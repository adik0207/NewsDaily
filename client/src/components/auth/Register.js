import React from 'react';
import './Register.css';
import BackgroundChanger from './BackgroundChanger';

const Register = () => {
  return (
    <BackgroundChanger>
      <div className="register-container">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </BackgroundChanger>
  );
};

export default Register;
