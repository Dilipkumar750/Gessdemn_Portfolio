import React from 'react'
import Hero from './Hero'
import Portfolio from './Projects'
import Pricing from './Pricing'
import About from './About'
import Services from './Services'

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Services/>
      <Portfolio/>
      <Pricing/>
    </div>
  )
}

export default Home
