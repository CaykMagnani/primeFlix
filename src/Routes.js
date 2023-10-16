import Home from './Pages/Home';
import Filme from './Pages/Filme';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function RoutesApp() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Filme/:id' element={<Filme />} />
    </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
