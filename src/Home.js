import {
  faGit,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="flex flex-col md:flex-row w-full items-center bg-slate-700 bg-opacity-75 mx-auto xl:justify-evenly md:justify-between p-10">
        <div className="h-full flex md:pl-5 mb-5 md:mb-0">
          <div className="space-y-2  w-full">
            <div className="text-white text-4xl md:text-5xl font-mono md:space-x-4">
              <div className="text-center font-sans md:text-left">
                Benjamin Dow
              </div>
            </div>

            <div className="font-sans text-white text-tiny md:text-base text-center md:text-left">
              Software Engineer, Theatre Technician, Adventurer
            </div>
          </div>
        </div>
        <div className="w-full md:items-center md:h-full md:flex md:w-1/4">
          <div className="space-y-5 w-full">
            <div>
              <Link to="/about">
                <div className="font-sans text-white bg-slate-900 p-4 text-center rounded hover:bg-slate-800 cursor-pointer">
                  About Me
                </div>
              </Link>
            </div>
            <div>
              <Link to="/resume">
                <div className="font-sans text-white bg-slate-900 p-4 text-center rounded hover:bg-slate-800 cursor-pointer">
                  Resume
                </div>{" "}
              </Link>
            </div>
            <div>
              <Link to="/projects">
                <div className="font-sans text-white bg-slate-900 p-4 text-center rounded hover:bg-slate-800 cursor-pointer">
                  Projects
                </div>
              </Link>
            </div>
            <div className="font-mono text-white  p-4 text-center flex space-x-10 w-full justify-center">
              <div className="text-4xl cursor-pointer">
                <a href="https://github.com/ben-dow">
                  <FontAwesomeIcon icon={faGithub} />
                </a>{" "}
              </div>
              <div className="cursor-pointer text-4xl ">
                <a href="https://www.linkedin.com/in/benjamin-dow/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
