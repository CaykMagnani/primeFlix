import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import api from '../../Services/api'
import './style.css';

function CarroselFilmes(props) {

    const filmesTipos = props.filmesTipos;
    const filmeInicial = props.filmeInicial;
    const filmeFinal = props.filmeFinal;

    const [filmes, setFilmes] = useState([]);
    const [loading, setloading] = useState(true);


    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "10fe41e898a028bf40d2470e1623a479",
                    language: "pt-BR",
                    page: 1,
                }
            })
            setFilmes(response.data.results.slice(filmeInicial, filmeFinal))

            setloading(false)
        }
        loadFilmes();
    }, []);

    if(loading) {
        return (
            <div className='loading'>
                <h1>Carregando...</h1>
            </div>
        )
    }

    return (
        <div className='conteiner'>
            <h1>{filmesTipos}</h1>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return (
                        <article className='art' key={filme.id}>

                            <Link to={`/filme/${filme.id}`}>

                                <div className="card-map">

                                    <div className='cardInteira'>

                                        <div className='image'>
                                            <img className='img' src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt='imagemProduto' />
                                        </div>

                                    </div>

                                </div>

                            </Link>

                        </article>
                    )
                })}
            </div>
        </div>
    );
}

export default CarroselFilmes;