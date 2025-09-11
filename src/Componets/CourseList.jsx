import html from '../assets/images.png'
import css from '../assets/css.png'
import js from '../assets/js.jpeg'
import Courses from './Courses'
import { useState } from 'react'
function CourseList() {
    const [course , setCourse] = useState([
        {
            id : 1 , name : "HTML", price : 199, images : html ,rating : 5 
        },
        {
            id : 2 , name : "css" , price :299 ,images : css, rating : 5
        },
        {
            id : 3 , name : "JavaScript", price :399 ,images : js, rating : 5
        }, 
        {
            id : 4 , name : "Node js", price :499 ,images : js, rating : 5
        }
    ])
    course.sort((a,b) => b.price - a.price)
    const handleDelete = (id) => {
        const newCourse = course.filter((c) => c.id != id)
        setCourse(newCourse)
    }
    // const filterCourse = course.filter((c) => c.price <= 399)
    const courseList = course.map((courseItem ) => <Courses key = {courseItem.id} id = {courseItem.id} name = {courseItem.name} price = {courseItem.price} images = {courseItem.images} rating = {courseItem.rating} deletecourse = {handleDelete} />)
    return(
        <>
        {courseList}
        </>
    )
}
export default CourseList