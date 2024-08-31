"use client";
import { navlinks } from "../api/navlinks";
import Link from "next/link";
import MobileNav from "../components/MobileNav";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Sidebar from "../(dashboards)/components/Sidebar";
import Dashboard from "../(dashboards)/dashboard/page";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleButton = () => {
    setOpen(!open);
    console.log("click the nav");
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // Scroll down
    } else {
      setIsVisible(true); // Scroll up
    }
    setLastScrollY(window.scrollY);
  };

  const handleDropdownToggle = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  const pathName = usePathname();
  const router = useRouter();

  if (pathName.includes("dashboard"))
    return (
      <div className="bg-red-700 w-20 flex justify-between">
        {/* <Sidebar /> */}
        <Dashboard />
      </div>
    );

  return (
    <div
      className={`fixed top-0  py-4 z-50 w-full  bg-gray-900 backdrop-blur-2xl px-1 transition-transform duration-300 md:px-5 lg:px-20 ${
        !isVisible ? "-translate-y-full" : "translate-y-0"
      }`}
    >
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
                  className={`${
                    pathName === nav.url
                      ? " text-md uppercase text-yellow-400"
                      : "text-md uppercase text-white"
                  }`}
                  // className="hover:text-orange-200 text-md uppercase"
                  href={nav.url}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
            {/* <li>
              <Link
                href={"login"}
                className="hover:text-orange-200 text-lg uppercase"
              >
                {" "}
                Sign In
              </Link>
            </li> */}
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
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
