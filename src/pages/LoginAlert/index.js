import React from "react";
import { Link } from "react-router-dom";
import "./LoginAlert.css";

const LoginAlert = () => {
  return (
    <div>
      <h1>Please Login to Access this Page :)</h1>
      <Link to="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default LoginAlert;
