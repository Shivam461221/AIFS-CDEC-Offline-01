import { Link, Routes , Route, useNavigate} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Career from "./Components/Career";


function App() {
  const navigate = useNavigate();

  // navigate('/home');


  return (
    <>
      <div> 
        <button><Link to={'/'} >Home</Link></button>
        <button><Link to={'/about'} >About</Link></button>
        <button onClick={()=>navigate('/career')} >Career</button>
        </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/career" element={<Career/>} />
      </Routes>
    </>

  )
}

export default App;