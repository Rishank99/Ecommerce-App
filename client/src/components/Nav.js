import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {

  return (
    <nav className="navbar">
      <div className="header">
        <div className="search">
          <img src="https://as1.ftcdn.net/v2/jpg/02/45/84/16/1000_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg" alt="wait" className="imglogo" />
          <input type="text" name="search" id="search" placeholder="Search for products" size="50" />
        </div>
        <ul>
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/orderhistory">Order History</NavLink>
          </li>
          <li>
            <NavLink to="" id="cart-menu">Cart</NavLink>
          </li>
        </ul>
        <div className="cart">
          <h2 className="cart-title">Your Cart</h2>

          {/* Content */}
          <div className="cart-content">
            <div className="cart-box">
              <img src="img/2.jpg" alt="loading" className="cart-img" />
              <div className="detail-box">
                <div className="cart-product-title">Mobile</div>
                <div className="cart-price">Rs 16,000</div>
              </div>

              {/* Remove  */}
              <button type="button" className="remove">Remove</button>
            </div>
          </div>

          {/* Total */}
          <div className="total">
            <div className="total-title">Total</div>
            <div className="total-price">Rs 0</div>
          </div>
          {/* Buy Button */}
          <button type="button" className="btn-buy">Buy Now</button>
          {/* Cart Close */}
          <button type="button" className="close" >Close</button>
        </div>
      </div>
    </nav>
  )
}



