import Image from "next/image";
import { navItems } from "../utils/nav.utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-3 items-center">
        <div className="w-9 h-9 bg-black rounded-full"></div>
        <p>0x.meet</p>
      </div>

      <nav className="flex gap-2 text-lg font-light items-center backdrop-blur-md bg-white/50 px-2 py-1 rounded-full">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="px-6 py-1 hover:bg-black hover:text-white hover:rounded-full duration-500"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
