import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form({ isRegistered }) {
  return (
    <form className="form">
      <Input type={"text"} placeholder={"Username"} />
      <Input type={"password"} placeholder={"Password"} />
      {isRegistered ? null : (
        <Input type={"password"} placeholder={"Confirm Password"} />
      )}
      <Button name={isRegistered ? "Login" : "Register"} />
    </form>
  );
}

export default Form;
