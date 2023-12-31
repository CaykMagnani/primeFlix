import Home from './Pages/Home';
import Favoritos from './Pages/Favoritos';
import Filme from './Pages/Filme';
import Error from './Pages/Error';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function RoutesApp() {
  return (
    <BrowserRouter>
        <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Filme/:id' element={<Filme />} />
      <Route path='/Favoritos' element={<Favoritos />} />

      <Route path='*' element={<Error />} />

    </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
