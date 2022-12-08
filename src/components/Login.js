import axios from "axios";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { data } from "./Context";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const { getData, email, setEmail, password, setPassword, status } =
    useContext(data);

  console.log(useContext(data));

  const next = () => {
    getData();

    console.log("print");

    navigate("/table");
  };

  return (
    <div className="direction">
      <img className="logo1" src="/images/logo.png" alt="helo" />
      <img className="photo" src="/images/photo.png" alt="helo" />

      <div className="form">
        <h1 className="heading">Login</h1>

        <input
          type="email"
          placeholder="Write Email Address"
          className="firstinput"
          vallue={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Write Password"
          className="secondinput"
          vallue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <label className="textlabel">Your password Must be 8 charater</label>
        </div>
        <div>
          <button className="button" onClick={next}>
            Login Here
          </button>
        </div>

        <div className="lasttext">
          Already have an acount?
          <Link to="/signup">Signup here </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
