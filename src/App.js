
import './App.css';
import Home from './component/Home';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Info from './component/info/Info';

function App() {
  return (
    <div className="App" style={{overflow: 'hidden', background:'black'}} >
      {/* <Home/> */}
   
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/info/:id' element ={<Info/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
