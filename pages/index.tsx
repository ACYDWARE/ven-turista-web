import React, { useState } from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import MobileNav from "@/components/Navbar/MobileNav";

const index = () => {

  const [nav,setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div>
      <Navbar openNav={openNav}/>
      <MobileNav nav={nav} closeNav={closeNav} />
      <div className="bg-yellow-100 h-screen">
      </div>
      <div className="bg-yellow-200 h-96">
      </div>
      <Footer/>
    </div>
  )
}

export default index