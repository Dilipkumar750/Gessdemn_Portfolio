import React from 'react'
import Hero from './Hero'
import Portfolio from './Projects'
import Pricing from './Pricing'
import About from './About'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Services/>
      <Portfolio/>
      <Pricing/>
      <Contact/>
    </div>
  )
}

export default Home
