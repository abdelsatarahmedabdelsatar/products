import './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Detailes from './components/detailes/detailes';
import Cart from './components/cart/cart';


function App() {
  return (
    <>
        <Router>
          <Navbar/>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detailes/:id' element={<Detailes />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
