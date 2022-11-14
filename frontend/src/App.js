import "./css/App.css";
import "./index.css";
import { Login, Register } from "./pages/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "../src/components/leaout/Layout";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/test" element={<Home />}/>
          <Route path="/register" element={<Register />}/>
        </Routes> 
      </Router>
    </>
  );
};
export default App;
