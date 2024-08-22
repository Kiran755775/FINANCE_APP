
import Home from "./assets/components/Home"
import Overview from "./assets/components/Overview"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Payments  from "./assets/components/Payments";

function App() {


  return (
    <>
    <div className="h-[100vh]">
    
       <Router>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/overview"  element={<Overview/>}/>
        <Route path="/payments" element={<Payments/>}/>
      </Routes>
      </Router> 
      
    </div>
     
    </>
  )
}

export default App
