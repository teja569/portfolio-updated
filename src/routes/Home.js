import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
import Skills from '../components/skills'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <Skills/>
      <Footer/>
    </div>
  )
}

export default Home