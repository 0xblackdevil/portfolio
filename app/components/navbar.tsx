import Image from "next/image";
import { navItems } from "../utils/nav.utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-3 py-1 lg:p-0 rounded-full bg-white lg:bg-transparent">
      <div className="flex lg:gap-3 items-center">
        <div className="w-5 h-5 lg:w-9 lg:h-9 bg-black rounded-full"></div>
        <p className="lg:block hidden ">0x.meet</p>
      </div>

      <nav className="flex gap-5 lg:gap-2 text-sm lg:text-lg font-light items-center backdrop-blur-md bg-white/50 px-2 py-1 rounded-full">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="py-1 px-2 lg:px-6 lg:py-1 hover:bg-black hover:text-white hover:rounded-full duration-500"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
