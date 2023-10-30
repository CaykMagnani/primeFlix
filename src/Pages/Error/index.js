import { Link } from "react-router-dom";
import './style.css';

function Error() {

    return (
        <div className='not-found'>
            <h1>Erro 404</h1>
            <h2>Pagina não encontrada</h2>
            <Link to="/">
                Veja Nossos Filmes Aqui
            </Link>
        </div>
    );
}

export default Error;
