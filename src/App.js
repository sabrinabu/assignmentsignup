import "./App.css";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import Signup from "./components/Signup";
import Table from "./components/Table";
import Signup1 from "./components/Signup1";
import Signuptwo from "./components/Signuptwo";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup1" element={<Signup1 />} />
          <Route path="/signuptwo" element={<Signuptwo />} />
          <Route path="/table" element={<Table />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
