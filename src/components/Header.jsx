import React, {
  useEffect,
  useRef,
  useState,
} from "react"
import Typewriter from "./Typewriter"
import { Link, Element } from "react-scroll"
import MenuIcon from "@mui/icons-material/Menu"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [headerHeight, setHeaderHeight] =
    useState(0)

  const [isScrolled, setIsScrolled] =
    useState(false)

  const headerRef = useRef(null)

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(
        headerRef.current.offsetHeight
      )
    }
    window.addEventListener(
      "scroll",
      handleScroll
    )
    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      )
    }
  }, [headerRef])

  const handleScroll = () => {
    if (
      window.scrollY >
      window.innerHeight * 0.1
    ) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className="relative h-[100vh]  bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717977600&semt=sph')",
      }}
    >
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0   p-4 flex lg:justify-start justify-between items-center z-40
        ${
          isScrolled
            ? "bg-white bg-opacity-60"
            : "bg-transparent"
        }`}
      >
        <div className="text-xl font-bold mr-[30px]">
          <span className=" italic">
            {"<"} DevJ {">"}
          </span>
        </div>
        <nav className="hidden lg:flex lg:items-center lg:space-x-4 cursor-pointer">
          <Link
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>{" "}
          <Link
            to="education"
            smooth={true}
            duration={500}
          >
            Education
          </Link>{" "}
          <Link
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>{" "}
        </nav>
        <button
          className="p-2 hover:bg-black hover:bg-opacity-20 rounded-md focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </button>
      </header>
      <div
        className="menu-bar-wrapper  fixed left-0 right-0 z-40"
        style={{ top: `${headerHeight}px` }}
      >
        <div
          className={`menu-bar  lg:hidden  p-4  ${
            isOpen ? "menu-bar-open" : ""
          } 
          ${
            isScrolled
              ? "bg-white bg-opacity-60"
              : "bg-transparent"
          }`}
        >
          <ul className="flex flex-col items-start mt-4 space-y-4 cursor-pointer ">
            <li>
              <Link
                onClick={toggleMenu}
                to="projects"
                smooth={true}
                duration={500}
              >
                Projects
              </Link>{" "}
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="education"
                smooth={true}
                duration={500}
              >
                Education
              </Link>{" "}
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Link>{" "}
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#121235] text-center space-y-4">
        <h1 className=" lg:text-8xl font-light text-6xl">
          Jayita Deb
        </h1>
        <Typewriter
          text={
            "Building dynamic web solutions with passion and fresh perspectives"
          }
        />
        <div className="flex space-x-4 cursor-pointer ">
          <GitHubIcon />
          <LinkedInIcon />
          <EmailIcon />
        </div>
      </div>
    </div>
  )
}

export default Header
