import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Signup1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const [firstname, setFirstName] = useState(location.state.firstname);
  const [lastname, setLastName] = useState(location.state.lastname);

  const next = () => {
    if (email && phonenumber) {
      console.log("object");
      navigate("/signuptwo", {
        state: { firstname, lastname, email, phonenumber },
      });
    }
  };

  return (
    <div className="direction">
      <img className="logo1" src="/images/logo.png" alt="helo" />
      <img className="photo" src="/images/photo.png" alt="helo" />

      <div className="form">
        <h1 className="heading">Signup form</h1>

        <div>
        <label className="label">+880</label>
          <input
            type="text"
            placeholder="1XXXXXXXXXX"
            className="phoneinput"
            vallue={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Write Email Address"
            className="phonesecondinput"
            vallue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <button onClick={()=>navigate(-1)}>Back</button>
          <button className="button"  onClick={next}>
            next step <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup1;
