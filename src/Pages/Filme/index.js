import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from '../../Services/api'

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "10fe41e898a028bf40d2470e1623a479",
          language: "pt-BR",
        }
      })
      .then((response)=>{
        setFilme(response.data);
        setLoading(false);
      })
      .catch(()=>{
        console.log("Filme Não Encontrado")
      })
    }
    loadFilme();

    return() => {
      console.log("COMPONENT DESMONTADO")
    }
  }, [])

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img className='img' src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse</h3>
      <span>{filme.overviwe}</span>
      <strong>Avaliação: {filme.vote_average} / 10 </strong>
    </div>
  );
}

export default Filme;
