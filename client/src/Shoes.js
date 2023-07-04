import React ,{useState}from 'react'
import Nav from './components/Nav'

export default function Shoes() {
    const changeImg=()=>{
        let Mainimg = document.getElementById("MainImg");
        let smallimg = document.getElementsByClassName("small-img");

        smallimg[0].onclick = function () {
            Mainimg.src = smallimg[0].src;
        }

        smallimg[1].onclick = function () {
            Mainimg.src = smallimg[1].src;
        }

        smallimg[2].onclick = function () {
            Mainimg.src = smallimg[2].src;
        }

        smallimg[3].onclick = function () {
            Mainimg.src = smallimg[3].src;
        }
    }

    const[active,setActive]=useState(true);
    const changeColor=()=>{
        setActive(!active);
    }
  return (
    <>
    <Nav/>
    <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
            <img src="../images/5.jpg" onClick={changeImg} alt="loading" width="100%" id="MainImg" height="400"/>

            <div className="small-img-group">
                <div className="small-img-col">
                    <img src="../images/5.jpg" onClick={changeImg} alt="loading" width="100%" className="small-img" height="150"/>
                </div>
                <div className="small-img-col">
                    <img src="../images/6.jpg" onClick={changeImg} alt="loading" width="100%" className="small-img" height="150"/>
                </div>
                <div className="small-img-col">
                    <img src="../images/7.jpg" onClick={changeImg} alt="loading" width="100%" className="small-img" height="150"/>
                </div>
                <div className="small-img-col">
                    <img src="../images/8.jpg" onClick={changeImg} alt="loading" width="100%" className="small-img" height="150"/>
                </div>
            </div>
        </div>

        <div className="single-pro-details">
            <h6>Categories / Shoes</h6>
            <h4>Sneakers</h4>
            <h2>Rs 16,000</h2>
            <button className="normal" onClick={changeColor} style={{backgroundColor:active?"rgba(250, 100, 0, 0.8)":"green"}}>Add To Cart</button>
            <h4>Description:</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio et sunt repellat
                explicabo, dolore nulla. Delectus quod numquam at explicabo, omnis libero, voluptatibus esse
                exercitationem odit dolorem temporibus a repudiandae quidem? Doloremque aspernatur nobis laborum
                possimus amet culpa eaque quod illo explicabo eius ipsum sed ipsam ex mollitia adipisci earum dicta,
                eveniet ullam repellendus! Eveniet fugiat quibusdam perspiciatis, fugit modi esse delectus quia
                labore, exercitationem porro, debitis maxime expedita?</span>
            <h4>Review</h4>
            <ul>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star checked"></i></li>
                <li><i className="fa fa-star "></i></li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sequi dolore qui quia commodi
                iusto eligendi quisquam quaerat totam sed?</p>
        </div>
    </section>
    </>
  )
}
