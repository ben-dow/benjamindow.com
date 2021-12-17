import { faGit, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div className="flex flex-grow justify-center items-center">

            <div className="flex flex-col sm:flex-row w-full h-96 bg-slate-700 bg-opacity-75 mx-auto xl:justify-evenly sm:justify-between p-10">
                <div className="items-center h-full flex sm:pl-5 mb-5 sm:mb-0">
                    <div className="space-y-2  w-full">                   
                        <div className="text-white text-4xl sm:text-5xl font-mono sm:space-x-4">
                            <div className="text-center sm:text-left">Benjamin Dow</div>
                    
                        </div>

                        <div className="font-mono text-white text-tiny sm:text-base text-center sm:text-left">
                        Software Engineer, Theatre Technician, Adventurer
                        </div>
                        
                    </div>
                    
                </div>
                <div className="sm:items-center sm:h-full sm:flex sm:w-1/4">
                    <div className="space-y-5 w-full">
                        <div><Link to="/about"><div  className="font-mono text-white bg-slate-900 p-4 text-center rounded hover:bg-slate-800 cursor-pointer">About Me</div></Link></div>
                        <div><Link to="/resume"><div  className="font-mono text-white bg-slate-900 p-4 text-center rounded hover:bg-slate-800 cursor-pointer">Resume</div> </Link></div>
                        {/*<div><Link to="/projects"><div  className="font-mono text-white bg-slate-900 p-4 text-center rounded hover:bg-slate-800 cursor-pointer">Projects</div></Link></div>*/}
                        <div className="font-mono text-white  p-4 text-center flex space-x-10 w-full justify-center">
                                <div className="text-4xl cursor-pointer"><a href="https://github.com/ben-dow"><FontAwesomeIcon icon={faGithub}/></a> </div>
                                <div className="cursor-pointer text-4xl "><a href="https://www.linkedin.com/in/benjamin-dow/"><FontAwesomeIcon icon={faLinkedin}/></a> </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}
