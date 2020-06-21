import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
