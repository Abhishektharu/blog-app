
import Home from "./components/Home/Home"
import Write from "./components/Write/Write"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/About/About"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
       
          <Route path="/write" element={<Write />  } />
          <Route path="/about" element= {<About /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
