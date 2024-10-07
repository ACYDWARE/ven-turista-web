import React, { useState } from 'react'
import Navbar from "@/app/components/Navbar/Navbar";
import MobileNav from "@/app/components/Navbar/MobileNav";
import Footer from "@/app/components/footer/Footer";

const Index = () => {

  const [nav,setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return <>
    <Navbar openNav={openNav}/>
    <MobileNav nav={nav} closeNav={closeNav} />
    <div className="bg-primary bg-opacity-30 h-screen">
    </div>
    <div className="bg-secondary bg-opacity-30 h-screen">
    </div>
    <Footer/>
  </>
}

export default Index
