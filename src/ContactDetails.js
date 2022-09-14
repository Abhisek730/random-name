import React from 'react'
import bird from "./images/bird.png";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function ContactDetails(props) {
  const location = useLocation()
  const { contact } = location.state
  return (
      <>
      <div className="container text-center">
        <div className="card my-3 text-center mx-auto" style={{width: "18rem"}}>
  <img src={bird} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{contact.name}</h5>
    <p className="card-text">{contact.email}</p>
    <a href="#" className="btn btn-primary">Know more</a>
  </div>
</div>
 
 <div className="text-center">
   <Link to="/">
   <button className='btn btn-danger'>Back to contact List</button>
   </Link>
 </div>
 </div>
    </>
  )
}
