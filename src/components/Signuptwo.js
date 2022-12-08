import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const Signuptwo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState(location.state.email);
  const [phonenumber, setPhoneNumber] = useState(location.state.phonenumber);

  const [firstname, setFirstName] = useState(location.state.firstname);
  const [lastname, setLastName] = useState(location.state.lastname);

  console.log(email, firstname, lastname, phonenumber);

  const [password, setPassword] = useState("");

  const getData = async () => {
    //let item = { firstname, lastname, email, phonenumber };
    try {
      let res = await axios.post(
        "https://test.nexisltd.com/signup",
        {
          first_name: firstname,
          last_Name: lastname,
          phone_number: phonenumber,
          email: email,
          password: password,
        },
        { headers: { "Content-type": "application/json" } }
      );
      check();
      console.log(res);
    } catch (err) {
      alert(err); // TypeError: failed to fetch
    }
  };

  const check = () => {
    if (password.length > 8) {
      console.log("object");
      navigate("/table");
    }
  };

  return (
    <div>
      <img className="logo1" src="/images/logo.png" alt="helo" />
      <img className="photo" src="/images/photo.png" alt="helo" />
      <div className="form">
        <h1 className="heading">Signup form</h1>
        <input
          type="password"
          placeholder="please write a name"
          className="firstinput"
          vallue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <label className="textlabel">Your password Must be 8 charater</label>
        </div>
        <div>
          <button onClick={() => navigate(-1)}>Back</button>
          <button className="button" onClick={() => getData()}>
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signuptwo;
