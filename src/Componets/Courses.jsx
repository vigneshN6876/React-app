import React from 'react'
import html from '../assets/images.png'
import PropTypes from 'prop-types'
import { useState } from 'react'

const Courses = ({
  images = html,
  name = "Default Course",
  price = 0,
  rating = 0,
  id,
  deletecourse 
}) => {
    const [purchased , setPurchased] = useState(false)
   
    const BuyCourse = () => {
        alert(`You have enrolled in ${name} course`)
        console.log("You have enrolled in " + name + " course" + "Price is" + price);
        setPurchased(true)

    }
    return (
    <>
      
       {name &&( <div className="card">
            <img src={images} alt="" />
            <h3>{name}</h3>
            <h3>${price}</h3>
            <span>Rating {rating}</span> <br />
            <button onClick={BuyCourse}>Enroll Now</button>
            <p>{purchased ? "Already purchased" : "Enroll Now"}</p>
            <button onClick={() => deletecourse(id)}>Delete</button>
        </div>)}
    </>
  )
  
}

Courses.propTypes = {
name: PropTypes.string,
rating: PropTypes.number,
show : PropTypes.bool
}


export default Courses