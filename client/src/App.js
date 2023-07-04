import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './style.css';
import './product.css';
import Home from './Home';
import Categories from "./Categories";
import About from './About';
import Contact from './Contact';
import OrderHistory from './OrderHistory';
import Mobiles from "./Mobiles";
import Shoes from "./Shoes";
import Furniture from "./Furniture";
import Grocery from "./Grocery";
import Login from "./components/Login"


function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/mobiles" element={<Mobiles />}></Route>
          <Route path="/shoes" element={<Shoes />}></Route>
          <Route path="/furniture" element={<Furniture />}></Route>
          <Route path="/grocery" element={<Grocery />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/orderhistory" element={<OrderHistory />}></Route>

        </Routes>
      </Router>
      
    </>
  );
}

export default App;