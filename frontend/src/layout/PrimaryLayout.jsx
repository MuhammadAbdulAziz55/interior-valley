import { Outlet } from "react-router-dom"

import Footer from "../components/footer/Footer"
import Header from "../components/header_section/Header"


const PrimaryLayout = () => {
  return (
    <div>
       <Header />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default PrimaryLayout
