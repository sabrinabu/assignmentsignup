import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai";

const Signup = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

 
    //console.log(res.data);

  //getData();

  const next = () => {
    if (firstname && lastname) {
      console.log("object");
      navigate("/signup1", { state: { firstname, lastname } });
    }
  };

  return (
    <div className="direction">
      <img className="logo1" src="/images/logo.png" alt="helo" />
      <img className="photo" src="/images/photo.png" alt="helo" />

      <div className="form">
        <h1 className="heading">Signup form</h1>

        <div>
          <input
            type="text"
            placeholder="First name"
            className="firstinput"
            vallue={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Last name"
            className="secondinput"
            vallue={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <button className="button" onClick={next}>
            Next <AiOutlineArrowRight/>
          </button>
        </div>

        <div className="lasttext">
          Already have an acount?
          <Link to="/login">Login Here </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
