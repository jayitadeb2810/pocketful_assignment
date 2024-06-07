import React, { useState } from "react"
import { Link } from "react-scroll"
import MenuIcon from "@mui/icons-material/Menu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <nav className=" bg-gray-300 bg-opacity-50 px-5 h-[100px] fixed w-full z-10 top-0 flex md:justify-start justify-between items-center">
        <div className=" text-black text-[25px] font-medium mr-[100px]">
          DevJ
        </div>
        <div className="hidden md:flex space-x-4 text-grey text-[20px]">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="   cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="resume"
            smooth={true}
            duration={500}
            className="  cursor-pointer"
          >
            Resume
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="  cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="  cursor-pointer"
          >
            Skills
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className=""
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div
          className={`md:hidden bg-gray-300 bg-opacity-50 w-full z-10 fixed top-[100px]  transition-transform duration-500 transform ${
            isOpen ? "scale-y-100" : "scale-y-0"
          } origin-top`}
          style={{
            animation: `${
              isOpen
                ? "shutter-open"
                : "shutter-close"
            } 0.5s ease-out forwards`,
          }}
        >
          <Link
            onClick={toggleMenu}
            to="projects"
            smooth={true}
            duration={500}
            className="block   py-2 px-4 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            onClick={toggleMenu}
            to="resume"
            smooth={true}
            duration={500}
            className="block   py-2 px-4 cursor-pointer"
          >
            Resume
          </Link>
          <Link
            onClick={toggleMenu}
            to="about"
            smooth={true}
            duration={500}
            className="block   py-2 px-4 cursor-pointer"
          >
            About
          </Link>
          <Link
            onClick={toggleMenu}
            to="skills"
            smooth={true}
            duration={500}
            className="block   py-2 px-4 cursor-pointer"
          >
            Skills
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
