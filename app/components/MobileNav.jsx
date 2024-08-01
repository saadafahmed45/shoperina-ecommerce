import React from "react";
import { navlinks } from "../api/navlinks";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div>
      <nav>
        <ul>
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
      </nav>
    </div>
  );
};

export default MobileNav;
