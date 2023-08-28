import React, { useEffect } from "react";

//include props to passes to component for later use
const Signup = (props) => {
  useEffect(() => {
    document.title = "SignUp Notedly";
  });

  return (
    <div>
      <p>Sign up</p>
    </div>
  );
};

export default Signup;
