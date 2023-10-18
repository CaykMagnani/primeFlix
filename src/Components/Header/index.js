import './style.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>

      <div className='logo'>
        <img src='https://img.freepik.com/vetores-premium/filme-preto-logotipo-design-premium_39063-25.jpg' alt='logoEcommerce'/>
      </div>

      <Link className='linkSemSublinhado' to="/Filme/oi">

        <button>
          Meus filmes
        </button>

      </Link>

    </header>
    
  )
}

export default Header;