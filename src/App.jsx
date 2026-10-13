import Navbar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Internship from "./pages/internship";
import Login from "./pages/login";
import Contacts from "./pages/contacts";
import Sign from "./pages/sign";
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/sign"  element={<Sign/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;