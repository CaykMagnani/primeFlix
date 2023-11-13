import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';

function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() =>{
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item) => {
            return(item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
    }

    return (
        <div className='conteinerF'>

            <h1>Meus Favoritos</h1>

            {filmes.length === 0 && <span className='AvisoF'>Você não tem Filmes Favoritados...</span>}
        
            <div className='lista-filmesF'>

                {filmes.map((item) => {
                    return(
                        <article className='artF' key={item.id}>

                        <div className="card-mapF">

                            <div className='cardInteiraF'>

                                <div className='imageF'>
                                    
                                    <Link to={`/filme/${item.id}`}>
                                        <img className='img' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.title} />
                                    </Link>

                                </div>

                            </div>

                            <button onClick={() => excluirFilme(item.id)}>Exluir</button>

                        </div>

                    </article>
                    )
                })}
                </div>
            </div>
    );
}

export default Favoritos;