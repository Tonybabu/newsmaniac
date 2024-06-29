
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; 
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
        email,
        username,
        password
      };
  
      try {
        const response = await fetch('http://localhost:4000/signup', {
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
        if(result.message==="Register successful"){
            sessionStorage.setItem("email",email)
            toast.success("Register successful !", {
                position: "top-right"
              });
              setTimeout(()=>{
                navigate('/')
              },2000)
        }
        else if(result.message==="User already exists"){
            toast.warn("User already exists !", {
                position: "top-right"
            });
        }
      } catch (error) {
        console.error('Error:', error);
      }
    // console.log('Email:', email);
    // console.log('Password:', password);
  };

  return (
    <div className='body'>
    <div className="login-container sign">
      <form className="login-form">
        <h2>REGISTER</h2>
        <p>Please register your username and email ! </p>
        <div className="form-group">
          <input
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <button  className="login-button" onClick={handleLogin}>SIGNUP</button>
        <div className="social-login">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google"></i></a>
        </div>
        <p className="signup-link">
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
    <ToastContainer />
    </div>
  );
};

export default SignUp;
