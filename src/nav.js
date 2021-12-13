import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {

    return (
        <div className="bg-slate-800 bg-opacity-80 w-full h-16 flex xl:justify-evenly sm:justify-between items-center p-5">
            <div className="text-cyan-50 font-mono">
                <div className="text-white  font-mono sm:space-x-4 text-lg">
                            <div className="inline-flex">Benjamin Dow</div>
                            <div className="hidden w-0.5 h-2 sm:inline-flex bg-stone-300"/>

                            <div className="font-mono text-white space-x-4  inline-flex ">
                                <div><a href="https://github.com/ben-dow"><FontAwesomeIcon icon={faGithub}/></a> </div>
                                <div><a href="https://www.linkedin.com/in/benjamin-dow/"><FontAwesomeIcon icon={faLinkedin}/></a> </div>
                            </div>
                        </div>

                        <div className="font-mono text-white text-xs">
                        Software Engineer, Theatre Technician, Adventurer
                        </div>

            </div>
            <div className="inline-flex  text-md font-semibold">
                <div><Navlinkcustom label="Home" to="/"/></div>
                <div><Navlinkcustom label="About Me" to="/about"/></div>
                <div><Navlinkcustom label="Resume" to="/resume"/></div>
                {/*<div><Navlinkcustom label="Projects" to="/projects"/></div>*/}
            </div>
            </div>
    )
}

function Navlinkcustom(props){

    const defaultClass = "cursor-pointer text-slate-50 p-3"
    const activeClass = " text-slate-50 bg-slate-900 p-3 rounded"

    return(
        <NavLink to={props.to} className={({isActive})=>
            isActive ? activeClass : defaultClass
        }>{props.label}</NavLink>
    ) 
}