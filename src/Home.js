import { faGit, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div className="flex flex-grow justify-center items-center">

            <div className="flex w-full h-96 bg-slate-700 bg-opacity-75 mx-auto xl:justify-evenly sm:justify-between p-10 ">
                <div className="items-center h-full flex pl-5 ">
                    <div >                   
                        <div className="text-white text-5xl font-mono sm:space-x-4">
                            <div className="inline-flex">Benjamin Dow</div>
                            <div className="hidden w-0.5 h-7 sm:inline-flex bg-stone-300"/>

                            <div className="font-mono text-white space-x-4 text-2xl inline-flex relative bottom-1.5">
                                <div><a href="https://github.com/ben-dow"><FontAwesomeIcon icon={faGithub}/></a> </div>
                                <div><a href="https://www.linkedin.com/in/benjamin-dow/"><FontAwesomeIcon icon={faLinkedin}/></a> </div>
                            </div>
                        </div>

                        <div className="font-mono text-white">
                        Software Engineer, Theatre Technician, Adventurer
                        </div>
                        
                    </div>
                    
                </div>
                <div className="items-center h-full flex">
                    <div className="space-y-5 mr-10">
                        <div><Link to="/about"><div  className="font-mono text-white bg-slate-900 p-4 text-center rounded hover:bg-slate-800 cursor-pointer">About Me</div></Link></div>
                        <div><Link to="/resume"><div  className="font-mono text-white bg-slate-900 p-4 text-center rounded hover:bg-slate-800 cursor-pointer">Resume</div> </Link></div>
                        {/*<div><Link to="/projects"><div  className="font-mono text-white bg-slate-900 p-4 text-center rounded hover:bg-slate-800 cursor-pointer">Projects</div></Link></div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
