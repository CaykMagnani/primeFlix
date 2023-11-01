import './style.css';
import { Link } from "react-router-dom";

function Header() {
  
  return (
    <header className='headerFixo'>

      <div className='logo'>
        
        <Link to="/">
          <img src='https://st3.depositphotos.com/4326917/35050/v/450/depositphotos_350504178-stock-illustration-movie-folder-sign-icon-as.jpg' alt='logoEcommerce' />
        </Link>

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