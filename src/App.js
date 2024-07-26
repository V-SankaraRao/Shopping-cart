import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';
import Navbar from './navbar';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="">
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
      
    </div>
  );
}

export default App;
