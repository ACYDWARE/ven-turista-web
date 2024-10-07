import { Html, Head, Main, NextScript } from "next/document";
import React, { useState } from 'react'
import Navbar from "@/app/components/Navbar/Navbar";
import MobileNav from "@/app/components/Navbar/MobileNav";
import Footer from "@/app/components/footer/Footer";

export default function Document() {

  const [nav,setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <Html lang="en">
      <Head />
      <body className="font-inter dark:bg-gray-900 dark:text-gray-100">
        <Navbar openNav={openNav}/>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
