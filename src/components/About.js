import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Namaste series</h2>
      <User/>
      <UserClass name={"vaibhav"} location={"indrapuram"}/>
    </div>
  );
};

export default About;
