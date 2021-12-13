import {Route, Routes, useLocation} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Nav from "./nav";
import Resume from "./Resume";

export default function App() {

  const location = useLocation();

  return (
      <div className="h-screen w-full flex flex-col  bg-adks bg-cover">
            {(location.pathname === "/" ? null : <Nav/>)}
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/about" exact element={<About/>}/>
                <Route path="/resume" exact element={<Resume/>}/>

            </Routes>
      </div>
  )
}