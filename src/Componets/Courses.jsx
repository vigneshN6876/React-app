import React from 'react'
import html from '../assets/images.png'
import PropTypes from 'prop-types'

const Courses = ({
  images = html,
  name = "Default Course",
  price = 0,
  rating = 0,
  show = false
}) => {
    
  if(show){
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
}

Courses.propTypes = {
name: PropTypes.string,
rating: PropTypes.number,
show : PropTypes.bool
}


export default Courses