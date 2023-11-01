import CarroselFilmes from '../../Components/CarroselFilmes'

function Home() {

  return (
    <>
    <CarroselFilmes filmesTipos="Lançamentos" filmeInicial="0" filmeFinal="10"/>
    <CarroselFilmes filmesTipos="Mais Assistidos" filmeInicial="10" filmeFinal="20"/>
    </>
  );
}

export default Home;