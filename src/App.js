import React from 'react'
import { Header, Hero, Services, CTASection, 
  CaseStudies, WorkProcess, Team, Testimonials, ContactUs, Footer } from './sections';

import { steps, testimonials } from './constants';

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <CTASection/>
      <CaseStudies/>
      <WorkProcess steps={steps}/>
      <Team/>
      <Testimonials testimonials={testimonials}/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
