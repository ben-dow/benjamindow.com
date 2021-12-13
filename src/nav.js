import { Link, NavLink } from "react-router-dom";

export default function Nav() {

    return (
        <div className="bg-slate-800 bg-opacity-80 w-full h-16 flex xl:justify-evenly sm:justify-between items-center p-5">
            <div className="text-cyan-50">Benjamin Dow</div>
            <div className="inline-flex  text-md font-semibold">
                <div><Navlinkcustom label="Home" to="/"/></div>
                <div><Navlinkcustom label="About Me" to="/about"/></div>
                <div><Navlinkcustom label="Resume" to="/resume"/></div>
                <div><Navlinkcustom label="Projects" to="/projects"/></div>
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