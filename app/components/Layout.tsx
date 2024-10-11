import { useState } from "react";
import MobileNav from "./navbar_fix/MobileNav";
import Navbar from "./navbar_fix/Navbar";
import Footer from "./footer/Footer";

export default function Layout({ children }: any) {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return <>
    <Navbar openNav={openNav} />
    <MobileNav nav={nav} closeNav={closeNav} />
    {children}
    <Footer />
  </>
}