import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCatalogue = () => {
  return (
    <section className="product-catalogue">
    <h2>Product Catalogue</h2>
    <div className="search-bar">
        <input type="text" id="search-input" placeholder="Search products"/>
        <button type="button" onclick="searchProducts()">Search</button>
    </div>
    <div className="categories">
        <button className="category" onclick="filterProducts('all')">All</button>
        <button className="category" onclick="filterProducts('electronics')">Electronics</button>
        <button className="category" onclick="filterProducts('clothing')">Clothing</button>
        <button className="category" onclick="filterProducts('furniture')">Furniture</button>
        <button className="category" onclick="filterProducts('grocery')">Grocery</button>
    </div>
    <div className="product-list">
        <div className="product" data-category="electronics">
            <NavLink to="/mobiles" ><img
                    src="https://images.unsplash.com/photo-1558885544-2defc62e2e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60g"
                    alt="Product 1"/></NavLink>
            <h3>Mobiles</h3>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star "></i></li>
            </ul>
        </div>
        <div className="product" data-category="clothing">
            <NavLink to="/shoes"><img
                    src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60 "
                    alt=" Product 2"/></NavLink>
            <h3>Shoes</h3>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star "></i></li>
                <li><i className="fa fa-star "></i></li>
            </ul>
        </div>
        <div className="product" data-category="furniture">
            <NavLink to="/furniture"><img
                    src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-1866149.jpg&fm=jpg"
                    alt="Product 3"/></NavLink>
            <h3>Furniture</h3>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star "></i></li>
            </ul>
        </div>
        <div className="product" data-category="grocery">
            <NavLink to="/grocery"><img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    alt="Product 4"/></NavLink>
            <h3>Grocery</h3>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
            </ul>
        </div>
    </div>
</section>
  )
}

export default ProductCatalogue
