import React, { useState } from 'react';
import toast from "react-hot-toast"
import axios from "axios";
import {useNavigate} from "react-router-dom"


const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const[password,setPassword]=useState("");
  const [bdate, setBdate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPnumber] = useState("");
  const [address, setAddress] = useState("");
  const [qualification, setQualification] = useState("");
  const navigate=useNavigate();
 

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/", {
        fname,
        lname,
        email,
        gender,
        password,
        phone,
        address,
        bdate,
        qualification,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }

  };

  return (

    <div className="container">
      <div className="register">
        <h1>E-Commerce Registration Form</h1>

        <form id="register" onSubmit={handleSubmit} >
          <label htmlFor="fname">First Name : </label>
          <br />
          <input type="text" name="name" placeholder="Enter your first name" value={fname} onChange={(e) => setFname(e.target.value)} required /><br />
          <br />
          <label htmlFor="lname">Last Name :</label>
          <br /><input type="text" name="name" placeholder="Enter your last name" value={lname} onChange={(e) => setLname(e.target.value)} required /><br />
          <br />
          <label htmlFor="password">Password : </label>
          <br />
          <input type="password" name="name" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
          <br />
          <label htmlFor="date">Birth Date :</label>
          <br /><input type="date" name="myDate" value={bdate} onChange={(e) => setBdate(e.target.value)} required /><br />
          <br />
          <label htmlFor="gender" value={gender}>Gender : </label><br />
          &nbsp;&nbsp;&nbsp;
          <input type="radio" name="myGender" className="male" value="male" onChange={(e) => setGender(e.target.value)} />Male
          &nbsp;&nbsp;&nbsp;
          <input type="radio" name="myGender" className="female" value="female" onChange={(e) => setGender(e.target.value)} />Female
          &nbsp;&nbsp;&nbsp;
          <input type="radio" name="myGender" className="other" value="other" onChange={(e) => setGender(e.target.value)} />Other<br />
          <br />
          <label htmlFor="email">Email :</label>
          <br /><input type="email" name="myEmail" placeholder="Enter your valid Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
          <br />
          <label htmlFor="number">Phone Number : </label>
          <br /> <input type="text" name="myNumber" placeholder="Enter a valid phone number" value={phone} onChange={(e) => setPnumber(e.target.value)} required /><br />
          <br />
          <label htmlFor="address">Address :</label>
          <br /><input type="text" name="myAddress" placeholder="Enter a valid address" value={address} onChange={(e) => setAddress(e.target.value)} required /><br />
          <br />
          <label htmlFor="qualification">Qualification : </label>
          <br /><textarea name="myText" cols="30" row="10" value={qualification} onChange={(e) => setQualification(e.target.value)} required></textarea><br />
          <br />
          <input id="submit" type="submit" value="REGISTER" />
        </form>

      </div>
    </div>
  )
}

export default Form;
