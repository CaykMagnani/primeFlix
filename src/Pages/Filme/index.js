import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import './style.css';

import api from '../../Services/api'

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "10fe41e898a028bf40d2470e1623a479",
          language: "pt-BR",
        }
      })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Filme Não Encontrado");
          navigate("/", {replace: true});
          return;
        })
    }
    loadFilme();

    return () => {
      console.log("COMPONENT DESMONTADO")
    }
  }, [])

  if (loading) {
    return (
      <div className='loading'>
        <h1>Carregando...</h1>
      </div>
    )
  }

  return (
    <div className="filme-info">

      <img className='background' src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title} />

      <div className="principal">

        <img className='img' src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />

        <div className="infos">

          <h1>{filme.title}</h1>
          <h3>Sinopse:</h3>
          <span>{filme.overview}</span>
          <strong>Avaliação: {filme.vote_average} / 10 </strong>

          <div className="botoes">

            <button className="botao">
              <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}>
                Ver Trailer
              </a>
            </button>

            <button className="botao">Salvar</button>
          </div>

        </div>

      </div>
      

    </div>
  );
}

export default Filme;
