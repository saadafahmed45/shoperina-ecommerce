"use client";
import { navlinks } from "../api/navlinks";
import Link from "next/link";
import MobileNav from "../components/MobileNav";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../Context/Context";

const Navbar = () => {
  const { cartItems } = useContext(MyContext);
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  // Handle scroll visibility for navbar
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // Hide on scroll down
    } else {
      setIsVisible(true); // Show on scroll up
    }
    setLastScrollY(window.scrollY);
  };

  // Handle dropdown visibility
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false); // Close the dropdown if clicked outside
    }
  };

  // Event listeners for scroll and outside click
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  // Toggle mobile navigation
  const toggleButton = () => {
    setOpen(!open);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-950">
          Shoperina
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-6 items-center">
          {navlinks.map((nav) => (
            <Link
              key={nav.id}
              href={nav.url}
              className={`uppercase font-semibold text-md ${
                pathname === nav.url ? "text-yellow-400" : "text-gray-950"
              } hover:text-yellow-300`}
            >
              {nav.name}
            </Link>
          ))}
          {/* Cart Link */}
          <Link
            href="/cart"
            className={`flex items-center gap-2 text-xl ${
              pathname === "/cart" ? "text-yellow-400" : "text-gray-950"
            }`}
          >
            <AiOutlineShoppingCart /> ({cartItems.length})
          </Link>

          {/* Login Button */}
          <Link
            href="/login"
            className="text-md font-semibold uppercase bg-yellow-400 text-slate-700 px-3 py-2 rounded-lg hover:bg-yellow-500"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleButton} className="text-2xl text-gray-950">
            {open ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {open && (
        <div
          ref={dropdownRef}
          className="lg:hidden fixed top-16 right-0 left-0 bg-white text-center z-20 py-8"
        >
          <nav className="flex flex-col space-y-6 text-gray-950">
            {navlinks.map((nav) => (
              <Link
                key={nav.id}
                href={nav.url}
                className={`uppercase text-md ${
                  pathname === nav.url ? "text-yellow-400" : "text-gray-950"
                } hover:text-yellow-300`}
              >
                {nav.name}
              </Link>
            ))}
            <Link
              href="/cart"
              className={`flex items-center justify-center gap-2 text-xl ${
                pathname === "/cart" ? "text-yellow-600" : "text-gray-950"
              }`}
            >
              <AiOutlineShoppingCart /> ({cartItems.length})
            </Link>

            <Link
              href="/login"
              className="text-md font-semibold uppercase bg-yellow-400 text-slate-700 px-4 py-2 rounded-lg hover:bg-yellow-500"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
