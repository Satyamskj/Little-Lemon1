
import './App.css';
import Header from './header';
import Navbar from './Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Orderonline from './pages/Orderonline';
import Login from './pages/Login';
import Footer from './footer';

function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Reservation' element={<Reservation/>}/>
      <Route path='/Order-online' element={<Orderonline/>}/>
      <Route path='/Login' element={<Login/>}/>

    </Routes>
    <main></main>
    <Footer/>
    </>
  );
}

export default App;
