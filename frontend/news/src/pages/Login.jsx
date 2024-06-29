
import React, { useState } from 'react';
import './Login.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
        email,
        password
      };
  
      try {
        const response = await fetch('http://localhost:4000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const result = await response.json();
        if(result.message==="Login successful"){
            sessionStorage.setItem("email",email)
            toast.success("Login successful !", {
                position: "top-right"
              });
              setTimeout(()=>{
                navigate('/')
              },2000)
        }
        else if(result.message==="Invalid credentials"){
            toast.warn("Invalid credentials !", {
                position: "top-right"
            });
        }
      } catch (error) {
        console.error('Error:', error);
      }
    //console.log('Email:', email);
    // console.log('Password:', password);
  };

  return (
    <div className='body'>
    <div className="login-container">
      <form className="login-form">
        <h2>LOGIN</h2>
        <p>Please enter your login and password!</p>
        <div className="form-group">
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <a href="#" className="forgot-password">Forgot password?</a>
        <button onClick={handleLogin} className="login-button">LOGIN</button>
        <div className="social-login">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google"></i></a>
        </div>
        <p className="signup-link">
          Don't have an account? <Link to={"/signup"}>SignUp</Link>
        </p>
      </form>
    </div>
    <ToastContainer />
    </div>
  );
};

export default Login;
