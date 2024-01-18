import React from 'react'
import work from "./work.css"
import Works from './Works.jsx'
const Work = () => {
  return (
    <section className='work section' id='portfolio'>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>

 
      <Works/>
    </section>
  )
}

export default Work