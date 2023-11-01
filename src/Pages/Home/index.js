import CarroselFilmes from '../../Components/CarroselFilmes'
import CarrosselResponsivo from '../../Components/CarroselBanners'
import './style.css';

function Home() {

  return (
    <>
    {/* <CarrosselResponsivo /> */}
    
    <div className='Empurrar'></div>
    <CarroselFilmes filmesTipos="Lançamentos" filmeInicial="0" filmeFinal="10"/>
    <CarroselFilmes filmesTipos="Mais Assistidos" filmeInicial="10" filmeFinal="20"/>
    </>
  );
}

export default Home;