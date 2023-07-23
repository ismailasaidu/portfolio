import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Special from "./pages/Special";
import Voucher from "./pages/Voucher";
import Reading from "./pages/Reading";
import Arsenal from "./pages/Arsenal";
import Contact from "./pages/Contact";

function App() {
  
  return (
    <div className="bg-view">
      <Home>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/special skills" element={<Special/>}/>
        <Route path="/vouchers" element={<Voucher/>}/>
        <Route path="/reading list" element={<Reading/>}/>
        <Route path="/arsenal" element={<Arsenal/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </Home>
     
     
    </div>
  );
} 

export default App;
