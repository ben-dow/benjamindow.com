import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div>
      <div className="bg-slate-800 w-full h-16 flex xl:justify-evenly justify-between items-center p-5">
        <div className="text-cyan-50 flex flex-col">
          <div className="text-white sm:space-x-4 text-lg">
            <div className="inline-flex font-sans font-medium">
              Benjamin Dow
            </div>
            <div className="hidden w-0.5 h-2 sm:inline-flex bg-stone-300" />

            <div className="hidden font-mono text-white space-x-4 sm:inline-flex ">
              <div>
                <a href="https://github.com/ben-dow">
                  <FontAwesomeIcon icon={faGithub} />
                </a>{" "}
              </div>
              <div>
                <a href="https://www.linkedin.com/in/benjamin-dow/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="hidden md:inline-flex font-sans font-medium text-white text-xs">
            Software Engineer, Theatre Technician, Adventurer
          </div>
        </div>
        <div className="hidden sm:inline-flex font-sans  text-md font-semibold">
          <div>
            <Navlinkcustom label="Home" to="/" />
          </div>
          <div>
            <Navlinkcustom label="About Me" to="/about" />
          </div>
          <div>
            <Navlinkcustom label="Resume" to="/resume" />
          </div>
          <div>
            <Navlinkcustom label="Projects" to="/projects" />
          </div>
        </div>

        <div className="inline-flex sm:hidden cursor-pointer">
          {!showMobileMenu ? (
            <FontAwesomeIcon
              className="text-white text-2xl"
              icon={faBars}
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
              }}
            />
          ) : (
            <FontAwesomeIcon
              className="text-white text-2xl"
              icon={faTimes}
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
              }}
            />
          )}
        </div>
      </div>
      <div className="sm:hidden">{showMobileMenu ? <MobileMenu /> : null}</div>
    </div>
  );
}

function MobileMenu(props) {
  return (
    <div className="w-full bg-slate-800 h-16 p-5 justify-center">
      <div className="text-md inline-flex font-semibold w-full justify-evenly ">
        <div>
          <Navlinkcustom label="Home" to="/" />
        </div>
        <div>
          <Navlinkcustom label="About Me" to="/about" />
        </div>
        <div>
          <Navlinkcustom label="Resume" to="/resume" />
        </div>
        {/*<div><Navlinkcustom label="Projects" to="/projects"/></div>*/}
      </div>
    </div>
  );
}

function Navlinkcustom(props) {
  const defaultClass = "cursor-pointer text-slate-50 p-3";
  const activeClass = " text-slate-50 bg-slate-900 p-3 rounded";

  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? activeClass : defaultClass)}
    >
      {props.label}
    </NavLink>
  );
}
