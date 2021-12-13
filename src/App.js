import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Nav from "./nav";

export default function App() {
  return (
      <div className="h-screen w-full flex flex-col">
            <Routes>
                <Route path="/" exact element={<Home/>}/>
            </Routes>
      </div>
  )
}