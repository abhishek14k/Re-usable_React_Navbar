import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Consulting from "./components/pages/Consulting";
import Marketing from "./components/pages/Marketing";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/consulting" element={<Consulting />}></Route>
          <Route path="/marketing" element={<Marketing />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
