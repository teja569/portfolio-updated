import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="Contact Me" text="Let's have a chat"/>
      <Form/>
      <Footer/>
      </div>
  )
}

export default Contact