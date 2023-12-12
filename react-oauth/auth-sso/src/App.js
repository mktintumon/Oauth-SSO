import './App.css';
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {  BrowserRouter,  Routes,  Route }   from 'react-router-dom';  

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
