import React from 'react'
import Nav from './components/Nav'

export default function About() {
  return (
    <>
      <Nav />
      <div className="about">
            <div className="grid grid-two-column">
                <div className="hero-section-data">                                
                    <p className="intro-data">WELCOME TO</p>
                    <p className='title'>You&Me Ecommerce</p><br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam neque odit necessitatibus obcaecati amet soluta odio facilis ea! Dolorem itaque reiciendis error. Unde, delectus exercitationem optio similique totam officiis accusantium.
                    </p>
                    <button className='about-btn'>Shop Now</button>
                </div>
                {/* Our Homepage Image */}
                <div className="hero-section-image">
                    <figure>
                        <img src="https://www.technoexponent.com/blog/wp-content/uploads/2019/04/eCommerce-website-Development.jpg" alt="loading" className='img-style'/>
                    </figure>
                </div> 
            </div>                    
        </div>

        <div className="about">
            <div className="grid grid-two-column">
              {/* Our Homepage Image */}
              <div className="hero-section-image">
                    <img src="https://img.freepik.com/premium-photo/tech-devices-icons-connected-digital-planet-earth_117023-449.jpg" alt="loading" className='img-style'/>
                </div> 
                <div className="hero-section-data">                                
                    <p className="intro-data">TECHNOLOGY AT YOU&ME SHOP</p>
                    <p className='title'>Innovation</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam neque odit necessitatibus obcaecati amet soluta odio facilis ea! Dolorem itaque reiciendis error. Unde, delectus exercitationem optio similique totam officiis accusantium.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam neque odit necessitatibus obcaecati amet soluta odio facilis ea! Dolorem itaque reiciendis error. Unde, delectus exercitationem optio similique totam officiis accusantium.
                    </p>
                    <button className='about-btn'>Read More</button>
                </div>
                
            </div>                    
        </div>
    </>
  )
}

