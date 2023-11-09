import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';

function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() =>{
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])

    return (
        <div className='paginaFavoritos'>

            <h1>Meus Filmes Favoritos</h1>

            <ul>
                {filmes.map((item) => {
                    return(
                        <div className='Card'>

                        <li key={item.id}>

                            <span className='Titulo'>{item.title}</span>

                            <div className='Detalhes'>
                                <Link to={`/filme/${item.id}`}><div className='VerDetalhes'>Ver Detalhes</div></Link>
                                <button className='BotaoExcluir'>Excluir</button>
                            </div>

                        </li>
                        </div>
                    )
                })} 
            </ul>

        </div>
    );
}

export default Favoritos;