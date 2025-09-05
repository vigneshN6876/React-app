import React from 'react'
import html from '../assets/images.png'
const Courses = ({images = html , name , price , rating}) => {
    
  return (
    <>
        <div className="card">
            <img src={images} alt="" />
            <h3>{name}</h3>
            <h3>${price}</h3>
            <span>Rating {rating}</span>
        </div>
    </>
  )
}



export default Courses