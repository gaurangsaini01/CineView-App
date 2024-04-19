import React from "react";
import Template from "./Template";
import signupImage from "../assets/signup.png";

function Signup({setLoginStatus}) {
  return (
    <Template
      title="Join the million users exploring trending movies and tvseries for free"
      desc1="Make an ID quick and easy !"
      desc2="Sign up , exciting things await ! !"
      image={signupImage}
      formType="signup"
      setLoginStatus={setLoginStatus}
    ></Template>
  );
}

export default Signup;
