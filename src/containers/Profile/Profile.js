import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

export default Register;
