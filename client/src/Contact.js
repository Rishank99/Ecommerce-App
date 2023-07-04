import React from 'react'
import Nav from './components/Nav'


export default function Contact() {

  return (
    <>
      <Nav />
      <h2 className="common-heading">Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4590445890167!2d76.7986811755055!3d30.705492974597338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fece98c02452b%3A0xf3c99c507c9226eb!2sElante%20Mall%2C%20178-178A%2C%20Purv%20Marg%2C%20Industrial%20Area%20Phase%20I%2C%20Chandigarh%2C%20160002!5e0!3m2!1sen!2sin!4v1687719971218!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="register">
          <form id="register" >
            <input type="text" name="name" placeholder="FIRST NAME" /><br />
            <br /><input type="text" name="name" placeholder="EMAIL" /><br />
            <br /><textarea name="myText" cols="30" row="30" placeholder='ENTER YOUR MESSAGE'></textarea><br />
            <br />
            <input id="submit" type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </>
  )
}

