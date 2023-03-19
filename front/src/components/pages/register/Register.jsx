import React from "react";
import s from "./Register.module.css";

const Register = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.form}>
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
        />

        <label className="form-label">Password</label>
        <input type="pssword" className="form-control" placeholder="********" />

        <button type="button" className="mt-2 center">
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
