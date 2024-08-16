"use client";
import React, { useState } from "react";
import { navlinks } from "../api/navlinks";
import Link from "next/link";
import MobileNav from "../components/MobileNav";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleButton = () => {
    setOpen(!open);
    console.log("click the nav");
  };
  return (
    <div className="bg-gray-900 text-white py-4">
      <div className="container px-4 mx-auto reletive">
        <nav className="  text-white flex items-center justify-between  ">
          {/* logo  */}
          <Link href={"/"} className="text-2xl font-bold ">
            <h3>Shoperina</h3>
          </Link>
          {/* nav link  */}
          <ul className="hidden lg:flex gap-6 item-center">
            {navlinks.map((nav, index) => (
              <li key={nav.id}>
                <Link
                  className="hover:text-orange-200 text-md uppercase"
                  href={nav.url}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
            <li>
              <SignedOut>
                <SignInButton>
                  <button className="hover:text-orange-200 text-lg uppercase">
                    {" "}
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
            <li>
              <Link className="hover:text-orange-200 text-xl " href={"/cart"}>
                <AiOutlineShoppingCart />
              </Link>
            </li>
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
              <li>
                <SignedOut>
                  <SignInButton>
                    <button className="hover:text-orange-200 text-lg uppercase">
                      {" "}
                      Sing In
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
