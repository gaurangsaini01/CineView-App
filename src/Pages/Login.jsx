import React from "react";
import Template from './Template'
import loginImage from '../assets/login.png'

function Login({setLoginStatus}) {
  return (
    <Template
      title="Welcome Back , We're Glad to have you"
      desc1="Exciting things to watch awaits !"
      desc2="Login To View Your Favourites !"
      image={loginImage}
      formType="login"
      setLoginStatus={setLoginStatus}
    ></Template>
  );
}

export default Login;
