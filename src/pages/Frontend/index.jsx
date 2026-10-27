import Header from "../../components/Header"

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import PageNotFound from "../../components/PageNotFound"

import Footer from "../../components/Footer"
import { Route, Routes } from "react-router-dom"
import Dashboard from "../Dashboard"

const Frontend = () => {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default Frontend