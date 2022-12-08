import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const data = createContext();

const Context = ({ children }) => {
  //const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [status, setStatus] = useState(false);
  const getData = async () => {
    try {
      let res = await axios.post(
        "/login",
        {
          email: email,
          password: password,
        },
        { headers: { "Content-type": "application/json" } }
      );

    
      console.log(status);
      console.log(res.data["access_token"]); // I got the token
       // I don't get the token  at useState hook
       setStatus(true);
       setToken(res.data["access_token"]);
    } catch (err) {}
  };
  console.log(status);
  console.log("Token:" + token); 
  return (
    <data.Provider
      value={{ getData, email, setEmail, password, setPassword, status, token }}
    >
      {children}
    </data.Provider>
  );
};

export default Context;
