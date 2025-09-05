import './App.css'
import Navbar from './Componets/Navbar'
import Footer from './Componets/Footer'
import Courses from './Componets/Courses'
import html from './assets/images.png'
import css from '../src/assets/css.png'
import js from '../src/assets/js.jpeg'
function App() {

  return (
    <>
      <Courses name = "HTML" price = {199} images = {html} rating = {5} />
      <Courses name = "Css" price = {199} images = {css} rating = {5} />
      <Courses name = "javaScript" price = {199} images = {js} rating = {5} />
    </>
  )
}

export default App
