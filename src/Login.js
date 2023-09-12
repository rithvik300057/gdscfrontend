import React from 'react';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import ReactDOM from 'react-dom';
// import Google from './google';
const Login = () => {
  return(
  <div>
    <GoogleOAuthProvider clientId="229751792230-mr0fpshb80j21jfucj0dui2c7hmmridl.apps.googleusercontent.com">
    <GoogleLogin
  onSuccess={(credentialResponse) => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
 />
</GoogleOAuthProvider>

  </div>
)
   
};
export default Login;










