import {Route, Routes, useLocation} from "react-router-dom";
import NotFoundPage from "./404";
import About from "./About";
import Home from "./Home";
import Nav from "./nav";
import Projects from "./projects";
import Resume from "./Resume";

export default function App() {

  const location = useLocation();

  return (
      <div className="h-screen overflow-y-auto w-full flex flex-col  bg-adks bg-cover bg-fixed">
            {(location.pathname === "/" ? null : <Nav/>)}
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/about" exact element={<About/>}/>
                <Route path="/resume" exact element={<Resume/>}/>
                <Route path="/projects" exact element={<Projects/>}/>
                <Route path="*" element={<NotFoundPage/>}/>

            </Routes>
      </div>
  )
}