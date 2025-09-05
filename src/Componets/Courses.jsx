import React from 'react'
import html from '../assets/images.png'
const Courses = (props) => {
    
  return (
    <>
        <div className="card">
            <img src={props.images} alt="" />
            <h3>{props.name}</h3>
            <h3>${props.price}</h3>
            <span>Rating {props.rating}</span>
        </div>
    </>
  )
}

export default Courses