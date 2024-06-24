import React, {
  useEffect,
  useRef,
  useState,
} from "react"
import Typewriter from "./Typewriter"
import { Link } from "react-scroll"
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

  const [initialLoad, setInitialLoad] =
    useState(true)

  console.log("Header", headerHeight)

  const headerRef = useRef(null)

  useEffect(() => {
    setInitialLoad(false)
  }, [])
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
    <div>
      <div className="relative text-black md:h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 "></div>
        <div className=" relative z-10">
          <header
            ref={headerRef}
            className={` fixed  top-0 left-0 right-0   p-4 flex  justify-between items-center z-20 transition-all
        ${
          isScrolled
            ? "bg-white bg-opacity-60"
            : "bg-transparent"
        }
         ${
           isOpen
             ? "bg-white bg-opacity-60"
             : initialLoad
             ? "bg-transparent transition-none"
             : "bg-transparent transition-delay-250"
         }`}
            // style={{ transitionDelay: "1s" }}
          >
            <div className="text-xl font-bold mr-[30px]">
              <span className=" italic">
                {"<"} DevJ {">"}
              </span>
            </div>
            <nav className="hidden absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] lg:flex lg:items-center lg:space-x-4 cursor-pointer">
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
              className={`menu-bar  lg:hidden  p-4 bg-white bg-opacity-60  ${
                isOpen ? "menu-bar-open" : ""
              } `}
              // ${
              //   isScrolled || isOpen
              //     ? "bg-white bg-opacity-60"
              //     : "bg-transparent"
              // }
              // `}
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
          <div
            className=" grid md:grid-cols-2 grid-cols-1 text-[#121235] md:h-screen "
            style={{
              paddingTop: `${headerHeight}px`,
            }}
          >
            <div className=" flex justify-center items-center">
              <div
                className=" md:h-[35vmax] md:w-[35vmax]  h-[75vw] w-[75vw] rounded-[50%] bg-cover bg-center my-[10vh]"
                style={{
                  backgroundImage:
                    "url(https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg)",
                }}
              ></div>
            </div>
            <div className=" flex md:justify-start items-center justify-center mb-[30px] ">
              <div className=" flex flex-col items-center space-y-[15px] md:items-start md:w-[80%] sm:w-[60%] w-[80%]">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
