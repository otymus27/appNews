import logo from '../../images/LogoBN.png';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

export function Navbar(){
     return (
          <>
               <nav>
                    <div className="input-search-space">
                         <i class="bi bi-search"></i>                        
                         <input type="text" />
                    </div>

                    <img src={logo} alt="Logo do Site de Noticias" />

                    <button>Entrar</button>
               </nav>
          </>
     )
}