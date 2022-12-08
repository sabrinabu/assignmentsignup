import axios from "axios";
import { useLocation } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import "./table.css";
import { data } from "./Context";

const Table = () => {
  const { token } = useContext(data);
  console.log("from table" + token);
  const getData = async () => {
    try {
      let res = await axios.get("/test", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${token}`,
        },
      });
      console.log("table res" + res);
    } catch (err) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <img className="logo" src="/images/logo.png" alt="helo" />
      <div className="text">Attendence Information</div>
 
    </div>
  );
};

export default Table;
