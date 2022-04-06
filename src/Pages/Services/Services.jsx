import React from 'react';
import { Hero, SeoSection, SeoServices, StatSection, FactSlider, ExperienceSec, Testimonial, Certification, SeoServiceSilder, SubmitGoogle } from './Components/Components';

const Services = () => {
  return (
    <>
      <Hero />
      <main>
        <section>
          <SeoSection />
        </section>
        <section>
          <SeoServices />
        </section>
        <section>
          <StatSection />
        </section>
        <section>
          <FactSlider />
        </section>
        <section>
          <ExperienceSec />
        </section>
        <section>
          <Testimonial />
        </section>
        <section>
          <Certification />
        </section>
        <section>
          <SeoServiceSilder />
        </section>
        <section>
          <SubmitGoogle />
        </section>
      </main>
    </>
  )
}

export default Services