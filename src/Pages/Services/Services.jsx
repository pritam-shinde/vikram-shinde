import React from 'react';
import { Hero, SeoSection, SeoServices, StatSection, FactSlider, ExperienceSec, Testimonial, Certification, SeoServiceSilder, SubmitGoogle } from './Components/Components';
import Helmet from 'react-helmet'

const Services = () => {
  return (
    <>
    <Helmet>
        <title>Vikram Shinde | SEO Freelancer India | Technical SEO Analysis</title>
        <meta name="description" content="I&#039;m a full-stack digital strategist for a fast-growing tech company. I plan, build, execute and measure digital campaigns for companies across" />
        <link rel="canonical" href="https://www.vikramshinde.com/services/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Vikram Shinde | SEO Freelancer India | Technical SEO Analysis" />
        <meta property="og:description" content="I&#039;m a full-stack digital strategist for a fast-growing tech company. I plan, build, execute and measure digital campaigns for companies across" />
        <meta property="og:url" content="https://www.vikramshinde.com/services/" />
        <meta property="article:modified_time" content="2022-04-02T06:59:32+00:00" />
        <meta property="og:image" content="https://www.vikramshinde.com/wp-content/uploads/2021/07/Screenshot-131-768x484.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="12 minutes" />
      </Helmet>
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