import { Globe2, UserCircle, Menu, X } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="w-full fixed z-50 top-0 left-0 bg-white border-b-3 border-black shadow-md shadow-blue-500">
      <div className="w-full mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2 border-4 border-black p-1 rounded-md bg-[radial-gradient(circle,_#302f3330_2px,_transparent_2px)] bg-[size:10px_10px]">
          <Globe2 className="w-9 h-9" />
          <h1 className="text-lg font-extrabold">JOMVIA</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
        <a
            className={`font-bold border-r-3 pr-4 ${
              router.pathname === "/"
                ? "underline underline-offset-4 decoration-3"
                : ""
            }`}
            href="/"
          >
            Home
          </a>
          <a
            className={`font-bold border-r-3 pr-4 ${
              router.pathname === "/about"
                ? "underline underline-offset-4 decoration-3"
                : ""
            }`}
            href="/about"
          >
            About Us
          </a>
          <a
            className={`font-bold border-r-3 pr-4 ${
              router.pathname === "/packages"
                ? "underline underline-offset-4 decoration-3"
                : ""
            }`}
            href="/packages"
          >
            Packages
          </a>
          <a
            className={`font-bold border-r-3 pr-4 ${
              router.pathname === "/contact"
                ? "underline underline-offset-4 decoration-3"
                : ""
            }`}
            href="/contact"
          >
            Contact
          </a>
          <div className="flex items-center space-x-2">
            <UserCircle className="w-7 h-7" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white border-t-4 border-black py-4">
           <div className="w-full border-b-4 border-b-black flex items-center justify-center pb-4">
            <a
              className="font-bold"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </div>
          <div className="w-full border-b-4 border-b-black flex items-center justify-center py-2">
            <a
              className="font-bold"
              href="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
          </div>
          <div className="w-full border-b-4 border-b-black flex items-center justify-center py-2">
            <a
              className="font-bold py-2"
              href="/packages"
              onClick={() => setIsMenuOpen(false)}
            >
              Packages
            </a>
          </div>
          <div className="w-full border-b-4 border-b-black flex items-center justify-center py-2">
            <a
              className="font-bold py-2"
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center space-x-2 mt-2">
              <UserCircle className="w-7 h-7" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
