"use client";
import React, { useState } from "react";
import { navlinks } from "../api/navlinks";
import Link from "next/link";
import MobileNav from "../components/MobileNav";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleButton = () => {
    setOpen(!open);
    console.log("click the nav");
  };
  return (
    <div className="bg-[#2D3250] py-3">
      <div className="container px-4 mx-auto reletive">
        <nav className="  text-white flex items-center justify-between  ">
          {/* logo  */}
          <div className="text-2xl font-bold uppercase">
            <h3>Logo</h3>
          </div>
          {/* nav link  */}
          <ul className="hidden lg:flex gap-6">
            {navlinks.map((nav, index) => (
              <li key={nav.id}>
                <Link
                  className="hover:text-orange-200 text-lg uppercase"
                  href={nav.url}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* mobile nav  */}

          <div className="lg:hidden  md:flex flex-col justify-end">
            <button className="text-2xl" onClick={toggleButton}>
              {open ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
            {/* <MobileNav /> */}
          </div>
        </nav>
        {open && (
          <div
            className="fixed  right-0 z-20 bg-[#2D3250]  w-full p-12 
          flex flex-col justify-center items-center lg:hidden"
          >
            <ul>
              {navlinks.map((nav, index) => (
                <li key={nav.id} className="py-4 text-white">
                  <Link
                    className="hover:text-orange-200 text-lg uppercase"
                    href={nav.url}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
