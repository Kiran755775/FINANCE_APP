import Payment from "./assets/components/Payment"
import Home from "./assets/components/Home"
import Overview from "./assets/components/Overview"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/overview"  element={<Overview/>}/>
        <Route path="/payment"  element={<Payment/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
