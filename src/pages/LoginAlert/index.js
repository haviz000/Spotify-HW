import React from "react";
import { Link } from "react-router-dom";
import "./LoginAlert.css";

const LoginAlert = () => {
  return (
    <div>
      <h1>Please Login to Access this Page :)</h1>
      <Link to="/">
        <p>Back to Home</p>
      </Link>
    </div>
  );
};

export default LoginAlert;
